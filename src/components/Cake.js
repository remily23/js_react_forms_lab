// Deconstructed cake Object in cakes Array
const Cake = ({ cake }) => {

  return (
    <div className="cake-container">

      {/* inserts the cakeName for each cake Object */}
      <h2>{cake.cakeName}</h2>

      <ul>
        {/* - Map through the ingredients Array
            - Display every ingredient Object as an <li> 
              using the key property as a unique ID
            */}
        {cake.ingredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>

      <p>Price: ${cake.price}</p>

      <p>Rating: {cake.rating}</p>
    </div>
  )
}

export default Cake;