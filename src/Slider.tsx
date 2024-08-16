interface ImageGroup {
    title: string,
    img: string,
    description: string,
    isActive: boolean
  }
  interface Img {
    img: ImageGroup,
    counter: number
  }

const Slider:React.FC<Img> = ({ img , counter}) => {       

    return (
        <div className="wrapper">
           { img.isActive && (<div className="meta-wrapper">
                <div className="title">{img.title}</div>
                <div className="description">{img.description}</div>
                <div className="btn">
                    <button value="Purchase">Purchase</button>
                </div>
            </div>)} 
            <div className={`img-wrapper ${img.isActive ? 'active': ''}`} 
            style={{ left: `calc(40% + ${counter * 200}px)`}} >
                <img src={img.img} alt={img.title}></img>
            </div>

        </div>
    )
}

export default Slider;