import { Link, Outlet } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import LinearProgress from "@mui/material/LinearProgress";
import { Suspense } from "react";
const AllCommmon = () => {
  return (
    <div>
      <Suspense fallback={<LinearProgress color="neutral" variant="plain" />}>
        <div className="flex justify-between m-5">
          <div className="flex items-center">
            <div className="text-5xl md:text-7xl opacity-50">Daichi Takei</div>
            <a href="https://github.com/daichitk1" target="_blank">
              <img
                className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-2 opacity-50 hover:opacity-25"
                src="../images/github-mark.png"
              />
            </a>
          </div>
          <div className="flex my-auto md:justify-end">
            <div className="w-1 invisible md:w-100 md:visible flex">
              <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
                <Link to="/">ホーム</Link>
              </div>
              <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
                <Link to="/product">ニュース</Link>
              </div>
              <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
                <Link to="/profile">自己紹介</Link>
              </div>
              <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
                <Link to="/skill">スキル</Link>
              </div>
            </div>
            <div className="md:hidden my-auto">
              <TemporaryDrawer />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default AllCommmon;
