<template>
    <div>

        <button @click="Add">{{ name }} dan {{ nama }}</button>
        <ChildButton></ChildButton>
    </div>
</template>
<script>
import ChildButton from '@/components/ChildButton.vue';
export default {
    components: {
        ChildButton
    },
    props: ['name', 'id'],
    inject: ['nama'],
    methods: {
        Add() {
            this.$emit('getId', this.id, 2);
        }
    }
}
</script>