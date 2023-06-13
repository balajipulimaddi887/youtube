const Button = ({ text }) => {
  return (
    <button
      className={
        "border border-gray-500 px-3 md:px-4 py-1 m-2 rounded-lg h-fit w-fit" +
        (text === "All"
          ? " bg-black text-white"
          : "bg-gray-300 text-gray-400 pointer-events-none border-gray-200")
      }
    >
      {text}
    </button>
  );
};

export default Button;
