<template>
  <button
    id="currentUserButton"
    class="w-60 h-12 border-gray-700 border-solid border-2 rounded-md"
  >
    <img :src="createBlockie" class="w-6 h-6 mx-2 mb-1 inline" />
    <span class="inline pl-1">{{ getCurrentUser }}</span>
  </button>
</template>

<script>
import store from "../store/index";
import makeBlockie from "ethereum-blockies-base64";

window.ethereum.on("accountsChanged", function (accounts) {
  store.commit({
    type: "setCurrentUser",
    value: accounts[0],
  });
});

export default {
  methods: {},
  computed: {
    getCurrentUser() {
      let acc = this.$store.state.currentUser;
      let userString =
        acc.substring(0, 6) +
        "..." +
        acc.substring(acc.length - 5, acc.length - 1);
      return userString;
    },
    createBlockie() {
      return makeBlockie(this.$store.state.currentUser);
    },
  },
  components: {},
};
</script>
