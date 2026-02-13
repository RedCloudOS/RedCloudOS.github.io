import logo from "../assets/logo.png";
// import discordIcon from "../assets/discord.png"; 

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* LEARNING PLATFORMS SECTION */}
      <div className="border-t border-gray-800 py-6 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-3
            text-sm
            text-center
          ">
            <span className="font-semibold uppercase tracking-wider text-gray-200">
              Start Learning
            </span>

            <span className="hidden md:inline text-gray-600">•</span>

            <span className="text-red-500">
              Visit our platforms:
            </span>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="https://infinity.cyberwarfare.live"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors"
              >
                Infinity Platform
              </a>

              <a
                href="https://cyberwarfare.live"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors"
              >
                CWLabs Platform
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BRANDING STRIP */}
      <div className="w-full bg-gradient-to-r from-[#1b1a24] via-[#2a2040] to-[#1b1a24] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
            {/* Logo */}
            <img
              src={logo}
              alt="CWLabs Logo"
              className="h-10 sm:h-12 object-contain"
            />

            {/* Text */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-md">
              <span className="font-semibold text-white">RedCloud OS</span> is part of{" "}
              <a
                href="https://cyberwarfare.live"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline hover:text-red-500 transition-colors"
              >
                CW Labs
              </a>
              {" "}open-source projects.
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
<div className="w-full bg-black border-t border-gray-800 py-3 sm:py-4 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto flex items-center justify-center text-gray-500 text-xs sm:text-sm">
    <span className="text-center">
      © RedCloud OS / CWLabs Pvt Ltd
    </span>

          {/* Right side: Discord - uncomment when ready */}
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Discord"
            className="flex items-center justify-center"
          >
            <img
              src={discordIcon}
              alt="Discord"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          </a> */}
        </div>
      </div>
    </footer>
  );
}