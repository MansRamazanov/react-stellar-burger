import styles from "./app.module.css";
import React, { useState , useEffect } from 'react';
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";

function App() {
  const [ingredients, setIngredients] = React.useState({});
  const [isLoading, setIsLoading] = useState(true);



  const config = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    const getStateData = async () => {
      try {
        const rawResponse = await fetch(config);
        const result = await rawResponse.json();
        setIngredients(result.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getStateData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>...is loading</h2>
      ) : (
        <div className={styles.app}>
          <AppHeader />
          <main className={styles.main}>
            <BurgerIngredients ingredients={ingredients} />
            <BurgerConstructor ingredients={ingredients} />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
