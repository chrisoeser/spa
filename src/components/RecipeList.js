"use client";

import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import recipes from '@/data/recipes';
import { FaSearch, FaTimes, FaSun, FaMoon, FaArrowUp } from 'react-icons/fa';
import Switch from 'react-switch';

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // Default to false
    const [isMounted, setIsMounted] = useState(false); // Track component mount state
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Effect to handle dark mode from localStorage after component mounts
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
            setDarkMode(savedDarkMode === 'true');
        }
        setIsMounted(true);
    }, []);

    // Update body class and save dark mode state
    useEffect(() => {
        if (isMounted) { // Runs after the component has mounted
            document.body.classList.toggle('dark-mode', darkMode);
            localStorage.setItem('darkMode', darkMode);
        }
    }, [darkMode, isMounted]);

    useEffect(() => {
        const handleScroll = () => {
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
