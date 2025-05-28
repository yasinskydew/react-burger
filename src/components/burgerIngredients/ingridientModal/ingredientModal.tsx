import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../modal/modal';
import IngridientDetails from '../ingridientDetails/ingridientDetails';
import { useIngredients } from '../../../services/store/hooks';

const IngredientModal: React.FC = () => {
  const navigate = useNavigate();
  const { isIngredientModalOpen, setIsIngredientModalOpen } = useIngredients();

  useEffect(() => {
    setIsIngredientModalOpen(true);
  }, [setIsIngredientModalOpen]);

  return (
    <Modal
      title='Детали ингредиента'
      isOpen={isIngredientModalOpen}
      onClose={() => {
        setIsIngredientModalOpen(false);
        navigate(-1);
      }}
    >
      <IngridientDetails />
    </Modal>
  );
};

export default IngredientModal; 