import Speed from "../components/Speed"
// import Category from './components/Category';
import Logo from '../components/Logo';
import Cards from '../components/Cards';
import Subscribe from '../components/Subscribe';
const Home =() =>{
  return (
    <div className="App">
 
      <Speed />
      {/* <Category /> */}
      <Cards />
      <Logo />
      <Subscribe />
    </div>
  );
}

export default Home;