import { useState,useEffect } from "react";
import spinner from "../components/spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
// creat set loading
const [loading,setLoading] = useState(false);
const [posts,setPosts] = useState([]);
 
// ek function likha hai jiska kaam hai lodar ko true aur false karna aur API se data lana
async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
       const data = await res.json();
    /// set post ke andar data aa gya
       setPosts(data);
    }
    catch(error){
     console.log("error is comback");
     setPosts([]);
    }
    setLoading(false);
  }

// sara ka sara data maine post wale variable me store kara liya

  useEffect(() => {
    fetchProductData();
  },[])

  return (
<div>
    {
      loading ? <spinner />:
      posts.length>0?
      (<div className="grid xs:grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80v]">
       {
        // ek se jyada cart present hai so we use map
        posts.map((post)=>(
          <Product key ={post.id} post = {post}/>
        ))
       }
      </div>):
      <div className="flex justify-center items-center">
       <p> No data found</p>
      </div>
    }
</div>
  );
};

export default Home;
