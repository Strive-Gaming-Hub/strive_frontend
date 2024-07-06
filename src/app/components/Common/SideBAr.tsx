import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { useAuth } from "@/app/Context/AuthContext";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch user data from localStorage
    const user = JSON.parse(localStorage.getItem("userData") || "{}");
    if (user && user.username) {
      setUsername(user.username);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="relative bg-[#11112B] text-white w-full rounded-xl md:w-64 flex flex-col"
      style={{ height: "calc(100vh - 5.8rem)" }}
    >
      {/* Profile section */}
      <div
        className="p-1 flex items-center justify-between cursor-pointer rounded-md mt-3 bg-[#1C1C3A]"
        onClick={toggleDropdown}
      >
        {/* Profile Photo */}
        <div className="h-10 rounded-lg w-10 bg-gray-300 mr-2"></div>
        {/* Hello message */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{username || "New User"}</h2>
        </div>
        {/* Arrow Icon */}
        <div className="ml-auto">
          {isDropdownOpen ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
        </div>
      </div>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <div className="absolute left-full top-1 bg-[#11112B] m-2 rounded-md w-40">
          <ul className="p-1">
            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-1 hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/profile">
                <span>Profile</span>
              </Link>
            </li>
            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-1 hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/profile">
                <span>Wallet</span>
              </Link>
            </li>

            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/profile">
                <span>Statistics</span>
              </Link>
            </li>
            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/settings">
                <span>Transactions</span>
              </Link>
            </li>
            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/logout">
                <span>My Bets</span>
              </Link>
            </li>
            <li className="px-2 py-2 cursor-pointer text-[#FFFFFF] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-[4px]">
              <Link href="/logout">
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Menu Options */}
      <ul className="py-2">
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Affiliate</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Responsible Gambling</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/">
            <span>Help & Support</span>
          </Link>
        </li>
        <li className="px-2 py-2 flex flex-row cursor-pointer group text-[#8E84A3] text-[16px] hover:bg-[#1F1943] hover:text-[#FFFFFF] rounded-md">
          <Link href="/changepassword">
            <span>Change Password</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
