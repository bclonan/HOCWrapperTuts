<template lang="html">
    <b-form-radio-group
      :checked="checked"
      :disabled="disabled"
      :id="id"
      :inline="inline"
      :options="options"
      :name="name"
      :required="required"
      :stacked="stacked"
      @change="onChange"
      @input="onInput">
      <slot></slot>
      <!-- <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback> -->
    </b-form-radio-group>
</template>

<script>
import BFormRadio from 'bootstrap-vue/es/components/form-radio/form-radio';
import BFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group';

export default {
  components: {
    BFormRadio,
    BFormRadioGroup,
  },
  methods: {
    onChange (value) {
      this.$emit('change', value);
    },
    onInput (value) {
      this.$emit('input', value);
    },
  },
  props: {
    ariaInvalid: [Boolean, String],
    checked: [String, Object, Number, Boolean],
    disabled: Boolean,
    id: String,
    inline: Boolean,
    name: String,
    options: [Array, Object],
    required: Boolean,
    stacked: Boolean,
    state: [Boolean, String],
    value: Object,
  },
};
</script>
