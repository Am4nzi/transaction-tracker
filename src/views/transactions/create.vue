<template>
  <div>
    <h1 class="text-center mt-4">Add Transaction</h1>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-radio-group row v-model="radioGroup" class="toggle-switch">
          <v-radio
            v-bind:class="{ checked: radioGroup === 'debit' }"
            class="radio-input ma-0 white--text"
            label="Debit"
            value="debit"
          ></v-radio>
          <v-radio
            v-bind:class="{ checked: radioGroup === 'credit' }"
            class="radio-input ma-0"
            label="Credit"
            value="credit"
          ></v-radio>
        </v-radio-group>
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
          <v-btn color="blue darken-4" dark large>ADD</v-btn>
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
      radioGroup: 1,
      switch1: true,
      form: {
        type: "credit",
        description: "",
        amount: ""
      }
    };
  }
};
</script>

<style>
.radio-input {
  background-color: #ebf8ff;
  color: white !important;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 1.2em 1.6em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.checked {
  box-shadow: none;
  background-color: #dcecf4;
}

.radio-input:first-of-type {
  border-radius: 10px 0 0 10px;
}

.radio-input:last-of-type {
  border-radius: 0 10px 10px 0;
}
</style>
