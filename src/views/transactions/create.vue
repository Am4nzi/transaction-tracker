<template>
  <div>
    <h1 class="text-center mt-4">Add Transaction</h1>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-radio-group row v-model="radioGroup" class="toggle-switch">
          <v-radio
            v-bind:class="{ checked: radioGroup === 'radio-1' }"
            class="radio-input ma-0 white--text"
            label="Debit"
            value="radio-1"
          ></v-radio>
          <v-radio
            v-bind:class="{ checked: radioGroup === 'radio-2' }"
            class="radio-input ma-0"
            label="Credit"
            value="radio-2"
          ></v-radio>
        </v-radio-group>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            label="Description"
            placeholder="Enter your description"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-text-field label="Amount" placeholder="$" outlined
            ></v-text-field
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
      radioGroup: 1,
      switch1: true
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
  color: red !important;
  box-shadow: none;
}

.radio-input:first-of-type {
  border-radius: 10px 0 0 10px;
}

.radio-input:last-of-type {
  border-radius: 0 10px 10px 0;
}
</style>
