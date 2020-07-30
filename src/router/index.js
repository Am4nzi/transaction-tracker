import Vue from "vue";
import VueRouter from "vue-router";
import TransactionsIndex from '../views/transactions/index';
import TransactionsCreate from '../views/transactions/create';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/transactions/create', component: TransactionsIndex },
    { path: '/transactions/create', component: TransactionsCreate }
  ]
});

export default router;
