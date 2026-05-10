const TailWindIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-tw-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes tw-wave {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.05); }
          }

          .tw-gradient-border-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
          }

          /* Tailwind Official Sky/Teal Gradient (#06b6d4 to #3b82f6) */
          .tw-gradient-border-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #06b6d4 25%,
              #3b82f6 50%,
              #06b6d4 75%,
              transparent 100%
            );
            animation: rotate-tw-gradient 4s linear infinite;
            z-index: -2;
          }

          .tw-gradient-border-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .tw-logo {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .tw-gradient-border-wrapper:hover .tw-logo {
            animation: tw-wave 1.5s ease-in-out infinite;
            fill: #3b82f6; /* Hover-e color change */
          }
        `}
      </style>

      <div
        className={`tw-gradient-border-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="tw-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "60%",
            height: "60%",
            fill: "#06b6d4", // Tailwind Primary Cyan
          }}
        >
          <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
        </svg>
      </div>
    </>
  );
};

export default TailWindIcon;
