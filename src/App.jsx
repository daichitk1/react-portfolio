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
      <div>
        <AllCommon/>
        <div className="h-170 flex items-center justify-center">
          <div className="font-bold text-3xl">
            技術/日常ブログを書いています。
          </div>
          <div>
            <a href="https://cat-and-mountain.com/blog/">
              <img className="rounded-full w-70 h-70 mx-auto hover:opacity-50" src="../images/introduction_img.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
