import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Outlet} from 'react-router-dom';
import AllCommon from './AllCommon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="relative">
        <AllCommon/>
        <div className="flex fixed top-70 right-150">
          <div className="m-auto mx-5 font-bold text-2xl">
            技術/日常ブログを書いています。
          </div>
          <a href="https://cat-and-mountain.com/blog/">
            <img className="rounded-full w-70 h-70 hover:opacity-50" src="../images/introduction_img.png" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App;
