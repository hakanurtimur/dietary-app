import React from "react";
import Card from "../UI/Card/Card";
import DietItem from "./DietItems/DietItem";
// import classes from './AvailableProducts.module.css'


const DUMMY_DIET_ELEMENTS = [
  {
    id: "dairy-products",
    name: "Dairy Products",
    cho: 9,
    prt: 6,
    fat: 6,
    cal: 114,
  },
  {
    id: "meat-products",
    name: "Meat Products",
    cho: 0,
    prt: 6,
    fat: 5,
    cal: 69,
  },
  {
    id: "bread-substitute-products",
    name: "Bread Substitute Products",
    cho: 15,
    prt: 2,
    fat: 0,
    cal: 68,
  },
  {
    id: "vegetable-products",
    name: "Vegetable Products",
    cho: 6,
    prt: 1,
    fat: 0,
    cal: 28,
  },
  {
    id: "fruit-products",
    name: "Fruit Products",
    cho: 15,
    prt: 0,
    fat: 0,
    cal: 60,
  },
  { id: "fat-products", name: "Fat Products", cho: 0, prt: 0, fat: 5, cal: 45 },
];

export default function AvailableProducts() {
  return (
    <section>
      <Card>
        <ul>
        
            {DUMMY_DIET_ELEMENTS.map((item) => (
              <DietItem key={item.id} item={item}></DietItem>
            ))}
    </ul>
          
      </Card>
    </section>
  );
}
