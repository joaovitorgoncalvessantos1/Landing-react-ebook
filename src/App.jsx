import "./App.css";
import Cards from "./components/Cards/Cards";
import Ebook from "./components/Ebook/Ebook";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Ebook></Ebook>
      <Cards></Cards>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}

export default App;
