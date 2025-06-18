import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/form-1",
		element: <Form1 />
	},
	{
		path: "/form-2",
		element: <Form2 />
	},
])


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
