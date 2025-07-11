import { Switch, Route } from "wouter";
import Home from "@/pages/home.jsx";
import NotFound from "@/pages/not-found.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
