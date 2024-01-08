import Bottom from "./Bottom";
import Top from "./Top";

export default function Sidebar() {
  return (
    <div className="w-full max-w-[224px] min-h-full bg-[#1e2640] flex flex-col justify-between py-[16px]">
      <Top />
      <Bottom />
    </div>
  );
}
