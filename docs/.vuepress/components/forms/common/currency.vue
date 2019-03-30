<template>
<UCMSFormGroup :id="'lbl' + id" :label="label" :label-for="id" :class="classObject">
    <b-input-group prepend="$">
        <b-form-input :data-vv-as="label" v-validate="validation" :name="id" :maxlength="maxlength" @input="onInput" :value="value" :disabled="disabled" :plaintext="plaintext" :id="id" :class="{ 'is-invalid': errors.has('txt' + id) }" class="text-right" />
    </b-input-group>
    <b-form-text :id="'hlp' + id">{{helpText}}</b-form-text>
    <div class="invalid-feedback">{{ errors.first(id) }}</div>
</UCMSFormGroup>
</template>

<script>
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input';

export default {
    components: {
        bFormInput,
    },
    props: {
        id: {
            type: String,
        },
        plaintext: {
            type: String,
        },
        maxlength: {
            type: Number,
        },
        label: {
            type: String,
        },
        labelFor: {
            type: String,
        },
        value: {
            type: String,
        },
        validation: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
        helpText: String,
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
