<template>
  <UCMSFormGroup
    :class="classObject"
    :id="`lbl${id}`"
    :label="label"
    :label-for="id">
      <b-form-file
        class="text-truncate"
        ref="file"
        v-validate="validation"
        :browse-text="browseText"
        :class="isInvalid(errors)"
        :disabled="disabled"
        :id="id"
        :maxlength="maxlength"
        :name="id"
        :plaintext="plaintext"
        :placeholder="placeholder"
        :value="value"
        @change="onChange"
        @input="onInput" />
      <b-form-text
        :id="`hlp${id}`">
        {{helpText}}
      </b-form-text>
      <div class="invalid-feedback">{{errors.first(this.id)}}</div>
  </UCMSFormGroup>
</template>

<script>
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

export default {
    components: { bFormInput },
    props: {
        accept: String,
        browseText: String,
        disabled: Boolean,
        helpText: String,
        id: String,
        label: String,
        labelFor: String,
        maxlength: String,
        multiple: Boolean,
        plaintext: String,
        placeholder: {
          default: 'No file selected',
          type: String,
        },
        required: Boolean,
        validation: String,
        value: Object,
    },
    methods: {
        isInvalid (errors) {
          return { 'is-invalid': errors.has(`txt${this.id}`) };
        },
        onChange (value) {
          this.$emit('change', value);
        },
        onInput (value) {
          this.$emit('input', value);
        },
    },
    computed: {
        classObject () {
            if (this.validation) {
                return {
                    'v-required': this.validation.substring(0, 8) === 'required',
                };
            }
        },
    },
    watch: {
      value (file) {
        // This will remove selected file from input
        if (file === null) this.$refs.file.reset();
      },
    },
};
</script>
