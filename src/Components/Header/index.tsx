import MyDetails from "../Mydetails";

export default function Header() {
  return (
    <section className="grid md:grid-cols-[380px_1fr] min-h-screen bg-white px-2 pt-4 gap-12">
      <MyDetails />
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 ">
          Kavitha Ganesan
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-gray-300">
          Frontend Developer Intern @ Dstny SE 
        </h2>

        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300  leading-loose ">
         I design and build responsive, high-performing web applications with a strong focus on clean code, accessibility, and user experience. With hands-on project experience in <strong>Microfrontend Architecture, React, Next.js, TypeScript, JavaScript, Tailwind CSS, SASS, PostGreSQL. </strong> I bring both creativity and technical expertise.

Currently interning at <strong> Dstny SE,</strong> where I am part of the web team developing an organizational communication platform. I work with<strong> microfrontend architecture</strong> using <strong>pnpm</strong> workspaces, contributing to a production-level codebase. I am fully integrated into the Agile development process — participating in sprint planning, daily standups, code reviews, refinement sessions, and architectural strategy meetings with senior developers.

Whether in team-driven projects or solo work, I thrive on learning fast and delivering results.
        </p>
        <div className="mt-2 p-4 bg-gradient-to-r from-white via-green-50 to-white rounded-xl  leading-loose shadow-xl border border-gray-300 text-left">
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize"> looking for : </span>  Frontend Developer role
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize">would be good fit for : </span> Frontend · Fullstack
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize">Availability:  </span> Immediately after internship
          </p>
          <p className="text-gray-800 dark:text-gray-200 ">
            <span className="font-bold capitalize"> work mode : </span> Onsite · Remote · Hybrid (Flexible)
          </p>
        </div>
      </div>
    </section>
  )
}
