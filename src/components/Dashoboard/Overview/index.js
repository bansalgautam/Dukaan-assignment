export default function Overview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <div className="flex-1 text-[20px] font-medium leading-7 text-[#1a181e]">
          Overview
        </div>
        <div className="py-[6px] px-[14px] border-[1px] border-[#d9d9d9] flex bg-[white] rounded items-center gap-[7px] pr-[10px] cursor-pointer">
          <div className="text-[16px] leading-6 font-normal text-[#4D4D4D]">
            Last Month
          </div>
          <img src="/icons/arrow.png" className="w-[16px]" />
        </div>
      </div>
      <div className="flex gap-[20px] min-w-full">
        <div className="flex-1 bg-white p-5 flex flex-col gap-4 shadow-[0px 2px 6px 0px #1A181E0A]">
          <div className="text-[#4d4d4d] text-[16px] leading-6 font-normal">
            Online orders
          </div>
          <div className="font-medium text-[32px] leadin-[38px] text-[#1a181e]">
            231
          </div>
        </div>
        <div className="flex-1 bg-white p-5 flex flex-col gap-4 shadow-[0px 2px 6px 0px #1A181E0A]">
          <div className="text-[#4d4d4d] text-[16px] leading-6 font-normal">
            Amount received
          </div>
          <div className="font-medium text-[32px] leadin-[38px] text-[#1a181e]">
            &#8377;23,92,312.19
          </div>
        </div>
      </div>
    </div>
  );
}
