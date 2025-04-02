import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function SkillPage() {
  return (
    <>
      <AllCommon />
      <div className="my-9 mt-9">
        <div className="mx-auto mb-7 text-4xl text-rose-400 font-bold">
          スキル
        </div>
        <div>
          <p className="text-2xl md:text-3xl text-blue-500">技術スタック</p>
          <div className="p-5 my-5 w-full md:w-200  mx-auto bg-pink-100 rounded-3xl">
            <div className="md:flex">
              <h2 className="rounded-full bg-indigo-400 px-5 max-w-50 mx-auto md:mx-0 text-white">
                フロントエンド
              </h2>
              <p className="px-5">
                HTML、CSS、tailwindcss、bootstrap、JavaScript、TypeScript、React
              </p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-blue-400 px-5 max-w-50 mx-auto md:mx-0  text-white">
                バックエンド
              </h2>
              <p className="px-5">Ruby、Ruby on rails、Python</p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-cyan-400 px-5 text-white max-w-50 mx-auto md:mx-0 ">
                その他言語
              </h2>
              <p className="px-5">C</p>
            </div>

            <div className="md:flex">
              <h2 className="rounded-full bg-violet-400 px-5 max-w-50 mx-auto md:mx-0 text-white">
                データベース
              </h2>
              <p className="px-5">splite、postgresql</p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-pink-400 px-5 max-w-50 mx-auto md:mx-0 text-white">
                バージョン管理
              </h2>
              <p className="px-5 max-w-50 mx-auto md:mx-0 ">github</p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-red-400 px-5 max-w-50 mx-auto md:mx-0 text-white">
                デプロイ
              </h2>
              <p className="px-5">heroku、Vercel</p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-green-400 px-5 max-w-50 mx-auto md:mx-0 text-white text-white">
                AI
              </h2>
              <p className="px-5">Codeium</p>
            </div>
            <div className="md:flex my-5">
              <h2 className="rounded-full bg-gray-400 px-5 max-w-50 mx-auto md:mx-0 text-white">
                その他
              </h2>
              <p className="px-5">eslint、prettier、Vite、vscode、yarn、npm</p>
            </div>
          </div>
        </div>
        <div className="m-auto my-9">
          <p className="text-2xl md:text-3xl text-blue-500">
            コーディングスキル
          </p>

          <div className="bg-pink-100 rounded-3xl p-5 my-5 w-full md:w-250 mx-auto">
            <p className="text-xl text-red-500 font-bold">AtCoder</p>
            <div>
              <p className="my-3 mx-auto font-bold text-left md:w-100">
                2021末からPythonを習得するためにプログラミングコンテストAtCoderに1年以上参加しました。
                <br />
                AtCoderは毎週末(土曜または日曜)にコンテストを開催しており1週間過去問で練習をし、本番のコンテストで力試しをしていました。
                <br />
                現在のランクは茶色です。
              </p>
            </div>
            <div className="m-auto flex justify-center">
              <a href="https://atcoder.jp/users/TKq">
                <img
                  className="md:w-120 md:h-80 m-auto w-80 h-50 hover:opacity-50"
                  src="../images/atcoder.png"
                />
                <p className="w-150 h-10">
                  これまで参加したコンテスト(atcoderページより)
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto my-9 py-5">
          <p className="text-2xl md:text-3xl text-blue-500">資格</p>
          <div className="bg-pink-100 rounded-3xl p-5 my-5 w-full md:w-250 mx-auto">
            <p className="text-xl font-bold text-red-500">
              基本情報技術者試験 合格
            </p>
            <p className="m-auto md:w-100 text-left font-bold">
              開発における基礎固めとして基本情報技術者試験の勉強をし合格しました。
              <br />
              今年の4月に応用情報技術者試験の受験をします。
            </p>
            <a href="https://cat-and-mountain.com/blog/?p=22">
              <img
                className="rounded-full w-30 h-30 my-3 mx-auto hover:opacity-50"
                src="../images/introduction_img.png"
              />
              <p className="w-50 mx-auto">受験までの詳細</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillPage;
