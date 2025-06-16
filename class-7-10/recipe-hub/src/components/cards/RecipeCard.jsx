import { Link } from "react-router"
import { ArrowRight } from "lucide-react";

const DisplayTags = ({ tag }) => {
    return (
        <Link
            to={`/recipe-list/tag/${tag}?page=1&sort=newest`}
            className={"recipe-tags text-white fw-semi-bold"}
        >
            #{tag}
        </Link>
    )
}

const MealTypes = ({ mealType, index, totalItems }) => {
    return (
        <Link
            to={`/recipe-list/meal-type/${mealType}?page=1&sort=newest`}
            className={"fw-medium link text-black"}
        >
            {mealType}{index + 1 != totalItems && " | "}
        </Link>
    )
}

// main recipe card
const RecipeCard = ({ item }) => {
    return (
        <div className={"card"}>
            <div className="card-img mb-2">
                <img src={item?.image} alt={item?.name} />
            </div>
            <div className="card-body">
                <div className="tags">
                    {
                        item?.tags.map((tag, index) => (
                            <DisplayTags tag={tag} key={index} />
                        ))
                    }
                </div>
                <h3>{item?.name}</h3>

                {/*meal type*/}
                <p className={"fw-semi-bold mt-3"}>
                    <span className={"bg-green text-white card-info-list-heading"}>
                        Meal type:
                    </span>
                    {
                        item?.mealType.map((mealType, index) => (
                            <MealTypes
                                key={index}
                                mealType={mealType}
                                totalItems={item?.mealType.length}
                                index={index}
                            />
                        ))
                    }
                </p>

                {/*cuisine*/}
                <p className={"fw-semi-bold mt-2"}>
                    <span className={"bg-green text-white card-info-list-heading"}>
                        Cuisine:
                    </span>
                    {item?.cuisine}
                </p>

                <Link to={`/recipe-list/recipe/${item?.id}`}
                    className={"btn bg-deep-green mt-3 link"}
                    style={{
                        display: "flex",
                        gap: "4px",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    View recipe <ArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default RecipeCard