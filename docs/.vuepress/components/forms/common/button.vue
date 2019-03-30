<template>
<b-button :variant="variant" @click="onClick">
    <slot />
</b-button>
</template>

<script>
import BButton from 'bootstrap-vue/es/components/button/button';

export default {
    components: {
        BButton,
    },
    props: {
        variant: {
            type: String,
        },
    },
    methods: {
        onClick (value) {
            this.$emit('click', value);
        },
    },
};
</script>
