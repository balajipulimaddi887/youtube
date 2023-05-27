const Button = ({ text }) => {
  return (
    <div>
      <button className="border border-gray-500 px-4 py-1 m-2 rounded-lg">
        {text}
      </button>
    </div>
  );
};

export default Button;
