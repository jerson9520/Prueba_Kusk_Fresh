export async function fetchRecipes(filter) {
    const { query, limit } = filter;
  
    // Formar la URL para buscar recetas por nombre
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (!data.meals) {
        // Manejar el caso en que no hay recetas encontradas
        console.warn('No recipes found for the given query.');
        return [];
      }
  
      // Limitar el número de resultados si se especifica el límite
      if (limit && data.meals.length > limit) {
        return data.meals.slice(0, limit);
      }
  
      return data.meals;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  }
  
  export async function fetchRecipeById(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (!data.meals) {
        console.warn('No recipe found for the given ID.');
        return null;
      }
  
      // Transformar los datos para que sean más fáciles de usar
      const meal = data.meals[0];
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
      }
  
      return {
        ...meal,
        strIngredients: ingredients,
      };
    } catch (error) {
      console.error('Error fetching recipe:', error);
      return null;
    }
  }
  