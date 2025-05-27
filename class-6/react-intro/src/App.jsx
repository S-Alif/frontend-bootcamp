import "./assets/css/style.css"
import Button from "./components/Button"
import SectionTitle from "./components/SectionTitle"
import AboutPage from "./page/AboutPage"

// for component names - file name and component name should be same
const App = () => {
	return (
		<div className="main-container">
			<h1>hello world</h1>
			<h2>how are you</h2>
			<SectionTitle title="This is a h1 component" />

			{/* custom component */}
			<Button type="blue" />
			<Button type="green" />
			<Button />

			<AboutPage />
		</div>
	)
}

export default App