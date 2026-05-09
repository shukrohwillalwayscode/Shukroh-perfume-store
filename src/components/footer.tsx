const Footer = () => {
  return (
    <div id="footer" className="  grid grid-cols-2 md:max-lg:grid-cols-2 sm:grid-cols-4 gap-10 max-md:gap-[10px]   py-[50px]  mt-12 border- bg-black text-white">
      {/* PRODUCT SECTION */}
      <section className="text-center  leading-12">
        <div>
          <h3 className="font-[900] text-[20px] mb-3">PRODUCT</h3>

          <p>Body Spray</p>
          <p>Deoderant</p>
          <p>Perfume Oil</p>
          <p>Body Mist</p>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className="text-center  leading-12">
        <div>
          <h3 className="font-[900] text-[20px] mb-3">ABOUT</h3>
          <p>FAQs</p>
          <p>Our Story</p>
          <p>Order History</p>
          <p>Promo Info</p>
        </div>
      </section>

      {/* SOCIALS SECTION */}
      <section className="text-center  leading-12">
        <div>
          <h3 className="font-[900] text-[20px] mb-3">SOCIALS</h3>
          <p>Facebook</p>
          <p>IG</p>
          <p>Twitter</p>
          <p>Tiktok</p>
        </div>
      </section>

      {/* CONTACT SECTION*/}
      <section className="text-center  leading-12">
        <div className="flex flex-col items-center">
          <h3 className="font-[900] text-[20px] mb-3">Contacts</h3>
          <a className="hover:text-blue-600 flex  ">
            <span>📧: </span> perfumes@gmail.com
          </a>
          <a className="hover:text-blue-600">☎️: 2349023232323</a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
