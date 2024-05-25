import React from "react";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image from "next/image";

const Logos = () => {
   return (
      <>
         <div className="scroll ImageBox bg-mainBlack md:py-[20px] py-0">
            <div>
               <Image src={Image1} alt="image1" className="logo-Image" />
               <Image src={Image2} alt="image1" className="logo-Image" />
               <Image src={Image3} alt="image1" className="logo-Image" />
               <Image src={Image4} alt="image1" className="logo-Image" />
               <Image src={Image1} alt="image1" className="logo-Image" />
               <Image src={Image2} alt="image1" className="logo-Image" />
               <Image src={Image3} alt="image1" className="logo-Image" />
               <Image src={Image4} alt="image1" className="logo-Image" />
               <Image src={Image1} alt="image1" className="logo-Image" />
               <Image src={Image2} alt="image1" className="logo-Image" />
            </div>
            <div>
               <Image src={Image3} alt="image1" className="logo-Image" />
               <Image src={Image4} alt="image1" className="logo-Image" />
               <Image src={Image1} alt="image1" className="logo-Image" />
               <Image src={Image2} alt="image1" className="logo-Image" />
               <Image src={Image3} alt="image1" className="logo-Image" />
               <Image src={Image4} alt="image1" className="logo-Image" />
               <Image src={Image1} alt="image1" className="logo-Image" />
               <Image src={Image2} alt="image1" className="logo-Image" />
               <Image src={Image3} alt="image1" className="logo-Image" />
               <Image src={Image4} alt="image1" className="logo-Image" />
            </div>
         </div>
      </>
   );
};

export default Logos;
