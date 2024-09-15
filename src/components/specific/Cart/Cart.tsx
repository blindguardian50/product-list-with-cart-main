import {useDessertContext} from "../../../context/DessertContext/useDessertContext.tsx";
import './Cart.css'
import CarbonNeutralIcon from '../../../../assets/images/icon-carbon-neutral.svg'
import {ListItemRemovable} from "../../reusable/ListItemRemovable/ListItemRemovable.tsx";
import {List, useDisclosure} from "@chakra-ui/react";
import {CartModal} from "../CartModal/CartModal.tsx";
import {getSelectedDessertData} from "../../../context/DessertContext/getSelectedDessertData.tsx";
import CartPlaceHolder from '../../../../assets/images/illustration-empty-cart.svg'

export const Cart = () => {
  const {selectedDessertMap, dessertsQuery, setSelectedDessertMap} = useDessertContext()
  const {isPending, error, data} = dessertsQuery
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isPending) return 'Loading...'
  if (error || !data) return 'An error has occurred: ' + error.message

  const {selectedDesserts, sumFormatted} = getSelectedDessertData(dessertsQuery.data, selectedDessertMap)

  const removeDessert = (dessertName: string) => {
    setSelectedDessertMap(prev => {
      const desserts = {...prev}
      desserts[dessertName] = 0
      return desserts
    })
  }

  return (
    <div className="cart container--sm">
      <h3 className={'cart__title'}>Your Cart ({selectedDesserts.length})</h3>
      {selectedDesserts.length <= 0 ? <div className={'cart__placeholder'}>
          <img src={CartPlaceHolder} alt={'Cart Placeholder'}/>
        <p>Your added items will appear here</p>
        </div> :
        <>
          <List className={'cart__list--removable'}>
            {selectedDesserts.map(item => {
              return <ListItemRemovable name={item.name}
                                        details={<>
                                          <p className={'cart__selected'}>{item.selected}x</p>
                                          <p className={'cart__price-piece'}>@{item.priceFormatted}</p>
                                          <p className={'cart__price-total'}>{item.priceTotalFormatted}</p>
                                        </>}
                                        onRemove={() => removeDessert(item.name)}
              />
            })}
          </List>
          {/*<div className={'cart__list'}>*/}

          {/*</div>*/}
          <div className="cart__sum">
            <p>Order Total</p>
            <p className={"cart__sum__total"}>{sumFormatted}</p>
          </div>
          <div className={"cart__promotion"}>
            <img src={CarbonNeutralIcon} alt={''}/>
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
          <button className={'cart__button button--primary'} onClick={() => onOpen()}>Confirm Order</button>
          <CartModal isOpen={isOpen} onClose={onClose}/>
        </>
      }
    </div>
  );
}
