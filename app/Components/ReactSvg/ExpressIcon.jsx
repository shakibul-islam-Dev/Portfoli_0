const ExpressIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-ex-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes express-shimmer {
            0% { opacity: 1; transform: translateX(-10%); }
            50% { opacity: 0.7; transform: translateX(10%); }
            100% { opacity: 1; transform: translateX(-10%); }
          }

          .ex-gradient-border-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
          }

          /* Express Official Dark/Light Grey Gradient */
          .ex-gradient-border-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #000000 25%,
              #444444 50%,
              #000000 75%,
              transparent 100%
            );
            animation: rotate-ex-gradient 5s linear infinite;
            z-index: -2;
          }

          .ex-gradient-border-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .express-logo {
            transition: all 0.4s ease;
          }

          .ex-gradient-border-wrapper:hover .express-logo {
            animation: express-shimmer 2s ease-in-out infinite;
            transform: scale(1.1);
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
          }
        `}
      </style>

      <div
        className={`ex-gradient-border-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="express-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "70%",
            height: "70%",
            fill: "#000000",
          }}
        >
          <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
        </svg>
      </div>
    </>
  );
};

export default ExpressIcon;
