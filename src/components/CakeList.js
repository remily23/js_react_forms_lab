import React from 'react';
import Cake from './Cake';

const CakeList = ({ cakes }) => {

    const cakeComponents = cakes.map(cake => {
        return <Cake cake={cake} key={cake.name} />
    })

    return (
        <section>
            <h2>All Cakes</h2>
            {cakeComponents}
        </section>

    )

}

export default CakeList