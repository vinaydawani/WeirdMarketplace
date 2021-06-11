<template>
  <div class="container mx-auto py-2">
    <h2 class="text-4xl">Create new item</h2>
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
