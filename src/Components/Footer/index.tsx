'use client';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-800 px-6 py-2 pb-4">
      <div className="w-full border-t border-gray-600 my-6"></div>
      <h4 className="text-xl font-serif tracking-widest mb-2 capitalize">Kavi Portfolio</h4>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.linkedin.com/in/kavitha-ganesan-2b2b5b380/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform transform hover:scale-125 hover:text-blue-500">
          <FaLinkedin className="w-5 h-5 hover:text-2xl" />
        </a>
        <a href="https://github.com/Kavitha0691" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform transform hover:scale-125 hover:text-gray-800">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="mailto:kavitha0691@gmail.com" aria-label="Email" className="transition-transform transform hover:scale-125 hover:text-red-900">
          <FaEnvelope className="w-5 h-5" />
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-6 w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Back to top"
      >
        &uarr;
      </button>
    </footer>
  );
};

export default Footer;
