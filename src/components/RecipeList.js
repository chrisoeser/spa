import React from 'react';
import RecipeCard from './RecipeCard';
import recipes from '@/data/recipes';

const RecipeList = () => {
    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;