import React from 'react';
import NavBar from '../Common/NavBar';
import SideBar from '../Common/SideBAr';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#090C23] flex flex-col" style={{ height: "calc(100% - 4.5rem)" }}>
      <div className="flex-none">
        <NavBar />
      </div>

      <div className="flex gap-2 p-2 flex-1">
        <SideBar />

        <div className="flex flex-col flex-1 gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
