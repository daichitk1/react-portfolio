import AllCommon from "../Header/AllCommon";
function ProfilePage() {
  return (
    <>
      <div>
        <AllCommon />
        <div className="z-20 mx-auto mt-9">
          <p className="text-4xl text-rose-400 m-2 font-bold">自己紹介</p>
          <img
            className="rounded-full w-50 h-50 mx-auto my-5"
            src="../images/my_cat.png"
          />
          <div className="rounded-3xl w-full md:w-250 mx-auto mb-20 bg-blue-100 hover:bg-blue-200 md:px-30 py-5">
            <div class="md:text-xl rounded-3xl p-5 text-start font-bold">
              はじめまして！
              <br />
              アウトドアが好きな26歳です。
              <br />
              <br />
              好奇心旺盛な性格で、新しい街へ自転車で出かけ、その街並みが想像以上に魅力的だったときには心が躍ります。
              <br />
              また、登山で頂上から美しい景色を見たときにも、同じように心が弾みます。
              <br />
              <br />
              今の夢/目標は自分の心が踊るようなアプリケーションを作ることです。
              <br />
              <br />
              現在は、ReactやRailsを活用したWebアプリケーション開発に注力しており、
              <br />
              実務レベルのスキルを身につけるために日々自己研鑽に励んでいます。
              <br />
            </div>
          </div>
          <div className="my-5">
            <p className="text-3xl font-bold text-blue-500">趣味</p>

            <div className="grid grid-cols-1">
              <div className="rounded-3xl p-5 w-full md:w-250 mx-auto mb-10 bg-pink-100 hover:bg-pink-200">
                <img
                  className="rounded-2xl mx-auto w-60 h-40 md:w-80 md:h-70 mx-9"
                  src="../images/Mountain-hobby.JPG"
                />
                <div className="font-bold text-blue-500">登山</div>
                <p className="position-absolute w-full md:w-80 mx-auto top-0 left-0 text-left font-bold">
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

              <div className="rounded-3xl p-5 w-full md:w-250 mx-auto my-10 bg-pink-100 hover:bg-pink-200">
                <img
                  className="rounded-2xl mx-auto w-50 h-50 md:w-70 md:h-70 mx-9"
                  src="../images/cycling-hobby.jpg"
                />
                <div className="font-bold text-blue-500">サイクリング</div>
                <p className="w-full md:w-70 mx-auto text-left font-bold">
                  昨年、京都市内を1日かけてサイクリングしました。
                  <br />
                  新しい街で知らない一面をサイクリングで見るのが好きです。
                </p>
              </div>
              <div className="rounded-3xl p-5 w-full md:w-250 mx-auto my-10 bg-pink-100 hover:bg-pink-200">
                <img
                  className="rounded-2xl w-50 h-70 md:w-70 md:h-70 mx-9 mx-auto"
                  src="../images/marathon-hobby.jpg"
                />
                <div className="font-bold text-blue-500">ランニング</div>
                <p className="w-full md:w-70 mx-auto text-left font-bold">
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
            <div className="rounded-3xl p-5 w-full md:w-250 mx-auto mb-20 bg-green-100 hover:bg-green-200">
              <div>
                <img
                  className="rounded-2xl w-50 h-80 md:w-70 md:h-100 mx-auto"
                  src="../images/juggling.PNG"
                />
                <div className="font-bold text-blue-500">ジャグリング</div>
                <div className="bg-green-500 mb-5 rounded-3xl w-25 mx-auto">
                  2018年〜
                </div>
                <p className="w-full md:w-70 mx-auto font-bold text-left">
                  大学時代にサークルで大道芸サークルに入っており、学園祭や近所のイベントでパフォーマンスをしていました。
                  <br />
                  特に、シガーボックス(箱)を使ったパフォーマンスが得意で新人戦東日本杯では3位に入賞しました。
                  <br />
                </p>
              </div>
            </div>
            <div className="rounded-3xl p-5 w-full md:w-250 mx-auto mb-5 bg-green-100 hover:bg-green-200">
              <div>
                <img
                  className="rounded-2xl w-50 md:w-70 mx-auto"
                  src="../images/kendama_img.png"
                />
                <div className="font-bold text-blue-500">けん玉</div>
                <div className="bg-green-500 mb-5 rounded-3xl w-25 mx-auto">
                  2004年〜
                </div>
                <p className="w-full md:w-70 mx-auto font-bold text-left">
                  幼稚園から中学一年まで習い事としてけん玉を習っていました。
                  <br />
                  小学4年生の時には小学生の全国大会である全日本少年少女けん玉道選手権大会に出場しました。
                  <br />
                  また、小学生のうちに中学生までで取得できる段位の最高段位(5段)を取得しました。
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
