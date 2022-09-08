import React from "react";
import AppleProduct from "../Images/apple_mac.svg"
// import AppleView1 from "../Images/Apple-mac-view (1).jpg"
// import AppleView2 from "../Images/Apple-mac-view (2).jpg"
// import AppleView3 from "../Images/Apple-mac-view (3).jpg"
// import AppleView4 from "../Images/Apple-mac-view (4).jpg"
import Container from "../Components/Container";



const ProductView = () => {
  return (
    <Container>
      <div>


        <div className="md:flex mt-10 border border-black   justify-around ">
          <div className=" h-[250px] overflow-hidden w-full md:w-[500px] md:h-[500px]    flex  justify-between">
            <img
              src={AppleProduct}
              className=" hover:scale-110 w-[300px] m-auto ease-in duration-500   md:w-[500px]"
              alt="product_image"
            />
            {/* <div className="w-[287px] h-border h-[600px]  border-black" >
              <img className=" h-[130px] mt-2   " src={AppleView1} alt="" />
              <img className=" h-[130px] mt-5   " src={AppleView2} alt="" />
              <img className=" h-[130px] mt-5   " src={AppleView3} alt="" />
              <img className=" h-[130px] mt-5   " src={AppleView4} alt="" />
            </div> */}
          </div>
          <div className="     md:flex md:flex-col md:items-start  md:justify-items-end mt-10 mobile:items-center">
            <h1 className="title md:text-[40px] font-extrabold text-[30px]">
              Gray Apple Mac
            </h1>
            <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
              Apple M1 chip with 8‑core CPU, 7‑core GPU, 16‑core Neural Engine
            </p>
            <p> 8GB unified memory </p>
            <p> 256GB SSD storage </p>
            <p> 33.74 cm (13.3-inch) Retina display with True Tone </p>
            <p> Two Thunderbolt / USB 4 ports </p>
            <p> 30W USB-C Power Adapter </p>
            <p> Backlit Magic Keyboard with Touch ID - US English </p>
            <div className="flex flex-col place-self-start">
              <p className="mt-4 md:text-3xl text-[20px]">
                Price: <b>$200</b>
              </p>
              <button  className="text-white md:flex bg-[#8a4af3] mb-3 w-[150px] m-auto  rounded-md shadow-md mt-[30px] p-3">
              Add to Cart

              </button>
            </div>


          </div>
        </div>

      </div>
    </Container>
  );
};

export default ProductView;
