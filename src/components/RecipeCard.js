import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
    return (
        <div className='recipe-card'>
            <Link href={`/recipes/${recipe.id}`}>
                <Image src={recipe.image} alt={recipe.title} width={200} height={150} />
                <h2>{recipe.title}</h2>
            </Link>
        </div>
    );
};

export default RecipeCard;