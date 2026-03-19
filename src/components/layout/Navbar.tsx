import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useNavigate } from "react-router-dom"
import { logout } from "../../features/auth/authSlice"
import { logoutUser } from "../../services/firebase"
import { clearNotifications } from "../../features/patients/patientSlice"


export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  
  const notifications = useAppSelector(
    (state) => state.patients.notifications
  )

  const handleLogout = async () => {
    await logoutUser()
    dispatch(logout())
    navigate("/login")
  }
  
  const dispatch = useAppDispatch()



  return (
    // <div className="h-16 bg-white shadow flex justify-between items-center px-6 fixed min-w-screen z-50">
    // <div className="h-16 bg-white shadow flex justify-between items-center px-6 w-full">
          <div className="top-0 left-0 md:left-64 right-0 h-16 bg-white shadow flex justify-between items-center px-6 z-50">


      <h1 className="text-xl font-bold">Healthcare</h1>

      <div className="flex items-center gap-6">

        {/* Notification */}
        <div className="relative">
          <button onClick={() => setOpen(!open)}>🔔</button>

                  {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        )}

        {open && (
          <div className="absolute right-0 mt-3 w-64 bg-white border shadow rounded">

            <div className="p-3 font-bold border-b">
              Patient Notifications
            </div>

            {notifications.length === 0 ? (
              <div className="p-3 text-gray-500">No notifications</div>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className="p-3 border-b">
                  {n.message}
                </div>
              ))
            )}

            {notifications.length > 0 && (
              <button
                onClick={() => dispatch(clearNotifications())}
                className="w-full bg-blue-500 text-white p-2"
              >
                Clear
              </button>
            )}

          </div>
        )}
</div>
        

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </div>
  )
}