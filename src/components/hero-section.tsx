import heroImage from "../assets/heroPerfumeImg.jpg";
export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-black py-[100px] max-md:pt-[150px] ">
      <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-[60px] max-md:gap-[40px] md:mt-[50px]">
        <section className=" flex justify-center items-center">
          <div className=" flex flex-col items-center gap-[50px]">
            <h1 className="text-white font-bold text-5xl max-md:text-[50px]  text-center p-3.5">
              Your Home for Scents that is Heavenly
            </h1>
            <p className="text-white text-2xl text-center ">
              Timeless scents,beautifully cratfted for you.
            </p>

            <button className="rounded-[10px] font-[700] text-[20px] w-[50%] bg-white p-[20px]">
              SHOP NOW
            </button>
          </div>
        </section>
        <section className=" flex justify-center items-start px-[50px] max-md:px-[10px]">
          <div className="w-full h-[600px] relative rounded-[20px] overflow-hidden">
            <img
              src={heroImage}
              alt="Pictures of Perfumes"
              className="w-full h-full object-cover "
            />
          </div>
        </section>
      </div>
    </div>
  );
}
