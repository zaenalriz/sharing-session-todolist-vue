<template>
    <button @click="Submit">Tambah </button>
</template>
<script>
export default {
    methods: {
        Submit() {
            this.$emit('click-tambah');
        }
    }
}
</script>