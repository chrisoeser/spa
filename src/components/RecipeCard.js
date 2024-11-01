import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipes/${recipe.id}`} className="recipe-card">
            <div>
                <Image src={recipe.image} alt={recipe.title} width={200} height={150} />
                <h2>{recipe.title}</h2>
            </div>
        </Link>
    );
};

export default RecipeCard;
