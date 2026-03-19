import { useState, useEffect } from "react"
import { useAppDispatch } from "../../../app/hooks"
import { addPatient } from "../../patients/patientSlice"

export default function AddPatientModal({ close }: any) {
  const dispatch = useAppDispatch()

  const [form, setForm] = useState({
    name: "",
    age: "",
    disease: ""
  })

  const handleSubmit = () => {
    if (!form.name || !form.age || !form.disease) {
      alert("All fields required")
      return
    }

    dispatch(
      addPatient({
        id: Date.now(),
        name: form.name,
        age: Number(form.age),
        disease: form.disease
      })
    )

    close()
  }

  // ⭐ ESC key close
  useEffect(() => {
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }

    window.addEventListener("keydown", escHandler)
    return () => window.removeEventListener("keydown", escHandler)
  }, [])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
      onClick={close} // ⭐ click outside close
    >
      <div
        className="bg-white p-6 rounded w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ⭐ Close Button */}
        <button
          onClick={close}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Add Patient</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Age"
          onChange={(e) =>
            setForm({ ...form, age: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Disease"
          onChange={(e) =>
            setForm({ ...form, disease: e.target.value })
          }
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Save Patient
        </button>
      </div>
    </div>
  )
}