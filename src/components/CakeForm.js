import React, { useState } from 'react'

// Deconstructing 'onNewCakeSubmission'
const CakeForm = ({ onNewCakeSubmission }) => {

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

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Form won't submit if following details are empty:
        if (!cakeName || !ingredients || !price || !rating) {
            alert('Need to provide cake detailzzz')
        }

        /*
        Steps to adding an ingredient:
            1) input new ingredient on the form by 
               separating with comma (',')
            2) iterate through the inputted ingredients 
               and render a list of ingredients with 
               no whitespace (.trim()).
        */
        const newIngredient = ingredients
            .split(',')
            .map((ingredient) => ingredient.trim());

        // The blueprint for making a new cake:
        const newCake = {
            cakeName: cakeName,
            ingredients: newIngredient,
            price: price,
            rating: rating
        }

        // This clears the state 
        setCakeName('');
        setIngredients('');
        setPrice('');
        setRating('');
        onNewCakeSubmission(newCake);
    }

    return (
        <section>
            <h2>Add a new cake:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor='cake-input'>Cake Name:</label>
                <input
                    type='text'
                    id='cake-input'
                    onInput={(event) => updateCakeName(event)}
                    value={cakeName}
                />
                <label htmlFor='ingredient-input'>Ingredients:</label>
                <input
                    type='text'
                    id='ingredient-input'
                    onInput={(event) => updateIngredients(event)}
                    value={ingredients}
                />
                <label htmlFor='price-input'>Price (£):</label>
                <input
                    type='text'
                    id='price-input'
                    onInput={(event) => updatePrice(event)}
                    value={price}
                />
                <label htmlFor='rating-input'>Rating:</label>
                <input
                    type='text'
                    id='rating-input'
                    onInput={(event) => updateRating(event)}
                    value={rating}
                />
                <input type='submit' value={"Add New Cake"} />
            </form>
        </section>
    )
}

export default CakeForm