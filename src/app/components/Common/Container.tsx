import React from 'react';

interface ContainerProps {
  title?: string;
  height?: string;
  content?: string;
  showStories?: boolean;
  showGames?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  title = "",
  height = "auto",
  content = "",
  showStories = false,
  showGames = false
}) => {
  return (
    <div className="bg-[#11112B] rounded-xl p-4" style={{ height }}>
      <h2 className="text-white text-lg font-bold mb-2">{title}</h2>
      <p className="text-white mb-4">{content}</p>
      {showStories && (
        <div className="flex gap-2 mt-2">
          {[...Array(10)].map((_, index) => (
            <div 
            key={index} 
            className="h-[100px] w-[100px] bg-[#11112B] rounded-full border-2 border-[#9562FF] flex items-center justify-center"
          >
              <div
                key={index}
                className="h-21 w-21 bg-[#34374E] rounded-full flex items-center justify-center" 
                >

              </div>  
            
          </div>
          ))}
        </div>
      )}
      {showGames && (
        <div className="flex gap-2 mt-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-[261px] w-[201px] bg-[#34374E] rounded-lg m-1"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
