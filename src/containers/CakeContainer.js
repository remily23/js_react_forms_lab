import { useState } from "react";
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

	return (
		<>
			<Cake />
			<Cake />
			<Cake />
		</>
	)
}

export default CakeContainer;