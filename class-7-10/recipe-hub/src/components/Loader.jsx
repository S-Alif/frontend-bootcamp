import logo from "../assets/images/logo.png";

const Loader = () => {
    return (
        <div className={"loader"}>
            <div className={"loader-body"}>
                <img src={logo} alt="logo" />
                <p className={"pt-1 fw-bold text-center"}>loading...Please wait</p>
            </div>
        </div>
    )
}

export default Loader