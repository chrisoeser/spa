import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipes/${recipe.id}`} className="recipe-card">
            <div>
                <Image src={recipe.image} alt={recipe.title} width={200} height={150} />
                <p>{recipe.title}</p>
            </div>
        </Link>
    );
};

export default RecipeCard;
