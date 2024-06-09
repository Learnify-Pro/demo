import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const LoadMore = ({ onLoadMore }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

  return (
    <div ref={ref} className="flex justify-center mt-4">
      <img
        src="/spinner.svg"
        alt="Loading more..."
        className="w-7 h-7 spinner"
      />
    </div>
  );
};

export default LoadMore;
