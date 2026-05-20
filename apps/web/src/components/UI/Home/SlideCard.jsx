"use client"

import { motion } from "framer-motion"
import AutoScroll from "embla-carousel-auto-scroll"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Slide } from "@/components/Common"
import sliderData from "@/data/slider-projects.json"

export default function ProjectCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        plugins={[
          AutoScroll({
            speed: 1.2,
            stopOnInteraction: false,
            stopOnMouseEnter: true, // ✅ pause when hovering
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {sliderData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Slide
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  tags={item.tags}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}