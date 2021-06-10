<template>
  <header
    class="flex flex-row justify-between items-center py-px px-6 relative"
  >
    <router-link to="/">
      <img src="../assets/logo.png" class="h-12" />
    </router-link>
    <nav class="flex flex-row space-x-12 w-auto p-4 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/create-nft">Create NFT</router-link>
      <div v-if="hasInjectedEthereum">
        <InstallMetamaskButton></InstallMetamaskButton>
      </div>
      <div v-else-if="this.$store.state.currentUser">
        <CurrentUserButton></CurrentUserButton>
      </div>
      <div v-else>
        <ConnectWalletButton></ConnectWalletButton>
      </div>
    </nav>
  </header>
</template>

<script>
import ConnectWalletButton from "@/components/ConnectWalletButton.vue";
import CurrentUserButton from "@/components/CurrentUserButton.vue";
import InstallMetamaskButton from "@/components/InstallMetamaskButton.vue";

export default {
  components: {
    ConnectWalletButton,
    CurrentUserButton,
    InstallMetamaskButton,
  },
  computed: {
    hasInjectedEthereum() {
      return !window.ethereum ? true : false;
    },
  },
};
</script>
