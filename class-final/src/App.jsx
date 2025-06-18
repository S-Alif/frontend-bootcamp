import { useState } from 'react'
import Input from './components/Input'


const App = () => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")

	const handleSubmit = () => {
		alert(`name: ${name}, email: ${email}`)
	}

	return (
		<section className='w-full min-h-screen'>
			<div className="px-4 py-10 h-screen flex justify-center items-center">


				<div className='max-w-xl w-full p-4 rounded-md shadow-2xl'>
					<h2 className='pb-3 mb-4 border-b text-2xl font-bold'>Register</h2>
					<Input
						onChange={setName}
						value={name}
						name="username"
						placeholder="Type your name"
					/>

					{/* email */}
					<Input
						type="email"
						onChange={setEmail}
						value={email}
						name="email"
						placeholder="Type your email"
					/>

					<button
						className='py-2 px-3 bg-amber-800 text-white rounded-md'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>

			</div>
		</section>
	)
}

export default App