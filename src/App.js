import SinglePropertyDetails from "../src/pages/SinglePropertyDetails/SinglePropertyDetails";
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <SinglePropertyDetails url="property/1" />
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
