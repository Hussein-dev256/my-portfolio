import { siteConfig } from "@/config/siteConfig";

export function ValueSection() {
  return (
    <section
      id="value"
      className="section-container"
      aria-labelledby="value-heading"
    >
      <div className="section-inner space-y-4 text-center md:text-left">
        <h2
          id="value-heading"
          className="text-2xl font-semibold leading-tight text-emerald-50 md:text-3xl lg:text-4xl"
        >
          {siteConfig.heroTagline}
        </h2>
        <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-200/80 md:text-base">
          I’m a software engineer who builds reliable and scalable digital solutions for businesses, including websites, web applications and backend systems that support real operations.

          I focus on solving practical problems and turning ideas into software that is fast, secure and easy to maintain. My work often involves designing the logic behind an application, connecting it to databases and building clean, responsive interfaces that users can interact with comfortably.

          I primarily work with modern web technologies such as JavaScript and TypeScript, using tools like React and Node.js to build complete systems from start to finish. I choose proven technologies that support long-term growth, so the solutions I deliver remain stable and adaptable as business needs evolve.

          I work closely with clients to understand their goals, break down complex requirements and deliver solutions that improve efficiency, visibility and overall business performance.

          In short, I help businesses turn ideas into dependable software that works today and scales for tomorrow.
        </p>
      </div>
    </section>
  );
}
