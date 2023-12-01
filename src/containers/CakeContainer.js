import { useState } from "react";
/* Updated the file structure by creating
 a containers and components folder */
import CakeList from "../components/CakeList.js";
import CakeForm from "../components/CakeForm";


const CakeContainer = () => {

	/* 
	Stores all of the Cake Objects and it's properties 
	inside of "cakes" Array.
	*/

	const [cakes, setCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				ingredients: [
					"eggs",
					"butter",
					"sugar",
					"self-raising flour",
					"baking powder",
					"milk"
				],
				price: 5,
				rating: 5
			},
			{
				cakeName: "Carrot Cake",
				ingredients: [
					"eggs",
					"butter",
					"sugar",
					"self-raising flour",
					"baking powder",
					"milk"
				],
				price: 5,
				rating: 5
			},
			{
				cakeName: "Tea Loaf",
				ingredients: [
					"eggs",
					"oil",
					"dried fruit",
					"sugar",
					"self-raising flour",
					"strong tea",
				],
				price: 2,
				rating: 3
			}
		]
	)

	// Takes a newCake an an argument
	const handleNewCakeSubmission = (newCake) => {
		/*
		- spread operator to create a new 
		  array of cake objects and store
		  inside of updatedCakes variable
		- newCake object is pushed inside
		  of updatedCakes Array
		- set the cakes Array to updatedCakes
		  which includes newCake
		*/
		const updatedCakes = [...cakes];
		updatedCakes.push(newCake);
		setCakes(updatedCakes)
	}

	return (
		<>
			<h1>The bakeryyyy!</h1>
			{/* 
			The prop you pass here HAS
			to match what you passed in the
			component's file!
			 */}
			<CakeForm onNewCakeSubmission={
				handleNewCakeSubmission
			} />
			<CakeList cakes={cakes} />
		</>
	);
}

export default CakeContainer;