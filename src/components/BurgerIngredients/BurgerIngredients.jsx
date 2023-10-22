import { IngredientsMenu } from "../IngredientsMenu/IngredientsMenu";
import IngredientsType from "../IngredientsType/IngredientsType";
import styles from "./BurgerIngredients.module.css";

export function BurgerIngredients(props) {
  // console.log("props in BurgerIngredints", props)
  
  return (
    <main>
      <div className={styles.container}>
        <h2 className="text text_type_main-large pt-10 pb-5">
          Соберите бургер
        </h2>
        <IngredientsMenu />
        <IngredientsType ingredients={props.ingredients} />
      </div>
    </main>
  );
}
