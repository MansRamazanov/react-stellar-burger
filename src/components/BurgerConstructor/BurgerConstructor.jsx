import React from "react";
import styles from "./BurgerConstructor.modal.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function BurgerConstructor() {
  return (
    <main
      className="pt-25"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div className={styles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          //   thumbnail={img}
        />
        <div className={styles.unlockIngredients}>
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            //   thumbnail={img}
          />
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          //   thumbnail={img}
        />
      </div>
      <div className="pt-10" style={{display: 'flex'}}>
        <div className="pt-2 pr-10">
          <span className="text text_type_digits-medium pr-2">610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Сделать заказ
        </Button>
      </div>
    </main>
  );
}

export default BurgerConstructor;
