import React from 'react';
import RecipeList from '@/components/RecipeList';

export default function HomePage() {
  return (
    <div className='home'>
      <h1>Recipe Book</h1>
      <RecipeList />
    </div>
  );
}