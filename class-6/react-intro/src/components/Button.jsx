

const Button = (props) => {
    // console.log(props.type)
    if(props.type == "blue") {
        return (
            <button className="btn-2">
                Blue Button
            </button>
        )
    }
    else if (props.type == "green") {
        return (
            <button 
                className="btn-1" 
                onClick={() => {
                    alert("Green Button Clicked")
                }}
            >
                Green Button
            </button>
        )
    }
    else {
        return (
            <button>
                Default Button
            </button>
        )
    }
}

export default Button