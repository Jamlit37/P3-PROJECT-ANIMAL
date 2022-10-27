import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket($ticket: AddTicketInput!) {
    addTicket(ticket: $ticket) {
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
export const ADD_PRODUCT = gql`
  mutation addProduct($product: AddProductInput!) {
    addProduct(product: $product) {
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

export const REMOVE_TICKET = gql`
  mutation removeTicket($ticketId: String!) {
    removeTicket(ticketId: $ticketId) {
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

export const REMOVE_PRODUCT = gql`
  mutation removeProduct($productId: String!) {
    removeProduct(productId: $productId) {
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