import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from 'prop-types'
const Product = ({ recipe, handleCook }) => {
    const {recipe_image,
        recipe_name,
        description,
        ingredients,
        preparing_time,
        calories,} = recipe;
    return (
        <div>
            <div className="card card-compact p-5 my-5 md:w-[90%] w-full bg-base-100 shadow-xl">
            <figure>
                <img className="rounded-lg" src={recipe_image} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{recipe_name}</h2>
                <p>{description}</p>
                <hr />
                <p className="font-bold text-lg">Ingredients: {ingredients.length}</p>
                <ul className="list-disc ms-2">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
                <hr />
                <div className="flex items-center">
                <div className="flex items-center justify-center">
                <CiStopwatch /><p>{preparing_time} minutes</p>
                </div>
                <div className="ms-20 flex items-center justify-center">
                <FaFire /><p>{calories} calories</p>
                </div>
                </div>
                <div className="card-actions justify-start">
                <button onClick={() => handleCook(recipe)} className="btn rounded-3xl bg-[#0BE58A] text-[#150B2B]">Want to Cook</button>
                </div>
            </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func
}
export default Product;