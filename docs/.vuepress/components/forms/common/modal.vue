<template>
<b-modal :id="id" :title="title" :ref="reference">
    <GlobalModalError :error="error" />
    <GlobalModalWarning :warning="warning" />
    <GlobalModalInformation :information="information" />
    <GlobalModalSuccess v-if="modalSuccess === 'true'" :success="success" />
    <slot name="body_details" />
    <template slot="modal-footer">
        <slot name="footer_details" />
    </template>
</b-modal>
</template>

<script>
import BModal from 'bootstrap-vue/es/components/modal/modal';
import GlobalModalError from '@/components/common/modal-global-error';
import GlobalModalInformation from '@/components/common/modal-global-information';
import GlobalModalWarning from '@/components/common/modal-global-warning';
import GlobalModalSuccess from '@/components/common/modal-global-success';

export default {
    created () {
        this.$root.$on('bv::modal::show', (bvEvent, modalId) => {
            this.$store.commit('SET_ERRORS', '');
            this.$store.commit('SET_PAGE_ERRORS', '');
            this.$store.commit('SET_DISABLE_PAGE_ERRORS', true);
        });
        this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
            this.$store.commit('SET_ERRORS', '');
            this.$store.commit('SET_PAGE_ERRORS', '');
            this.$store.commit('SET_PAGE_WARNINGS', '');
            this.$store.commit('SET_PAGE_INFO', '');
            this.$store.commit('SET_SUCCESS', '');
            this.$store.commit('SET_DISABLE_PAGE_ERRORS', false);
        });
    },
    components: {
        BModal,
        GlobalModalError,
        GlobalModalInformation,
        GlobalModalWarning,
        GlobalModalSuccess,
    },
    props: {
        id: {
            type: String,
        },
        title: {
            type: String,
        },
        reference: {
            type: String,
        },
        error: {
            type: String,
        },
        success: {
            type: String,
        },
        information: {
            type: String,
        },
        warning: {
            type: String,
        },
        modalSuccess: {
           type: String,
           default: 'false',
        },
    },
    methods: {
        show () {
            this.$root.$emit('bv::show::modal', this.id);
        },
        hide () {
            this.$root.$emit('bv::hide::modal', this.id);
        },
    },
};
</script>
