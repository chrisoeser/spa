"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import recipes from '../../../data/recipes.js';

export default function RecipeDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) return <p>Recipe not found!</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title}  style={{ width: '300px', height: 'auto' }}/>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            {/* Button to navigate back to the recipes list */}
            <button onClick={() => router.push('/')} style={{ marginTop: '20px' }}>
                Back to Recipes
            </button>
        </div>
    );
}