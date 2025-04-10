import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function BlogPage() {
  return (
    <>
      <AllCommon />
      <div className="bg-blue-200 w-full md:w-250 mt-10 md:mt-20 rounded-3xl grid grid-cols-1 md:grid-cols-2 mx-auto h-100 md:h-170 flex items-center justify-middle">
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
              技術ブログを書いています。
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
      <div className="mt-9">
        <div className="my-8 rounded-2xl bg-blue-100 mx-auto md:max-w-250 flex justify-center">
          <div className="m-5 w-100 my-10">
            <p className="text-xl md:text-3xl mb-5 text-blue-900 font-bold">
              エンジニア職への向き合い方
            </p>
            <div>
              <div>
                <a href="https://cat-and-mountain.com/blog/?p=96">
                  <p className="text-left text-xl my-3 ml-7 underline hover:text-blue-400">
                    エンジニアの”ポテンシャル”採用ってなんだ
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=89">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    エンジニアという仕事に対する向き合い方が甘かった
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="my-8 rounded-2xl bg-blue-100 mx-auto md:max-w-250 flex justify-center">
          <div className="m-5 w-100">
            <p className="text-2xl md:text-3xl mb-5 font-bold text-blue-900">
              朝活始めました
            </p>
            <div>
              <p className="text-xl mb:text-2xl mb-5">
                {" "}
                毎日新しい技術に触れることが重要だと思い、ZennとQiitaで気になる記事を読みブログにまとめています。
              </p>
              <div>
                <a href="https://cat-and-mountain.com/blog/?p=145">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月10日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=139">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月9日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=135">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月8日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=127">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月7日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=120">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月6日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=111">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月5日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=98">
                  <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
                    4月4日に気になった記事で感じたことまとめ(朝活)
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="my-8 rounded-2xl bg-blue-100 mx-auto md:max-w-250 flex justify-center">
          <div className="m-5 w-100">
            <p className="text-2xl md:text-3xl mb-5 font-bold text-blue-900">
              今週の進捗
            </p>
            <div>
              <p className="text-xl mb:text-2xl mb-5">
                {" "}
                毎日行ったことをブログにまとめています。
              </p>
              <div>
                <a href="https://cat-and-mountain.com/blog/?p=131">
                  <p className="text-xl my-3 ml-7 underline hover:text-blue-400">
                    今週の進捗(4/7から4/13)
                  </p>
                </a>
                <a href="https://cat-and-mountain.com/blog/?p=55">
                  <p className="text-xl my-3 ml-7 underline hover:text-blue-400">
                    今週の進捗(3/31から4/6)
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
