"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Hospital Management System",
    description: `HMS Manager is a comprehensive hospital management system built with ASP.NET, designed 
            to streamline patient records, appointment scheduling, and hospital resource management.
            It provides an intuitive interface for managing doctors, patients, and medical records 
            efficiently. With a secure database integration, the system ensures reliable and seamless 
            hospital operations.`,
    images: [
      "/assets/projects-screenshots/Hospital-management-system/1.png",
      "/assets/projects-screenshots/Hospital-management-system/2.png",
      "/assets/projects-screenshots/Hospital-management-system/3.png",
      "/assets/projects-screenshots/Hospital-management-system/4.png"
    ],
  },
  {
    id: 2,
    name: "Bike Rental System",
    description: `Bike Rental Manager is a comprehensive bike rental system built with ASP.NET, designed 
          to streamline bike reservations, user management, and rental tracking. It provides an 
          intuitive interface for managing customers, rental transactions, and bike availability 
          efficiently. With secure database integration, the system ensures reliable and seamless 
          rental operations.`,
    images: [
      "/assets/projects-screenshots/Bike-Rental-System/1.png",
      "/assets/projects-screenshots/Bike-Rental-System/2.png",
      "/assets/projects-screenshots/Bike-Rental-System/3.png",
      "/assets/projects-screenshots/Bike-Rental-System/4.png",
      "/assets/projects-screenshots/Bike-Rental-System/5.png"
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `A simple 3D portfolio website where a 3D character follows the users mouse movements 
          by turning its head. Built with Three.js for rendering and GSAP for smooth animations, 
          ensuring an interactive and engaging experience.`,
    images: [
      "/assets/projects-screenshots/portfolio/1.png",
      "/assets/projects-screenshots/portfolio/2.png",
      "/assets/projects-screenshots/portfolio/3.png",
      "/assets/projects-screenshots/portfolio/4.png",
      "/assets/projects-screenshots/portfolio/5.png",
      "/assets/projects-screenshots/portfolio/6.png"
    ],
  },
  {
    id: 4,
    name: "Food App",
    description: `Food App is a dynamic food delivery application built with Kotlin, designed to 
          simplify ordering, tracking, and restaurant management. It provides an intuitive 
          interface for customers to browse menus, place orders, and make secure payments. 
          With real-time order tracking and seamless integration with delivery partners, 
          the system ensures efficient and hassle-free food delivery.!`,
    images: [
      "/assets/projects-screenshots/Food-App/1.png",
      "/assets/projects-screenshots/Food-App/2.png",
      "/assets/projects-screenshots/Food-App/3.png",
      "/assets/projects-screenshots/Food-App/4.png",
      "/assets/projects-screenshots/Food-App/5.png",
      "/assets/projects-screenshots/Food-App/6.png",
      "/assets/projects-screenshots/Food-App/7.png",
      "/assets/projects-screenshots/Food-App/8.png"
    ],
  },
  {
    id: 5,
    name: "Robotic Arm",
    description: `Robotic Arm Controller is an advanced system built with Arduino Uno, designed for 
          precise and efficient robotic arm control. It enables smooth movement and automation
          using servo motors, allowing users to perform tasks like object manipulation and
          assembly. With an intuitive interface and customizable controls, the system
          ensures seamless operation and flexibility for various applications.`,
    images: [
      "/assets/projects-screenshots/robotic-arm/1.jpg",
      "/assets/projects-screenshots/robotic-arm/2.png",
      "/assets/projects-screenshots/robotic-arm/3.png",
    ],
  },
  {
    id: 6,
    name: "Ultrasonic radar",
    description: `Ultrasonic Radar System is a real-time object detection and distance measurement 
          system built using an Arduino Uno and an ultrasonic sensor. It scans the 
          surroundings by rotating a servo motor and detects obstacles within a defined 
          range. The system displays a radar-like interface on a connected screen, providing 
          real-time distance and position data. With efficient coding and hardware integration, 
          it ensures accurate and reliable object detection.`,
    images: [
      "/assets/projects-screenshots/Ultrasonic-radar/1.png",
      "/assets/projects-screenshots/Ultrasonic-radar/2.png",
      "/assets/projects-screenshots/Ultrasonic-radar/3.png"
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
