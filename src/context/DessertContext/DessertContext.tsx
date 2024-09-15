import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {useDeviceType} from "../../hooks/useDeviceType.ts";

export type Dessert = {
  category: string,
  image: {
    desktop: string,
    mobile: string,
    tablet: string,
    thumbnail: string
  },
  name: string,
  price: number,
}

export type SelectedDesserts = Record<string, number>

type DessertContextProps = {
  selectedDessertMap: SelectedDesserts,
  dessertsQuery: UseQueryResult<Dessert[], Error>
  imageUrls: string[]
  dessertsPlus: (dessertName: string) => void
  dessertsMinus: (dessertName: string) => void
  setSelectedDessertMap: Dispatch<SetStateAction<SelectedDesserts>>
}

export const DessertContext = createContext<DessertContextProps | null>(null)

type DessertWrapperProps = {
  children: ReactNode | ReactNode[];
}

export const DessertWrapper = (props: DessertWrapperProps) => {
  const deviceType = useDeviceType()
  const [selectedDessertMap, setSelectedDessertMap] = useState<SelectedDesserts>({})
  const dessertsQuery = useQuery<Dessert[]>({
    queryKey: ['desserts'],
    queryFn: async () => {
      const response = await fetch('/data.json'); // Path relative to public folder
      if (!response.ok) throw new Error('Network response was not ok')
      const data: Dessert[] = await response.json()
      setSelectedDessertMap(prev => {
        const selectedDesserts: SelectedDesserts = {}
        data.forEach(dessert => {
          selectedDesserts[dessert.name] = prev[dessert.name] ?? 0
        })
        return selectedDesserts
      })
      return data
    },
  })
  const {data} = dessertsQuery

  const imageUrls = (data && deviceType) ? data.map(dessert => `${getImageUrl(dessert.image[deviceType])}`) : []

  function getImageUrl(name: string) {
    //only absolut Paths for URL
    return new URL(name.substring(1), import.meta.url).href;
  }

  const dessertsPlus = (dessertName: string) => {
    setSelectedDessertMap(prev => {
      const selectedDesserts = {...prev}
      selectedDesserts[dessertName] += 1
      return selectedDesserts[dessertName] < 0 ? prev : selectedDesserts
    })
  }

  const dessertsMinus = (dessertName: string) => {
    setSelectedDessertMap(prev => {
      const selectedDesserts = {...prev}
      selectedDesserts[dessertName] -= 1
      return selectedDesserts[dessertName] < 0 ? prev : selectedDesserts
    })
  }

  return (
    <DessertContext.Provider value={
      {selectedDessertMap, dessertsPlus, dessertsQuery, dessertsMinus, imageUrls, setSelectedDessertMap}}>
      {props.children}
    </DessertContext.Provider>
  );
}
