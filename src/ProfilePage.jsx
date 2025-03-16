import { Link, Outlet } from "react-router-dom";
import AllCommon from "./AllCommon";
function ProfilePage() {
  return (
    <>
      <div>
        <AllCommon />
        <div className="z-20 mx-auto">
          <div className="mx-auto max-w-180">
            <p className="text-4xl text-rose-400 m-2 font-bold">自己紹介</p>
            <img
              className="rounded-full w-50 h-50 mx-auto my-5"
              src="../images/my_cat.png"
            />
            <div class="text-xl rounded-3xl p-5 text-start font-bold">
              はじめまして、アウトドアと新しいことに挑戦することが好きな26歳です。
              <br />
              エンジニアとしてより多くの人に利用してもらうサービスに関わりたいと思い、新卒でSaaS企業に入社し、社会人のキャリアをスタートしました。
              <br />
              しかし、前職ではエンジニアのチームに配属することが叶わず、お客様とサービスを介して関わることが多い部署に配属されました。
              <br />
              そのような環境で仕事をする中で、自分の中でよりユーザーに近いところで開発を行いたいと思いが強くなっていきました。
              <br />
              現在はユーザーのニーズをより反映できるエンジニアになるため、個人開発と資格勉強に取り組んでいます。
            </div>
          </div>
          <div className="my-5">
            <p className="text-3xl">趣味</p>
            <p className="text-2xl mb-5 text-green-500">
              #登山 #サイクリング #マラソン
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="my-5 mx-auto">
                <img
                  className="rounded-full w-60 h-40 md:w-80 md:h-70 mx-9"
                  src="../images/Mountain-hobby.JPG"
                />
                <p className="w-60 md:w-80 mx-auto">
                  神奈川県の丹沢山に登頂しました(写真は塔ノ岳)
                </p>
              </div>
              <div className="my-5 mx-auto">
                <img
                  className="w-50 h-50 md:w-70 md:h-70 mx-9"
                  src="../images/cycling-hobby.jpg"
                />
                <p className="w-50 md:w-70 mx-auto">
                  京都市内を1日かけてサイクリングしました
                </p>
              </div>
              <div className="my-5 mx-auto">
                <img
                  className="rounded-full w-50 h-70 md:w-70 md:h-70 mx-9"
                  src="../images/marathon-hobby.jpg"
                />
                <p className="w-50 md:w-70 mx-auto">
                  昨年、初めてフルマラソンを走りました。
                </p>
              </div>
            </div>
          </div>
          <div className="my-5 h-150">
            <p className="text-3xl">特技</p>
            <p className="text-2xl mb-5 text-green-500">#ジャグリング</p>
            <div className="flex justify-center">
              <div>
                <img
                  className="w-50 h-80 md:w-70 md:h-100 mx-auto"
                  src="../images/juggling.PNG"
                />
                <p className="w-50 md:w-70 mx-auto">
                  大学時代、シガーボックスでジャグリングをしていました
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
