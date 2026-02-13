import { useState } from "react";
import { Download, ChevronDown } from "lucide-react";

export default function DownloadPage({ goBack }) {
 const [arch, setArch] = useState("");
    const downloadLinks = {
    amd64: "https://download.redcloud.training/amd64",
    arm64: "https://download.redcloud.training/arm64",
  };

  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
<div className="mb-6 flex justify-start">
  <button
    onClick={goBack}
    className="
      inline-flex
      items-center
      gap-2
      text-xl
      text-gray-400
      hover:text-red-500
      transition-colors
    "
  >
    ← Back
  </button>
</div>

 {/* Header */}
        <div className="mb-20 animate-slide-in-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Download{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              RedCloud OS
            </span>
          </h1>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">

          {/* ISO Info Card */}
          <div className="border border-gray-800 p-10 bg-gradient-to-br from-gray-900/50 to-gray-900/30 hover:border-red-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-600/10 animate-slide-in-up">
            <h2 className="text-3xl font-bold mb-8">ISO Information</h2>

            {/* Specs */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">

              {/* Architecture (Static) */}
              <div className="spec-card p-4 border border-gray-800/50 transition-all duration-300">
  <div className="text-2xl mb-2">⚙️</div>

  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">
    Architecture
  </div>

  <div className="relative group">
  <select
    value={arch}
    onChange={(e) => setArch(e.target.value)}
    className="
      w-full
      appearance-none
      bg-gradient-to-br from-black via-gray-900 to-black
      border border-gray-800
      text-gray-200
      px-4 py-2.5
      pr-10
      rounded-md
      font-medium
      tracking-wide

      transition-all duration-300 ease-out

      hover:border-red-700/60
      hover:bg-gray-950

      focus:outline-none
      focus:border-red-600
      focus:ring-2
      focus:ring-red-600/30
      focus:bg-black
    "
  >
    <option value="" disabled className="text-gray-500 bg-black">
      Select architecture
    </option>
    <option value="amd64" className="bg-black">
      AMD64 (x86_64)
    </option>
<option
  value="arm64"
  disabled
  className="bg-black text-gray-600"
>
  ARM64 (Apple Silicon / Graviton)
</option>
  </select>

  {/* Chevron */}
  <ChevronDown
    size={16}
    className="
      absolute
      right-3
      top-1/2
      -translate-y-1/2
      text-gray-400
      transition-all duration-300
      group-hover:text-red-500
      pointer-events-none
    "
  />

  {/* Subtle glow on focus */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      rounded-md
      opacity-0
      group-focus-within:opacity-100
      transition-opacity duration-300
      ring-1 ring-red-600/30
    "
  />
</div>

</div>

              {/* Other Specs */}
              {[
                { label: "Base", value: "Debian Trixie", icon: "🐧" },
                { label: "Desktop", value: "KDE (X11)", icon: "🖥️" },
                { label: "Boot", value: "UEFI", icon: "🔧" },
                { label: "Installer", value: "Calamares", icon: "📦" },
              ].map((spec,i) => (
                <div
                  key={spec.label}
                  className="spec-card p-4 border border-gray-800/50 hover:border-red-600/30 group"
                  style={{
                    animation: `slideInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      i * 0.05
                    }s both`,
                  }}
                >
                  <div className="text-2xl mb-2">{spec.icon}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-gray-200 font-semibold mt-1 group-hover:text-red-400 transition-colors">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Download Actions */}
            <div className="space-y-3 text-center">
<button
  onClick={() => {
    if (!arch) return;

    const link = document.createElement("a");
    link.href = downloadLinks[arch];
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  disabled={!arch}
  className={`
    w-full
    px-6 py-4
    font-semibold
    flex
    items-center
    justify-center
    gap-3
    rounded-sm
    transition-all
    duration-300

    ${
      arch
        ? `
          bg-gradient-to-r
          from-red-900
          via-red-800
          to-red-600
          text-white
          hover:from-red-800
          hover:via-red-600
          hover:to-red-500
          hover:shadow-lg
          hover:shadow-red-700/40
          transform
          hover:scale-105
        `
        : `
          bg-gray-800
          text-gray-500
          cursor-not-allowed
        `
    }
  `}
>
  <Download size={20} />
  {arch ? `Download ISO (${arch.toUpperCase()})` : "Select architecture to download"}
</button>



<button
//   onClick={() => {
//     // dummy link for now
//     window.open("/checksums/redcloud-os.sha256", "_blank");
//   }}
  className="
    w-full
    px-6 py-3
    border-2 border-gray-700
    hover:border-red-600/50
    transition-all
    duration-300
    font-semibold
    hover:bg-gray-900/50
    transform
    hover:scale-105
  "
>
  SHA256 Checksum
</button>


<button
//   onClick={() => {
//     // dummy link for now
//     window.open("/docs/verify-installation", "_blank");
//   }}
  className="
    w-full
    px-6 py-3
    border-2 border-gray-700
    hover:border-red-600/50
    transition-all
    duration-300
    font-semibold
    hover:bg-gray-900/50
    transform
    hover:scale-105
  "
>
  Verify Instructions
</button>

<div
  className="
    mt-12
    w-full
    border border-gray-800
    bg-gradient-to-br from-black via-gray-900 to-black
    rounded-md
    px-10 py-8
  "
>
  <h3 className="text-white text-xl font-semibold mb-6">
    Minimum Requirements
  </h3>

  <div className="grid grid-cols-4 gap-10 text-sm">
    {/* Processor */}
    <div>
      <p className="text-gray-500 mb-1">Processor</p>
      <p className="text-gray-200 font-semibold">Dual Core CPU</p>
    </div>

    {/* Graphics */}
    <div>
      <p className="text-gray-500 mb-1">Graphics</p>
      <p className="text-gray-200 font-semibold leading-snug">
        No Graphical Acceleration
        <br />
        Required
      </p>
    </div>

    {/* Memory */}
    <div>
      <p className="text-gray-500 mb-1">Memory</p>
      <p className="text-gray-200 font-semibold">2 GB RAM</p>
    </div>

    {/* Storage */}
    <div>
      <p className="text-gray-500 mb-1">Storage</p>
      <p className="text-gray-200 font-semibold">32 GB</p>
    </div>
  </div>
</div>



            </div>
          </div>

          {/* Legal Notice */}
          <div className="border-l-4 border-red-600 bg-gradient-to-r from-red-950/30 to-red-950/10 p-6 animate-slide-in-up hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300">
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-bold text-red-500 block mb-2">
                ⚠ Legal Notice
              </span>
              RedCloud OS is intended for security research and authorized testing
              only. Unauthorized access to computer systems is illegal.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}   
