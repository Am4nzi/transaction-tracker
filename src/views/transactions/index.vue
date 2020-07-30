<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="text-center mt-4">My Transactions</h1>
    </div>

    <v-card max-width="500" class="mx-auto">
      <v-subheader>REPORTS</v-subheader>

      <v-list two-line>
        <v-list-item-group
          v-model="selected"
          multiple
          active-class="pink--text"
        >
          <template v-for="(transaction, index) in getTransactions">
            <v-list-item :key="index">
              <template v-slot>
                <v-list-item-icon>
                  <v-icon
                    v-if="transaction.type === 'credit'"
                    class="green--text"
                    >$vuetify.icons.plus</v-icon
                  >
                  <v-icon v-else class="red--text">$vuetify.icons.minus</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="mb-4">
                  <v-list-item-title>{{
                    transaction.description.substring(0, 20)
                  }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action-text
                  class="mb-4"
                  v-text="formatMoney(transaction.amount)"
                ></v-list-item-action-text>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
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

<style>
.transaction {
  display: flex;
  justify-content: space-between;
  width: 20em;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
