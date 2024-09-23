import Benifites from "@/components/home/Benifites";
import BetweenCourse from "@/components/home/BetweenCourse";
import Coursecarosel from "@/components/home/Coursecarosel";
import Hero from "@/components/home/Hero";
import Practise from "@/components/home/Practise";
import Quality from "@/components/home/Quality";
import SearchBox from "@/components/home/SearchBox";
import Success from "@/components/home/Success";
import Testimonial from "@/components/home/Testimonial";
import WhyTrust from "@/components/home/WhyTrust";
import React from "react";

const Homepage = () => {
  return (
    <div className="bg-bgclr">
      <div className="bgStyle0">
        <Hero></Hero>
        <Quality></Quality>
      </div>
      <SearchBox></SearchBox>
      <Coursecarosel></Coursecarosel>
      <BetweenCourse></BetweenCourse>
      <Practise></Practise>
      <Benifites></Benifites>
      <WhyTrust></WhyTrust>
      <Success></Success>
    </div>
  );
};

export default Homepage;
