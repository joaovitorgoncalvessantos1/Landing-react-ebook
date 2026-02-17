import "./App.css";
import Cards from "./components/Cards/Cards";
import Ebook from "./components/Ebook/Ebook";
import Faq from "./components/FAQ/Faq";
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
    </>
  );
}

export default App;
