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
    }, 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTicket(ticket: AddTicketInput): User
        removeTicket(ticketId: String!): User

}
`;

module.exports = typeDefs;