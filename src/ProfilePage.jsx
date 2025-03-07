import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';
import AllCommon from './AllCommon';
function ProfilePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <AllCommon/>
        <div className="z-20 mx-auto">
          <div>
            <p className="text-5xl">趣味</p>
             <p className="text-2xl mb-5 text-green-500">#登山 #サイクリング #マラソン</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="my-5 mx-auto">
                <img className="rounded-full w-60 h-40 md:w-80 md:h-70 mx-9" src="../images/Mountain-hobby.JPG" />
                <p className="w-60 md:w-80 mx-auto">神奈川県の丹沢山に登頂しました(写真は塔ノ岳)</p>
              </div>
              <div className="my-5 mx-auto">
                <img className="w-50 h-50 md:w-70 md:h-70 mx-9" src="../images/cycling-hobby.jpg" />
                <p className="w-50 md:w-70 mx-auto">京都市内を1日かけてサイクリングしました</p>
              </div>
              <div className="my-5 mx-auto">
              <img className="rounded-full w-50 h-70 md:w-70 md:h-70 mx-9" src="../images/marathon-hobby.jpg" />
                <p className="w-50 md:w-70 mx-auto">昨年、初めてフルマラソンを走りました。</p>
              </div>
            </div>
          </div>

          <div className="my-5 h-150">
            <p className="text-5xl">特技</p>
             <p className="text-2xl mb-5 text-green-500">#ジャグリング</p>
            <div className="flex justify-center">
              <div>
                <img className="w-50 h-80 md:w-70 md:h-100 mx-auto" src="../images/juggling.PNG" />
                大学時代、シガーボックスでジャグリングをしていました
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;
