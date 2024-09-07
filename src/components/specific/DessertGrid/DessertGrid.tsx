import {useQuery} from "@tanstack/react-query";
import './DessertGrid.css'
import {useBreakpointValue} from "@chakra-ui/react";
import {ShoppingCard} from "../../reusable/ShoppingCard/ShoppingCard.tsx";

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
    lg: 'desktop', // large desktops
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
    return new URL(name.substring(1), import.meta.url).href;
  }

  return <div className={'card-grid'}>
    {data.map(dessert => {
      const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(dessert.price)
      const device = bgColor ?? 'mobile'
      return <ShoppingCard
        image={<img src={`${getImageUrl(dessert.image[device])}`} alt={`Image of a ${dessert.category}`}/>}
        category={dessert.category}
        name={dessert.name}
        price={price}
      />
    })
    }
  </div>
}
