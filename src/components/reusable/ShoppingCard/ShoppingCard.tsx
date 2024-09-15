import {ReactNode} from "react";
import './ShoppingCard.css'
import {NumberSpinner} from "../NumberSpinner/NumberSpinner.tsx";
import {LiaCartPlusSolid} from "react-icons/lia";

type ShoppingCardProps = {
  image: ReactNode;
  category: ReactNode;
  name: ReactNode;
  price: ReactNode;
  buttonContent?: ReactNode;
  noButton?: boolean;
  selected: number;
  onPlus: () => void;
  onMinus: () => void;
}

export const ShoppingCard = (props: ShoppingCardProps) => {
  const { name, price, image, category, buttonContent, noButton = false, selected, onPlus, onMinus } = props;

  return <div className={`shopping-card ${selected > 0 ? 'shopping-card--selected' : ''}`}>
    <div className={'shopping-card__image-wrapper'}>
      {image}
      {selected > 0 ?
        <NumberSpinner className={'shopping-card__button shopping-card__button--selected'} num={selected} onPlus={onPlus} onMinus={onMinus}/> :
        <button className={'shopping-card__button shopping-card__button--unselected'} onClick={onPlus}>{ noButton ? null : buttonContent ? buttonContent :
          <>
            <LiaCartPlusSolid/>
            <span className={''}>Add to Cart</span>
          </>
        }</button>
      }
    </div>
    <p className={'shopping-card__category'}>{category}</p>
    <h3 className={'shopping-card__name'}>{name}</h3>
    <p className={'shopping-card__price'}>{price}</p>
  </div>
}
