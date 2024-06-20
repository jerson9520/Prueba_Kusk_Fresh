// src/utils/index.js
export async function fetchRecipes(filter) {
  const { query } = filter;

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

export async function fetchCategories() {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.categories) {
      console.warn('No categories found.');
      return [];
    }

    return data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchRecipesByCategory(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.meals) {
      console.warn(`No recipes found for category: ${category}`);
      return [];
    }

    return data.meals;
  } catch (error) {
    console.error('Error fetching recipes by category:', error);
    return [];
  }
}
