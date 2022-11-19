import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {Chart, ArcElement, LineElement,BarElement,PointElement,BarController,  BubbleController,DoughnutController, LineController,  PieController,PolarAreaController, RadarController, ScatterController,
    CategoryScale,LinearScale,LogarithmicScale, RadialLinearScale,TimeScale,
    TimeSeriesScale, Decimation, Filler,Legend,
    Title, Tooltip,
    SubTitle} from 'chart.js'
Chart.register(
    ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
)

 


const data = {
  // itemdata.map((elem ) => {})
 datasets: [{
      
        data: [70, 50, 40],
        backgroundColor : [
            'Red',
        'Yellow',
        'Blue',
       ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Price',
        'Rating',
        'Review'
    ]
};

const PieRadius = () => {

  const itemdata = useSelector((state) => state.cart);
console.log(itemdata)


  return (
    <PolarArea data={data} />
  )
}

export default PieRadius