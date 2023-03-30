
import './App.css'
import { Header ,Container,Footer,Hero,MostPopular} from "./export";

const App = () => {
  return (
    <>
     <Header/>
     <Container>
       <Hero/>
       <MostPopular/>
     </Container>
     {/* <Footer/> */}
    </>
  );
};
export default App;
