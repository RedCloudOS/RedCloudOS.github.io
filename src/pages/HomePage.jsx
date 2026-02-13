import { useRef, useState } from "react";
import {
  Cloud,
  Download,
  Github,
  Users,
  Cpu,
  HardDrive,
  MonitorCheck,
  Lock,
  MonitorStop,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import ParallaxSection from "../components/ParallaxSection";
import HeroCube from "../ui/HeroCube";
import LetterGlitch from "../ui/LetterGlitch";
import CrimsonRedCard from "../ui/CrimsonRedCard";
import ClassicBlackCard from "../ui/ClassicBlackCard";
import { GradientIcon } from "../ui/GradientIcon";
import { BlurInGradientText } from "../ui/BlurInGradientText";

export default function HomePage({ navigateTo, communityRef, githubRef }) {
  const sectionRef = useRef(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const maskRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect || !maskRef.current) return;

    cursorRef.current.x = e.clientX - rect.left;
    cursorRef.current.y = e.clientY - rect.top;

    const { x, y } = cursorRef.current;

    const mask = `radial-gradient(
      300px circle at ${x}px ${y}px,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.9) 25%,
      rgba(0,0,0,0.7) 45%,
      rgba(0,0,0,0.4) 60%,
      rgba(0,0,0,0.2) 75%,
      rgba(0,0,0,0.08) 88%,
      rgba(0,0,0,0) 100%
    )`;

    maskRef.current.style.webkitMaskImage = mask;
    maskRef.current.style.maskImage = mask;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={sectionRef}
        onMouseMove={!isTouch ? handleMouseMove : undefined}
        onMouseEnter={!isTouch ? () => setHovered(true) : undefined}
        onMouseLeave={!isTouch ? () => setHovered(false) : undefined}
        className="relative w-full flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:min-h-screen lg:pt-0 lg:pb-0"
      >
        <div
          ref={maskRef}
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-200"
          style={{
            opacity: hovered ? 0.45 : 0,
          }}
        >
          <LetterGlitch
            glitchColors={["#ff2e2e", "#ff4d4d", "#ff6a6a", "#ff9b9b"]}
            glitchSpeed={60}
            smooth={true}
            outerVignette={false}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT COLUMN — TEXT */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-4xl">
            <div className="animate-slide-in-down">
              <h1 className="font-display font-extrabold tracking-tight leading-[1.15] sm:leading-[1.05] md:leading-[0.95]">
               <span className="block whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
    RED
  </span>{" "}
  CLOUD OS
</span>


                <div className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  <BlurInGradientText />
                </div>
              </h1>
            </div>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl animate-slide-in-left leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              Built for cloud security assessments, red teaming, and
              infrastructure attacks.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button
                onClick={() => navigateTo("download")}
                className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-900 via-red-800 to-red-600 hover:from-red-800 hover:via-red-600 hover:to-red-600 transition-all duration-300 font-medium rounded-sm flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-red-700/10 transform hover:scale-105 text-white"
              >
                <Download size={20} />
                Download ISO
              </button>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-slide-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={() => {
                  githubRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="group relative px-4 py-2.5 text-sm sm:text-base rounded-md font-medium text-red-500 bg-red-950/20 border border-red-900/50 backdrop-blur-sm transition-all duration-300 ease-out hover:text-red-300 hover:border-red-600/60 hover:bg-red-950/40 hover:shadow-lg hover:shadow-red-700/30 flex items-center justify-center gap-2"
              >
                <Github
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="hidden sm:inline">GitHub Repository</span>
                <span className="sm:hidden">GitHub</span>
              </button>

              <button
                onClick={() => {
                  communityRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="group relative px-4 py-2.5 text-sm sm:text-base rounded-md font-medium text-red-500 bg-red-950/20 border border-red-900/50 backdrop-blur-sm transition-all duration-300 ease-out hover:text-red-300 hover:border-red-600/60 hover:bg-red-950/40 hover:shadow-lg hover:shadow-red-700/30 flex items-center justify-center gap-2"
              >
                <Users
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Community
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — CUBE */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroCube />
          </div>
        </div>
      </section>

      {/* WHAT IS SECTION */}
      <ParallaxSection speed={120}>
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 border-t border-gray-800/50 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-slide-in-down">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What is{" "}
                <span className="text-red-600">Red</span>Cloud OS
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4">
                A Debian-based security distribution designed for cloud-first offensive security.
                Built for real-world attack surfaces across cloud platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Cloud-focused tooling', desc: 'AWS, Azure, GCP, and Kubernetes' },
                { title: 'Clean, stable Debian base', desc: 'Rolling release (Trixie)' },
                { title: 'Custom live + installer workflow', desc: 'Production-grade deployment' },
                { title: 'Designed for research', desc: 'No gimmicks, just tools' }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="relative p-5 sm:p-7 bg-gradient-to-br from-black to-gray-900/30 transition-all duration-500 group hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 hover:-translate-y-1 cursor-pointer animate-border-glow overflow-hidden rounded-xl"
                  style={{
                    animation: `slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1}s both`,
                  }}
                >
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none glitch-fade-right">
                    <LetterGlitch
                      glitchColors={[
                        "#a83232",
                        "#f56042",
                        "#850000",
                        "#f54242",
                        "#c22020",
                        "#860404",
                        "#b91a1a",
                      ]}
                      glitchSpeed={40}
                      smooth={true}
                      outerVignette={true}
                      centerVignette={false}
                    />
                  </div>

                  <div className="relative z-10">
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-3 sm:mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-transparent group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* KEY FEATURES SECTION */}
      <ParallaxSection speed={180}>
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 border-t border-gray-800/50 relative">
          <div className="text-center mb-8 sm:mb-12 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-slide-in-down">
              Key Features
            </h2>
            <p className="text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg animate-slide-in-left px-4" style={{ animationDelay: '0.1s' }}>
              Everything you need for professional security testing
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Cloud, title: 'Cloud Adversary Simulation Ready', desc: 'AWS, Azure, GCP, and Kubernetes tooling pre-installed.' },
                { icon: Cpu, title: 'Modern Kernel & Drivers', desc: 'Debian kernel with Modern drivers.' },
                { icon: HardDrive, title: 'Stable Installer', desc: 'Calamares-based graphical installer with EFI.' },
                { icon: MonitorCheck, title: 'Desktop Environment', desc: 'KDE (X11)' },
                { icon: Lock, title: 'Hardened OS', desc: 'A hardened operating system built with strict security controls.' },
                { icon: MonitorStop, title: 'VM Friendly', desc: 'Tested on hypervisors including VMware Workstation, VirtualBox, and Hyper-V.' }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group relative p-6 sm:p-8 bg-black/40 text-center overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-2 rounded-xl"
                >
                  {/* Centered Icon */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <GradientIcon Icon={feature.icon} size={48} className="sm:w-14 sm:h-14" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-base sm:text-lg mb-2 text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Bottom line */}
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Radial red glow */}
                  <span
                    className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-48 -translate-x-1/2 translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(255,0,0,0.35) 0%, rgba(255,0,0,0.15) 35%, rgba(255,0,0,0.05) 55%, transparent 70%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* COMMUNITY SECTION */}
      <ParallaxSection speed={140}>
        <section
          ref={communityRef}
          className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 border-t border-gray-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 animate-slide-in-down text-center">
              Community & Development
            </h2>

            <div
              ref={githubRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto"
            >
              <a
                href="https://github.com/RedCloudOS"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CrimsonRedCard
                  title="GitHub Repository"
                  description="RedCloud OS is open source. View the repository, report issues, and follow the roadmap."
                  buttonText="View on GitHub"
                  className="animate-slide-in-up h-full"
                />
              </a>

              <a
                href="https://linktr.ee/RedCloudOS"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ClassicBlackCard
                  title="Join the Community"
                  description="Connect with security researchers, red teamers"
                  buttonText="Join Community"
                  className="animate-slide-in-up h-full"
                />
              </a>
            </div>

            {/* About CWLabs */}
            <div className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-xl border border-gray-800 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-gray-900/50 to-gray-900/30 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About CWLabs</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                CWLabs Pvt Ltd is a cybersecurity research and training organization focused on practical security engineering.
              </p>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 border-t border-gray-800/50 relative overflow-hidden">
        {/* BACKGROUND — parallax only */}
        <ParallaxSection speed={120}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </ParallaxSection>

        {/* FOREGROUND — normal flow (NO parallax) */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-in-down px-4">
            Ready to Get Started?
          </h2>

          <p className="text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto animate-slide-in-up px-4">
            Download the latest release and begin your cloud-native security research journey today.
          </p>

          <button
            onClick={() => navigateTo("download")}
            className="group px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-red-800 via-red-700 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-500 transition-all duration-300 ease-out font-semibold inline-flex items-center gap-3 text-white rounded-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-red-700/40"
          >
            Download Now
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </section>
    </>
  );
}