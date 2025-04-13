import "./App.css";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <>
      <div>
        <h1 className="my-10 text-3xl">このページは存在していません</h1>

        <Link
          className="hover:text-blue-900 hover:font-bold hover:bg-blue-300 bg-blue-900 hover:text-black text-white bg-blue-500 p-5 rounded-full"
          to="/"
        >
          トップページ
        </Link>
      </div>
    </>
  );
}

export default Page404;
