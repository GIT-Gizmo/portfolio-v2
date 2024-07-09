/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 bottom-60 min-h-96 flex justify-center">
                <Image
                    src="/footer-grid.svg"
                    alt="background grid"
                    width={1000}
                    height={1000}
                    className="opacity-50 object-center object-cover"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out today and let&apos;s discuss how I can help you achieve your goals.</p>
                <a href="mailto:davidbolu12@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-16 flex-col md:flex-row justify-between items-center gap-3 md:gap-0 md:mb-6">
                <p className="text-sm md:text-base font-light md:font-normal ">Copyright © Boluwatife 2024</p>

                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(({ id, img, name, link }) => (
                        <Link href={link} key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <Image src={img} alt={name} width={20} height={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer