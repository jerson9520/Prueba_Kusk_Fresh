// src/pages/Home.js
import { useEffect, useState } from 'react';
import { fetchCategories, fetchRecipes, fetchRecipesByCategory } from '../utils'; // Importar funciones de utilidades

import {Search} from '../components/shared/Search';
import { RecipeCard } from '../components/shared/RecipeCard';
import { Header } from '../components/shared/Header';
import Banner from '../components/shared/Banner';


export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoriesData();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes({ query });
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = async (category) => {
    setLoading(true);
    try {
      const data = await fetchRecipesByCategory(category);
      setRecipes(data);
      setQuery('');
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Header />
      <Banner />
      {/* Search and Categories section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8 px-4">
        {/* Search component */}
        <Search
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          placeholder="Search by name..."
        />

        {/* Categories section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {categories.map((category) => (
            <button
              key={category.strCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
              className={`bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800 hover:bg-gray-300 ${
                query === category.strCategory ? 'bg-primary text-white' : ''
              }`}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        {loading ? (
          <p>Loading...</p> // Cambia "loading" a "Loading..." para que coincida con el componente de Loading
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p className="text-center w-full items-center">No recipes found.</p>
        )}
      </div>
    </div>
  );
};