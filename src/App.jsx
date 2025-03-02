import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
        <div className="fixed flex top-30 left-30">
          <div className="text-3xl mx-3 underline">ホーム</div>
          <div className="text-3xl mx-3 underline">制作物</div>
          <div className="text-3xl mx-3 underline">自己紹介</div>
          <div className="text-3xl mx-3 underline">スキル</div>
        </div>
        <div className="flex">
          <div className="m-auto mx-5 font-bold text-2xl">
            技術/日常ブログを書いています。
          </div>
          <a href="https://cat-and-mountain.com/blog/">
            <img className="rounded-full w-70 h-70" src="../images/introduction_img.png" />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
