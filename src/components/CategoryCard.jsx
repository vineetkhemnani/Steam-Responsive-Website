const CategoryCard = ({img,name}) => {
  return (
    <div>
        <img src={img} alt="" />
        <p className="text-white">{name}</p>
    </div>
  )
}
export default CategoryCard