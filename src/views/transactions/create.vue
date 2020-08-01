<template>
  <div @keyup.enter="addTransaction">
    <h1 class="text-center primary--text">Add Transaction</h1>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-radio-group row v-model="form.type" class="mt-1">
          <v-radio label="Debit" value="debit"></v-radio>
          <v-radio label="Credit" value="credit"></v-radio>
        </v-radio-group>
      </v-row>

      <v-row v-if="errors" class="d-flex justify-center mt-n6">
        <v-col cols="12" sm="6" md="6">
          <template>
            <ul>
              <li v-for="error in errors" v-bind:key="error">- {{ error }}</li>
            </ul>
          </template>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8" md="6" lg="5" class="pb-0">
          <v-text-field
            class="custom-label-color"
            v-model="form.description"
            label="Description"
            placeholder="Enter your description"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8" md="6" lg="5" class="pb-0">
          <v-text-field
            class="custom-label-color"
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
.custom-label-color .v-label {
  color: #1d154a !important;
  opacity: 1;
}
</style>
