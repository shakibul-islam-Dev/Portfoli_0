const NodejsIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-node-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes node-heartbeat {
            0% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(131, 205, 41, 0)); }
            50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(131, 205, 41, 0.4)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(131, 205, 41, 0)); }
          }

          .node-gradient-border-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
          }

          /* Node.js Official Green Gradient (#83cd29 to #339933) */
          .node-gradient-border-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #83cd29 25%,
              #339933 50%,
              #83cd29 75%,
              transparent 100%
            );
            animation: rotate-node-gradient 4s linear infinite;
            z-index: -2;
          }

          .node-gradient-border-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .node-logo {
            transition: all 0.3s ease-in-out;
          }

          .node-gradient-border-wrapper:hover .node-logo {
            animation: node-heartbeat 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <div
        className={`node-gradient-border-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="node-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            width: "70%",
            height: "70%",
          }}
        >
          <path
            d="M16,30a2.151,2.151,0,0,1-1.076-.288L11.5,27.685c-.511-.286-.262-.387-.093-.446a6.828,6.828,0,0,0,1.549-.7.263.263,0,0,1,.255.019l2.631,1.563a.34.34,0,0,0,.318,0l10.26-5.922a.323.323,0,0,0,.157-.278V10.075a.331.331,0,0,0-.159-.283L16.158,3.875a.323.323,0,0,0-.317,0L5.587,9.794a.33.33,0,0,0-.162.281V21.916a.315.315,0,0,0,.161.274L8.4,23.814c1.525.762,2.459-.136,2.459-1.038V11.085a.3.3,0,0,1,.3-.3h1.3a.3.3,0,0,1,.3.3V22.777c0,2.035-1.108,3.2-3.038,3.2a4.389,4.389,0,0,1-2.363-.642L4.661,23.788a2.166,2.166,0,0,1-1.076-1.872V10.075A2.162,2.162,0,0,1,4.661,8.2L14.922,2.276a2.246,2.246,0,0,1,2.156,0L27.338,8.2a2.165,2.165,0,0,1,1.077,1.87V21.916a2.171,2.171,0,0,1-1.077,1.872l-10.26,5.924A2.152,2.152,0,0,1,16,30Z"
            style={{ fill: "#83cd29" }}
          />
          <path
            d="M14.054,17.953a.3.3,0,0,1,.3-.3h1.327a.3.3,0,0,1,.295.251c.2,1.351.8,2.032,3.513,2.032,2.161,0,3.082-.489,3.082-1.636,0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144,0-2.07,1.745-3.305,4.67-3.305,3.287,0,4.914,1.141,5.12,3.589a.3.3,0,0,1-.295.323H22.566a.3.3,0,0,1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36,0-2.634.822-2.634,1.438,0,.746.324.964,3.51,1.385,3.153.417,4.651,1.007,4.651,3.223,0,2.236-1.864,3.516-5.115,3.516C14.995,21.743,14.054,19.682,14.054,17.953Z"
            style={{ fill: "#83cd29" }}
          />
        </svg>
      </div>
    </>
  );
};

export default NodejsIcon;
