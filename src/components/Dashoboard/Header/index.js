export default function Header() {
  return (
    <div className="w-full grid grid-cols-3 px-[32px] border-b-[1px] border-[#d9d9d9] bg-[#fff] items-center gap-4">
      <div className="flex gap-[16px] py-[21px]">
        <h1 className="text-[#1a181e] text-[15px] leading-[22px]">Payments</h1>
        <div className="flex items-center gap-[6.7px]">
          <img src="/icons/question.png" className="h-[12.6px] w-[12.6px]" />
          <div className="text-[#4d4d4d] text-[12px] leading-4">
            How it works
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#f2f2f2] px-[16px] gap-[3px] rounded-[6px]">
        <div className="py-[12px]">
          <img src="/icons/search.png" className="w-[16px]" />
        </div>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="w-full py-[9px] text-[15px] leading-[22px] font-normal bg-inherit text-[#808080] focus:outline-none"
        />
      </div>
      <div className="flex justify-end gap-3">
        <div>
          <img src="/icons/Menu.png" className="w-[40px] h-[40px]" />
        </div>
        <div>
          <img src="/icons/Menu-1.png" className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  );
}
