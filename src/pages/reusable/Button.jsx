import React, { useState } from 'react';

const Button = ({ text, onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await onClick(); // Assuming onClick is an asynchronous function
    setLoading(false);
  };

  return (
    <div>
      <button
        className={`w-full p-2 h-12 text-sm rounded-md flex items-center content-center justify-center bg-blue-600 text-white`}
        onClick={handleClick}
        disabled={loading} // Disable the button while loading
      >
        {loading ? <img src='/spinner.svg' alt='.' className="spinner w-7" /> : text || 'Submit'} {/* Conditionally render text */}
      </button>
    </div>
  );
};

export default Button;
