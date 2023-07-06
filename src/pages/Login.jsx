import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        console.log(data)
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    } catch(err) {
        return err.message
    }
}


export function Login() {

    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return (
        <div className="d-flex flex-column align-items-center p-5">
            <h2>Sign in to your account</h2>
            {message && <h4 className="text-danger">{message}</h4>}
            {errorMessage && <h4 className="text-danger">{errorMessage}</h4>}
            <Form className="my-5" method="post" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="d-block mb-5 px-5 py-3 rounded-2 border-0"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="d-block mb-5 px-5 py-3 rounded-2 border-0"
                />
                <button
                    className="d-block my-2 px-3 py-2 rounded-2 border-0 w-100 bg-warning"
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}







// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { useLoaderData } from "react-router-dom"
// import {loginUser} from '../api'

// export function loader({request}){
//     return new URL(request.url).searchParams.get("message")
// }

// export default function Login() {

//     const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
//     const [status, setStatus] = useState("idle")
//     const [error, setError] = useState(null)
//     const navigate = useNavigate()
//     const message = useLoaderData()

//     function handleSubmit(e) {
//         e.preventDefault()
//         setStatus("submitting")
//         setError(null)
//         loginUser(loginFormData)
//             .then(data => {
//                 navigate('/host', {replace : true})
//             }

//             )
//             .catch(err=>setError(err))
//             .finally(()=>setStatus("idle"))
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//   return (
//     <div className="d-flex flex-column align-items-center p-5">
//         <h2 className="fw-bold">Sign in to your account</h2>
//         <form onSubmit={handleSubmit} className="my-5">
//             {message && <p>{message}</p>}
//             {error && <p className="text-center text-danger">{error.message}</p>}
//             <input
//                 name="email"
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Email address"
//                 value={loginFormData.email}
//                 className="d-block mb-5 px-5 py-3 rounded-2 border-0"
//             />
//             <input
//                 name="password"
//                 onChange={handleChange}
//                 type="password"
//                 placeholder="Password"
//                 value={loginFormData.password}
//                 className="d-block mb-5 px-5 py-3 rounded-2 border-0"
//             />
//             <button
//                 className="d-block my-2 px-3 py-2 rounded-2 border-0 w-100 bg-warning"
//                 disabled={status === "submitting"}
//             >
//                 {status === "submitting" ? "Logging in..." : "Log in"}
//             </button>
//         </form>
//     </div>
//   )
// }
