import React from 'react';

interface ContainerProps {
  title?: string;
  height?: string;
  content?: string;
}

const Container: React.FC<ContainerProps> = ({ title = "Container", height = "auto" , content = "content..."}) => {
  return (
    <div className="bg-[#11112B] rounded-xl p-4" style={{ height }}>
      <h2 className="text-white text-xl font-bold">{title}</h2>
      <p className="text-white">{content}</p>
    </div>
  );
};

export default Container;
