"use client"
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { PiArrowUpRightThin } from "react-icons/pi";
import ComparingItem from "@/components/ComparingItem";


import SonyHero from "@/public/74739_original_local_1200x1050_converted.webp"
import sony4 from "@/public/sony4.webp"
import base from "@/public/base.jpg"
import base700 from "@/public/noise_cancelling_headphones_700_blk_EC_hero.webp"
import sennheiser from "@/public/sennheiser.jpg"
import apple from "@/public/apple.jpg"
import {motion} from "framer-motion"

export default function Home() {
  return (
    <div className="max-w-4xl px-4 my-8 mx-auto">
      <div className="md:my-14 my-6">
          <div className="flex flex-col">
            <h1 className="text-4xl h-8 font-bold text-blue-500">Korazon</h1>
            <h1 className="text-xl font-bold text-blue-500">Clicks</h1>
          </div>
      </div>
<article className=" space-y-8 mt-16 md:mt-24 text-gray-800">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-800">Exploring the World of Noise-Canceling Headphones A Comprehensive Comparison</h1>
        <div className="bg-slate-100 p-4 rounded-3xl border overflow-hidden">
          <motion.div className="" initial={{opacity:0,y:50}} animate={{opacity:1,y:0}}>
            <Image src={SonyHero} alt="Noise-Canceling Headphones" className="w-full h-[400px]  object-contain  " width={400} height={400} />
          </motion.div>
        </div>
        <section className="mt-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-gray-600 border-l-2 border-blue-500 pl-4 my-3 text-sm md:text-md leading-6">In the realm of audio technology, noise-canceling headphones have become essential for those seeking an immersive and undisturbed listening experience. This article delves into the world of noise cancellation technology and compares some of the leading models from different brands, including Sony WH-1000XM3 and WH-1000XM4, Bose QuietComfort 35 II, Bose Noise Cancelling Headphones 700, Sennheiser Momentum Wireless 3, and Apple AirPods Max.</p>
            <button className="bg-blue-500 w-full md:w-fit hover:bg-blue-600 duration-150 mt-4 flex justify-center  gap-4 items-center text-white md:text-xl text-lg px-8  py-3 rounded border ">
              <div className="flex flex-col items-start ">
                <span>Get Sony WH-1000XM4</span>
                <span className="text-sm text-white/50">Amazon Link</span>
              </div>
              <PiArrowUpRightThin size={35}/>
            </button>
        </section>

        <section>
            <h3 className="text-2xl font-bold ">Understanding Noise-Canceling Technology</h3>
            <p className="text-gray-600 text-sm md:text-md leading-6">Noise-canceling technology is designed to reduce or eliminate unwanted ambient sounds, allowing users to enjoy their music or calls without interference. There are two primary types:</p>
            <ol className="list-decimal ml-4 text-gray-600  text-sm md:text-md leading-6">
                <li><em>Passive Noise Cancellation:</em> Achieved through the physical design of the headphones, which acts as a barrier to block out external noise.</li>
                <li><em>Active Noise Cancellation (ANC):</em> Uses advanced technology, including microphones and electronic processing, to analyze and counteract external sounds in real-time.</li>
            </ol>
        </section>

        <section>
            <h2 className="text-2xl font-bold mb-12">Comparing Top Noise-Canceling Headphones</h2>





          <ComparingItem name="Sony WH-1000XM3" image={SonyHero} price="[Insert Price]" keyFeatures={[
              "Industry-leading noise cancellation.",
              "Exceptional sound quality with a balanced audio profile.",
              "Intuitive touch controls for playback, calls, and volume.",
              "Comfortable design for prolonged use.",
              "Up to 30 hours of battery life.",
              "Quick Charge feature: 5 hours of playback with a 10-minute charge.",
          ]}
          />
          <ComparingItem name="Sony WH-1000XM4" image={sony4} price="[Insert Price]" keyFeatures={[
              "Industry-leading noise cancellation.",
              "Exceptional sound quality with a balanced audio profile.",
              "Intuitive touch controls for playback, calls, and volume.",
              "Comfortable design for prolonged use.",
              "Up to 30 hours of battery life.",
              "Quick Charge feature: 5 hours of playback with a 10-minute charge.",
          ]}/>

          <ComparingItem name="Bose QuietComfort 35 II" image={base} price="[Insert Price]" keyFeatures={[
              "Industry-leading noise cancellation.",
              "Exceptional sound quality with a balanced audio profile.",
              "Intuitive touch controls for playback, calls, and volume.",
              "Comfortable design for prolonged use.",
              "Up to 30 hours of battery life.",
              "Quick Charge feature: 5 hours of playback with a 10-minute charge.",
          ]}
          />

          <ComparingItem name="Bose Noise Cancelling Headphones 700" image={base700} price="[Insert Price]" keyFeatures={[
            "Sleek design with improved noise cancellation.",
            "Touch controls and customizable EQ through the Bose Music app.",
          ]}/>

          <ComparingItem name="Sennheiser Momentum Wireless 3" image={sennheiser} price="[Insert Price]" keyFeatures={[
            "Premium build with genuine leather ear cups.",
            "Excellent sound quality and strong noise cancellation.",
            "Comfortable for extended use.",
          ]}/>

          <ComparingItem name="Apple AirPods Max" image={apple} price="[Insert Price]" keyFeatures={[
            "Over-ear design with premium build.",
            "Active Noise Cancellation for an immersive audio experience.",
            "Seamless integration with Apple devices.",
          ]}/>

            {/* <!-- Repeat the above section structure for other headphone models --> */}

        </section>


        <section>
            <h2 className="text-2xl font-bold">Price and Feature Comparison</h2>
            <p className=" text-sm md:text-md leading-6">[Create a detailed comparison table with prices, key features, and additional notes for each model.]</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className=" text-sm md:text-md leading-6">Selecting the ideal noise-canceling headphones depends on individual preferences, budget, and specific needs. Each model discussed offers a unique set of features, ensuring a tailored experience for users. Always check for the latest reviews and updates, as the technology landscape is constantly evolving.</p>
        </section>
        <section>
            <h2 className="text-2xl font-bold">Links in this blog</h2>
            <h2 className="text-black/40 font-bold">All this links are amazon links</h2>
            <ul className="list-disc pl-8 my-4 bg-slate-50 rounded-xl border p-4  text-sm md:text-md leading-6">
              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/3wcGYiU">Sony WH-1000XM4<FiArrowUpRight size={24} /></a></li>
              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/491gHT0">Sony WH-1000XM3<FiArrowUpRight size={24} /></a></li>
              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/3SOVCWh">Bose QuietComfort 35 II<FiArrowUpRight size={24} /></a></li>

              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/3OCJlSh">Bose Noise Cancelling Headphones 700<FiArrowUpRight size={24} /></a></li>
              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/3upZh3r">Sennheiser Momentum Wireless 3<FiArrowUpRight size={24} /></a></li>
              <li><a className="text-blue-500 font-medium text-sm md:text-lg flex gap-2 hover:gap-4 duration-150 hover:bg-slate-100 px-2 rounded-xl py-2 items-center" href="https://amzn.to/3SNTrCq">Apple AirPods Max<FiArrowUpRight size={24} /></a></li>
            </ul>
        </section>

    </article>
    </div>
  );
}
