import Header from "./Header";
import Overview from "./Overview";
import Transaction from "./Transactions";

export default function DashBoard() {
  return (
    <div className="flex-1 flex flex-col bg-[#fafafa] relative left-[224px] dashboard">
      <Header />
      <div className="p-[32px] gap-8 flex flex-col w-full rounded-[8px]">
        <Overview />
        <Transaction />
      </div>
    </div>
  );
}
