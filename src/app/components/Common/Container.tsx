import React from 'react';

const container: React.FC = ({ title = ""} : any) => {
    return (
    <div className="bg-[#11112B] rounded-xl p-4 flex-1" style={{ height: "100px" }} >
            <h2 className="text-white text-xl font-bold" title={title || "Container" }>Container</h2>
            <p className="text-white">Content...</p>
        </div>
    );
};

export default container;