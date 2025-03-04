import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link, Outlet} from 'react-router-dom';
import AllCommon from './AllCommon';
function ProfilePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
          <AllCommon/>
        <div className="z-20 mx-auto">
          <div>
            <p className="text-5xl">趣味</p>
             <p className="text-2xl mb-5">#登山 #サイクリング #マラソン</p>
            <div className="flex justify-center">
              <div className="my-5">
                <img className="rounded-full w-110 h-90 mx-9" src="../images/Mountain-hobby.JPG" />
                神奈川県の丹沢山にチャレンジし、登頂しました(写真は塔ノ岳)
              </div>
              <div className="my-5">
                <img className="w-90 h-90 mx-9" src="../images/cycling-hobby.jpg" />
                京都市内を1日かけてサイクリングしました
              </div>
              <div className="my-5">
              <img className="rounded-full w-80 h-90 mx-9" src="../images/marathon-hobby.jpg" />
                昨年、初めてフルマラソンを走りました。
              </div>
            </div>
          </div>

          <div className="my-5">
            <p className="text-5xl">特技</p>
             <p className="text-2xl mb-5">#ジャグリング</p>
            <div className="flex justify-center">
              <div>
                <img className="w-70 h-100 mx-auto" src="../images/juggling.PNG" />
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
