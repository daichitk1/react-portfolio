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
    </>
  )
}

export default SkillPage;
