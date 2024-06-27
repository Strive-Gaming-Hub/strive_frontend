import React from 'react';
import NavBar from '../Common/NavBar';
import SideBar from '../Common/SideBar';
import Container from '../Common/Container';


// if (typeof window !== "undefined") {
//     require("lazysizes/plugins/attrchange/ls.attrchange.js");
//     require("lazysizes/plugins/respimg/ls.respimg.js");
//     require("lazysizes");
// }


const layout: React.FC = () => {
    return(
        <div className="bg-[#090C23] min-h-screen flex flex-col">
             <div className="flex-none">
                <NavBar />   
             </div>


             <div className="flex gap-2 p-2">
            {/* SideBar */}
                <SideBar />
    
            <div className="flex flex-col flex-1 gap-2">
        
                
                <Container/>
        
                <Container/>
            </div>
        </div>
        </div>
    )
}

export default layout;