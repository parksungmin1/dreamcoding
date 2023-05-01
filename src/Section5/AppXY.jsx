import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    const [x, setX ] = useState(0);
    const [y, setY ] = useState(0);

    const [ position, setPosition ] = useState({ x: 0 , y:0});
    return (
        <div className='container' onPointerMove={(event)=>{
            console.log(event.clientX, event.clientY);
            setPosition({x : event.clientX, y: event.clientY });
            //만약 수평으로만 움직이게 하고 싶다면?
            //setPosition((prev) => ({x: event.clientX , y:prev.y}));
            //setPosition((prev) => ({...prev, x: event.clientX}));
        }}>
            <div className='pointer'
             style={{ transform: `translate(${position.x}px,${position.y}px)`}}/>
        </div>
    );
}

