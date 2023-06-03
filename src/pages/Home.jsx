import Speed from "../components/Speed"
// import Category from './components/Category';
import Logo from '../components/Logo';
import Cards from '../components/Cards';
import Subscribe from '../components/Subscribe';
import Hero from "../components/Hero";
const Home =() =>{
  return (
    <div className="App">
 <Hero/>
      <Speed />
      {/* <Category /> */}
      <Cards />
      <Logo />
      <Subscribe />
    </div>
  );
}

export default Home;