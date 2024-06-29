import React from 'react';
import NavBar from '../Common/NavBar';
import SideBar from '../Common/SideBar';
import Container from '../Common/Container';

const Layout: React.FC = () => {
  return (
    <div className="bg-[#090C23] min-h-screen flex flex-col">
      <div className="flex-none">
        <NavBar />
      </div>

      <div className="flex gap-2 p-2">
        <SideBar />

        <div className="flex flex-col flex-1 gap-2">
          {/* Containers with different heights */}
          <Container height="6.5rem" title="First Container" content="Content for the first container goes here..." />
          <Container  height="100%" title="Second Container" content="Content for the second container goes here..." />
          

        </div>
      </div>
    </div>
  );
}

export default Layout;
