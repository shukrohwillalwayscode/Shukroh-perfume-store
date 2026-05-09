import MobileNav from "./mobile-nav";

const navbar = [
  { nav: "HOME", link: "/" },
  { nav: "PRODUCTS", link: "#products" },
  { nav: "ABOUT US", link: "#message" },
  { nav: "TESTIMONIALS", link: "#testimonials" },
];

export default function Navbar() {
  return (
    <>
      <MobileNav />
      <div className="w-full fixed z-100 bg-white px-[50px] py-[10px] cursor-pointer flex justify-between items-center max-md:hidden  md:max-lg:hidden">
        <p className="font-[900] text-[18px] text-black">ASO PERFUME STORE</p>

        <div className="flex justify-between items-center gap-[20px] ">
          {navbar.map((items, i) => (
            <a
              href={items.link}
              className="font-[700] text-[14px] text-[#000000]"
              key={i}
            >
              {items.nav}{" "}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[20px]">
          <button
            onClick={() => alert("Signin Here")}
            className="rounded-[10px] p-[10px] hover:bg-black hover:border-0 hover:text-white  bg-white border border-black"
          >
            SIGN UP
          </button>
          <button
            onClick={() => alert("Login Here")}
            className="rounded-[10px]  bg-black text-white hover:bg-white hover:text-black hover:border px-[20px] py-[10px]"
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
}
