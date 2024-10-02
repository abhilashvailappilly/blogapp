"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const whyChooseUsData = [
    {
      title: "Expert Team",
      description: "Our team consists of highly skilled professionals with years of experience in delivering top-notch solutions tailored to your needs."
    },
    {
      title: "Customer Satisfaction",
      description: "We prioritize our customers' satisfaction by delivering high-quality services and ensuring that every project exceeds expectations."
    },
    {
      title: "Innovative Solutions",
      description: "We embrace innovation and constantly adopt the latest technologies to provide cutting-edge solutions that keep you ahead of the competition."
    },
    {
      title: "Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality, ensuring you get the best value for your investment."
    },
    {
      title: "Proven Track Record",
      description: "Our successful history of delivering projects on time and within budget showcases our commitment to excellence."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to address any questions or concerns, ensuring a seamless experience."
    }
  ];

  const content = [
    {
      title: "Real-Time Collaboration",
      description:
        "Collaborate with your team seamlessly, no matter where they are. Our platform ensures that every member of your team is always in sync, with real-time updates and changes reflected instantly.",
    //   content: (
    //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
    //       Real-Time Collaboration
    //     </div>
    //   ),
    //   image: "https://www.collaborationsuperpowers.com/wp-content/uploads/2021/05/real-time-collaboration-scaled.jpeg",
    },
    {
        title: "Real-Time Collaboration",
        description:
          "Collaborate with your team seamlessly, no matter where they are. Our platform ensures that every member of your team is always in sync, with real-time updates and changes reflected instantly.",
      //   content: (
      //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //       Real-Time Collaboration
      //     </div>
      //   ),
      //   image: "https://www.collaborationsuperpowers.com/wp-content/uploads/2021/05/real-time-collaboration-scaled.jpeg",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Collaborate with your team seamlessly, no matter where they are. Our platform ensures that every member of your team is always in sync, with real-time updates and changes reflected instantly.",
      //   content: (
      //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //       Real-Time Collaboration
      //     </div>
      //   ),
      //   image: "https://www.collaborationsuperpowers.com/wp-content/uploads/2021/05/real-time-collaboration-scaled.jpeg",
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Collaborate with your team seamlessly, no matter where they are. Our platform ensures that every member of your team is always in sync, with real-time updates and changes reflected instantly.",
      //   content: (
      //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
      //       Real-Time Collaboration
      //     </div>
      //   ),
      //   image: "https://www.collaborationsuperpowers.com/wp-content/uploads/2021/05/real-time-collaboration-scaled.jpeg",
      },
    {
      title: "Enhanced Security",
      description:
        "Keep your data safe and secure with our top-tier security protocols. We prioritize your privacy and protect your work with the latest in security technology, ensuring peace of mind while you focus on what matters most.",
      },
    {
      title: "Scalability at Its Best",
      description:
        "Our platform grows with your business, ensuring that as your needs expand, we're right there with you. No need to worry about outgrowing your tools—our solutions scale effortlessly.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Scalability at Its Best
        </div>
      ),
      image: "https://static.timesofisrael.com/www/uploads/2018/09/scalability.jpg",
    },
    {
      title: "Customizable Solutions",
      description:
        "No two businesses are the same, and neither are their needs. Our platform is fully customizable, ensuring that you get the features and functionality that matter most to you and your team.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Customizable Solutions
        </div>
      ),
      image: "https://blog.mopro.com/wp-content/uploads/2021/05/customizable.jpg",
    },
  ];
  
  
const WhyChooseUs = () => {
  return (
    <div className="">
      <StickyScroll content={content} contentClassName="scrollbar-none" />
    </div>
  )
}

export default WhyChooseUs
