import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ history }) => {
    const markers = [
        { x: 55.796391, y: 49.108891 },
        { x: 55.79220449284136, y: 49.1220465985388 },
        { x: 55.78475924128147, y: 49.12854634973813 },
        { x: 55.783657563398236, y: 49.104410647426825 }
    ]    
    return (
        <div className='map'>
            <MapContainer center={[markers[0].x, markers[0].y]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    markers.map(({x, y}) =>
                        <Marker position={[x,y]}>
                            <Popup>
                            {x} : {y}
                            </Popup>
                        </Marker>                        
                    )
                }
            </MapContainer>
        </div>
    )
}

export default Map