import CustomBg from "@/Components/CustomBg/CustomBg";
//import Facts from "../../_components/Facts/Facts";
import React from "react";
import Wrapper from "@/Components/Wrapper/Wrapper";
import Content from "@/Components/Content/Content";
import Pets from "@/Components/Pets/Pets";
export const metadata = {
  title: "Home",
};
const Homepage = () => {
  return (
    <>
      <CustomBg
        ImgUrl="/1.jpg"
        h6Text="Easy Pets!"
        h5Text="Your Best Friend is Just a Click Away!"
        ButtonLinkText="Find your Pet"
        ButtonLinkTo="/pets"
      />
      {/*For Facts*/}
      {/*<Facts
        pText="world, over 200 million stray dosgs are esstimated to be in need of
        homes. By adopting a dog, you can help reduce this number and provide a
        loving forver gome to a furry friend."
      />*/}
      <Wrapper>
        <Content
          h6Text="Adopt Pet Now"
          pText="Meet our adorable pets. they are waiting for you"
        />
        <Pets />
      </Wrapper>
    </>
  );
};
export default Homepage;
