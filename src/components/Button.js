const Button = ({ text }) => {
  return (
    <button className="border border-gray-500 px-3 md:px-4 py-1 m-2 rounded-lg h-fit w-fit">
      {text}
    </button>
  );
};

export default Button;
