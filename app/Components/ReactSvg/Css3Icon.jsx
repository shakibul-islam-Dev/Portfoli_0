const Css3Icon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-css-gradient {
            to { transform: rotate(360deg); }
          }

          .css-gradient-border-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
          }

          /* CSS3 Official Blue Gradient (#264de4 to #2965f1) */
          .css-gradient-border-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #264de4 25%,
              #2965f1 50%,
              #264de4 75%,
              transparent 100%
            );
            animation: rotate-css-gradient 3.5s linear infinite;
            z-index: -2;
          }

          .css-gradient-border-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px; 
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .css3-logo {
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .css-gradient-border-wrapper:hover .css3-logo {
            transform: scale(1.15) rotate(5deg);
          }
        `}
      </style>

      <div
        className={`css-gradient-border-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="css3-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "55%",
            height: "55%",
            fill: "#264de4", // CSS3 Blue
          }}
        >
          <path d="m3 2 1.578 17.824L12 22l7.467-2.175L21 2H3Zm14.049 6.048H9.075l.172 2.016h7.697l-.626 6.565-4.246 1.381-4.281-1.455-.288-2.932h2.024l.16 1.411 2.4.815 2.346-.763.297-3.005H7.416l-.562-6.05h10.412l-.217 2.017Z" />
        </svg>
      </div>
    </>
  );
};

export default Css3Icon;
