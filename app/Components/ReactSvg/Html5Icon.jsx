const Html5Icon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-gradient {
            to { transform: rotate(360deg); }
          }

          .gradient-border-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden; /* Bahirer baroti gradient bad deyar jonno */
            z-index: 0;
          }

          /* Moving Gradient Background */
          .gradient-border-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #E34F26 25%,
              #F06529 50%,
              #E34F26 75%,
              transparent 100%
            );
            animation: rotate-gradient 3s linear infinite;
            z-index: -2;
          }

          /* Inner White Background (Border width control kore) */
          .gradient-border-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px; /* Border er thickness aikhane change kora jabe */
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .html5-logo {
            transition: transform 0.3s ease;
          }

          .gradient-border-wrapper:hover .html5-logo {
            transform: scale(1.1);
          }
        `}
      </style>

      <div
        className={`gradient-border-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="html5-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "55%",
            height: "55%",
            fill: "#E34F26",
          }}
        >
          <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
        </svg>
      </div>
    </>
  );
};

export default Html5Icon;
