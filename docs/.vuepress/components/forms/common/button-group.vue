<template>
    <dpBtnGroup>
        <slot></slot>
    </dpBtnGroup>
</template>
<script>
    import dpBtnGroup from '@poire-io/dpatterns-vue';

    export default {
        extends: dpBtnGroup,
    };
</script>
