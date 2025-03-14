import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function ProductPage() {
  return (
    <>
      <AllCommon />
      <div className="px-5">
        <div className="mx-auto text-4xl text-rose-400 font-bold">ニュース</div>
        <div className="flex justify-center">
          <div className="mb-10 h-60 md:h-100 w-100">
            <div className="my-5 rounded-full w-20 text-2xl bg-blue-300">
              ブログ
            </div>
            <p className="text-3xl mb-5">ブログの記事一覧</p>
            <div>
              <div>
                <a href="https://cat-and-mountain.com/blog/wp-admin/post.php?post=26&action=edit">
                  <p className="text-left text-xl m-2 underline hover:text-blue-400">
                    フロントエンド、webの学習教材のまとめ
                  </p>
                </a>
              </div>
              <div>
                <a href="https://cat-and-mountain.com/blog/wp-admin/post.php?post=22&action=edit">
                  <p className="text-left text-xl m-2 underline hover:text-blue-400">
                    2024年に基本情報技術者試験を受けに行った時の話
                  </p>
                </a>
              </div>
              <div>
                <a href="https://cat-and-mountain.com/blog/wp-admin/post.php?post=9&action=edit">
                  <p className="text-left text-xl m-2 underline hover:text-blue-400">
                    山の図鑑アプリを公開しました
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="https://cat-and-mountain.com/blog/" target="_blank">
              <img
                className="m-15 rounded-full hidden md:block h-80 w-80 hover:opacity-50"
                src="../images/introduction_img.png"
              />
            </a>
          </div>
        </div>

        <div class="flex justify-center flex items-center">
          <div className="my-10 h-80 md:h-130 w-100">
            <div className="my-5 rounded-full w-50 text-2xl bg-red-300">
              ポートフォリオ
            </div>
            <p className="text-3xl">新しいポートフォリオサイトを公開</p>
            <div className="text-left">
              reactを使って、新しく本ポートフォリオサイトを作成し公開しました。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a
                  href="https://github.com/daichitk1/react-portfolio"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/github-mark.png"
                  />
                </a>
                コード
              </div>
            </div>
            <p className="my-5 text-green-500">
              #React #JavaScript #HTML #CSS #tailwindcss #Vercel
            </p>
          </div>
          <div className="hidden md:block">
            <img
              className="hidden md:block w-100"
              src="../images/react_portfolio.png"
            />
          </div>
        </div>

        <div class="flex justify-center">
          <div className="my-10 h-80 md:h-130 w-100">
            <div className="my-5 rounded-full w-20 text-2xl bg-red-300">
              アプリ
            </div>
            <p className="text-3xl">登山の図鑑アプリを公開</p>
            <div className="text-left">
              知りたい山の情報を簡単に知れる山の図鑑アプリを公開。
              Reactを利用し、複数のAPIを使って作っています。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a
                  href="https://github.com/daichitk1/mountain-display-app"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/github-mark.png"
                  />
                </a>
                コード
              </div>
              <div className="mx-3">
                <a
                  href="https://cat-and-mountain.com/blog/?p=9"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/introduction_img.png"
                  />
                </a>
                ブログ
              </div>
              <div className="mx-3 block md:hidden">
                <a
                  href="https://mountain-display.cat-and-mountain.com/"
                  target="_blank"
                >
                  <img
                    className="h-15 w-15 hover:opacity-50"
                    src="../images/mountain-app.png"
                  />
                  公開ページ
                </a>
              </div>
            </div>
            <p className="my-5 text-green-500">
              #React #JavaScript #API #HTML #CSS #tailwindcss #Vercel
            </p>
          </div>
          <div className="hidden md:block">
            <a href="https://mountain-display-app.vercel.app" target="_blank">
              <img
                className="hidden md:block h-100 w-100 hover:opacity-50"
                src="../images/mountain-app.png"
              />
            </a>
          </div>
        </div>

        <div class="flex justify-center max-width-3xs">
          <div className="my-10 h-80 md:h-130 w-100">
            <div className="my-5 rounded-full w-20 text-2xl bg-red-300">
              アプリ
            </div>
            <p className="text-3xl">面接管理アプリを公開</p>
            <div className="text-left">
              転職活動では、企業によって面接の進度が異なり、進度を管理する必要があります。
              そこで面接管理アプリのプロトタイプをRailsで作成し公開しました。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a
                  href="https://github.com/daichitk1/interview_management_app"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/github-mark.png"
                  />
                </a>
                コード
              </div>
              <div className="md:hidden block">
                <a
                  href="https://mysterious-reaches-91685-813905271b2c.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className=" h-15 w-15 hover:opacity-50"
                    src="../images/interview_exam.png"
                  />
                </a>
                公開ページ
              </div>
            </div>
            <p className="my-5 text-green-500">
              #Ruby on rails #Ruby #HTML #CSS #heroku
            </p>
          </div>
          <div className="mx-3 hidden md:block">
            <a
              href="https://mysterious-reaches-91685-813905271b2c.herokuapp.com/"
              target="_blank"
            >
              <img
                className="h-100 w-120 hover:opacity-50"
                src="../images/interview_exam.png"
              />
            </a>
          </div>
        </div>

        <div class="flex justify-center max-width-3xs">
          <div className="my-10 h-80 md:h-130 w-100">
            <div className="my-5 rounded-full w-20 text-2xl bg-green-300">
              資格
            </div>
            <p className="text-3xl">基本情報技術者試験 合格</p>
            <div className="text-left">
              2024年のクリスマスに受験し、合格しました。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a
                  href="https://cat-and-mountain.com/blog/?p=22"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/introduction_img.png"
                  />
                </a>
                ブログ
              </div>
            </div>
            <p className="my-5 text-green-500">#資格 #基本情報</p>
          </div>
          <img
            className="hidden md:block mx-10 h-90 w-90"
            src="../images/basic-information.png"
          />
        </div>

        <div class="flex justify-center max-width-3xs">
          <div className="my-10 h-80 md:h-130 w-100">
            <div className="my-5 rounded-full w-50 text-2xl bg-red-300">
              ポートフォリオ
            </div>
            <p className="text-3xl">ポートフォリオサイトを公開</p>
            <div className="text-left">
              JavaScript、HTML&CSSを利用し作成しました。herokuで独自ドメインを適用しデプロイしました。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a
                  href="https://github.com/daichitk1/interview_management_app"
                  target="_blank"
                >
                  <img
                    className="rounded-full w-15 h-15 mx-auto hover:opacity-50"
                    src="../images/github-mark.png"
                  />
                </a>
                コード
              </div>
              <div className="mx-3 md:hidden block">
                <a
                  href="http://portfolio.cat-and-mountain.com/"
                  target="_blank"
                >
                  <img
                    className="mx-10 h-15 w-15 opacity-75 hover:opacity-50"
                    src="../images/portfolio.jpg"
                  />
                  <p>公開ページ</p>
                </a>
              </div>
            </div>
            <p className="my-5 text-green-500">
              #JavaScript #HTML #CSS #heroku
            </p>
          </div>
          <div className="hidden md:block">
            <a href="http://portfolio.cat-and-mountain.com/" target="_blank">
              <img
                className="mx-10 h-90 w-90 opacity-75 hover:opacity-50"
                src="../images/portfolio.jpg"
              />
              <p>利用した書籍</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
