import React from 'react';

const Card = (props)=>
{
    {/* if we use: " const {name, email, id} = props; " then we don't need to write props.__ for every props. */}
    return (
        <div className='tc bg-light-green dib  br3 pa3 ma2 grow bw2 shadow-5 '>
            <img  alt='robot' src={`https://robohash.org/${props.id}?size=200x200`}/>
            <div>
                <h2>{props.name}</h2>       {/* props are used inside the curly bracets */}
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card; 
