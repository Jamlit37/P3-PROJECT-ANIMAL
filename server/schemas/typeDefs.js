const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        tickets: [Ticket]    
    }
    type Ticket {
      _id: ID
      title: String
      ticketId: String
      products: [Product]
  }
    type Product {
    _id: ID
    quantity: Float
    productId: String
    price: Float
  }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    input AddTicketInput {
        title: String
        ticketId: String
        products: String
    }, 
    input AddProductInput {
        quantity: String
        productId: String
        price: String
        }, 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTicket(ticket: AddTicketInput): User
        addProduct(product: AddProductInput): User
        removeTicket(ticketId: String!): User
        removeProduct(productId: String!): User

}
`;

module.exports = typeDefs;