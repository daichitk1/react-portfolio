import AllCommon from "./AllCommon";
import { Blog } from "./Blog";
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
        <div className="my-8 rounded-2xl bg-blue-100 hover:bg-blue-200 mx-auto md:max-w-250 flex justify-center">
          <div className="m-5 w-100 my-10">
            <p className="text-xl md:text-3xl mb-5 text-blue-900 font-bold">
              エンジニア職への向き合い方
            </p>
            <div>
              <Blog
                link="https://cat-and-mountain.com/blog/?p=96"
                title="エンジニアの”ポテンシャル”採用ってなんだ"
              />
              <Blog
                link="https://cat-and-mountain.com/blog/?p=89"
                title="エンジニアという仕事に対する向き合い方が甘かった"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="my-8 rounded-2xl bg-blue-100 hover:bg-blue-200 mx-auto md:max-w-250 flex justify-center">
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
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=184"
                  title="4月17日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=177"
                  title="4月16日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=168"
                  title="4月15日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=164"
                  title="4月14日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=157"
                  title="4月13日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=155"
                  title="4月12日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=150"
                  title="4月11日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=145"
                  title="4月10日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=139"
                  title="4月9日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=135"
                  title="4月8日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=127"
                  title="4月7日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=120"
                  title="4月6日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=111"
                  title="4月5日に気になった記事で感じたことまとめ(朝活)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=98"
                  title="4月5日に気になった記事で感じたことまとめ(朝活)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <div className="my-8 rounded-2xl bg-blue-100 hover:bg-blue-200 mx-auto md:max-w-250 flex justify-center">
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
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=131"
                  title="今週の進捗(4/7から4/13)"
                />
                <Blog
                  link="https://cat-and-mountain.com/blog/?p=55"
                  title="今週の進捗(3/31から4/6)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
