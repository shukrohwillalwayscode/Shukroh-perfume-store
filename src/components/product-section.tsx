import { PERFUMES } from "../mockData/perfumes";

export default function ProductSection() {
  return (
    <div className="w-full space-y-[20px]">
      <p className="font-[700] text-[30px] text-[#151515] text-center">
        KILLER MERCH
      </p>

      <div className="w-full flex  gap-3    bg-white overflow-x-scroll overflow-y-hidden">
        {PERFUMES.map((perf, i) => (
          <div
            className="min-w-[200px]  sm:min-w-[45%] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 space-y-[10px]"
            key={i}
          >
            <div
              style={{ backgroundImage: `url(${perf.img}  )` }}
              className="w-[400px] h-[400px]   relative overflow-hidden border border-[#daab1e] bg-cover bg-no-repeat"
            ></div>
            <div className="space-y-[20px] text-white text-center flex flex-col justify-center  bg-black p-6.5 ">
              <h3 className="font-[700] text-[16.9px] leading-6">
                {perf.description}
              </h3>
              <p>💲{perf.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
