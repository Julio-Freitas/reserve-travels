export function addReserve(trip) {
  return {
    type: 'ADD_RESERVE',
    trip,
  };
}

export function removeReserve(reserve) {
  return { type: 'REMOVE_RESERVE', reserve };
}

export function updateAmountReserve(id, amount) {
  return {
    type: 'UPDATE_RESERVE',
    id,
    amount,
  };
}
