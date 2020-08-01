<template>
  <v-app-bar app color="#15233f">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-bind="attrs"
          v-on="on"
          class="white--text"
        ></v-app-bar-nav-icon>
      </template>
      <v-list>
        <router-link to="/transactions">
          <v-list-item>
            <v-list-item-title class="primary--text">My Transactions</v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to="/transactions/create">
              <v-list-item>
                  <v-list-item-title class="primary--text">Add Transaction</v-list-item-title>
              </v-list-item>
          </router-link>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <router-link to="/transactions">
      <v-toolbar-title class="white--text">Transaction Tracker</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>