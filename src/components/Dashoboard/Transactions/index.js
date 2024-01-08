import TranComp from "./TranComp";

export default function Transaction() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-[#1a181e] font-medium text-[20px] leading-[28px]">
        Transactions | This Month
      </div>
      <div className="flex-1 w-full bg-white p-3 rounded-[8px] flex flex-col items-center">
        <div className="flex min-w-full">
          <div className="flex items-center gap-[3px] px-[16px] rounded border-[1px] border-[#d9d9d9]">
            <div className="py-[13px]">
              <img src="/Search.png" className="w-[14px]" />
            </div>
            <input
              type="text"
              placeholder="Search by order ID..."
              className="py-[10px] focus:outline-none text-[14px] font-normal leading-5 text-[#999]"
            />
          </div>
          <div className="flex-1 flex justify-end gap-3 items-center">
            <div className="flex items-center gap-[6px] py-[6px] rounded border-[1px] border-[#d9d9d9] px-3 text-[16px] font-normal leading-6 text-[#4d4d4d]">
              <div>Sort</div>
              <div>
                <img src="/icons/Sort.png" className="w-[16px]" />
              </div>
            </div>
            <div className="p-2 rounded border-[1px] border-[#d9d9d9]">
              <img src="/icons/download.png" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
        <div className="py-3 min-w-full">
          <div className="grid grid-cols-4 gap-[40px] bg-[#f2f2f2] py-[10px] px-[12px]">
            <div className="text-[14px] leading-5 font-medium text-[#4d4d4d]">
              Order ID
            </div>
            <div className="flex items-center gap-1">
              <div className="text-[14px] leading-5 font-medium text-[#4d4d4d]">
                Order date
              </div>
              <img src="/icons/t.png" className="w-[8px] h-[8px]" />
            </div>
            <div className="justify-self-end text-[14px] leading-5 font-medium text-[#4d4d4d]">
              Order amount
            </div>
            <div className="justify-self-end flex gap-[4.7px] items-center">
              <div className="text-[14px] leading-5 font-medium text-[#4d4d4d]">
                Transaction fees
              </div>
              <img src="/icons/q2.png" />
            </div>
          </div>
          <div>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            ].map((item) => (
              <TranComp key={item} />
            ))}
          </div>
        </div>
        <div className="py-3 flex gap-6 items-center">
          <div className="flex items-center gap-3 py-[6px] px-3 rounded border border-[#d9d9d9]">
            <div>
              <img src="/prev.png" />
            </div>
            <div className="text-[14px] font-medium leading-5 text-[#4d4d4d]">
              Previous
            </div>
          </div>
          <div className="grid grid-cols-11 gap-2 text-[14px] font-normal text-[#4d4d4d] leading-5">
            <div className="py-[4px] w-7 text-center rounded">1</div>
            <div className="py-[4px] w-7 text-center rounded">...</div>
            <div className="py-[4px] w-7 text-center rounded bg-[#146eb4] text-white">10</div>
            <div className="py-[4px] w-7 text-center rounded">11</div>
            <div className="py-[4px] w-7 text-center rounded">12</div>
            <div className="py-[4px] w-7 text-center rounded">13</div>
            <div className="py-[4px] w-7 text-center rounded">14</div>
            <div className="py-[4px] w-7 text-center rounded">15</div>
            <div className="py-[4px] w-7 text-center rounded">16</div>
            <div className="py-[4px] w-7 text-center rounded">17</div>
            <div className="py-[4px] w-7 text-center rounded">18</div>
          </div>
          <div className="flex items-center gap-3 py-[6px] px-3 rounded border border-[#d9d9d9]">
            <div className="text-[14px] font-medium leading-5 text-[#4d4d4d]">
              Next
            </div>
            <div>
              <img src="/next.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
