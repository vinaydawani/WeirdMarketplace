<template>
  <div class="container mx-auto px-60 py-2">
    <h2 class="text-4xl mb-4">Create new item</h2>
    <CreateForm></CreateForm>
  </div>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";

export default {
  name: "CreateNFT",
  components: {
    CreateForm,
  },
};
</script>
