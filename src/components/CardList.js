import React from 'react';
import Card from './Card';

  /* {robots} it is a way to define props */
const CardList = ({robots}) =>        
    {   
        
        const cardComponent = robots.map((user, i)=>
        {
            return <Card key={i} id = {user.id} name={user.name} email={user.email}/>;
            //return <Card key={i} id = {robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })
        return (
            <div>
                {cardComponent}
            </div>
        );

    }

export default CardList;

