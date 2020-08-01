<template>
  <div @keyup.enter="addTransaction">
    <h1 class="text-center">Add Transaction</h1>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-radio-group row v-model="form.type">
          <v-radio
            label="Debit"
            value="debit"
          ></v-radio>
          <v-radio
            label="Credit"
            value="credit"
          ></v-radio>
        </v-radio-group>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <template v-if="errors">
            <ul>
              <li v-for="error in errors" v-bind:key="error">- {{ error }}</li>
            </ul>
          </template>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.description"
            label="Description"
            placeholder="Enter your description"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="form.amount"
            label="Amount"
            placeholder="$"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4" class="text-center">
          <v-btn
            class="add-transaction-button"
            @click.prevent="addTransaction"
            color="primary"
            dark
            large
            >ADD</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
      switch1: true,
      form: {
        type: "debit",
        description: "",
        amount: ""
      },
      errors: []
    };
  },
  methods: {
    addTransaction: function() {
      if (!this.validForm()) {
        return;
      }

      this.form.amount *= 100;

      this.$store.dispatch("addTransaction", this.form);

      this.$router.push({ path: "/transactions" });
    },
    validForm: function() {
      this.errors = [];

      if (!this.form.description) {
        this.errors.push("Description is required");
      }

      if (!this.form.amount) {
        this.errors.push("Amount is required");
      }

      return this.errors.length ? false : true;
    }
  }
};
</script>

<style>
.add-transaction-button {
  font-family: sofia-pro, sans-serif;
  font-weight: 600;
  font-style: normal;
}
</style>
