const JavaScriptIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-js-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes js-shine {
            0% { left: -100%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { left: 100%; opacity: 0; }
          }

          .js-gradient-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f5de19; /* JS standard background color */
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
            transition: all 0.3s ease;
          }

          /* JS Official Yellow Gradient Border */
          .js-gradient-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #f5de19 25%,
              #d4bd06 50%,
              #f5de19 75%,
              transparent 100%
            );
            animation: rotate-js-gradient 3s linear infinite;
            z-index: -2;
          }

          /* Inner Background */
          .js-gradient-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          /* Shine Effect on Hover */
          .js-shine-layer {
            position: absolute;
            top: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              transparent,
              rgba(255, 255, 255, 0.8),
              transparent
            );
            transform: skewX(-25deg);
            left: -100%;
            z-index: 1;
            pointer-events: none;
          }

          .js-gradient-wrapper:hover .js-shine-layer {
            animation: js-shine 1s ease-in-out forwards;
          }

          .js-logo {
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 2;
          }

          .js-gradient-wrapper:hover .js-logo {
            transform: scale(1.1) rotate(-5deg);
          }
        `}
      </style>

      <div
        className={`js-gradient-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="js-shine-layer"></div>
        <svg
          className="js-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            width: "75%",
            height: "75%",
          }}
        >
          <path
            d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"
            style={{ fill: "#323330" }} /* Standard JS black for contrast */
          />
        </svg>
      </div>
    </>
  );
};

export default JavaScriptIcon;
