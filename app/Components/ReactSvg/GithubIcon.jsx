const GithubIcon = ({ size = 40, className = "" }) => {
  return (
    <>
      <style>
        {`
          @keyframes rotate-gh-gradient {
            to { transform: rotate(360deg); }
          }

          @keyframes gh-nod {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            50% { transform: rotate(-5deg) translateY(-2px); }
          }

          .gh-gradient-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border-radius: 20%;
            overflow: hidden;
            z-index: 0;
            transition: all 0.3s ease;
          }

          /* GitHub Dark Gradient Border (#24292e to #6e5494) */
          .gh-gradient-wrapper::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              #24292e 25%,
              #6e5494 50%,
              #24292e 75%,
              transparent 100%
            );
            animation: rotate-gh-gradient 4s linear infinite;
            z-index: -2;
          }

          .gh-gradient-wrapper::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: white;
            border-radius: calc(20% - 2px);
            z-index: -1;
          }

          .gh-logo {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            fill: #24292e;
          }

          .gh-gradient-wrapper:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }

          .gh-gradient-wrapper:hover .gh-logo {
            animation: gh-nod 1s ease-in-out infinite;
            fill: #000000;
          }
        `}
      </style>

      <div
        className={`gh-gradient-wrapper ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="gh-logo"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: "65%",
            height: "65%",
          }}
        >
          <path
            fillRule="evenodd"
            d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};

export default GithubIcon;
