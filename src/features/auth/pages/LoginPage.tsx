import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../services/firebase"
import { useAppDispatch } from "../../../app/hooks"
import { loginSuccess } from "../authSlice"
import { useNavigate } from "react-router-dom"


export default function LoginPage(){
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")
 const [loading, setLoading] = useState(false)
 const dispatch = useAppDispatch()
 const navigate = useNavigate()

 const [error, setError] = useState("")


 const login=async()=>{
  setLoading(true)
   setError("")

  try {
    await signInWithEmailAndPassword(auth, email, password)

    dispatch(loginSuccess(true))
    navigate("/")
  } catch (err: any) {
    if (err.code) {
      setError("Incorrect Email or Password")
    }
  }
  finally {
  setLoading(false)
}
}

 return(
  <div className="h-screen flex items-center justify-center bg-gray-100">
   <div className="bg-white p-6 rounded shadow w-80">
     <input className="border p-2 w-full mb-2" onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
     <input className="border p-2 w-full mb-2" type="password" onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
     {error && (
  <p className="text-red-500 text-sm mb-2">
    {error}
  </p>
)}
     <button className="bg-blue-500 text-white w-full p-2" onClick={login}
     disabled={loading}>
  {loading ? "Logging..." : "Login"}</button>
   </div>
  </div>
 )
}