import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function SkillPage() {
  return (
    <>
      <AllCommon />
      <div className="my-9">
        <div className="mx-auto mb-7 text-4xl text-rose-400 font-bold">
          スキル
        </div>
        <div>
          <p className="text-2xl md:text-3xl text-blue-500">プログラミング</p>
          <div className="p-5 my-5 w-full md:w-250  mx-auto bg-pink-100 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center md:justify-end my-5">
                <div className="rounded-full mx-5 mb-5 bg-blue-300 p-5">
                  <p className="mb-5 text-2xl w-60">フロントエンド</p>
                  <div className="text-xl">
                    HTML CSS(tailwindcss)
                    <p>JavaScript(react)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:justify-normal my-5">
                <div className="rounded-full mb-5 mx-5 bg-red-300 p-5">
                  <p className="mb-5 text-2xl w-60">バックエンド</p>
                  <div className="text-xl">
                    Ruby<p>(Ruby on rails)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 flex justify-center">
              <div className="rounded-full mb-5 mx-5 bg-green-200 p-5">
                <p className="text-2xl w-60">これまで</p>
                <div className="text-xl">
                  <p>Python(約3年)</p>
                  <p>C(約4年)</p>
                  <p>Java(半年以下)</p>
                  <p>SQL(半年以下)</p>
                </div>
              </div>
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
              <p className="my-3 mx-auto font-bold text-left w-100">
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
            <p className="m-auto w-100 text-left font-bold">
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
