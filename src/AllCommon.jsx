import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';

const AllCommmon = ()=> {
  return (
      <div className="flex mx-9 my-9 grid grid-cols-1 md:grid-cols-2 md:justify-between">
        <div className="flex items-center">
          <div className="text-4xl sm:text-5xl md:text-7xl opacity-50">
            Daichi Takei
          </div>
          <a href="https://github.com/daichitk1" target="_blank">
            <img className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-2 md:mx-5 opacity-50" src="../images/github-mark.png" />
          </a>
        </div>
        <div className="flex my-auto md:justify-end">
          <div className="text-xl md:text-3xl me-1 md:mx-3 underline hover:opacity-50"><Link to="/">ホーム</Link></div>
          <div className="text-xl md:text-3xl me-1 md:mx-3 underline hover:opacity-50"><Link to="/product">ニュース</Link></div>
          <div className="text-xl md:text-3xl me-1 md:mx-3 underline hover:opacity-50"><Link to="/profile">自己紹介</Link></div>
          <div className="text-xl md:text-3xl me-1 md:mx-3 underline hover:opacity-50"><Link to="/skill">スキル</Link></div>
        </div>
      </div>
  );
}

export default AllCommmon;
