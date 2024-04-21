import React from 'react'
import image1 from '../../../../assets/Top10movies/image1.png'
import image2 from '../../../../assets/Top10movies/image2.png'
import image3 from '../../../../assets/Top10movies/image3.png'
import image4 from '../../../../assets/Top10movies/image4.png'
import image5 from '../../../../assets/Top10movies/image5.png'
import image6 from '../../../../assets/Top10movies/image6.png'
import image7 from '../../../../assets/Top10movies/image7.png'
import image8 from '../../../../assets/Top10movies/image8.png'
import image9 from '../../../../assets/Top10movies/image9.png'
import image10 from '../../../../assets/Top10movies/image10.png'
import { Link } from 'react-router-dom'

const Top10movies = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
    return (
        <div className=" mx-5 md:mx-20 mt-10">
            <div className="flex justify-between mt-14">
                <p className="font-bold text-zinc-300 text-sm sm:text-base md:text-2xl">Top 10 in India Today - Hindi</p>
                <Link to='/home/top10movies' className=" text-slate-500 hover:text-slate-300">View All&gt;&gt;</Link>
            </div>
            <div className="flex items-center gap-2 md:gap-5 my-3 overflow-x-auto no-scrollbar overflow-y-hidden">
                {images.map((image, index) => (
                    <div key={index} className=" w-20 md:w-40 flex-shrink-0 md:hover:scale-125 duration-200">
                        <img
                            src={image}
                            className="w-20 md:w-40"
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Top10movies