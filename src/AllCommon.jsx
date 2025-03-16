import { Link, Outlet } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import LinearProgress from "@mui/material/LinearProgress";
import { Suspense } from "react";
const AllCommmon = () => {
  return (
    <div className="flex justify-between m-5">
      <div className="flex items-center">
        <div className="text-4xl md:text-7xl opacity-50">Daichi Takei</div>
        <a href="https://github.com/daichitk1" target="_blank">
          <img
            className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-2 opacity-50 hover:opacity-25"
            src="../images/github-mark.png"
          />
        </a>
      </div>
      <div className="flex my-auto md:justify-end">
        <div className="w-1 invisible md:w-130 md:visible flex">
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
