import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { toggleView } from "../../patients/patientSlice"
import AddPatientModal from "../components/AddPatientModal"
import { useNavigate } from "react-router-dom"

export default function PatientsPage() {
  const dispatch = useAppDispatch()
  const { patients, view } = useAppSelector((s) => s.patients)

  const [open, setOpen] = useState(false)

  const navigate = useNavigate()



  return (
    <div className="p-6">

      <div className="flex justify-between mb-6">
        <h3 className="text-md font-bold">Patients List</h3>

        <div className="flex gap-3">
          <button
            onClick={() => dispatch(toggleView())}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Toggle View
          </button>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Patient
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {patients.map((p) => (
            <div key={p.id} className="bg-white border p-4 rounded shadow cursor-pointer hover:shadow-xl transition" onClick={() => navigate(`/patients/${p.id}`)}>
              <h2 className="font-bold">{p.name}</h2>
              <p>Age: {p.age}</p>
              <p>Disease: {p.disease}</p>
            </div>
          ))}
        </div>
      ) : (
                <div className="bg-white rounded shadow overflow-auto">

          <table className="w-full">

            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Name</th>
                <th>Age</th>
                <th>Disease</th>
              </tr>
            </thead>

            <tbody >
              {patients.map(p => (
                <tr
                  key={p.id}
                  onClick={() => navigate(`/patients/${p.id}`)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="p-3">{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.disease}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      )}

    {/* </div>

      )} */}

      {patients.length === 0 ? <div>No patient</div>: <></>}

      {open && <AddPatientModal close={() => setOpen(false)} />}

    </div>
  )
}