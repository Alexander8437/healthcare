import Navbar from "../layout/Navbar"
import Sidebar from "../layout/Sidebar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-auto px-6 py-1 bg-gray-100 ">
          <Outlet />
        </div>

      </div>

    </div>
  )
}