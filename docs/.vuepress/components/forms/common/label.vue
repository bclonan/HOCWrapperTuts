<template>
    <dpLabel :id="id" :label="label"></dpLabel>
</template>
<script>
    import dpLabel from '@poire-io/dpatterns-vue';

    export default {
        extends: dpLabel,
        props: {
            id: {
                type: String,
            },
            label: {
                type: String,
            },
        },
    };
</script>
