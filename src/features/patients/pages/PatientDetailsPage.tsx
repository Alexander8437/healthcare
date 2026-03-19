import { useParams, useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../app/hooks"

export default function PatientDetailsPage() {

  const { id } = useParams()
  const navigate = useNavigate()

  const patient = useAppSelector(state =>
    state.patients.patients.find(p => p.id === Number(id))
  )

  if (!patient) {
    return (
      <div className="p-6">
        <h2 className="text-xl text-red-500">Patient Not Found</h2>
        <button
          onClick={() => navigate("/patients")}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">

      <button
        onClick={() => navigate("/patients")}
        className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl">

        <h1 className="text-2xl font-bold mb-6 text-blue-600">
          Patient Details
        </h1>

        <div className="space-y-4">

          <div>
            <p className="text-gray-500">Name</p>
            <p className="text-lg font-semibold">{patient.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Age</p>
            <p className="text-lg font-semibold">{patient.age}</p>
          </div>

          <div>
            <p className="text-gray-500">Disease</p>
            <p className="text-lg font-semibold">{patient.disease}</p>
          </div>

          <div>
            <p className="text-gray-500">Patient ID</p>
            <p className="text-lg font-semibold">{patient.id}</p>
          </div>

        </div>

      </div>

    </div>
  )
}