export const Blog = (props) => {
  return (
    <a href={props.link}>
      <p className="left text-xl my-3 ml-7 text-left underline hover:text-blue-400">
        {props.title}
      </p>
    </a>
  );
};
