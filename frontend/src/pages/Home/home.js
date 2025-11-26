import React, { useState } from "react";
import './home.css'
import Header from "../../components/Header/header";
import ExploreMenu from "../../components/ExploreMenu/exploremenu";
import FoodDisplay from "../../components/FoodDisplay/fooddisplay";
import AppDownload from "../../components/AppDownload/appDownload";

function Home() {

    const [category, setCategory] = useState("All");
  return (
    <div className="home">
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}

export default Home;