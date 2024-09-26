import React from "react";
import Title from "../components/Title";
import { assets } from "../assets1/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit
            soluta sit. Voluptate consectetur repudiandae a non neque magnam
            ratione rerum, cum praesentium inventore, nam qui minus recusandae
            adipisci sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            eveniet distinctio deleniti! Perferendis minus nulla sunt eum
            necessitatibus repellendus qui autem. Rerum, alias. Est ullam
            blanditiis ad, incidunt quas at.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            laborum quod dolore unde. Beatae autem sit illum cum, aliquam
            magnam! Laudantium autem nobis in voluptatem, ut nostrum laborum qui
            natus!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            ArsCar was born out of a passion for innovation and a desire to
            revolutionize the way people shop online.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            ArsCar was born out of a passion for innovation and a desire to
            revolutionize the way people shop online.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            ArsCar was born out of a passion for innovation and a desire to
            revolutionize the way people shop online.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
