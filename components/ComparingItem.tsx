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
            <section className='my-8  p-2 border-b '>
            <div className="flex flex-col-reverse md:flex-row overflow-hidden gap-6 mt-4 items-center">
                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='text-2xl my-4 font-medium'>{name}</h2>
                  <motion.ul initial={{opacity:0,x:0}} whileInView={{opacity:1,x:0}} className="list-decimal  text-sm md:text-md leading-6 flex-1 ml-4">
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
                  <Link href={""} className="w-full md:w-fit mt-4">
                    <h3 className="text-xl flex w-full md:w-fit flex-col gap-0 my-2 font-medium hover:bg-blue-100 border  hover:border-blue-300 duration-150 bg-slate-50 p-2 rounded-md px-4">
                      <span className="flex gap-2  text-blue-500">
                          <span className='flex-1'>{name}</span> <FiArrowUpRight size={26} />
                      </span>
                      <span className="text-xs text-black/50">Amazon link</span>
                    </h3>
                  </Link>
              </div>
              <motion.div initial={{opacity:0,y:150}} whileInView={{opacity:1,y:0}}>
                <Image src={image} alt="Noise-Canceling Headphones" className=" p-4 w-full md:w-[400px] h-[300px] md:h-[400px] rounded-xl object-contain " width={600} height={600}></Image>
              </motion.div >
            </div>

            </section>
  )
}

export default ComparingItem