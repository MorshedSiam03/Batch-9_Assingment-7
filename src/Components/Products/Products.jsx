import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from 'prop-types'

const Products = ({handleCook}) => {

    const [recipes, setRecipe] = useState([]);

    useEffect(() =>{

        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))


    },[])

    return (
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 ">
            {
                recipes.map(recipe => <Product
                key={recipe.recipe_id}
                recipe={recipe}
                handleCook={handleCook}
                ></Product>)
            }
                
        </div>
          
    );
};

Products.propTypes ={
    handleCook: PropTypes.func
}


export default Products;