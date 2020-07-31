import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [
      { type: 'debit', description: 'Eating Out', amount: 3500 },
      { type: 'debit', description: 'Weekly City Transport', amount: 7500 },
      { type: 'credit', description: 'Payroll', amount: 100000 },
      { type: 'debit', description: 'Airplane Tickets', amount: 38700 },
      { type: 'credit', description: 'Freelance Project', amount: 300000 },
    ]
  },
  getters: {
    getTransactions: function (state) {
      return state.transactions;
    },
    getTotal: function (state) {
      let balance = 0;

      if (state.transactions.length) {
        state.transactions.forEach(transaction => {
          if (transaction.type === 'credit') {
            balance += transaction.amount;
          } else {
            balance -= transaction.amount;
          }
        });
      }

      return balance;
    }
  },
  mutations: {
    addTransaction: function(state, transaction) {
      state.transactions.unshift(
          JSON.parse(JSON.stringify(transaction))
      );
      console.log(state.transactions);
    }
  },
  actions: {
    addTransaction: function(context, transaction) {
      context.commit("addTransaction", transaction);
    }
  },
  modules: {}
});
