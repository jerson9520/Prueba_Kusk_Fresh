
import { Loading } from "./Loading"
import { useState } from "react"
import { Search } from "./Search"
import { BiSearchAlt2 } from "react-icons/bi"
import { RecipeCard } from "./RecipeCard"

export const Recipes = () => { 
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Vegan') 
    const [limiy, setLimit] = useState(30) 
    const [loading, setLoading] = useState(false) 

    const handleChange = (e) => {
      setQuery(e.target.value)
    }

    if(loading){
      return (
          <Loading />
      )
    }

    return (
    <div className="w-full">
        <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
              <form>
                  <Search 
                    hanleInputChange={handleChange}
                    rigthIcon={
                      <BiSearchAlt2 
                       className="text-gray-600"/>
                    }
                  />
              </form>
        </div>

        {
          recipes.length > 0 ? (
            <>
              <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
                  {
                    recipes.map((item, indexedDB) => (
                      <RecipeCard recipes={recipes} key={index} />))
                    }
              </div>
            </>
          ) : <div className="w-full items-center justify-center py-10">
              <p className="text-center">No Recipe Found</p>
          </div>
        }
    </div>
  )
}
