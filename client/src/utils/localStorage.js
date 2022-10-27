export const getAddTicketIds = () => {
  const addTicketIds = localStorage.getItem('add_ticket')
    ? JSON.parse(localStorage.getItem('add_ticket'))
    : [];

  return addTicketIds;
};

export const addTicketIds = (ticketIdArr) => {
  if (ticketIdArr.length) {
    localStorage.setItem('add_ticket', JSON.stringify(ticketIdArr));
  } else {
    localStorage.removeItem('add_ticket');
  }
};

export const removeTicketId = (ticketId) => {
  const addTicketIds = localStorage.getItem('add_ticket')
    ? JSON.parse(localStorage.getItem('add_ticket'))
    : null;

  if (!addTicketIds) {
    return false;
  }

  const updatedAddTicketIds = addTicketIds?.filter((addTicketId) => addTicketId !== ticketId);
  localStorage.setItem('add_ticket', JSON.stringify(updatedAddTicketIds));

  return true;
};
