"use-client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
const musicTestimonials = [
    {
      title: "Amazing Performance!",
      name: "John Doe",
      quote: "The live performance was absolutely electrifying! The band had the crowd on their feet from start to finish."
    },
    {
      title: "Incredible Talent",
      name: "Jane Smith",
      quote: "I was blown away by the sheer talent and energy of the musicians. Every song was performed to perfection!"
    },
    {
      title: "Unforgettable Experience",
      name: "Michael Johnson",
      quote: "This concert was one of the best experiences of my life. The atmosphere, music, and energy were beyond words."
    },
    {
      title: "Exceptional Musicianship",
      name: "Emily Davis",
      quote: "The level of musicianship was top-notch. You can tell they pour their heart and soul into every note."
    },
    {
      title: "Mind-Blowing Show",
      name: "Chris Lee",
      quote: "This band truly knows how to put on a show! Every performance was mesmerizing and left me wanting more."
    }
  ];
  
const Testimonial = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] flex justify-center flex-col'>
        <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear our harmony : Voices of success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className="w-full max-w-6xl">
      <InfiniteMovingCards items={musicTestimonials} direction='right' speed='slow'/>

            </div>
        </div>
    </div>
  )
}

export default Testimonial
