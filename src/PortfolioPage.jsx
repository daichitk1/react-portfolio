import "./App.css";
import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
import { useState } from "react";
function PortfolioPage() {
  const [mountainApp, setMountainApp] = useState(true);
  const [interviewApp, setInterviewApp] = useState(true);
  return (
    <>
      <div>
        <AllCommon />
        <div className="mx-auto mt-9">
          <div className="mx-auto text-2xl md:text-4xl text-rose-400 font-bold">
            ポートフォリオ
          </div>

          <div className="my-5 mx-auto rounded-full w-70 text-3xl bg-red-300">
            作ったアプリ
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-center lg:max-w-280 lg:mx-auto">
            <div
              className={`h-170 rounded-3xl my-10 ${
                mountainApp ? "bg-pink-100" : "bg-blue-200"
              } lg:max-w-250 mx-auto  flex justify-center w-full sm:w-120 flex items-center`}
            >
              {(() => {
                if (mountainApp) {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        登山の図鑑アプリ⛰️
                      </p>
                      <button
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50 z-0"
                        onClick={() => setMountainApp(!mountainApp)}
                      >
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">詳細</span>
                      </button>
                      <div className="my-5">
                        <img
                          className="h-90 w-80 mx-auto"
                          src="../images/mountain-app.png"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        登山の図鑑アプリ⛰️
                      </p>

                      <button class="my-7 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">
                          <a
                            href="https://mountain-display.cat-and-mountain.com/"
                            target="_blank"
                          >
                            アプリページへ
                          </a>
                        </span>
                      </button>

                      <div className="text-left">
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          アプリ概要
                        </p>
                        知りたい山の情報を簡単に知れる山の図鑑アプリを公開。
                        Reactを利用し、複数のAPIを使って作っています。
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          目的
                        </p>
                        フロントエンド(React)の学習と実装
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          利用した技術
                        </p>
                        <div>
                          プログラミング言語:
                          JavaScript(React)、HTML、CSS(tailwindcss)
                        </div>
                        <div>デプロイ: Vercel</div>
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
                          アプリの開発詳細
                        </div>
                      </div>
                      <button
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"
                        onClick={() => setMountainApp(!mountainApp)}
                      >
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">戻る</span>
                      </button>
                    </div>
                  );
                }
              })()}
            </div>

            <div
              className={`h-170 rounded-3xl my-10 ${
                interviewApp ? "bg-pink-100" : "bg-blue-200"
              } lg:max-w-250 mx-auto  flex justify-center w-full sm:w-120 flex items-center`}
            >
              {(() => {
                if (interviewApp) {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        面接管理アプリ
                      </p>
                      <button
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"
                        onClick={() => setInterviewApp(!interviewApp)}
                      >
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">詳細</span>
                      </button>
                      <div className="my-5">
                        <img
                          className="h-90 w-90 mx-auto"
                          src="../images/interview_exam.png"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        面接管理アプリ
                      </p>

                      <button class="my-7 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">
                          <a
                            href="https://mysterious-reaches-91685-813905271b2c.herokuapp.com/"
                            target="_blank"
                          >
                            アプリページへ
                          </a>
                        </span>
                      </button>
                      <div className="text-left">
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          アプリ概要
                        </p>
                        転職活動では、企業によって面接の進度が異なり、進度を管理する必要があります。
                        そこで面接管理アプリのプロトタイプをRailsで作成し公開しました。
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          目的
                        </p>
                        バックエンド(Ruby on rails)の学習と実装
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          利用した技術
                        </p>
                        <div>
                          プログラミング言語: Ruby(Ruby on
                          rails)、HTML、CSS(Bootstrap)
                        </div>
                        <div>デプロイ: heroku</div>
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
                      </div>
                      <button
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"
                        onClick={() => setInterviewApp(!interviewApp)}
                      >
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">戻る</span>
                      </button>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>

        <div className="bg-blue-200 w-full md:w-250 my-20 rounded-3xl grid grid-cols-1 md:grid-cols-2 mx-auto h-100 md:h-170 flex items-center justify-middle">
          <div className="flex justify-end text-xl sm:text-2xl mx-auto md:mx-0 md:text-3xl">
            技術/日常ブログを書いています。
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
      </div>
    </>
  );
}

export default PortfolioPage;
