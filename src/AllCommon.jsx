import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';

const AllCommmon = ()=> {
  return (
      <div className="flex mx-9 my-9 justify-between">
        <div className="flex">
          <div className="text-7xl opacity-50">
            Daichi Takei
          </div>
          <div className="opacity-50">
            <a href="https://github.com/daichitk1" target="_blank">
              <img className="rounded-full w-15 h-15" src="../images/github-mark.png" />
            </a>
          </div>
        </div>
        <div className="flex my-auto">
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/">ホーム</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/product">制作物</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/profile">自己紹介</Link></div>
          <div className="text-3xl mx-3 underline hover:opacity-50"><Link to="/skill">スキル</Link></div>
        </div>
      </div>
  );
}

export default AllCommmon;
