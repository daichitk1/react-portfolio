import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';
import AllCommon from './AllCommon';
function SkillPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllCommon/>
    <div>
      <p className="text-4xl">コーディングスキル</p>
      <div>
        <div>
          <div className="mx-auto my-5">
            <p className="text-2xl">フロントエンド</p>
            <div>
              HTML CSS(tailwindcss) JavaScript(react)
            </div>
          </div>
          <div className="mx-auto">
          <p className="text-2xl">バックエンド</p>
            <div>
              Ruby(Ruby on rails)
            </div>
          </div>
        </div>
      </div>
      <div className="my-9">
      <p className="text-2xl">これまで</p>
        <div>
          Python(大学4年〜大学院2年まで)、C(大学1年〜4年まで)
        </div>
      </div>
      <div className="text-2xl">
        AtCoder
      </div>
      <p>大学時代にプログラミングコンテストに1年以上Pythonで参加していました。</p>
      <p>ランクは茶色(上位25パーセントほど)、最高レートは649です。</p>
    </div>
    <div>
      <p className="text-4xl my-5">開発スキル</p>
      <div className="mb-2">
        <p className="text-2xl">経験のあるコーディング環境</p>
        VsCode、Git、emacs
      </div>
      <div className="mb-2">
        <p className="text-2xl">デプロイ</p>
        heroku、vercel
      </div>
      <div className="mb-2">
        <p className="text-2xl">PC</p>
        windows(大学3年まで)、Mac(大学3年から現在、iMacにて個人開発中)
      </div>

    </div>
    <div className="my-9">
      <p className="text-4xl">これまでの学習歴</p>
      <div>ソフトウェア(学部時代)</div>
      <div>AI(大学院時代)</div>
      <div>
        基本情報技術者試験 合格
      </div>
    </div>
    </>
  )
}

export default SkillPage;
