import {ReactNode} from "react";
import './ListItemOverview.css'

type ListItemProps = {
  image: ReactNode | ReactNode[]
  name: ReactNode | ReactNode[]
  details: ReactNode | ReactNode[]
  info: ReactNode | ReactNode[]
}

export const ListItemOverview = (props: ListItemProps) => {
  const {name, details, info, image} = props
  return <li className={'list-item--overview'}>
    <div className={'list-item__img-wrapper'}>{image}</div>
    <h3 className={'list-item__name'}>{name}</h3>
    <div className={'list-item__details'}>{details}</div>
    <div className={'list-item__info'}>{info}</div>
  </li>
}
