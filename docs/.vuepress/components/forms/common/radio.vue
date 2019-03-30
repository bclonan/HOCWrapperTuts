<template lang="html">
    <b-form-radio
      :checked="checked"
      :disabled="disabled"
      :id="id"
      :inline="inline"
      :name="name"
      :required="required"
      :value="value"
      @change="$emit('change', value)"
      @input="$emit('input', value)">
      <slot></slot>
    </b-form-radio>
</template>

<script>
import BFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';

export default {
    components: { BFormRadio },
    props: {
      checked: [String, Object, Number, Boolean],
      disabled: Boolean,
      id: String,
      inline: Boolean,
      name: String,
      required: Boolean,
      value: [Object, String],
    },
};
</script>
