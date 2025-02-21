import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-700 mt-12 bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">My Blog</div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-6 text-sm sm:text-base">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:text-gray-400 transition-all duration-300 focus:outline-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:text-gray-400 transition-all duration-300 focus:outline-none"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:text-gray-400 transition-all duration-300 focus:outline-none"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 focus:text-gray-400 transition-all duration-300 focus:outline-none"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 focus:text-blue-500 transition-all duration-300 focus:outline-none"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 focus:text-blue-400 transition-all duration-300 focus:outline-none"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 focus:text-blue-600 transition-all duration-300 focus:outline-none"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
