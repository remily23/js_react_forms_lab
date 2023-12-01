// Deconstructed cake Object in cakes Array
const Cake = ({ cake }) => {

  /*
  - iterate over ingredients array
    and render each ingredient as an li
  - stored logic inside of allIngredients 
    variable for readability
  - added a key to each li element using index
    argument to prevent errors when updating
    the list    
  */
  const allIngredients = cake.ingredients.map(
    (ingredient, index) => {
      return <li
        ingredient={ingredient}
        key={`${ingredient}-${index}`}>
        {ingredient}
      </li>
    }
  )

  return (
    <div className="cake-container">
      {/* inserts the cakeName for each cake Object */}
      <h2>{cake.cakeName}</h2>
      <ul>
        {allIngredients}
      </ul>
      <p>Price: £{cake.price}</p>
      <p>Rating: {cake.rating}</p>
    </div>
  )
}

export default Cake;