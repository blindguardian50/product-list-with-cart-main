import {useQuery} from "@tanstack/react-query";
import './DessertGrid.css'
import {useBreakpointValue} from "@chakra-ui/react";

type Dessert = {
  category: string,
  image: {
    desktop: string,
    mobile: string,
    tablet: string,
    thumbnail: string
  },
  name: string,
  price: number
}

type DeviceResolution = 'mobile' | 'tablet' | 'desktop'

export function DessertGrid() {
  const bgColor = useBreakpointValue<DeviceResolution>({
    base: 'mobile', // Mobile
    sm: 'tablet', // Tablets and small desktops
    lg: 'desktop', // Tablets and small desktops
  });

  const {isPending, error, data} = useQuery<Dessert[]>({
    queryKey: ['desserts'],
    queryFn: async () => {
      const response = await fetch('/data.json'); // Path relative to public folder
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Return the JSON data
    },
  })

  if (isPending) return 'Loading...'
  if (error || !data) return 'An error has occurred: ' + error.message

  function getImageUrl(name: string) {
    //only absolut Paths for URL
    return  new URL( name.substring(1), import.meta.url).href;
  }

  return <div className={'card-grid'}>
    {data.map(dessert => {
      const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dessert.price)
      const device = bgColor ?? 'mobile'
      console.log(device, bgColor)
      console.log(dessert.price)
      return <div className={'card'}>
        <img src={`${getImageUrl(dessert.image[device])}`} alt="THis is Image"/>
        <p className={'card__category'}>{dessert.category}</p>
        <h3 className={'card__name'}>{dessert.name}</h3>
        <p className={'card__price'}>{price}</p>
        {/*<div className={'cart__button--inactive'}>{dessert.price}</div>*/}
      </div>
    })}
  </div>
}
