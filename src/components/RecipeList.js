"use client";

import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import recipes from '@/data/recipes';
import { FaSearch, FaTimes } from 'react-icons/fa';

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleClearSearch = () => setSearchTerm("");

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recipe-page">
            <div className="search-container">
                <FaSearch className={`search-icon ${isFocused? 'spin' : ''}`} />
                <input
                    type="text"
                    placeholder="Search recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='search-input'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {searchTerm && (
                    <FaTimes onClick={handleClearSearch} className="clear-icon" />
                )}
            </div>

            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
