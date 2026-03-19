import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import LoginPage from "../features/auth/pages/LoginPage"
import DashboardPage from "../features/dashboard/pages/DashboardPage"
import PatientPage from "../features/patients/pages/PatientPage"
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage"
import { useAppSelector } from "./hooks"
import MainLayout from "../components/layout/MainLayout"
import PatientDetailsPage from "../features/patients/pages/PatientDetailsPage"

function Protected({children}:{children:any}){
 const user = useAppSelector(s=>s.auth.user)
 return user ? children : <Navigate to="/login"/>
}



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes with Layout */}
        <Route
          element={
            <Protected>
              <MainLayout />
            </Protected>
          }
        >
          <Route path="/" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/patients/:id" element={<PatientDetailsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )
}