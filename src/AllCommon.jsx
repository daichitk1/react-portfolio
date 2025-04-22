import { Link } from "react-router-dom";
import TemporaryDrawer from "./TemporaryDrawer";
import { animateScroll as scroll } from "react-scroll";

const AllCommmon = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex justify-between h-15 md:h-20 px-5 sticky top-0 bg-black border-b border-gray-300 z-1">
      <div className="flex items-center">
        <div
          className="cursor-pointer text-white text-4xl md:text-5xl lg:text-7xl hover:opacity-25"
          onClick={scrollToTop}
        >
          Daichi Takei
        </div>
      </div>
      <div className="flex md:justify-end">
        <div className="w-0 invisible md:w-125 md:visible flex items-center">
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="relative text-white underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-100 hover:underline"
            >
              <Link to="/">自己紹介</Link>
            </button>
          </div>
          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="text-white relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-100 hover:underline"
            >
              <Link to="/portfolio">ポートフォリオ</Link>
            </button>
          </div>

          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="text-white relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-100 hover:underline"
            >
              {" "}
              <Link to="/skill">スキル</Link>
            </button>
          </div>

          <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
            <button
              role="link"
              class="text-white relative underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-100 hover:underline"
            >
              <Link to="/blog">ブログ</Link>
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
