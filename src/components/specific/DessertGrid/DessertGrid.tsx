import './DessertGrid.css'
import {ShoppingCard} from "../../reusable/ShoppingCard/ShoppingCard.tsx";

import {useDessertContext} from "../../../context/DessertContext/useDessertContext.tsx";

export function DessertGrid() {
  const {dessertsQuery, imageUrls, selectedDessertMap, dessertsMinus, dessertsPlus} = useDessertContext()
  const {isPending, error, data} = dessertsQuery

  if (isPending) return 'Loading...'
  if (error || !data) return 'An error has occurred: ' + error.message

  return <div className={'card-grid'}>
    {data.map((dessert, index) => {
      const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(dessert.price)
      return <ShoppingCard
        image={<img src={`${imageUrls[index]}`} alt={`Image of a ${dessert.category}`}/>}
        category={dessert.category}
        name={dessert.name}
        price={price}
        selected={selectedDessertMap[dessert.name]}
        onMinus={() => dessertsMinus(dessert.name)}
        onPlus={() => dessertsPlus(dessert.name)}/>
    })
    }
  </div>
}
