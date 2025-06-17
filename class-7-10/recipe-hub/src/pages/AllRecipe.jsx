import { useEffect, useState } from 'react'
import apiRoutes from "../constants/api-constants"
import DisplayRecipeCards from "../components/DisplayRecipeCards"
import apiHandler from "../utils/api-handler.js"
import SectionTitle from "../components/SectionTitle.jsx"
import useQueryParams from "../hooks/useQueryParams.jsx";
import Pagination from '../components/Pagination'


const AllRecipe = () => {

    const [recipes, setRecipes] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const limit = 8

    // search params
    const { page = "1", sort = "newest", setNewSearchParams } = useQueryParams()

    // fetch recipes
    const fetchRecipes = async () => {

        let sortingParams = ""
        if (sort == "popular") {
            sortingParams = "&sortBy=reviewCount&order=desc"
        }
        if (sort == "highRated") {
            sortingParams = "&sortBy=rating&order=desc"
        }

        setLoading(true)

        const data = await apiHandler(
            `${apiRoutes.recipe}/?limit=${limit}&skip=${(parseInt(page) - 1) * limit}${sortingParams}`,
            "GET"
        )
        if (data) {
            setRecipes(data.recipes)
            setTotal(data.total)
        }
        setLoading(false)
    }

    // load the first data
    useEffect(() => {
        fetchRecipes()
    }, [sort, page])

    return (
        <section className={"page-section"} id={"all-recipe"}>
            <section className={"section-layout"}>
                <div className="container">
                    <SectionTitle text={"All Recipes"} />

                    {/*selecting options*/}
                    <div className="controls pt-3 mb-3">
                        <select
                            id="select-option"
                            value={sort}
                            onChange={(event) => {
                                setNewSearchParams("sort", event.target.value)
                                if (page != "1") {
                                    return setNewSearchParams("page", "1")
                                }
                            }}
                            className={"select-sort-option"}
                        >
                            <option value="newest">Newest</option>
                            <option value="popular">Popular</option>
                            <option value="highRated">Highest Rated</option>
                        </select>
                    </div>

                    <DisplayRecipeCards recipes={recipes} showSeeMoreBtn={false} loading={loading} />

                    <Pagination
                        total={total}
                        currentPage={parseInt(page)}
                        setPage={(pageNum) => {
                            setNewSearchParams("page", pageNum)
                        }}
                        limit={limit}
                        loading={loading}
                    />
                </div>
            </section>
        </section>
    )
}

export default AllRecipe