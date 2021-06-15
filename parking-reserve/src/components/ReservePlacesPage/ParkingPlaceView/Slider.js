import React from 'react'
import space_photo1 from '../../../resourse/images/space_photo1.png'
import space_photo2 from '../../../resourse/images/space_photo2.png'
import space_photo3 from '../../../resourse/images/space_photo3.png'
import space_photo4 from '../../../resourse/images/space_photo4.png'

const Slider = ({ photos }) => {
    return (
        <div className='space-photo'>
            <img src={space_photo1} />
            <img src={space_photo2} />
            <img src={space_photo3} />
            <img src={space_photo4} />
        </div>
    )
}

export default Slider