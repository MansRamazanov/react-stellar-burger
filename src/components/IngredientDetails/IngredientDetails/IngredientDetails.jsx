import Modal from "../../Modal/Modal";
import React from 'react';

const IngredientDetails = (props) => {
  console.log(props)
  return (
    <>
    <Modal active={props.active} onClose={props.onClose}>
    <p>description...</p>
  </Modal>
    </>
    
  );
};

export default IngredientDetails;
