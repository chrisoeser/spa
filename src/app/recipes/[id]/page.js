"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import recipes from '../../../data/recipes.js';
import { FaArrowLeft } from 'react-icons/fa';

export default function RecipeDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div className='recipe-details'>
            <div className='title-bar'>
                <h1>{recipe.title}</h1>
            </div>

            <button onClick={() => router.push('/')} className='back-button'>
                <FaArrowLeft className="icon" /> Back to Recipes
            </button>

            <img src={recipe.image} alt={recipe.title}  style={{ width: '300px', height: 'auto' }}/>
            
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            
        </div>
    );
}