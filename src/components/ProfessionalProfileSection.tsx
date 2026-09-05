export function ProfessionalProfileSection() {
  return (
    <section
      id="about"
      className="stage-section bg-[#050505] text-white"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        {/* Section Heading & Kicker at the very top */}
        <div className="mb-6 sm:mb-8">
          <p className="section-kicker dark-kicker">About me</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:items-stretch">
          {/* Left Column: Editorial Framing & Strategic Cards */}
          <div className="flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              <h2
                id="about-heading"
                className="display-type text-balance text-3xl font-black leading-[1.02] sm:text-4xl lg:text-[2.75rem]"
              >
                Turning complex requirements into{" "}
                <span className="editorial-type font-normal text-yellow-300">
                  working systems.
                </span>
              </h2>

              <div className="border-l-2 border-yellow-300/40 pl-4">
                <p className="editorial-type text-2xl font-normal leading-tight text-yellow-300 sm:text-3xl">
                  Learn. Rethink. Move forward.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  Continuous improvement &amp; architectural discipline
                </p>
              </div>
            </div>

            {/* Strategic Highlight Cards on the Left Side */}
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-yellow-200">
                  Focus
                </p>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">Backend &amp; System Design</p>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  APIs, relational data modeling, and reliable distributed architecture
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-yellow-200">
                  Execution
                </p>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">End-to-End Delivery</p>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  Full-lifecycle ownership from requirements to production deployment
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-yellow-200">
                  Foundation
                </p>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">BSc Computer Science</p>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                  Strong analytical basis in data structures, algorithms &amp; systems
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cohesive Narrative Professional Biography */}
          <div className="space-y-4 text-sm font-medium leading-7 text-white/78 sm:text-base sm:leading-7">
            <p>
              I’m Hussein, a software engineer with a Computer Science foundation who builds full-stack software systems with a strong focus on backend engineering, APIs, databases, and system design. I work primarily with TypeScript, JavaScript, Node.js, NestJS, Express, React, Next.js, PostgreSQL, and Python, using tools and platforms such as Git, GitHub, Docker, Vercel, Render, and Railway where appropriate.
            </p>

            <p>
              My work spans the full development lifecycle, from understanding requirements and designing system architecture to implementation, deployment, and post-launch problem solving. I’m particularly interested in what happens beneath the interface: data integrity, API behaviour, application boundaries, performance, failure cases, and the technical decisions that make software reliable in real-world conditions.
            </p>

            <p>
              I have a BSc in Computer Science and several years of hands-on experience building and delivering software. I’m comfortable working independently when a project requires ownership from idea to deployment, and I work equally well within a team where collaboration, discussion, and shared responsibility matter. I’m adaptable, learn quickly, and approach unfamiliar technologies by understanding how they fit into the wider system rather than simply learning them at surface level.
            </p>

            <p>
              What I bring is a combination of practical product thinking, engineering discipline, curiosity, and ownership. I care about building software that solves the actual problem, is maintainable after delivery, and continues to work when it leaves the ideal conditions of development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
