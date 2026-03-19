import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface Patient {
  id: number
  name: string
  age: number
  disease: string
}

interface Notification {
  id: number
  message: string
}

interface PatientState {
  patients: Patient[]
  view: "grid" | "list"
  notifications: Notification[]
}


const initialState: PatientState = {
  patients: [
    // { id: 1, name: "John Doe", age: 35, disease: "Diabetes" },
    // { id: 2, name: "Sarah Smith", age: 29, disease: "Asthma" },
    // { id: 3, name: "Mike Ross", age: 42, disease: "Hypertension" }
  ],
  view: "grid",
  notifications: []
}


const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.view = state.view === "grid" ? "list" : "grid"
    },

    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload)

      state.notifications.unshift({
        id: Date.now(),
        message: `${action.payload.name} added`
      })
    },

    clearNotifications: (state) => {
      state.notifications = []
    }
  }
})

export const { toggleView, addPatient, clearNotifications } =
  patientSlice.actions
export default patientSlice.reducer