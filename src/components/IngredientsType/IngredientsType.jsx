import React, { useMemo, useState } from "react";
import Ingredients from "../Ingredients/Ingredients";
import styles from "./IngredientsType.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails/IngredientDetails";

const IngredientsType = (props) => {

const [activeIngredient, setActiveIngredient] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false);

function onSetActive(ingredient) {
  setActiveIngredient(ingredient);
  setIsModalOpen(true);
}

function onCloseModal() {
  setActiveIngredient(undefined);
  setIsModalOpen(false);
}

const buns = React.useMemo(
  () => props.ingredients.filter(function(ingredient){
    return ingredient.type === "bun"
  }),
  [props.ingredients]
);

const sauces = React.useMemo(
  () => props.ingredients.filter(function(ingredient){
    return ingredient.type === "sauce"
  }),
  [props.ingredients]
);

const mains = React.useMemo(
  () => props.ingredients.filter(function(ingredient){
    return ingredient.type === "main"
  }),
  [props.ingredients]
);

const bunIngredients = buns.map((ingredient) => (
  <Ingredients key={ingredient._id} img={ingredient.image} name={ingredient.name} price={ingredient.price} type={ingredient.type} active={isModalOpen} setActive={onSetActive}/>
))

const saucesIngredients = sauces.map((ingredient) => (
  <Ingredients key={ingredient._id} img={ingredient.image} name={ingredient.name} price={ingredient.price} type={ingredient.type} active={isModalOpen} setActive={onSetActive}/>
))

const mainsIngredients = mains.map((ingredient) => (
  <Ingredients key={ingredient._id} img={ingredient.image} name={ingredient.name} price={ingredient.price} type={ingredient.type} active={isModalOpen} setActive={onSetActive}/>
))


// console.log(buns, sauces, mains)

  return (
    <div className={styles.ingredientsTypeContainer}>
      <div>
        <p className="text text_type_main-medium pt-10 pb-6">Булки</p>
        <div className={styles.ingredientsContainer}>
          {bunIngredients}
        </div>
      </div>

      <div>
        <p className="text text_type_main-medium pt-10 pb-6">Соусы</p>
        <div className={styles.ingredientsContainer}>
            {saucesIngredients}
        </div>
      </div>

      <div>
        <p className="text text_type_main-medium pt-10 pb-6">Начинки</p>
        <div className={styles.ingredientsContainer}>
            {mainsIngredients}
        </div>
      </div>

      <IngredientDetails active={onSetActive} onClose={onCloseModal} ingredient={activeIngredient} header={"Детали ингредиента"}/>
    </div>
  );
};

export default IngredientsType;
