<template>
<UCMSFormGroup
  :class="classObject"
  :id="'lbl' + id"
  :label="label"
  :label-for="id">
    <b-form-checkbox-group
        :id="id"
        :name="name"
        v-model="valueLocal"
        :options="options"
        v-validate="customValidation"
        :class="{
            'input':true,
            'is-invalid': errors.has(name)
        }"
        :unchecked-value="unchecked"
        :value="checkedValue"
        @change="$emit('input', $event)"
        @input="onInput">
    </b-form-checkbox-group>
    <div class="invalid-feedback" v-show="errors.has(name)">{{ errors.first(name) }}</div>
    </UCMSFormGroup>
</template>
<script>
import BFormCheckboxGroup from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group';

export default {
    mounted () {
    },
    components: {
        BFormCheckboxGroup,
    },
    props: {
        value: {
            type: String,
            default: null,
        },
        checked: Boolean,
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        label: {
            type: String,
        },
        labelFor: {
            type: String,
        },
        checkedValue: {
            type: String,
            default: 'Y',
        },
        unchecked: {
            type: String,
            default: 'N',
        },
        validation: {
            type: String,
        },
        options: {
             type: String,
        },
    },
    methods: {
        classObject () {
            if (this.validation === 'required') {
                this.customValidation = 'customChkBox';
            }
            if (this.validation) {
                return {
                    'v-required': this.validation.substring(0, 8) === 'required',
                };
            }
        },
        onInput (value) {
            // self = this;
            this.$emit('input', value);
        },
    },
    watch: {
        value (value) {
            if (!(this.isNull)) {
                this.backup = value;
            }
            if (value === null) {
                this.isNull = true;
            }
            this.valueLocal = value;
            if (this.valueLocal == null && this.validation === 'required') {
                this.valueLocal = 'N';
            }
        },
    },
    data () {
        return {
            valueLocal: null,
            customValidation: '',
            // self: null,
            backup: null,
            isNull: false,
        };
    },
};
</script>
