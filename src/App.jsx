import "./App.css";
import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";

function App() {
  return (
    <>
      <div>
        <AllCommon />
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-100 md:h-170 flex items-center justify-middle">
          <div className="flex justify-end text-2xl sm:text-3xl mx-auto md:mx-0 md:text-4xl">
            技術/日常ブログを書いています。
          </div>
          <div>
            <a href="https://cat-and-mountain.com/blog/">
              <img
                className="rounded-full w-50 h-50 mx-auto md:mx-0 md:w-70 md:h-70 hover:opacity-50"
                src="../images/introduction_img.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
