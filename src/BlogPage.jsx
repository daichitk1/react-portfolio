import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function BlogPage() {
  return (
    <>
      <AllCommon />
      <div className="mt-9">
        <div className="mx-auto text-4xl text-rose-400 font-bold">ニュース</div>
        <div className="my-8 rounded-2xl bg-blue-100 mx-auto md:max-w-250 flex justify-center">
          <div className="m-5 w-100">
            <div className="my-5 rounded-full w-20 text-2xl bg-blue-300">
              ブログ
            </div>
            <p className="text-3xl mb-5">ブログ記事(おすすめ)</p>
            <div>
              <div>
                <a href="https://cat-and-mountain.com/blog/?p=89">
                  <p className="left text-2xl my-3 ml-7 text-left underline hover:text-blue-400">
                    エンジニアという仕事に対する向き合い方が甘かった
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/wp-admin/post.php?post=76">
                  <p className="text-left text-2xl my-3 ml-7 underline hover:text-blue-400">
                    4月の学習計画
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=55">
                  <p className="text-left text-2xl my-3 ml-7 underline hover:text-blue-400">
                    3月31日から4月6日の進捗
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="https://cat-and-mountain.com/blog/" target="_blank">
              <img
                className="m-15 rounded-full m-3 hidden md:block h-80 w-80 hover:opacity-50"
                src="../images/introduction_img.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
