import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import apiRoutes from '../constants/api-constants'
import Loader from '../components/Loader'
import apiHandler from '../utils/api-handler'
import { MessageCircle, Star } from 'lucide-react'


const RecipeDetails = () => {
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()

    // fetch data
    useEffect(() => {
        const fetchRecipeDetails = async () => {
            setLoading(true)
            const data = await apiHandler(
                `${apiRoutes.recipe}/${params?.recipeId}`,
                "GET"
            )
            // console.log(data)
            if (data) {
                setRecipeDetails(data)
            }
            setLoading(false)
        }
        fetchRecipeDetails()
    }, [])

    // if loading show loader
    if (loading) {
        return (
            <div className={"page-section"}>
                <div className="section-layout">
                    <div className="container">
                        <Loader />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className={"page-section"} id={"recipe-details-page"}>
            <section className={"section-layout recipe-details"} id={"recipe-details"}>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className={"recipe-image"}>
                            <img src={recipeDetails?.image} alt={recipeDetails?.name} />
                        </div>

                        {/*details*/}
                        <div>
                            <h1 className={"fw-extra-bold"}>{recipeDetails?.name}</h1>

                            {/*ratings and reviews*/}
                            <div className={"pt-1 rating-reviews"}>
                                <p>
                                    <span><Star />{recipeDetails?.rating}</span>
                                    <span><MessageCircle />{recipeDetails?.reviewCount}</span>
                                </p>
                            </div>


                            {/*other details*/}
                            <div className="mt-3">
                                <p><span className={"fw-semi-bold"}>Time to cook : </span>{recipeDetails?.cookTimeMinutes}
                                </p>
                                <p><span className={"fw-semi-bold"}>Time to prepare : </span>{recipeDetails?.prepTimeMinutes}
                                </p>
                                <p><span className={"fw-semi-bold"}>Servings : </span>{recipeDetails?.servings}</p>
                                <p><span className={"fw-semi-bold"}>Difficulty : </span>{recipeDetails?.difficulty}</p>
                                <p><span className={"fw-semi-bold"}>Cuisine : </span>{recipeDetails?.cuisine}</p>
                                <p><span
                                    className={"fw-semi-bold"}>Calories per serving : </span>{recipeDetails?.caloriesPerServing}
                                </p>
                            </div>

                            {/*meal types*/}
                            <div className={"mt-3 mb-3"}>
                                <p className={"fw-semi-bold mb-1"}>Meal Types</p>

                                <ul style={{ paddingLeft: "30px" }}>
                                    {recipeDetails?.mealType?.map((mealType, index) => (
                                        <li key={index} className={"pt-1"}>
                                            <Link to={`/recipe-list/meal-type/${mealType}?page=1&sort=newest`} key={index} className={"text-black link"}>
                                                {mealType}
                                            </Link>
                                        </li>))}
                                </ul>
                            </div>

                            {/*ingredients*/}
                            <div className={"mt-3 mb-3"}>
                                <p className={"fw-semi-bold mb-1"}>Ingredients</p>

                                <ul style={{ paddingLeft: "30px" }}>
                                    {recipeDetails?.ingredients?.map((ingredient, index) => (<li key={index} className={"pt-1"}>
                                        <p>{ingredient}</p>
                                    </li>))}
                                </ul>
                            </div>

                            {/*instructions*/}
                            <div className={"mt-3 mb-3"}>
                                <p className={"fw-semi-bold mb-1"}>Instructions</p>

                                <ul style={{ paddingLeft: "30px" }}>
                                    {recipeDetails?.instructions?.map((instructions, index) => (
                                        <li key={index} className={"pt-1"}>
                                            <p>{instructions}</p>
                                        </li>))}
                                </ul>
                            </div>

                            {/*tags*/}
                            <div className={"mt-3 mb-3"}>
                                <div className="display-tags">
                                    {
                                        recipeDetails?.tags?.map((tag, index) => (
                                            <Link to={`/recipe-list/tag/${tag}?page=1&sort=newest`} key={index} className={"recipe-tags link text-white"}>
                                                #{tag}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default RecipeDetails