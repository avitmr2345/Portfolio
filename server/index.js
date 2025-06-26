import express from "express";
import fs from "fs";
import path from "path";
import viteConfig from "../vite.config.js";
import { createServer as createViteServer } from "vite";

const app = express();

function log(message, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
  });
  next();
});

(async () => {
  const PORT = 5000;
  const server = app.listen(PORT, "0.0.0.0", () => {
    log(`Serving on http://localhost:${PORT}`);
  });

  if (process.env.NODE_ENV === "development") {
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      server: { middlewareMode: true, hmr: { server } },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      try {
        const filePath = path.resolve(process.cwd(), "client", "index.html");
        let template = await fs.promises.readFile(filePath, "utf-8");
        const html = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(process.cwd(), "public");

    if (!fs.existsSync(distPath)) {
      throw new Error(`Build directory not found: ${distPath}`);
    }

    app.use(express.static(distPath));

    app.use("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
})();
