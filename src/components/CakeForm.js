import React, { useState } from 'react'

const CakeForm = () => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const updateCakeName = (event) => {
        setCakeName(event.target.value);
    }
    const updateIngredients = (event) => {
        setIngredients(event.target.value);
    }
    const updatePrice = (event) => {
        setPrice(event.target.value);
    }
    const updateRating = (event) => {
        setRating(event.target.value);
    }


  return (

    <div>CakeForm

    </div>
  )
}







export default CakeForm