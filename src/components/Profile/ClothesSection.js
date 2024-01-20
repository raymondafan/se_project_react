import ItemCard from "../ItemCard/ItemCard"
const ClothesSection= ({clothingItems, onSelectCard, onCreateModal})=>{

return(
    <div>
{clothingItems.map((i)=>{
    <ItemCard key={i.id || i._id} item={i} onSelectCard={onSelectCard}/>
})}
    </div>
)   
  
}
export default ClothesSection