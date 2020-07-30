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
                <v-list-item-content>
                  <v-list-item-title
                    v-text="transaction.type"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="transaction.description.substring(0, 20)"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                  <v-list-item-action-text
                    v-text="transaction.amount"
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
  data: () => ({
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?"
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
  }),
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
