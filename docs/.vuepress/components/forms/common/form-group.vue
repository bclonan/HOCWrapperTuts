<template>
	<b-form-group v-bind="$props">
		<slot></slot>
	</b-form-group>
</template>

<script>
import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group';

const btnProps = Object.assign({}, bFormGroup.props);

export default {
	components: {
		bFormGroup,
	},
	props: {
		...btnProps,
	},
}
</script>
