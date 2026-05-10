const MongoDbIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-mongo-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes mongo-glow {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(0, 104, 74, 0.2)); }
            50% { filter: drop-shadow(0 0 10px rgba(17, 97, 73, 0.6)); }
          }

          .mongo-gradient-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          /* MongoDB Official Green Gradient (#001E2B to #00ED64) */
          .mongo-gradient-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #00684a 25%,
              #00ed64 50%,
              #00684a 75%,
              transparent 100%
            );
            animation: rotate-mongo-gradient 4s linear infinite;
            z-index: -2;
          }

          .mongo-gradient-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .mongo-logo {
            transition: all 0.4s ease;
            fill: #00684a;
          }

          .mongo-gradient-wrapper:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 25px rgba(0, 104, 74, 0.15);
          }

          .mongo-gradient-wrapper:hover .mongo-logo {
            animation: mongo-glow 2s ease-in-out infinite;
            fill: #13aa52; /* Lighter Green on Hover */
          }
        `}
      </style>

      <div
        className={`mongo-gradient-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="mongo-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "60%",
            height: "60%",
          }}
        >
          <path
            fillRule="evenodd"
            d="M7.29395 11.8039c0-3.96638 2.13959-6.41723 3.53335-8.01378.6733-.7712 1.1725-1.34306 1.1725-1.79012 0 .44706.4993 1.01892 1.1725 1.79013 1.3938 1.59654 3.5334 4.04739 3.5334 8.01377 0 4.3266-2.7501 6.9507-4.0764 7.7654L12.3701 22h-.7071l-.2906-2.4295c-1.3255-.8132-4.07845-3.4378-4.07845-7.7666Zm4.06395 6.7007.6419-9.44578.649 9.44578-.649.7503-.6419-.7503Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export default MongoDbIcon;
