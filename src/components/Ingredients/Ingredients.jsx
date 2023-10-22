import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Ingredients.module.css'

const Ingredients = (props) => {
    // console.log(props)
    return (
            <button className={styles.container} key={props.id} onClick={() => props.setActive(props.ingredient)}>
                    <img src={props.img} alt={props.type} className='pb-1'/>
                    <span className={styles.price}>
                    <span className="text text_type_digits-default pr-2">{props.price}</span>
                    <CurrencyIcon type="primary" />
                    </span>
                    <span className={styles.name}>
                        <p className="text text_type_main-default pt-1 pb-6">{props.name}</p>
                    </span>         
            </button>
        )
};

export default Ingredients;
