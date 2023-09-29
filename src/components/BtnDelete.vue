<template>
    <button @click="Deleted">Delete</button>
</template>
<script>
export default {
    props: ['id'],
    methods: {
        Deleted() {
            this.$emit('Delete-event', this.id)
        }
    }
}
</script>