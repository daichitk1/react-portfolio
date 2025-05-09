import TemporaryDrawer from "../TemporaryDrawer";
import { animateScroll as scroll } from "react-scroll";
import { HeaderButton } from "./HeaderButton";
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
          <HeaderButton Path="/" Name="自己紹介" />
          <HeaderButton Path="/portfolio" Name="ポートフォリオ" />
          <HeaderButton Path="/skill" Name="スキル" />
          <HeaderButton Path="/blog" Name="ブログ" />
        </div>
        <div className="md:hidden my-auto">
          <TemporaryDrawer />
        </div>
      </div>
    </div>
  );
};

export default AllCommmon;
