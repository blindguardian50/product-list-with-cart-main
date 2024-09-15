import {
  Button, List,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import {FaRegCircleCheck} from "react-icons/fa6";
import './CartModal.css'
import {useDessertContext} from "../../../context/DessertContext/useDessertContext.tsx";
import {getSelectedDessertData} from "../../../context/DessertContext/getSelectedDessertData.tsx";
import {ListItemRemovable} from "../../reusable/ListItemRemovable/ListItemRemovable.tsx";
import {ListItemOverview} from "../../reusable/ListItemOverview/ListItemOverview.tsx";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal = (props: CartModalProps) => {
  const {isOpen, onClose} = props
  const {selectedDessertMap, dessertsQuery, imageUrls} = useDessertContext()
  const {isPending, error, data} = dessertsQuery

  if (isPending) return 'Loading...'
  if (error || !data) return 'An error has occurred: ' + error.message

  const dessertsWithImgUrls = dessertsQuery.data.map((dessert, index) => {
    return {...dessert, imageUrl: imageUrls[index]}
  })

  const {selectedDesserts, sumFormatted} = getSelectedDessertData(dessertsWithImgUrls, selectedDessertMap)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent className={'cart-modal'}>
        <ModalHeader>
          <FaRegCircleCheck />
        </ModalHeader>
        {/*<ModalCloseButton />*/}
        <ModalBody>
          <div>
            <h2 className={'section-heading'}>Order Confirmed</h2>
            <p className={'cart-modal__heading-add'}>We hope you enjoy your food!</p>
          </div>
          <div className={'cart-wrapper'}>
            <List className={'cart__list--overview'}>
              {selectedDesserts.map(item => <ListItemOverview
                image={<img src={item.imageUrl} alt={''}/>}
                name={item.name}
                details={<>
                  <p className={'cart__selected'}>{item.selected}x</p>
                  <p className={'cart__price-piece'}>@{item.priceFormatted}</p>
                </>}
                info={<p className={'cart__price-total'}>{item.priceTotalFormatted}</p>}/>
              )}
            </List>
            <div className="cart__sum">
              <p>Order Total</p>
              <p className={"cart__sum__total"}>{sumFormatted}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className={'button--primary'} onClick={onClose}>Start New Order</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
