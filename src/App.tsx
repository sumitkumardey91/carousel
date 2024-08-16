
import './App.css';

import car1 from '@/assets/car1.jpg';
import car2 from '@/assets/car2.jpg'; 
import car3 from '@/assets/car3.jpg'; 
import car4 from '@/assets/car4.jpg'; 
import car5 from '@/assets/car5.jpg'; 
import car6 from '@/assets/car6.jpg'; 
import car7 from '@/assets/car7.jpg'; 
import Carousel from './Carousel';

interface Car {
  title: string,
  img: string,
  isActive: boolean,
  description: string,
}

const cars: Car[] = [
   {
    title: "BMW",
    img: car1,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "Benz",
    img: car2,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "lamborghini",
    img: car3,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "porsche",
    img: car4,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "urus",
    img: car5,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "lamborghini To Model",
    img: car6,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   },
   {
    title: "Luxus",
    img: car7,
    isActive: false,
    description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people"
   }
]

function App() {
 
  return (
      <div className='main'>
        <Carousel images={cars}></Carousel>
        <div className="timeRunning"></div>
      </div>
       
  )
}

export default App
