import { gql } from '@apollo/client';
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      tickets {
       ticketId
       purchaseDate
       products {
        quantity
        productId
        price
        purchasedAt
       }
      }
    }
  }
`;