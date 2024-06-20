import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { Search } from "./Search";
import { BiSearchAlt2 } from "react-icons/bi";
import { RecipeCard } from "./RecipeCard";
import { fetchRecipes } from "../../utils";

export const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('cake');
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const data = await fetchRecipes({ query, limit });
      console.log(data); // Verificar los datos recibidos
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form onSubmit={handleSearchedRecipe}>
          <Search
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2 className="text-gray-600" onClick={handleSearchedRecipe} />
            }
          />
        </form>
      </div>

      {recipes.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-0 lg:px-10 py-10">
            {recipes.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>
          <div className="flex w-full items-center justify-center py-10">
            <button
              title="Show More"
              className="bg-primary text-white px-3 py-1 rounded-full text-sm"
              onClick={showMore}
            >
              Show More
            </button>
          </div>
        </>
      ) : (
        <div className="w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};
