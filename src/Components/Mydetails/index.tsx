import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const MyDetails = () => {
    return (
        <>
        <div className="flex flex-col ml-0  md:ml-6 lg:ml-8 items-center md:items-start text-center md:text-left">
        <div>
          <img
            src="/Kavitha.jpg"
            alt="Kavitha Ganesan"
            className="w-48 h-48 md:w-56 ml-8 md:h-56 rounded-full object-cover shadow-lg ring-4 ring-gray-800/10"
          />
        </div>

        <div className="flex justify-center gap-12 mt-12 ml-2  md:ml-6 lg:ml-8">
          <a href="https://www.linkedin.com/in/kavitha-ganesan-2b2b5b380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform transform hover:scale-125 hover:text-blue-500">
            <FaLinkedin className="w-8 h-8 hover:text-2xl" />
          </a>
          <a href="https://github.com/Kavitha0691" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform transform hover:scale-125 hover:text-gray-800">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="mailto:kavitha0691@gmail.com" aria-label="Email" className="transition-transform transform hover:scale-125 hover:text-red-900">
            <FaEnvelope className="w-8 h-8" />
          </a>
        </div>

        <div className="mt-12 flex  flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 w-[200px] ml-8 rounded-xl border border-gray-300 bg-blue-100 text-black text-center font-semibold shadow-lg hover:bg-blue-200 transition"
          >
            My Projects
          </a>

        </div>
      </div>
        </>
    )

}

export default MyDetails