import { useAppSelector } from "../../../app/hooks"

export default function AnalyticsPage() {

  const patients = useAppSelector(state => state.patients.patients)

  const totalPatients = patients.length

  const avgAge =
    totalPatients > 0
      ? Math.round(
          patients.reduce((sum, p) => sum + p.age, 0) / totalPatients
        )
      : 0

  const diseaseStats: Record<string, number> = {}

  patients.forEach(p => {
    diseaseStats[p.disease] = (diseaseStats[p.disease] || 0) + 1
  })

  const maxDiseaseCount = Math.max(...Object.values(diseaseStats), 1)

  return (
    <div className="p-2">

      <h1 className="text-2xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Total Patients</p>
          <h2 className="text-3xl font-bold text-blue-600">
            {totalPatients}
          </h2>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Average Age</p>
          <h2 className="text-3xl font-bold text-green-600">
            {avgAge}
          </h2>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <p className="text-gray-500">Unique Diseases</p>
          <h2 className="text-3xl font-bold text-purple-600">
            {Object.keys(diseaseStats).length}
          </h2>
        </div>

      </div>

      {/* Disease Chart */}
      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Disease Distribution
        </h2>

        {Object.keys(diseaseStats).length === 0 && (
          <p className="text-gray-400">
            No Data Available
          </p>
        )}

        <div className="space-y-4">

          {Object.entries(diseaseStats).map(([disease, count]) => (

            <div key={disease}>

              <div className="flex justify-between mb-1">
                <span>{disease}</span>
                <span>{count}</span>
              </div>

              <div className="w-full bg-gray-200 rounded h-4">

                <div
                  className="bg-blue-500 h-4 rounded"
                  style={{
                    width: `${(count / maxDiseaseCount) * 100}%`
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}