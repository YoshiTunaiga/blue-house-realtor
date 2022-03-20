import React, { useEffect, useState } from "react";
import { houses } from "../data/houses";
import Hero from "./HeroSlide/Hero";
import InfoSection from "./Home/InfoSection";
import { slideData } from "./SlideData";
import { db } from "../config/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const Home = () => {
  // const [houses, sethouses] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   async function getHouses() {
  //     const querySnapshot = await getDocs(collection(db, "item"));
  //     const productsArray = [];
  //     const unsubscribe = querySnapshot.forEach((doc) => {
  //       let product = doc.data();
  //       let id = doc.id;
  //       product["id"] = id;
  //       productsArray.push(product);
  //       sethouses([...productsArray]);
  //     });
  //     console.log("-=>>>>", productsArray);
  //     return productsArray;
  //   }

  //   const result = getHouses();
  //   setIsLoading(false);
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <Hero slides={slideData} />
      <InfoSection houses={houses} />
    </>
  );
};

export default Home;
