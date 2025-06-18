// using zod

import { useState } from 'react'
import SelectField from '../components/SelectField'
import Input1 from '../components/Input1'
import { z } from "zod"

// zod schema for registrations
const registerSchema = z.object({
    name: z.string()
        .min(2, { message: "Name is too short (2-10) chars" })
        .max(10, { message: "Name is too long (2-10) chars" }),
    email: z.string().email(),
    phone: z.string().length(13, { message: "Invalid number" }),
    gender: z.enum(["male", "female", "other"]).default(""),
    pass: z.string()
        .min(8, { message: "password is too short (8-15) chars" })
        .max(15, { message: "password is too long (8-15) chars" }),
})



const Form2 = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        pass: "",
    })
    const [errorMessges, setErrorMessages] = useState([])

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
        setErrorMessages([])

        // validation
        // if (data.name.trim() == "") {
        //     return alert("Name cannot be empty")
        // }

        const validation = registerSchema.safeParse(data)
        if (validation?.error) {
            setErrorMessages(validation?.error?.issues)
            return
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

                        {/* gender */}
                        <SelectField
                            name={"gender"}
                            value={data.gender}
                            onChange={handleChange}
                        >
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                            <option value={"other"}>Other</option>

                        </SelectField>

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

                {
                    errorMessges.length > 0 &&
                    <div>
                        {
                            errorMessges.map((msgs) => (
                                <p className='bg-red-500 text-white'>{msgs.message}</p>
                            ))
                        }
                    </div>
                }
            </div>
        </section>
    )
}

export default Form2