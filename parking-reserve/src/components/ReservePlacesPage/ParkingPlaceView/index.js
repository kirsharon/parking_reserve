import React from 'react'
import Slider from './Slider'
import css from './parking-place-view.css'
// Component displayed when you 
// click on a point on the map
const ParkingPlaceView = () => {
    return (
        <div className='space-info'>
            <Slider />
            <div class='space-name'>ул. Вишнеского, д. 15/3</div>
            <div class='space-cost'>100 ₽ / час</div>
            <div class='space-name-info'>Казань, Республика Татарстан, Россия</div>
            {/* Go to booking form */}
            <button>Забронировать</button>
            <div class='space-rentor'>
                <img src='images/phonepurp.svg' />
                <div class='call-rentor'>
                    Свзязаться с арендатором
				</div>
            </div>
        </div>
    )
}

export default ParkingPlaceView