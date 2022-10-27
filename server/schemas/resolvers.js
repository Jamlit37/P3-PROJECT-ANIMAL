const { User, Ticket } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        addTicket: async (parent, { ticket }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { addTickets: ticket } },
                    { new: true }
                )
                return updatedUser;
            }
        },

        addProduct: async (parent, { ticketId, quantity }, context) => {
            if (context.user) {
                return Ticket.findOneAndUpdate(
                    { _id: ticketId },
                    {
                        $addToSet: {
                            products: { quantity, price },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },


        removeTicket: async (parent, { ticketId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { addTicket: { ticketId: ticketId } } },
                    { new: true }
                )
                return updatedUser;
            }
        },

        removeProduct: async (parent, { ticketId, productId }, context) => {
            if (context.user) {
                return Ticket.findOneAndUpdate(
                    { _id: ticketId },
                    {
                        $pull: {
                            products: {
                                _id: productId,
                                price,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },


}


module.exports = resolvers;