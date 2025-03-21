import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
import { useState } from "react";
function ProfilePage() {
  const [mountain, setMountain] = useState(true);
  return (
    <>
      <div>
        <AllCommon />
        <div className="z-20 mx-auto">
          <p className="text-4xl text-rose-400 m-2 font-bold">自己紹介</p>
          <div className="rounded-3xl w-full md:w-250 mx-auto my-15 bg-blue-100 md:px-30 py-5">
            <img
              className="rounded-full w-50 h-50 mx-auto my-5"
              src="../images/my_cat.png"
            />
            <div class="md:text-xl rounded-3xl p-5 text-start font-bold">
              はじめまして！
              <br />
              アウトドアと新しいことに挑戦することが好きな26歳です。
              <br />
              <br />
              エンジニアとしてより多くの人に利用してもらうサービスに関わりたいと思い、新卒でSaaS企業に入社し、社会人のキャリアをスタートしました。
              <br />
              しかし、前職ではエンジニアのチームに配属することが叶わず、お客様とサービスを介して関わることが多い部署に配属となりました。
              <br />
              そのような環境で仕事をする中で、自分の中でよりユーザーに近いところで開発を行いたいと思いが強くなっていきました。
              <br />
              <br />
              現在はユーザーのニーズをより反映できるエンジニアになるため、個人開発と資格勉強に取り組んでいます。
            </div>
          </div>
          <div className="my-5">
            <p className="text-3xl font-bold text-blue-500">趣味</p>

            <div className="grid grid-cols-1">
              <div
                className="rounded-3xl p-5 w-full md:w-250 mx-auto mb-10 bg-pink-100 hover:opacity-50"
                onClick={() => setMountain(!mountain)}
              >
                <img
                  className="rounded-2xl mx-auto w-60 h-40 md:w-80 md:h-70 mx-9"
                  src="../images/Mountain-hobby.JPG"
                />
                <div className="font-bold text-blue-500">登山</div>
                <p className="position-absolute w-60 md:w-80 mx-auto top-0 left-0 text-left font-bold">
                  今年の元旦に神奈川県の丹沢山に登頂しました (写真は塔ノ岳)
                  <br />
                  昨年は、年25日ほど山に登りました。
                  <br />
                  <b>登った山</b>
                  <br />
                  富士山、雲取山(都内最高峰)、至仏山(尾瀬) <br />
                  など
                </p>
              </div>

              <div className="rounded-3xl p-5 w-full md:w-250 mx-auto my-10 bg-pink-100">
                <img
                  className="rounded-2xl mx-auto w-50 h-50 md:w-70 md:h-70 mx-9"
                  src="../images/cycling-hobby.jpg"
                />
                <div className="font-bold text-blue-500">サイクリング</div>
                <p className="w-50 md:w-70 mx-auto text-left font-bold">
                  昨年、京都市内を1日かけてサイクリングしました。
                  <br />
                  新しい街で知らない一面をサイクリングで見るのが好きです。
                </p>
              </div>
              <div className="rounded-3xl p-5 w-full md:w-250 mx-auto my-10 bg-pink-100">
                <img
                  className="rounded-2xl w-50 h-70 md:w-70 md:h-70 mx-9 mx-auto"
                  src="../images/marathon-hobby.jpg"
                />
                <div className="font-bold text-blue-500">ランニング</div>
                <p className="w-50 md:w-70 mx-auto text-left font-bold">
                  昨年、初めてフルマラソンを走りました。
                  <br />
                  中高陸上部でしたが、ハーフまでしか大会で走ったことがなかったのでチャレンジしました。
                  <br />
                  約1週間の練習ののち、なんとか完走しました。
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl text-blue-500 font-bold">特技</p>
            <div className="flex justify-center rounded-3xl p-5 w-full md:w-250 mx-auto mb-10 bg-pink-100">
              <div>
                <img
                  className="rounded-2xl w-50 h-80 md:w-70 md:h-100 mx-auto"
                  src="../images/juggling.PNG"
                />
                <div className="font-bold text-blue-500">ジャグリング</div>
                <p className="w-50 md:w-70 mx-auto font-bold text-left">
                  大学時代、シガーボックスでジャグリングをしていました。
                  <br />
                  大学時代にサークルで大道芸サークルに入っており、学園祭や近所のイベントでパフォーマンスをしていました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
