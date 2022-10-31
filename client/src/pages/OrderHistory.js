import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';


function OrderHistory() {
  const { data } = useQuery(GET_ME);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.username} 
            </h2>
            {user.ticket.map((ticket) => (
              <div key={ticket.ticketId} className="my-2">
                <h3>
                  {new Date(parseInt(ticket.title)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {ticket.title.map(({  title }, index) => (
                    <div key={index} className="card px-1 py-1">
  
                      <div>
                        <span>${title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
