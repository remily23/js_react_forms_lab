import { useState } from "react";
import CakeForm from "../components/CakeForm";

/* Updated the file structure by creating
 a containers and components folder */
import Cake from "../components/Cake.js";



const CakeContainer = () => {

	/* 
	Stores all of the Cake Objects and it's properties 
	inside of "cakes" Array.
	*/

	const cakes =
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
	// Loops through the cakes array and displays a new Cake component for each object
	return (
		<div>
			<h1>Cakes:</h1>
			{cakes.map((cake) =>
				<Cake
					key={cake.cakeName}
					cake={cake} />)
			}
		</div>
	);
}

export default CakeContainer;