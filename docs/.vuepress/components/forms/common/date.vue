<template>
<UCMSFormGroup :id="'lbl' + id" :label="label" :label-for="id" :class="classObject">
    <v-date-picker mode='single' v-model='selectedDates' @dayclick='toggleCalendar' :popover-visibility="visibility" @input="handleInput">
        <div class="input-group date-control" slot-scope='{ inputValue, updateValue }'>
            <input
                type="text"
                :disabled="disabled"
                :id="id"
                :name="id"
                :data-vv-as="label"
                v-validate="validation"
                class="form-control calendar-input"
                :aria-describedby="'hlp' + id"
                @keyup.esc='updateValue(selectedDates, { formatInput: false, hidePopover: true })'
                @input='updateValue($event.target.value, { formatInput: false, hidePopover: true })'
                @change='updateValue($event.target.value, { formatInput: false, hidePopover: true })'
                @blur="closeCalendar()"
                :value="inputValue" />
            <div class="input-group-append">
                <b-link class="input-group-text" @click="toggleCalendar"><i class="fa fa-calendar"></i><span class="sr-only">Open the {{label}} Calendar.</span></b-link>
            </div>
        </div>
    </v-date-picker>
    <b-form-text :id="'hlp' + id">{{helpText}}</b-form-text>
    <div class="invalid-feedback">{{ errors.first(id) }}</div>
</UCMSFormGroup>
</template>

<script>
import moment from 'moment';

export default {
	name: 'Calendar',
	props: {
		disabled: Boolean,
		value: {
			type: String,
		},
		helpText: {
			type: String,
			default: 'MM/DD/YYYY',
		},
		id: {
			type: String,
		},
		label: {
			type: String,
		},
		labelFor: {
			type: String,
		},
		validation: {
			type: String,
		},
		inputFormat: {
			type: String,
			default: 'String',
		},
		outputFormat: {
			type: String,
			default: 'String',
		},
		specificStringFormat: {
			type: String,
			default: null,
		},
	},
	watch: {
		value (value) {
			this.selectedDates = new Date(value);
		},
	},
	model: {
		prop: 'value',
		event: 'input',
	},
	data () {
		return {
			selectedDates: null,
			visibility: 'hidden',
			valueTemp: null,
		};
	},
	mounted () {
		if (this.value !== null) {
			this.valueTemp = Object.assign(this.value);
			if (this.inputFormat === 'unix') {
				this.valueTemp = this.valueTemp.toString().slice(0, -3);
				this.valueTemp = moment.unix(this.valueTemp).format('MM/DD/YYYY');
				this.valueTemp = new Date(this.valueTemp);
			} else {
				this.valueTemp = moment(String(this.valueTemp)).format('MM/DD/YYYY');
				this.valueTemp = new Date(this.valueTemp);
			}
			this.selectedDates = this.valueTemp;
		} else {
			this.selectedDates = this.value;
		}
	},
	methods: {
		handleInput (e) {
			if (this.outputFormat === 'String' && this.specificStringFormat != null) {
				this.selectedDates = moment(String(this.selectedDates)).format(this.specificStringFormat);
			} else {
				this.selectedDates = moment(this.selectedDates).format('MM/DD/YYYY');
			}

			// Logic can be added here if we need back some other format output from this component
			this.$emit('input', this.selectedDates);
			this.$emit('changed');
		},
		openCalendar () {
			this.visibility = 'visible';
		},
		closeCalendar () {
			this.visibility = 'hidden';
		},
		toggleCalendar () {
			this.visibility = this.visibility === 'hidden' ? 'visible' : 'hidden';
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
