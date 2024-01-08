export default function PageComp({ src, name, selected }) {
  return (
    <div
      className={`flex py-[8px] gap-[12px] items-center cursor-pointer px-[16px] rounded ${
        selected === true ? "bg-[rgba(255,255,255,0.1)]" : ""
      }`}
    >
      <img src={src} alt={name} className="w-[20px] h-[20px] z-10" />
      <p className="text-[#fff] opacity-80 text-[14px] leading-[20px] font-medium z-10">
        {name}
      </p>
    </div>
  );
}
