<template>
    <button @click="metamaskSign">{{ user }}</button>
</template>

<script>
export default {
    data() {
        return {
            user: 'Sign in',
        }
    },
    methods: {
        async metamaskSign() {
            const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.user = acc[0];
        }
    },
}
</script>