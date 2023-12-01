import React from 'react';
import Cake from './Cake';

const CakeList = ({ cakes }) => {

    /* 
    - stored Cake component rendering logic inside 
      of cakeComponents variable
    - Loops through the cakes array and renders 
    a new Cake component for each object
    - Adds a key via the index argument to ensure
      efficient updates of the list, if it changes
    */
    const cakeComponents = cakes.map((cake, index) => {
        return <Cake
            cake={cake}
            key={`${cake.cakeName}-${index}`}
        />
    })

    return (
        <section>
            <h2>All Cakes</h2>
            {cakeComponents}
        </section>

    )

}

export default CakeList