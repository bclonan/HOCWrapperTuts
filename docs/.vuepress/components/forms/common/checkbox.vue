<template>
<UCMSFormGroup :id="'lbl' + id" :label="label" :label-for="id" :class="classObject" v-if="vertical=='Y'">
    <b-form-checkbox v-validate="customValidation" v-model="valueLocal" :name="name" @input="onInput" @change="$emit('input', $event)" :disabled="disabled" :checked="checked" :unchecked-value="unchecked" :value="value" :class="{ 'input':true, 'is-invalid': errors.has(name) }">
    </b-form-checkbox>
    <div class="invalid-feedback" v-show="errors.has(name)">{{ errors.first(name) }}</div>
</UCMSFormGroup>
<div v-else-if="vertical !='Y'">
    <b-form-checkbox v-validate="customValidation" v-model="valueLocal" :name="name" @input="onInput" @change="$emit('input', $event)" :unchecked-value="unchecked" :disabled="disabled" :value="checkedValue" :class="{ 'input':true, 'is-invalid': errors.has(name) }">
        <dpLabel :id="id" :label="label"></dpLabel>
    </b-form-checkbox>
    <div class="invalid-feedback" v-show="errors.has(name)">{{ errors.first(name) }}</div>
</div>
</template>

<script>
import {
    FormCheckbox,
} from 'bootstrap-vue/es/components';

export default {
    mounted() {
        this.valueLocal = this.value;
        self = this;
        let result = true;
        this.$validator.extend('customChkBox', {

            validate(value, field) {
                if (value === null || value === self.unchecked) {
                    result = false;
                } else {
                    result = true;
                }
                if (self.backup === null) {
                    value = self.backup;
                    self.resetBackup();
                    self.$emit('input', value);
                }
                return result;
            },
            getMessage(field, value) {
                if (!(result)) {
                    return field + ' is required.';
                }
            },

        });
    },
    components: {
        FormCheckbox,
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
            default: 'N',
        },
        vertical: {
            type: String,
        },
        disabled: {
            type: Boolean,
        },
    },
    methods: {
        onChange (value) {
          this.$emit('change', value);
        },
        onInput(value) {
            self = this;
            this.$emit('input', value);
            this.$emit('checked', {
              id: this.id,
              checked: value,
            });
        },
        resetBackup() {
            this.backup = 'N';
        },
        // TODO: Fix how validation is being applied
        updateState () {
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
    watch: {
        checked (isChecked) {
          // Set v-model to equal the current checked or unchecked value
          this.valueLocal = isChecked ? this.checkedValue : this.uncheckedValue;
        },
        value(value) {
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
    computed: {
        customValidation() {

            if (this.validation === 'required') {
                return {
                    'customChkBox': this.validation.substring(0, 8) === 'required',
                };
            }
        },
        classObject() {
            if (this.validation) {
                return {
                    'v-required': this.validation.substring(0, 8) === 'required',
                };
            }
        },
    },
    data() {
        return {
            valueLocal: null,
            self: null,
            backup: null,
            isNull: false,
        };
    },
};
</script>
