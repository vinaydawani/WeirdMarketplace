<template>
  <div
    id="homeJumbotron"
    class="py-32"
    style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
  >
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-white">
        Welcome to Weird Marketplace!
      </h2>
      <h3 class="text-2xl mb-8 text-gray-200">Buy, mint, sell NFTs</h3>
      <ConnectWalletButton></ConnectWalletButton>
    </div>
  </div>
</template>

<script>
import ConnectWalletButton from "@/components/ConnectWalletButton.vue";
export default {
  components: { ConnectWalletButton },
};
</script>

<style>
#homeJumbotron {
  text-align: center;
}
</style>
