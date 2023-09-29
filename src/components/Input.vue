<template>
    <input :value="value" type="text" @input="$emit('update:input', $event.target.value)">
</template>
<script>
export default {
    props: ['value'],
    methods: {

    }
}
</script>