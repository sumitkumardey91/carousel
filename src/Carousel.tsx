import React from "react"
import Slider from "./Slider"


interface ImageGroup {
    title: string,
    img: string,
    description: string,
    isActive: boolean,
  }

  
interface Images {
    images: ImageGroup[]
}
  
const Carousel:React.FC<Images> = ({ images }) => {       

    let [data, dataSet] = React.useState<ImageGroup[] | []>([]);

    React.useEffect(() => {
        dataSet(images.map((img, index) => ({
            ...img,
            isActive: index === 0, // Set the first image as active initially
          })));
      

        setInterval(() => {
            resetTimeAnimation()

            moveFirstToEnd()
        }, 5000)
    }, [])
    function resetTimeAnimation() {
        let runningTime = document.querySelector(' .timeRunning') as HTMLElement;

        runningTime.style.animation = 'none'
        runningTime.offsetHeight /* trigger reflow */
        runningTime.style.animation = 'runningTime 5s linear 1 forwards'

          
   
    }
    


    const moveFirstToEnd = () => {

        // dataSet(prevItems => {
        //     const activeIndex = prevItems.findIndex(item => item.isActive);
            
        //     const nextIndex = (activeIndex + 1) % prevItems.length; // Find the next image index
        //    let data = prevItems.map((item, index) => ({
        //       ...item,
        //       isActive: index === nextIndex ? true : false,
        //     }));

          
        //     return data
        //   });

        dataSet(prevItems => {
            if (prevItems.length === 0) return prevItems;
      
            // Remove the first item and add it to the end
            const [firstItem, ...restItems] = prevItems;
            firstItem.isActive = false; // Deactivate the item
            const nextIndex = (restItems.findIndex(item => item.isActive) + 1) % restItems.length;
            restItems[nextIndex].isActive = true; // Activate the next item
      
            return [...restItems, { ...firstItem, isActive: false }];
          });
      };
  

    return (
        <div className="carousel-main">
            {data.length > 0 && data.map((item, index) => {
                return <Slider img={item} key={index} counter={index}></Slider>
            })}
        </div>
    )
}

export default Carousel;