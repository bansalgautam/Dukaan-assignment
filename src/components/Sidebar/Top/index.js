import { data } from "@/data";
import PageComp from "./PageComp";

export default function Top() {
  return (
    <div className="flex flex-col gap-[24px] px-[8px]">
      <div className="flex items-center px-[8px]">
        <div className="bg-white rounded w-[40px]">
          <img
            src="/images/i.png"
            alt="logo"
            className="rounded-[4px] w-[39px] h-[39px]"
          />
        </div>
        <div className="mx-[12px] flex flex-col h-full flex-1">
          <h1 className="text-[#fff] text-[#15px] font-medium leading-[22px]">
            Nishyan
          </h1>
          <div className="text-[13px] text-[#fff] opacity-80 underline leading-[16px] underline-offset-[2px]">
            Visit store
          </div>
        </div>
        <div>
          <img src="/icons/down.png" className="w-[15px]" />
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        {data.map((item, index) => (
          <PageComp {...item} key={index} />
        ))}
      </div>
    </div>
  );
}
