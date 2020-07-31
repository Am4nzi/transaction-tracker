import Vue from "vue";
import VueRouter from "vue-router";
import TransactionsIndex from '../views/transactions/index';
import TransactionsCreate from '../views/transactions/create';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: TransactionsIndex },
    { path: '/transactions', component: TransactionsIndex },
    { path: '/transactions/create', component: TransactionsCreate }
  ]
});

export default router;
