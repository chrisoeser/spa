"use client";

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import recipes from '@/data/recipes';
import { FaSearch, FaTimes, FaSun, FaMoon, FaArrowUp } from 'react-icons/fa';
import Switch from 'react-switch';

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        // Retrieve the dark mode state from local storage, default to false
        if (typeof window !== 'undefined') {
            const savedDarkMode = localStorage.getItem('darkMode');
            return savedDarkMode === 'true';
        }
        return false;
    });

    const [showBackToTop, setShowBackToTop] = useState(false);

    // Update body class and save dark mode state to local storage
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem('darkMode', darkMode);
        }
    }, [darkMode]);


    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll Y:', window.scrollY); // Log scroll position
            setShowBackToTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const handleClearSearch = () => setSearchTerm("");
    const handleToggle = (checked) => setDarkMode(checked);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="recipe-page">
            <div className="search-container">
                <FaSearch className={`search-icon ${isFocused ? 'spin' : ''}`} />
                <input
                    type="text"
                    placeholder="Search recipes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                {searchTerm && (
                    <FaTimes onClick={handleClearSearch} className="clear-icon" />
                )}
                {!searchTerm && (
                    <Switch
                        checked={darkMode}
                        onChange={handleToggle}
                        onColor='#1c1c1c'
                        offColor='#f0f0f0'
                        className="dark-mode-toggle"
                        uncheckedIcon={<div className="icon-container"><FaSun className="toggle-icon sun" /></div>}
                        checkedIcon={<div className="icon-container"><FaMoon className="toggle-icon moon" /></div>}
                        handleStyle={{
                            backgroundColor: darkMode ? '#333' : '#fff',
                            border: darkMode ? '2px solid #a0c4ff' : '2px solid #f8d32d',
                            boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
                            transition: 'background-color 0.3s ease, border 0.3s ease',
                        }}
                    />
                )}
            </div>

            <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            {showBackToTop && (
                <button className={`backToTopBtn ${showBackToTop ? 'show' : ''}`} onClick={scrollToTop}>
                    <FaArrowUp className='icon' />
                </button>
            )}

        </div>
    );
};

export default RecipeList;
