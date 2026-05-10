const NextjsIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-next-gradient {
            to { transform: rotate(360deg); }
          }

          .next-gradient-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          /* Next.js Black & Silver Gradient Border */
          .next-gradient-wrapper::before {
            content: '';
            position: absolute;
            width: 160%;
            height: 160%;
            background: conic-gradient(
              from 0deg,
              #000000 0%,
              #444444 25%,
              #000000 50%,
              #888888 75%,
              #000000 100%
            );
            animation: rotate-next-gradient 6s linear infinite;
            z-index: -2;
          }

          .next-gradient-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .next-logo {
            transition: all 0.4s ease;
          }

          .next-gradient-wrapper:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .next-gradient-wrapper:hover .next-logo {
            filter: drop-shadow(0 0 2px rgba(0,0,0,0.2));
          }
        `}
      </style>

      <div
        className={`next-gradient-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="next-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          fill="none"
          style={{
            width: "65%",
            height: "65%",
          }}
        >
          <path
            d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"
            fill="#000000"
          />
        </svg>
      </div>
    </>
  );
};

export default NextjsIcon;
