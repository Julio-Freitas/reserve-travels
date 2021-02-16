import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import './styles.css';
import {
  removeReserve,
  updateAmountReserve,
} from '../../store/modules/reserve/actions';

export default function Reserves() {
  const reserves = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  const _handleRemoveReserve = (reserve) => dispatch(removeReserve(reserve));

  const _handleDecrementAmount = (reserve) =>
    dispatch(updateAmountReserve(reserve.id, reserve.amount - 1));

  const _handleIncrementAmount = (reserve) =>
    dispatch(updateAmountReserve(reserve.id, reserve.amount + 1));

  return (
    <div className="container-reserves">
      <h1 className="title-reserves">
        Você soliticou {reserves.length} reservas
      </h1>
      {reserves.map((reserve) => (
        <div className="reserves">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div className="reserves-quantity">
            <MdAddCircle onClick={() => _handleIncrementAmount(reserve)} />
            <input type="text" readOnly value={reserve.amount} min="1" />
            <MdRemoveCircle onClick={() => _handleDecrementAmount(reserve)} />
          </div>
          <button type="button" onClick={() => _handleRemoveReserve(reserve)}>
            <MdDelete />
          </button>
        </div>
      ))}

      <footer className="footer-reserves">
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}
