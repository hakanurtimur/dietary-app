import React from "react";
import classes from "./AvailableAlterations.module.css";
import Card from "../UI/Card/Card";
import AlterationsItem from "./AlterationsList/AlterationsItem";

const DUMMY_DIET_ELEMENTS = [
  {
    id: "dairy-products",
    name: "Dairy Products",
    description: "1 glass of milk, 1 medium bowl of yogurt, etc.",
    cho: 9,
    prt: 6,
    fat: 6,
    cal: 114,
  },
  {
    id: "meat-products",
    name: "Meat Products",
    description:
      "1 meatball size of beef, chicken and fish; 1 boiled egg, 1 matchbox of cheese etc.",
    cho: 0,
    prt: 6,
    fat: 5,
    cal: 69,
  },
  {
    id: "bread-substitute-products",
    name: "Bread Substitute Products",
    description:
      "1 thin slice of bread, 2 breadcrumbs, 1 tea glass of roasted chickpeas, 2-3 tablespoons of oats",
    cho: 15,
    prt: 2,
    fat: 0,
    cal: 68,
  },
  {
    id: "vegetable-products",
    name: "Vegetable Products",
    description: "6 tablespoons of raw vegetables",
    cho: 6,
    prt: 1,
    fat: 0,
    cal: 28,
  },
  {
    id: "fruit-products",
    name: "Fruit Products",
    description:
      "1 small apple, 1 small banana, 1 large orange, 4 apricots, etc.",
    cho: 15,
    prt: 0,
    fat: 0,
    cal: 60,
  },
  {
    id: "fat-products",
    name: "Fat Products",
    description:
      "1 tablespoon of oil, 1 teaspoon of butter, 2-3 walnuts, 5-6 hazelnuts or almonds, etc.",
    cho: 0,
    prt: 0,
    fat: 5,
    cal: 45,
  },
];

export default function AvailableAlterations() {
  const alterationsList = DUMMY_DIET_ELEMENTS.map((element) => (
    <AlterationsItem
      key={element.id}
      name={element.name}
      cho={element.cho}
      fat={element.fat}
      prt={element.prt}
      cal={element.cal}
      description={element.description}
    ></AlterationsItem>
  ));

  return (
    <section className={classes.alterations}>
      <ul>
        <Card>{alterationsList}</Card>
      </ul>
    </section>
  );
}
