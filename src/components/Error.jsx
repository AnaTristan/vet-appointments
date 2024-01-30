const Error = ({ message }) => {
  return (
    <div>
      <p className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3">
        {message}
      </p>
    </div>
  );
};

export default Error;
