import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZO-AKzJv78getIMu-23H2ck9b2KMQeV84TDCQFlF8w&s" 
                    name='Bob' 
                    size={200}/>
                <p>안녕하세요</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}){
    return(
        <header style = {{backgroundColor : 'yellow'}}>
            {children}
        </header>
    );
}

function Avatar({ image, name, size }){
    return(
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{borderRadius: '50%'}}
            />
        </div>
    );
}