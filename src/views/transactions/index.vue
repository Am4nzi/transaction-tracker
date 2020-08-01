<template>
  <div>
    <h1 class="text-center primary--text">My Transactions</h1>
    <v-container fluid class="ma-0">
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="10" md="6" lg="6" xl="12">
          <v-card outlined max-width="500" class="mx-auto pb-3">
            <v-list two-line disabled>
              <v-list-item-group>
                <template v-for="(transaction, index) in getTransactions">
                  <v-list-item :key="index">
                    <template v-slot>
                      <v-list-item-icon>
                        <v-icon
                          v-if="transaction.type === 'credit'"
                          class="green--text"
                          >$vuetify.icons.plus</v-icon
                        >
                        <v-icon v-else class="red--text"
                          >$vuetify.icons.minus</v-icon
                        >
                      </v-list-item-icon>
                      <v-list-item-content class="mb-4">
                        <v-list-item-title class="primary--text">{{
                          transaction.description.substring(0, 25)
                        }}</v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action-text
                        v-if="transaction.type === 'credit'"
                        class="mb-4 text-subtitle-2 green--text"
                        v-text="formatMoney(transaction.amount)"
                      ></v-list-item-action-text>
                      <v-list-item-action-text
                        v-else
                        class="mb-4 text-subtitle-2 red--text"
                        v-text="formatMoney(transaction.amount)"
                      ></v-list-item-action-text>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>

            <v-btn absolute dark fab bottom right color="primary">
              <router-link to="/transactions/create" class="white--text"
                ><v-icon>mdi-plus</v-icon></router-link
              >
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const mapGetters = require("vuex")["mapGetters"];

module.exports = {
  computed: {
    ...mapGetters(["getTransactions"])
  }
};
</script>
