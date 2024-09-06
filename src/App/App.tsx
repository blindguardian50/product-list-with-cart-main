import './App.css'
import {Flex} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {DessertGrid} from "../components/specific/DessertGrid/DessertGrid.tsx";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="shop-section">
        <div className={'container--outer'}>
          <h2 className={'section-heading'}>Desserts</h2>
          <Flex flexDirection={"column"}>
            <DessertGrid/>
            <div className="cart"></div>
          </Flex>
        </div>
      </section>
    </QueryClientProvider>
  )
}

export default App
