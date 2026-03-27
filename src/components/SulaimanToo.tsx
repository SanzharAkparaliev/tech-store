export default function SulaimanToo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id="sky" x1="720" y1="0" x2="720" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0c1929" />
          <stop offset="40%" stopColor="#0f2744" />
          <stop offset="70%" stopColor="#163a5c" />
          <stop offset="100%" stopColor="#1a4a6e" />
        </linearGradient>

        {/* Mountain main gradient */}
        <linearGradient id="mountain1" x1="720" y1="80" x2="720" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b5998" />
          <stop offset="35%" stopColor="#2d4373" />
          <stop offset="100%" stopColor="#1a2a4a" />
        </linearGradient>

        {/* Front hills */}
        <linearGradient id="hill1" x1="720" y1="280" x2="720" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a3050" />
          <stop offset="100%" stopColor="#0e1c30" />
        </linearGradient>

        <linearGradient id="hill2" x1="720" y1="340" x2="720" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f1f35" />
          <stop offset="100%" stopColor="#080f1a" />
        </linearGradient>

        {/* Sun/moon glow */}
        <radialGradient id="glow" cx="75%" cy="20%" r="18%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0f2744" stopOpacity="0" />
        </radialGradient>

        {/* Star sparkle */}
        <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Mist */}
        <linearGradient id="mist" x1="0" y1="350" x2="0" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#b8d4e8" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1440" height="500" fill="url(#sky)" />

      {/* Sun/Moon glow */}
      <rect width="1440" height="500" fill="url(#glow)" />

      {/* Stars */}
      <circle cx="120" cy="45" r="1.2" fill="white" opacity="0.7" />
      <circle cx="280" cy="72" r="0.8" fill="white" opacity="0.5" />
      <circle cx="430" cy="28" r="1" fill="white" opacity="0.6" />
      <circle cx="560" cy="85" r="0.7" fill="white" opacity="0.4" />
      <circle cx="780" cy="35" r="1.1" fill="white" opacity="0.7" />
      <circle cx="900" cy="60" r="0.9" fill="white" opacity="0.5" />
      <circle cx="1050" cy="42" r="1.3" fill="white" opacity="0.6" />
      <circle cx="1200" cy="78" r="0.8" fill="white" opacity="0.4" />
      <circle cx="1350" cy="25" r="1" fill="white" opacity="0.65" />
      <circle cx="200" cy="110" r="0.6" fill="white" opacity="0.35" />
      <circle cx="650" cy="55" r="0.7" fill="white" opacity="0.45" />
      <circle cx="1100" cy="95" r="0.9" fill="white" opacity="0.4" />

      {/* Distant mountains (background layer) */}
      <path
        d="M0 350 Q100 310 200 330 Q280 280 380 300 Q420 270 500 290 Q550 250 620 275 Q680 240 720 260 Q780 230 850 255 Q920 235 980 260 Q1040 240 1100 265 Q1160 250 1220 280 Q1300 260 1380 290 L1440 285 L1440 500 L0 500 Z"
        fill="#1a2d4d"
        opacity="0.5"
      />

      {/* Sulaiman-Too main peak — distinctive rocky sacred mountain */}
      <path
        d="M340 420
           L380 380 L400 370 L420 345 L440 335 L455 310 L470 295
           L490 270 L510 250 L525 235 L540 218 L555 200
           L565 188 L575 178 L590 165 L605 155
           L618 148 L630 142 L645 138 L658 135 L670 133
           L680 132 L690 131 L700 131 L710 132 L718 134
           L728 138 L738 143 L748 150 L758 158
           L770 168 L782 180 L795 195 L808 210
           L820 228 L835 248 L848 265 L860 278
           L875 295 L890 310 L908 328 L925 345
           L940 358 L960 372 L980 385 L1000 395
           L1030 408 L1060 418 L1100 425
           L1100 500 L340 500 Z"
        fill="url(#mountain1)"
      />

      {/* Rocky texture highlights on Sulaiman-Too */}
      <path
        d="M555 200 L575 192 L590 182 L605 175 L618 170 L630 168
           L640 167 L655 170 L668 175 L680 180 L690 172
           L700 166 L710 165 L720 168 L730 175 L738 180"
        stroke="#5b7fb5"
        strokeWidth="1.2"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M490 270 L520 258 L545 240 L560 228 L580 215"
        stroke="#4a6ea0"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M780 195 L800 218 L825 248 L845 268 L870 290"
        stroke="#4a6ea0"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />

      {/* Snow/light patches on peak */}
      <path
        d="M628 140 Q645 135 670 133 Q690 131 710 133 Q725 136 735 140 L730 145 Q715 138 700 136 Q680 135 660 137 Q643 140 635 143 Z"
        fill="#8badd4"
        opacity="0.18"
      />

      {/* Left ridge */}
      <path
        d="M100 430 L180 410 L240 395 L300 385 L340 378 L370 370 L340 420 L100 500 Z"
        fill="#152540"
        opacity="0.7"
      />

      {/* Right ridge */}
      <path
        d="M1100 425 L1150 418 L1200 410 L1280 400 L1340 395 L1440 388 L1440 500 L1100 500 Z"
        fill="#152540"
        opacity="0.7"
      />

      {/* Front hills — left */}
      <path
        d="M0 450 Q120 415 250 425 Q350 395 450 410 Q500 400 540 420 L540 500 L0 500 Z"
        fill="url(#hill1)"
      />

      {/* Front hills — right */}
      <path
        d="M900 430 Q1000 410 1100 418 Q1180 400 1260 412 Q1340 405 1440 415 L1440 500 L900 500 Z"
        fill="url(#hill1)"
      />

      {/* Foreground dark band */}
      <path
        d="M0 470 Q200 455 400 462 Q600 450 800 458 Q1000 448 1200 456 Q1350 450 1440 458 L1440 500 L0 500 Z"
        fill="url(#hill2)"
      />

      {/* Mist layer */}
      <rect x="0" y="350" width="1440" height="80" fill="url(#mist)" />

      {/* Atmospheric haze at bottom */}
      <rect x="0" y="440" width="1440" height="60" fill="#080f1a" opacity="0.5" />
    </svg>
  );
}
