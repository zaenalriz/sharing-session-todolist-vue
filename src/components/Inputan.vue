<template>
    <input type="text" v-bind="$attrs" @input="$emit('update:inputan', $event.target.value)" class="text">
</template>
<script>
export default {
    props: ['value']
}
</script>