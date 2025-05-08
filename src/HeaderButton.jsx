import { Link } from "react-router-dom";
export const HeaderButton = (props) => {
  return (
    <div className="text-xl md:text-2xl me-1 md:mx-2 underline hover:opacity-50">
      <button
        role="link"
        class="relative text-white underline decoration-wavy underline-offset-4 transition-colors duration-300 hover:text-pink-100 hover:underline"
      >
        <Link to={props.Path}>{props.Name}</Link>
      </button>
    </div>
  );
};
