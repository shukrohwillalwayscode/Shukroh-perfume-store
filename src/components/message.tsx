import { Button } from "../reuseable/button";
import bgImage from "../assets/bg1.jpeg";

export default function Message() {
  return (
    <div
      id="message"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full h-[476.72px] bg-no-repeat bg-cover bg-center flex justify-center items-center"
    >
      <div className="w-[50%] max-md:w-[90%] flex flex-col items-center gap-[50px]">
        <p className="max-md:text-[20px] font-[700] text-[35px] sm:text-[16px] text-white text-center">
          PLASTIC RECYCLING IS A MYTH. MOST PLASTIC IS SENT TO LANDFILLS.
          ALUMINUM IS INFINITELY RECYCLABLE.
        </p>

        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
}
