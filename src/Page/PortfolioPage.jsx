import "../App.css";
import AllCommon from "../Header/AllCommon";
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
            主な作ったアプリ
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 flex justify-center lg:max-w-280 lg:mx-auto">
            <div
              className={`h-175 rounded-3xl my-10 ${
                mountainApp
                  ? "bg-pink-100 hover:bg-pink-200"
                  : "bg-blue-200 hover:bg-blue-300"
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
                        <span class="relative cursor-pointer">詳細</span>
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
              className={`h-185 sm:h-175 rounded-3xl my-10 ${
                interviewApp
                  ? "bg-pink-100 hover:bg-pink-200"
                  : "bg-blue-200 hover:bg-blue-300"
              } lg:max-w-250 mx-auto  flex justify-center w-full sm:w-120 flex items-center`}
            >
              {(() => {
                if (interviewApp) {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        自己総合管理ツール
                      </p>
                      <button
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50"
                        onClick={() => setInterviewApp(!interviewApp)}
                      >
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative cursor-pointer">詳細</span>
                      </button>
                      <div className="my-5">
                        <img
                          className="h-90 w-90 mx-auto"
                          src="../images/self_control.png"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="my-10 mx-5 w-full sm:w-100">
                      <p className=" mb-5 text-3xl text-blue-500 font-bold">
                        自己総合管理ツール
                      </p>

                      <button class="my-7 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-blue-500 px-6 font-medium text-neutral-50">
                        <span class="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                        <span class="relative">
                          <a
                            href="https://desolate-cliffs-66576-cc5b606ff424.herokuapp.com/"
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
                        社会人として働く中で、自己管理の大切さを実感しました。
                        そのため、メモ機能や日記機能、タスク管理機能といった
                        総合的な自己管理の要素を詰め込んだアプリを作成し、日々改良を重ねています。
                        <p className="mt-4 text-2xl text-blue-500 font-bold">
                          目的
                        </p>
                        Ruby on railsの学習と実装
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
                            href="https://github.com/daichitk1/diary"
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
                            href="https://cat-and-mountain.com/blog/?p=62"
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
      </div>
    </>
  );
}

export default PortfolioPage;
