import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../utils';
import { Loading } from '../components/shared/Loading';
import { Header } from '../components/shared/Header'; // Importa el Header aquí

export const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!recipe) {
    return <p className="text-center">Recipe not found.</p>;
  }

  const { strMeal, strMealThumb, strArea, strCategory, strInstructions, strIngredients } = recipe;

  return (
    <>
      <Header /> {/* Agrega el Header aquí */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="w-full lg:w-1/2 lg:pr-8">
            <img
              src={strMealThumb}
              alt={strMeal}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{strMeal}</h2>
            <p className="text-sm text-gray-500 mb-2"><strong>Area:</strong> {strArea}</p>
            <p className="text-sm text-gray-500 mb-2"><strong>Category:</strong> {strCategory}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Instructions</h3>
              <p className="text-gray-700">{strInstructions}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-700">
                {strIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
