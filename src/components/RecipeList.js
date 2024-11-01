"use client";

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import recipes from '@/data/recipes';

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter recipes based on the search term
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='recipe-list'>
            {/* Search Input */}
            <input
                type='text'
                placeholder='Search recipes...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px', width: '100%', marginBottom: '20px'}} 
            />
            
            {/* Display Recipes */}
            {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;