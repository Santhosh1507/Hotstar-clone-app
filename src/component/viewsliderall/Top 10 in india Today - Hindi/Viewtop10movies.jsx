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

const Viewtop10movies = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
  return (
    <div className=" mx-5 md:mx-24 w-11/12 ">
            <h1 className=" pt-24 pb-10 text-white text-4xl font-bold text-center">Top 10 in India Today - Hindi</h1>
            <div className=" flex flex-wrap items-center gap-5 md:gap-8 my-3 md:justify-normal justify-center">
                {images.map((image, index) => (
                    <div key={index} className=" md:w-40 w-28 flex-shrink-0 hover:scale-110 md:hover:scale-150 duration-200">
                        <img
                            src={image}
                            className="w-28 md:w-40"
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

        </div>
  )
}

export default Viewtop10movies