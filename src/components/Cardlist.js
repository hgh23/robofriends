import React from 'react';
import Card from '../components/Card';

const Cardlist = ({ robots }) => {
 return (
  <div style={{fontFamily: 'Star Cine', fontWeight: 50, color: 'aliceblue'}}>
    {          
     robots.map((user, i) => {
       return (
        <Card 
         key={i} 
         id= {robots[i].id} 
         name={robots[i].name} 
         email={robots[i].email}
        />
       );
     })
    }
  </div>
 );
}

export default Cardlist;