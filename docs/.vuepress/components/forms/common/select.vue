<template>
<UCMSFormGroup :class="classObject" :id="`lbl${id}`" :label="label" :label-for="`dd${id}`">
	<b-form-select :id="`dd${id}`" v-validate="validation" :class="{ 'is-invalid': errors.has('dd' + id) }" :disabled="disabled" :name="id" :options="newOptions" :value="value" @input="onInput" :select-size="selectSize" :multiple="multiple">
		<template slot="first">
			<option :value="null">{{placeholderText}}</option>
		</template>
	</b-form-select>
	<b-form-text :id="'hlp' + id">{{helpText}}</b-form-text>
	<div class="invalid-feedback">{{ errors.first(id) }}</div>
</UCMSFormGroup>
</template>

<script>
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select';
import {
	mapKeys,
} from 'lodash';

export default {
    components: {
        bFormSelect,
    },
    props: {
        disabled: Boolean,
        selectValue: {
            type: String,
            default: 'ctryCd',
        },
        selectText: {
            type: String,
            default: 'description',
        },
        options: {
            type: Array,
        },
        id: {
            type: String,
        },
        maxlength: {
            type: String,
        },
        placeholderText: {
            type: String,
            default: '- Select One -',
        },
        label: {
            type: String,
        },
        labelFor: {
            type: String,
        },
        value: {
            type: String,
            default: null,
        },
        validation: {
            type: String,
        },
        selectSize: String,
        multiple: String,
        helpText: String,
    },
    methods: {
        onInput (value) {
        	if(value !=null) {
        		this.$emit('input', value.toString());
        	} else {
            	this.$emit('input', null);
            }
        },
    },
    computed: {
        classObject () {
            if (this.validation) {
                return {
                    'v-required': this.validation.substring(0, 8) === 'required',
                };
            } else {
				return this.validation;
			}
        },
        newOptions (options) {
            const dataTemp = [];
            for (let i = 0; i < this.options.length; i++) {
                dataTemp[i] = mapKeys(this.options[i], (value, key) => {
                    if (key === this.selectValue) {
                        return 'value';
                    }
                    if (key === this.selectText) {
                        return 'text';
                    }
                    return key;
                });
            }
            return dataTemp;
        },
    },
};
</script>
