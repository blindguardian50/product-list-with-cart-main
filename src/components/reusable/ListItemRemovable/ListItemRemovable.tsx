import {MouseEventHandler, ReactNode} from "react";
import {IoMdCloseCircleOutline} from "react-icons/io";
import './ListItemRemovable.css'

type ListItemProps = {
  name: ReactNode | ReactNode[]
  details: ReactNode | ReactNode[]
  remove?: ReactNode | ReactNode[]
  onRemove: MouseEventHandler<HTMLButtonElement>
}

export const ListItemRemovable = (props: ListItemProps) => {
  const {name, details, remove, onRemove} = props
  return <li className={'list-item--removable'}>
    <h3 className={'list-item__name'}>{name}</h3>
    <div className={'list-item__details'}>{details}</div>
    <button className={'list-item__remove'} onClick={onRemove}>{remove ?? <IoMdCloseCircleOutline />}</button>
  </li>
}
