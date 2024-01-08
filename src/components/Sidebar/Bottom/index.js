export default function Bottom() {
  return (
    <div className="px-[8px]">
      <div className="px-[12px] py-[6px] flex bg-[#353C53] rounded gap-[12px] items-center">
        <div className="px-[6.2px] py-[8.2px] bg-[rgba(255,255,255,0.1)] rounded-[4px]">
          <img src="/icons/wallet.png" className="w-[23.65px]" />
        </div>
        <div className="flex-1">
          <div className="font-normal text-[13px] leading-4 text-[#fff] opacity-80">
            Available credits
          </div>
          <div className="text-[#fff] font-medium text-[16px] leading-6">222.10</div>
        </div>
      </div>
    </div>
  );
}
