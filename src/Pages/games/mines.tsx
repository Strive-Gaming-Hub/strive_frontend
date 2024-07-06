import React from "react";
import { MdCasino } from "react-icons/md";

const Mines = () => {
  const gridItems = Array.from({ length: 25 }, (_, i) => i + 1);
  return (
    <div className="flex" style={{ height: "calc(100vh - 5.8rem)" }}>
      <div className="left text-white flex-col bg-[#1C1E29] h-full p-4 rounded-lg w-[25%]">
        <div className="flex flex-col mb-2">
          <label className="text-[#6F79A1] text-sm font-medium tracking-wide">
            Bet Amount
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="betamount"
              placeholder="Bet Amount"
              className="w-2/3 shadow appearance-none rounded-lg h-[2.5rem] py-1 px-3 bg-[#1c1e29] text-[#9094A6] text-[0.88rem] leading-tight border border-[#353849] focus:outline-1 focus:shadow-outline"
            />
            <div className="buttons flex gap-1">
              <button className="h-[2.5rem] w-[2.5rem] bg-[#323547] rounded-md text-[0.75rem]">
                1/2
              </button>
              <button className="h-[2.5rem] w-[2.5rem] bg-[#323547] rounded-md text-[0.75rem]">
                2x
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col mb-2 w-1/2">
            <label className="text-[#6F79A1] text-sm font-medium tracking-wide">
              TNTs
            </label>
            <input
              type="text"
              name="bomb"
              placeholder="TNTs"
              className="shadow appearance-none rounded-lg h-[2.5rem] py-1 px-3 bg-[#1c1e29] text-[#9094A6] text-[0.88rem] leading-tight border border-[#353849] focus:outline-1 focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col mb-2 w-1/2">
            <label className="text-[#6F79A1] text-sm font-medium tracking-wide">
              Coins
            </label>
            <input
              type="text"
              name="coin"
              placeholder="Coins"
              className="shadow appearance-none rounded-lg h-[2.5rem] py-1 px-3 bg-[#1c1e29] text-[#9094A6] text-[0.88rem] leading-tight border border-[#353849] focus:outline-1 focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-[#6F79A1] text-sm font-medium tracking-wide">
            Total profit
          </label>
          <input
            type="text"
            name="profit"
            placeholder="Total profit"
            className="shadow appearance-none rounded-lg h-[2.5rem] py-1 px-3 bg-[#1c1e29] text-[#9094A6] text-[0.88rem] leading-tight border border-[#353849] focus:outline-1 focus:shadow-outline"
          />
        </div>
        <div className="relative flex flex-col gap-4 text-[0.9rem] font-medium">
          <button className="bg-[##1C1E29] border border-[#353849] rounded-md  py-[0.4rem] tracking-wide text-[#D0D6F5]">
            <span className="absolute left-8 top-2.5">
              <MdCasino />
            </span>{" "}
            Pick Random tile
          </button>
          <button className="bg-[#9562FF] border border-[#A77CFF]  rounded-md py-[0.4rem] tracking-wide">
            Cashout
          </button>
        </div>
      </div>
      <div className="right text-white m-auto">
        <div className="grid grid-cols-5 gap-2.5">
          {gridItems.map((item) => (
            <div
              key={item}
              className="w-20 h-20 bg-[#373B4E] rounded-lg border-1 border-gray-800 flex items-center justify-center shadow-2xl hover:bg-[#4C4C81] shadow-lg]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mines;
