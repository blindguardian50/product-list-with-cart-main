import {Dessert, SelectedDesserts} from "./DessertContext.tsx";

export function getSelectedDessertData<T extends Dessert>(desserts: T[], selectedDessertMap: SelectedDesserts) {
  const selectedDesserts = desserts.map(dessert => {
    const selected = selectedDessertMap[dessert.name] ?? 0
    const priceTotal = selected * dessert.price
    const priceFormatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(dessert.price)
    const priceTotalFormatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(priceTotal)
    return {...dessert, selected, priceTotal, priceFormatted, priceTotalFormatted}
  }).filter(dessert => dessert.selected > 0)

  const sum = selectedDesserts.reduce((prev, acc) => {
    return prev + acc.priceTotal
  }, 0)
  const sumFormatted = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(sum)
  return {
    selectedDesserts, sum, sumFormatted
  }
}
