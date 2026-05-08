import { useState } from "react";
import { SwitchBtn } from "../reuseable/switch-btn";
import { Review2 } from "./review2";
import { Review1 } from "./review1";

export function Testimonials() {
  const [review, setReview] = useState<React.ReactNode>(<Review1 />);

  function toReview1() {
    setReview(<Review1 />);
  }

  function toReview2() {
    setReview(<Review2 />);
  }

  return (
    <div className="py-[100px] max-md:py-[50px] flex justify-center items-center w-full">
      <div className="w-[50%] max-md:w-full md:max-lg:w-full  flex justify-between items-center gap-[20px]">
        <SwitchBtn onClick={toReview1} img="/icons/LeftArrow.svg" />

        <div className=" w-full h-full"> {review} </div>
        <SwitchBtn onClick={toReview2} img="/icons/RightArrow.svg" />
      </div>
    </div>
  );
}
