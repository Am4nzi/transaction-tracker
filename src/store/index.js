import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [
    ]
  },
  getters: {
    getTransactions: function(state) {
      return state.transactions;
    },
    getTotal: function(state) {
      let balance = 0;

      if (state.transactions.length) {
        state.transactions.forEach(transaction => {
          if (transaction.type === "credit") {
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
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
    },
    removeTransaction: function(state, index) {
      state.transactions.splice(index, 1);
    }
  },
  actions: {
    addTransaction: function(context, transaction) {
      context.commit("addTransaction", transaction);
    },
    removeTransaction: function(context, index) {
      context.commit("removeTransaction", index);
    }
  },
  modules: {}
});
