<template>
<UCMSFormGroup :id="'lbl' + id" :label="label" :label-for="id" :class="classObject" v-if="displayonly == null">
    <b-form-input :type="type" :data-vv-as="label" :aria-describedby="'hlp' + id" v-validate="validation" :name="id" :maxlength="maxlength" @input="onInput" :value="value" :disabled="disabled" :plaintext="plaintext" :placeholder="placeholder" :id="id" :class="{ 'is-invalid': errors.has('txt' + id) }" />
    <b-form-text :id="'hlp' + id">{{helpText}}</b-form-text>
    <div class="invalid-feedback">{{ errors.first(id) }}</div>
</UCMSFormGroup>
<div v-else-if="displayonly =='Y'">
	<dpLabel :id="id" :label="label"></dpLabel>
	<p>{{value}}</p>
</div>
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
        type: {
            type: String,
        },
        helpText: {
            type: String,
        },
        plaintext: {
            type: String,
        },
        placeholder: String,
        maxlength: {
            type: String,
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
        displayonly: {
            type: String,
        },
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
