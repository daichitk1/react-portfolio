import { Link, Outlet } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import LinearProgress from "@mui/material/LinearProgress";
import { Suspense } from "react";
import { animateScroll as scroll } from "react-scroll";

const AllCommmon = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex justify-between h-15 md:h-20 px-5 sticky top-0 bg-white border-b border-gray-300">
      <div className="flex items-center">
        <div
          className="text-4xl md:text-5xl lg:text-7xl opacity-50 hover:opacity-25"
          onClick={scrollToTop}
        >
          Daichi Takei
        </div>
        <a href="https://github.com/daichitk1" target="_blank">
          <img
            className="rounded-full w-9 h-9 md:w-15 md:h-15 opacity-50 hover:opacity-25"
            src="../images/github-mark.png"
          />
        </a>
      </div>
      <div className="flex md:justify-end">
        <div className="w-0 invisible md:w-125 md:visible flex items-center">
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-500 hover:underline"
            >
              <Link to="/">ポートフォリオ</Link>
            </button>
          </div>
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-500 hover:underline"
            >
              <Link to="/product">ニュース</Link>
            </button>
          </div>
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-500 hover:underline"
            >
              <Link to="/profile">自己紹介</Link>
            </button>
          </div>
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-500 hover:underline"
            >
              {" "}
              <Link to="/skill">スキル</Link>
            </button>
          </div>
        </div>
        <div className="md:hidden my-auto">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
};

export default AllCommmon;
