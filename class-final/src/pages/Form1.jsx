import { useState } from 'react'
import Input1 from '../components/Input1'


const Form1 = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        pass: "",
    })

    // field data on change
    const handleChange = (e) => {
        // console.log(e)
        setData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()

        // validation
        if (data.name.trim() == "") {
            return alert("Name cannot be empty")
        }
        alert(JSON.stringify(data))
    }



    return (
        <section className='w-full min-h-screen'>
            <div className="px-4 py-10 h-screen flex justify-center items-center">
                <div className='max-w-xl w-full p-4 rounded-md shadow-2xl'>
                    <form onSubmit={handleSubmit}>
                        <Input1
                            onChange={handleChange}
                            value={data.name}
                            name="name"
                            placeholder="Type your name"
                        />

                        {/* email */}
                        <Input1
                            type="email"
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            placeholder="Type your email"
                        />

                        {/* phone */}
                        <Input1
                            onChange={handleChange}
                            value={data.phone}
                            name="phone"
                            placeholder="Type your phone"
                        />

                        {/* pass */}
                        <Input1
                            type='password'
                            onChange={handleChange}
                            value={data.pass}
                            name="pass"
                            placeholder="Type your pass"
                        />

                        <button
                            type='submit'
                            className='py-2 px-3 bg-amber-800 text-white rounded-md'
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form1