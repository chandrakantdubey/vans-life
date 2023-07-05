import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className="d-flex flex-column align-items-center p-5">
        <h2 className="fw-bold">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="my-5">
            <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                value={loginFormData.email}
                className="d-block mb-5 px-5 py-3 rounded-2 border-0"
            />
            <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                value={loginFormData.password}
                className="d-block mb-5 px-5 py-3 rounded-2 border-0"
            />
            <button className="d-block my-2 px-3 py-2 rounded-2 border-0 w-100 bg-warning">Log in</button>
        </form>
    </div>
  )
}
