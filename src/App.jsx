import { useState,useEffect,useRef } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import Console from "./components/Console";
import Menu from "./components/Menu";
import Win from "./components/Win";

export default function App() {
  const [data,setdata] = useState([
    {category:"Animals",values:["Dog","Cat","Cow","Buffalo","Gorilla","Chicken","Goat","Crab","Hippopotamus","Crocodile","Peacock","Koala","Monkey","Wolf","Kangaroo","Zebra","Turkey","Gecko","Lion","Fish","Cobra","Grasshopper","Panda","Cockroach","Octopus","Starfish","Seal","Butterfly","Goldfish","Shark","Hamster","Whale","Horse","Tiger","Mouse","Pig","Frog","Rabbit","Lizard","Sheep","Bat","Scorpion","Spider","Parrot","Bird","Snake","Duck","Deer","Bear","Chimpanzee","Elephant","Eagle","Bison","Camel","Fox","Giraffe","Goose","Hawk","Turtle","Toad","Ostrich","Owl"]},
    {category:"Drink",values:["Coffee","Juice","Milk","Tea","Water"]},
    {category:"Food",values:["Beef","Bread","Rice","Meat","Hamburger","Hotdog","Egg","Cake","Candy","Cookies"]},
    {category:"Sport",values:["Badminton","Volleyball","Basketball","Rugby","Chess","Football"]},
    {category:"Country",values:["America","Indonesia","China","Malaysia","Vietnam","Canada","Thailand","Laos","India","Korea","Cambodia","Japan","Australia"]},
    {category:"Location",values:["Airport","Hospital","River","Temple","Supermarket","zoo","Park","Shop","Room","Playground","School","Clinic","Road","Mountain","Office","Home","Classroom","Market","Cinema","Bedroom","Bathroom","Bank"]},
    {category:"Shape",values:["Circle","Triangle","Rectangle","Square"]},
    {category:"Things",values:["Basket","Bell","Window","Computer","Flag","Notebook","Vase","Towel","Television","Tree","Toothpaste","Toothbrush","Telephone","Switch","Table","Stairs","Spoon","Radio","Soap","Shampoo","Pillow","Plug","Plate","Paper","Pencil","Mirror","Picture","Lamp","Money","Map","Light","Glass","Jar","Flower","Jug","Fridge","Fork","Fan","Door","Dish","Bed","Clock","Blanket","Bottle","Box","Broom","Can","Chair"]},
    {category:"Fruit",values:["Mango","Coconut","Orange","Tomato","Vegetable","Pineapple","Potato","Papaya","Durian","Onion","Mangosteen","Lemon","Garlic","Apple","Cucumber","Cabbage","Banana","Carrot","Chili"]},
    {category:"Body",values:["Arm","Back","Foot","Nose","Tooth","Thumb","Toe","Leg","Shoulder","Neck","Head","Mouth","Knee","Hip","Hand","Feet","Hair","Finger","Eye","Face","Cheek","Chest","Chin","Ear","Elbow"]}
  ]);
  const [category,setcategory] = useState("");
  const [hidevalue,sethidevalue] = useState([]);
  const [value,setvalue] = useState("");
  const [getletter,setgetletter] = useState("");
  const [countani,setcountani] = useState(0);
  const [checkwin,setcheckwin] = useState(undefined);
  const [nextandlose,setnextandlose] = useState(undefined);
  const [countlevel,setcountlevel] = useState(1);
  const [countgems,setcountgems] = useState(80);
  const isrestartusegems = useRef(countgems);

  //!load data

  const setGame = () => {
    const randomcategory = Math.floor(Math.random() * data.length);
    const value = data[randomcategory];
    const randomvalue = Math.floor(Math.random() * value.values.length);
    const getcategory = value.category;
    const getvalue = value.values[randomvalue];
    let hidevalue = getvalue.split("").map(e => e = "");

    setcategory(getcategory);
    sethidevalue(hidevalue);
    setvalue(getvalue);
    setgetletter("");
    setcountani(0);
    setcheckwin(undefined);
    setnextandlose(undefined);
  }

  useEffect(() => {
    setGame();
  },[]);

  //!

  //!get text form ui

  const getLetter = (letter) => {
    let text = letter;
    setgetletter(prev => text);
  }

  //!

  //!check word

  useEffect(() => {
    if (getletter != "") {
      let check = false;
      let letterofvalue = 0;
      const texthide = [...hidevalue];

      for (let i = 0 ; i < value.length ; i++) {
        if (value[i].toLowerCase() == getletter.toLowerCase()) {
          texthide[i] = getletter;
          check = true;
        }
      }
      if (check == false) {
        setcountani(prev => prev + 1);
      }

      for (let i = 0 ; i < value.length ; i++) {
        if (texthide[i].toLowerCase() == value[i].toLowerCase()) {
          letterofvalue++;
        }
      }
      if (letterofvalue == value.length) {
        setcheckwin(true);
      }

      sethidevalue(prev => [...texthide]);
    }
  },[getletter]);

  useEffect(() => {
    if (countani == 7) {
      setcheckwin(false);
    }
  },[countani]);

  //!

  //!use gems

  useEffect(() => {
    if (hidevalue != "" && isrestartusegems.current > countgems) {
      const hidevalues = [...hidevalue];
      const filterindex = hidevalue.map((e,i) => {
        if (e == "") {
          return(i + "");
        }
      }).filter(e => {
        if (e != "undefined") {
          return(e);
        }
      });
      let letterofvalue = 0;
      const randomindex = Math.floor(Math.random() * filterindex.length);
      const indexofrandom = filterindex[randomindex];

      for (let i = 0 ; i < hidevalue.length ; i++) {
        if (value[indexofrandom].toLowerCase() == value[i].toLowerCase()) {
          hidevalues[i] = value[i];
        }
      }

      for (let i = 0 ; i < value.length ; i++) {
        if (hidevalues[i].toLowerCase() == value[i].toLowerCase()) {
          letterofvalue++;
        }
      }
      if (letterofvalue == value.length) {
        setcheckwin(true);
      }

      sethidevalue(prev => [...hidevalues]);
    }

    isrestartusegems.current = countgems;
  },[countgems]);

  //!

  //!new game

  useEffect(() => {
    if (hidevalue != "") {
      setGame();
    }
  },[data]);

  useEffect(() => {
    if (typeof(nextandlose) != "undefined") {
      if (nextandlose == true) {
        const datavalues = [...data];
        const filtercategory = datavalues.filter(e => {return(e.category.toLowerCase() == category.toLowerCase())});
        const fildcategoryindex = datavalues.findIndex(e => {return(e.category.toLowerCase() == category.toLowerCase())});
        const filtervalues = filtercategory[0].values.filter(e => {return(e.toLowerCase() != value.toLowerCase())});
        filtercategory[0].values = [...filtervalues];
        datavalues[fildcategoryindex] = filtercategory[0];
        const findnewvalues = datavalues.filter(e => e.values.length != 0);
        setdata(prev => [...findnewvalues]);

        setcountlevel(prev => prev + 1);
        setcountgems(prev => prev + 10);
      }
      else if (nextandlose == false) {
        setGame();
      }
    }
  },[nextandlose]);

  //!

  return (
    <>
      <main>
        <Menu countgems={countgems} setcountgems={setcountgems} checkwin={checkwin} />
        <Console category={category} hidevalue={hidevalue} getLetter={getLetter} checkwin={checkwin} nextandlose={nextandlose} />
        <Win checkwin={checkwin} countani={countani} setnextandlose={setnextandlose} hidevalue={hidevalue} />
        <Hangman countani={countani} countlevel={countlevel} />
      </main>
    </>
  );
}