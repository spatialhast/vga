<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <vuetify-google-autocomplete
          id="map"
          label="Search Address"
          append-icon="search"
          clearable
          country="GB"
          required
          v-on:placechanged="getAddressData"
        ></vuetify-google-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      address: null
    };
  },
  methods: {
    getAddressData: function(addressData, placeResultData) {
      this.address = addressData;
      console.log(addressData);
    }
  }
};
</script>

<style>
</style>
