import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';
import AllCommon from './AllCommon';
function ProductPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllCommon/>
      <div>
        <div class="flex justify-center max-width-3xs">
          <div className="my-20 h-100 w-100">
            <p className="text-3xl">登山の図鑑アプリを公開</p>
            <div>
              知りたい山の情報を簡単に知れる山の図鑑アプリを公開。
              Reactを利用し、複数のAPIを使って作っています。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a href="https://github.com/daichitk1/mountain-display-app" target="_blank">
                  <img className="rounded-full w-15 h-15 mx-auto hover:opacity-50" src="../images/github-mark.png" />
                </a>
                コード
              </div>
              <div className="mx-3">
                <a href="https://cat-and-mountain.com/blog/?p=9" target="_blank">
                  <img className="rounded-full w-15 h-15 mx-auto hover:opacity-50" src="../images/introduction_img.png" />
                </a>
                ブログ
              </div>
            </div>
            <p className="my-5 text-green-500">#React #JavaScript #HTML #CSS #tailwindcss #Vercel</p>
          </div>
          <a href="https://mountain-display-app.vercel.app" target="_blank">
            <img className="h-100 w-100 hover:opacity-50" src="../images/mountain-app.png" />
          </a>
        </div>

        <div class="flex justify-center max-width-3xs">
          <div className="my-20 h-100 w-100">
            <p className="text-3xl">面接管理アプリを公開</p>
            <div>
              転職活動では、企業によって面接の進度が異なり、進度を管理する必要があります。
              そこで面接管理アプリのプロトタイプをRailsで作成し公開しました。
            </div>
            <div className="flex justify-center my-5">
              <div className="mx-3">
                <a href="https://github.com/daichitk1/interview_management_app" target="_blank">
                  <img className="rounded-full w-15 h-15 mx-auto hover:opacity-50" src="../images/github-mark.png" />
                </a>
                コード
              </div>
            </div>
            <p className="my-5 text-green-500">#Ruby on rails #Ruby #HTML #CSS #heroku</p>
          </div>
          <a href="https://mysterious-reaches-91685-813905271b2c.herokuapp.com/" target="_blank">
            <img className="h-100 w-120 hover:opacity-50" src="../images/interview_exam.png" />
          </a>
        </div>
      </div>
    </>
  )
}

export default ProductPage;
