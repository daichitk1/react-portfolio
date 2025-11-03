import "../../App.css";
import AllCommon from "../../Header/AllCommon";
function BlogPage() {
  return (
    <>
      <AllCommon />
      <div className="bg-blue-200 hover:bg-blue-300 w-full md:w-250 mt-10 md:mt-20 rounded-3xl grid grid-cols-1 md:grid-cols-2 mx-auto h-100 md:h-170 flex items-center justify-middle">
        <div className="flex justify-end text-xl sm:text-2xl mx-auto md:mx-5 md:text-3xl">
          <div>
            <div
              className="text-2xl md:text-3xl
            text-blue-900 font-bold"
            >
              エンジニアとして生きる <br />
              -山と猫と人生-
            </div>
            <div className="mt-2 text-xl md:text-2xl">
              ブログを書いています。
            </div>
          </div>
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
    </>
  );
}

export default BlogPage;
