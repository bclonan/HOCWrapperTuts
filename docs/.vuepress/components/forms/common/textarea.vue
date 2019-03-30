<template>
<UCMSFormGroup
  :id="`lbl${id}`"
  :label="label"
  :label-for="`lbl${id}`"
  :class="classObject"
>
    <b-form-textarea
      :aria-describedby="`hlp${id}`"
      :class="{ 'is-invalid': errors.has(`txt${id}`) }"
      :data-vv-as="label"
      :disabled="disabled"
      :id="id"
      :maxlength="maxlength"
      :name="id"
      :plaintext="plaintext"
      :rows="rows"
      :type="type"
      :value="value"
      @input="onInput"
      v-validate="validation"
    />
    <b-form-text :id="`hlp${id}`">{{helpText}}</b-form-text>
    <div class="invalid-feedback">{{errors.first(id)}}</div>
</UCMSFormGroup>
</template>

<script>
import BFormTextarea from 'bootstrap-vue/es/components/form-textarea/form-textarea';

export default {
    components: {
        BFormTextarea,
    },
    props: {
        id: String,
        type: String,
        helpText: String,
        plaintext: String,
        maxlength: String,
        label: String,
        labelFor: String,
        value: String,
        validation: String,
        disabled: Boolean,
        rows: Number,
    },
    methods: {
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
};
</script>
