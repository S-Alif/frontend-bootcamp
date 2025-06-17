import { Link } from "react-router"
import logo from "./assets/images/logo.png"
import SectionTitle from './components/SectionTitle'
import { useEffect, useState } from 'react'
import apiRoutes from './constants/api-constants'
import apiHandler from './utils/api-handler'
import DisplayRecipeCards from './components/DisplayRecipeCards'
import { mealTypes } from "./data/recipeData.js"


const App = () => {

	const [popularRecipes, setPopularRecipes] = useState([])
	const [highRatedRecipes, setHighRatedRecipes] = useState([])
	const [loading, setLoading] = useState(false)
	const dataLimit = 5


	// getting data
	const fetchData = async () => {

		setLoading(true)
		// popular recipe
		const popular = await apiHandler(
			`${apiRoutes.recipe}/?select=name,id,difficulty,cuisine,mealType,image,tags&order=desc&limit=${dataLimit}&sortBy=reviewCount`,
			"GET"
		)
		// highest rated recipes
		const highRated = await apiHandler(
			`${apiRoutes.recipe}/?select=name,id,difficulty,cuisine,mealType,image,tags&order=desc&limit=${dataLimit}&sortBy=rating`,
			"GET"
		)
		if (popular) setPopularRecipes(popular.recipes)
		if (highRated) setHighRatedRecipes(highRated.recipes)

		setLoading(false)
	}

	// useEffect hook always runs once when the page loads
	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className='page-section'>

			{/*home section*/}
			<section id="home">
				<div className="container">
					<div className="home-content p-3">
						<h1 className="home-title text-white">Discover Delicious Recipes</h1>
						<p className="home-subtitle text-white">Cook tasty meals with step-by-step guides.</p>
						<Link to="/recipe-list?page=1&sort=newest" className="btn bg-primary link home-btn text-black">Explore Now</Link>
					</div>
				</div>
			</section>

			{/*about section*/}
			<section id="about" className="section-layout about">
				<div className="container">
					<div className="content">
						<h2 className={"title"}>About Us</h2>
						<img src={logo} alt="logo" />
						<p>At <b>RecipeHub</b>, we're passionate about bringing people together through the joy of cooking. Whether you're a beginner or an experienced chef, our collection of easy-to-follow recipes is designed to help you create delicious meals with confidence. We believe good food should be simple, fun, and shared with loved ones</p>
					</div>
				</div>
			</section>

			{/*popular recipe*/}
			<section id={"popular"} className={"section-layout"}>
				<div className="container">
					<SectionTitle text={"Popular Recipes"} />
					<DisplayRecipeCards recipes={popularRecipes} loading={loading} />
				</div>
			</section>

			{/*meal types*/}
			<section id={"highest-rated"} className={"section-layout"}>
				<div className="container">
					<SectionTitle text={"Visit Every Meal Type"} />
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 pt-3">
						{
							mealTypes.map((type, index) => (
								<Link
									to={`/recipe-list/meal-type/${type}?page=1&sort=newest`}
									key={index}
									className={"btn link bg-green text-center"}
								>
									{type}
								</Link>
							))
						}
					</div>
				</div>
			</section>


			{/*high recipe*/}
			<section id={"highest-rated"} className={"section-layout"}>
				<div className="container">
					<SectionTitle text={"Highest Rated Recipes"} />
					<DisplayRecipeCards recipes={highRatedRecipes} loading={loading} />
				</div>
			</section>

		</section>
	)
}

export default App