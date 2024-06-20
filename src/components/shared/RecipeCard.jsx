import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const RecipeCard = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { strMeal, strMealThumb, strArea, strCategory, idMeal } = recipe;

  return (
    <Link to={`/recipes/${idMeal}`} className="w-full mb-4">
      <div className="shadow-xl rounded-xl bg-cover w-full h-full max-w-[400px] max-h-[400px] bg-orange-50 lg:rounded-3xl">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="rounded-lg object-cover w-full h-[250px]" // Adjust the height to make room for text
        />

        <div className="p-3 h-[150px]">
          <p className="text-orange-500 font-thin text-sm">{strMeal}</p>

          <div className="mt-2">
            <span className="px-2 py-1 text-[12px] capitalize shadow-xl rounded-full mr-3 text-black">
              {strArea}
            </span>
            <span className="px-2 py-1 text-[12px] capitalize shadow-xl rounded-full mr-3 text-black">
              {strCategory}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

