import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import { FiArrowUpRight } from 'react-icons/fi'

type Props = {
  name: string;
  image: StaticImageData;
  price: string;
  keyFeatures: string[];
}

function ComparingItem({name,image,price,keyFeatures}: Props) {
  return (
            <section className='mt-8  p-2 border-b '>
              <Link href={""} className="w-fit ">
                <h3 className="text-xl flex flex-col gap-0 my-2 font-medium hover:bg-blue-100 border  hover:border-blue-300 duration-150 bg-slate-50 w-fit p-2 rounded-md px-4">
                  <span className="flex gap-2  text-blue-500">
                      <span className='flex-1'>{name}</span> <FiArrowUpRight size={26} />
                  </span>
                  <span className="text-xs text-black/50">Amazon link</span>
                </h3>
              </Link>
            <div className="flex flex-col md:flex-row overflow-hidden gap-6 mt-4">
              <motion.div initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0}}>
                <Image src={image} alt="Noise-Canceling Headphones" className=" p-4 w-full md:w-[200px] h-[200px] object-contain " width={400} height={400}></Image>
              </motion.div >
                  <motion.ul initial={{opacity:0,x:0}} whileInView={{opacity:1,x:0}} className="list-decimal  ml-4">
                      <li><strong>Price :</strong> {price} $</li>
                      <li><strong>Key Features:</strong>
                          <ul className="list-disc ml-4">
                            {
                              keyFeatures.map((keyFeature,index) => {
                                return <li key={index}>{keyFeature}</li>
                              })
                            }
                          </ul>
                      </li>
                  </motion.ul>
            </div>

            </section>
  )
}

export default ComparingItem