export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Professional headshot */}
            <img
              src="/images/profile_image.jpg"
              alt="Profile Image"
              className="rounded-full shadow-2xl w-80 h-80 mx-auto object-cover border-4 border-accent/20"
            />
          </div>

          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Full Stack Developer
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a Full Stack Developer with expertise in building dynamic web
              applications using the MERN stack. With a strong foundation in
              both front-end and back-end development, I create scalable,
              user-friendly solutions that solve real-world problems.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I've contributed to various projects involving user
              authentication, and responsive UI development. I'm always eager to
              learn new technologies and contribute to cutting-edge projects.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-accent mb-2">Location</h4>
                <p className="text-muted-foreground">Gurugram, Haryana</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Education</h4>
                <p className="text-muted-foreground">
                  Bachelor of Technology in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
