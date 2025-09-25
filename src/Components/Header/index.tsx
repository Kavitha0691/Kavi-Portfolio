import MyDetails from "../Mydetails";

export default function Header() {
  return (
    <section className="grid md:grid-cols-[380px_1fr] min-h-screen bg-white px-6 pt-12 gap-12">
      <MyDetails />
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 ">
          Kavitha Ganesan
        </h1>
        <h2 className="mt-3 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Frontend Developer Student @ Futuregames Stockholm
        </h2>

        <p className="mt-5 text-lg text-gray-600 dark:text-gray-300  leading-loose ">
          I design and build <span className="font-semibold">user-friendly</span>,
          <span className="font-semibold"> high-performing</span> web apps.
          With a keen eye for design, strong problem-solving skills, and
         with hands-on project experience in <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>SASS</strong>, <strong>Javascript</strong>,
          and <strong>TypeScript</strong>. I bring both creativity and technical expertise.
          Whether in team-driven projects or solo work, I thrive on learning fast and delivering results.
        </p>
        <div className="mt-6 p-6 bg-gradient-to-r from-white via-green-50 to-white rounded-xl  leading-loose shadow-xl border border-gray-300 text-left">
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize"> looking for : </span> 5-month internship
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize">would be good fit for : </span> Frontend · Fullstack
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize"> starts from : </span> January – May 2026 (can start earlier)
          </p>
          <p className="text-gray-800 dark:text-gray-200 mb-2">
            <span className="font-bold capitalize"> work mode : </span> Onsite · Remote · Hybrid (Flexible)
          </p>
        </div>
      </div>
    </section>
  )
}
