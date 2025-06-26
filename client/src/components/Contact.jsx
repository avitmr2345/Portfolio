import { Mail, Phone, MapPin, Github, Linkedin, Instagram} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology.
          </p>
        </div>

        {/* Grid layout for contact info and social links */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-accent-foreground h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">avitmr2345@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(142,76%,36%)] rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+91-8826972902</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">
                    Gurugram, Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Me */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Follow Me</h3>
            <div className="flex space-x-6 items-start">
              <a
                href="https://github.com/avitmr2345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/avish-tomar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/avishtomar_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
