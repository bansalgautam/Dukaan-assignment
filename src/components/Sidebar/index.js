import Bottom from "./Bottom";
import Top from "./Top";

export default function Sidebar() {
  return (
    <div className="w-full max-w-[224px] min-h-full max-h-[100vh] bg-[#1e2640] flex flex-col justify-between py-[16px] fixed top-0">
      <Top />
      <Bottom />
    </div>
  );
}
