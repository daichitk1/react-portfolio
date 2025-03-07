import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function SkillPage() {
  return (
    <>
      <AllCommon />
      <div className="my-9 px-5">
        <div className="h-190 md:h-130">
          <p className="text-3xl md:text-4xl">プログラミング</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center md:justify-end my-5">
              <div className="rounded-full mx-5 mb-5 bg-blue-300 p-5">
                <p className="mb-5 text-3xl w-60">フロントエンド</p>
                <div className="text-xl">
                  HTML CSS(tailwindcss)
                  <p>JavaScript(react)</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-normal my-5">
              <div className="rounded-full mb-5 mx-5 bg-red-300 p-5">
                <p className="mb-5 text-3xl w-60">バックエンド</p>
                <div className="text-xl">
                  Ruby<p>(Ruby on rails)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 flex justify-center">
            <div className="rounded-full mb-5 mx-5 bg-green-200 p-5">
              <p className="text-3xl w-60">これまで</p>
              <div className="text-xl">
                <p>Python(約3年)</p>
                <p>C(約4年)</p>
                <p>Java(半年以下)</p>
                <p>SQL(半年以下)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto my-9 h-120 md:h-150">
          <p className="text-3xl md:text-4xl">コーディングスキル</p>
          <p className="text-2xl">AtCoder</p>
          <p className="text-xl">プログラミングコンテストに1年以上参加。</p>
          <p className="text-xl">ランクは茶色(上位25パーセントほど)</p>
          <div className="m-auto flex justify-center">
            <a href="https://atcoder.jp/users/TKq">
              <img
                className="md:w-150 md:h-100 m-auto w-100 h-60 hover:opacity-50"
                src="../images/atcoder.png"
              />
              <p className="w-150 h-10">
                これまで参加したコンテスト(atcoderページより)
              </p>
            </a>
          </div>
        </div>
        <div className="m-auto my-9 h-80">
          <p className="text-3xl md:text-4xl">資格</p>
          <div>
            <p className="text-2xl">基本情報技術者試験 合格</p>
            <a href="https://cat-and-mountain.com/blog/?p=22">
              <img
                className="rounded-full w-30 h-30 my-3 mx-auto hover:opacity-50"
                src="../images/introduction_img.png"
              />
              <p className="w-30 mx-auto text-xl">ブログ</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillPage;
