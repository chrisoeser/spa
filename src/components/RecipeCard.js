import React from 'react';
import Image from 'next/image';

const RecipeCard = ({ recipe }) => {
    return (
        <div className='recipe-card'>
            <Image src={recipe.image} alt={recipe.title} width={200} height={150} />
            <h2>{recipe.title}</h2>
        </div>
    );
};

export default RecipeCard;