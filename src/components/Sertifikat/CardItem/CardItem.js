const CardItem = ({data}) =>{
    return(
        <div data-aos="zoom-in-up" className="image-container relative">
            <span className="absolute bg-slate-700 p-2">⭐⭐⭐</span>
            <img src={data} alt="" />
        </div>
    )
}
export default CardItem