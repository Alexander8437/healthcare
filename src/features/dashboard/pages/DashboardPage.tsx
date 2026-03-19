import { useEffect } from "react"
import { LineChart,Line,XAxis,YAxis,Tooltip } from "recharts"
import { requestNotificationPermission } from "../../../utils/notification"

const data=[
 {name:"Jan",patients:40},
 {name:"Feb",patients:60},
 {name:"Mar",patients:90}
]

export default function DashboardPage(){
  useEffect(() => {
  requestNotificationPermission()
}, [])
 return(
  <div className="p-6">
   <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
   <LineChart width={500} height={300} data={data}>
     <XAxis dataKey="name"/>
     <YAxis/>
     <Tooltip/>
     <Line dataKey="patients" stroke="#3b82f6"/>
   </LineChart>
  </div>
 )
}