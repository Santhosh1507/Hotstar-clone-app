import React from 'react'
import image1 from '../../../../assets/Latestimage/image1.png'
import image2 from '../../../../assets/Latestimage/image2.png'
import image3 from '../../../../assets/Latestimage/image3.png'
import image4 from '../../../../assets/Latestimage/image4.png'
import image5 from '../../../../assets/Latestimage/image5.png'
import image6 from '../../../../assets/Latestimage/image6.png'
import image7 from '../../../../assets/Latestimage/image7.png'
import image8 from '../../../../assets/Latestimage/image8.png'
import image9 from '../../../../assets/Latestimage/image9.png'
import image10 from '../../../../assets/Latestimage/image10.png'
import image11 from '../../../../assets/Latestimage/image11.png'
import image12 from '../../../../assets/Latestimage/image12.png'
import image13 from '../../../../assets/Latestimage/image13.png'
import image14 from '../../../../assets/Latestimage/image14.png'
import image15 from '../../../../assets/Latestimage/image15.png'
import image16 from '../../../../assets/Latestimage/image16.png'
import image17 from '../../../../assets/Latestimage/image17.png'
import image18 from '../../../../assets/Latestimage/image18.png'
import image19 from '../../../../assets/Latestimage/image19.png'
import image20 from '../../../../assets/Latestimage/image20.png'
import image21 from '../../../../assets/Latestimage/image21.png'
import image22 from '../../../../assets/Latestimage/image22.png'
import image23 from '../../../../assets/Latestimage/image23.png'
import image24 from '../../../../assets/Latestimage/image24.png'
import image25 from '../../../../assets/Latestimage/image25.png'
import image26 from '../../../../assets/Latestimage/image26.png'
import image27 from '../../../../assets/Latestimage/image27.png'
import image28 from '../../../../assets/Latestimage/image28.png'
import image29 from '../../../../assets/Latestimage/image29.png'
import image30 from '../../../../assets/Latestimage/image30.png'
import image31 from '../../../../assets/Latestimage/image31.png'
import image32 from '../../../../assets/Latestimage/image32.png'
import image33 from '../../../../assets/Latestimage/image33.png'
import image34 from '../../../../assets/Latestimage/image34.png'

const Tvstarplusshows = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34];
    return (
        <div className="divelement1">
            <div className="divelement2">
                <p className="pelement ">StarPlus Shows</p>
                <button className="btnelement">View All&gt;&gt;</button>
            </div>
            <div className="divelement3">
                {images.map((image, index) => (
                    <div key={index} className=" divelement4 ">
                        <img
                            src={image}
                            className="imgelement"
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tvstarplusshows