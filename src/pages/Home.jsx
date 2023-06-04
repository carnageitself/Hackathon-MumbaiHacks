import Speed from "../components/Speed"

// import Category from './components/Category';
import Logo from '../components/Logo';
import Cards from '../components/Cards';
import Subscribe from '../components/Subscribe';
import Hero from "../components/Hero";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home =() =>{
  const navigate = useNavigate()
  const [email,setEmail]=useState()
  const [name,setName]=useState()
  const [percentile,setPercentile] =useState(null)
  const [data,setData]=useState([])
 
  const handleService = async()=>{
   
    const data = await axios.post("https://hackathon-mumbai-backend.onrender.com/api/v1/college/all", {
   
        percentile: percentile
      
}).then((data)=>{ 
  let rows = []

  data.data.data?.forEach((item) => {
    rows.push({ id: item._id + 1, collegeName: item.college, branchName: item.dept[0].dname, cutOff: item.dept[0].percentile }, { id: item._id + 2, collegeName: item.college, branchName: item.dept[1].dname, cutOff: item.dept[1].percentile }, { id: item._id + 3, collegeName: item.college, branchName: item.dept[2].dname, cutOff: item.dept[2].percentile }, { id: item._id + 4, collegeName: item.college, branchName: item.dept[3].dname, cutOff: item.dept[3].percentile }, { id: item._id + 5, collegeName: item.college, branchName: item.dept[4].dname, cutOff: item.dept[4].percentile }, { id: item._id + 6, collegeName: item.college, branchName: item.dept[5].dname, cutOff: item.dept[5].percentile })

  })
  const doc=rows.filter(doc=>doc.cutOff <= percentile)
      localStorage.setItem("data",JSON.stringify(doc))
      console.log("darshan",data);
      navigate('/even')
    }).catch((err)=>{
      console.log(err);
    })
  }

   return (
    <div className="App">
      <Hero setEmail={setEmail} setPercentile={setPercentile} setName={setName}
        handleService={handleService} />
      <Speed />
      {/* <Category /> */}
      <Cards />
      <Logo />
      <Subscribe />
    </div>
  );
  }

export default Home;