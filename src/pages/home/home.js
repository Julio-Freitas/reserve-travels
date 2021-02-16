import React, { useState, useEffect } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { addReserve } from '../../store/modules/reserve/actions';

import './styles.css';

export default function Home() {
  const [trips, setTrips] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadApi() {
      const { data } = await api.get('/trips');
      setTrips(data);
    }
    loadApi();
  }, []);

  const _handleAdd = (trip) => dispatch(addReserve(trip));

  const combineAlfa = (number) => {
    const baseCharLoop = 'A'.charCodeAt(0);
    const baseCodeAZ = 65 + number;
    let letters = '';
    if (baseCodeAZ <= 90) {
      letters = String.fromCharCode(baseCodeAZ);
    } else {
      do {
        number -= 1;
        letters = String.fromCharCode(baseCharLoop + (number % 25)) + letters;
        // eslint-disable-next-line no-bitwise
        number = (number / 25) >> 0;
      } while (number > 0);
    }
    return letters;
  };

  for (let index = 0; index <= 90; index += 1) {
    combineAlfa(index);
  }

  return (
    <div className="container-trips">
      {trips.map((trip) => (
        <div className="trip-card" key={trip.id}>
          <img src={trip.image} alt={trip.title} />
          <strong className="trip-tittle">{trip.title}</strong>
          <strong className={`trip-status-${trip.status ? 'on' : 'off'}`}>
            {trip.status ? 'disponível' : 'indisponível'}
          </strong>
          <button
            type="button"
            onClick={() => _handleAdd(trip)}
            className="trip-button"
          >
            <div>
              <MdFlightTakeoff />
            </div>
            <span>Solicitar reserva</span>
          </button>
        </div>
      ))}
    </div>
  );
}
