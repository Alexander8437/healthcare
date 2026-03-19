import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    // <div className="w-64 bg-blue-700 text-white h-screen pt-20 fixed">
    <div className="w-40 hidden md:block bg-blue-700 text-white h-screen p-5">

      <NavLink
        to="/"
        className="block px-6 py-3 hover:bg-blue-600"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/patients"
        className="block px-6 py-3 hover:bg-blue-600"
      >
        Patients
      </NavLink>

      <NavLink
        to="/analytics"
        className="block px-6 py-3 hover:bg-blue-600"
      >
        Analytics
      </NavLink>

    </div>
  )
}