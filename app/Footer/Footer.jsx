import React from "react";

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-zinc-900 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Text */}
          <p className="text-center md:text-left text-sm text-zinc-500">
            © {currentYear}{" "}
            <span className="font-semibold text-zinc-200">Shakibul Islam</span>.
            All rights reserved.
          </p>

          {/* Optional: Dev Credit */}
          <p className="text-sm text-zinc-600 italic">Developed by Shakil</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
