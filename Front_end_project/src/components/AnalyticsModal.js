import {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'

export default function AnalyticsModal() {
    const[chartData, setChartData]=useState({
            
        labels:["India","Pakistan","Europe","USA"],
        dataSets:[{
            label:"Population",
            data:[1000,20,400,300],
            backgroundColor:[
                "yellow",
                "green",
                "blue",
                "red"
            ]
        }]
    
        })
    useEffect(()=>{
        console.log(chartData)
    },[])

  return (
    <>
    <div>
    <Bar data={chartData}></Bar>

    </div>
    Analytics here

    </>
  )
}
