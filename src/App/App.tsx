import './App.css'
import {Flex} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {DessertGrid} from "../components/specific/DessertGrid/DessertGrid.tsx";
import {Cart} from "../components/specific/Cart/Cart.tsx";
import {useDeviceType} from "../hooks/useDeviceType.ts";
import {DessertWrapper} from "../context/DessertContext/DessertContext.tsx";

const queryClient = new QueryClient()

function App() {
  const deviceType = useDeviceType();
  return (
    <QueryClientProvider client={queryClient}>
      <DessertWrapper>
        <section className="shop-section">
          <div className={'container--xl'}>
            <h2 className={'section-heading'}>Desserts</h2>
            <Flex flexDirection={{base: "column", lg: "row"}} gap={8} alignItems="flex-start">
              <DessertGrid/>
              <Cart/>
            </Flex>
          </div>
        </section>
      </DessertWrapper>
    </QueryClientProvider>
  )
}

export default App
