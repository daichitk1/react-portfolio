import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';

function SkillPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div className="fixed top-10 left-10 text-7xl opacity-50">
          Daichi Takei
        </div>
        <div className="fixed top-12 left-105 opacity-50">
        <a href="https://github.com/daichitk1" target="_blank">
            <img className="rounded-full w-15 h-15" src="../images/github-mark.png" />
          </a>
          </div>
        <div className="fixed flex top-35 left-30">
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/">ホーム</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/product">制作物</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/profile">自己紹介</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/skill">スキル</Link></div>
        </div>
      </div>
    </>
  )
}

export default SkillPage;
