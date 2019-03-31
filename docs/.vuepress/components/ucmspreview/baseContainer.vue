<template>
<div class="body-content">
    <div class="row">
        <div class="col">
            <h1>
                <b-button variant="link icon page-header-icons print-icon">
                    <span title="Print This Page" class="fa fa-print"></span>
                </b-button>
                <div class="help-dropdown">
                    <button class="btn btn-link icon page-header-icons help-icon" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
                        <span title="Print This Page" class="fa fa-question"></span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                    </div>
                </div>
            </h1>
        </div>
    </div>
    <slot></slot>
</div>
</template>

<script>
import axios from 'axios';

// Styling
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
//import 'v-calendar/lib/v-calendar.min.css';
//import 'nprogress/nprogress.css';
//import '@poire-io/dpatterns-vue/dist/dp.css';

// Custom CSS for UCMS project.
//import './styles.scss';
import {
    mixin as clickaway,
} from 'vue-clickaway';

export default {
    components: {
    },
    data () {
        return {
        };
    },
    mounted () {
        axios
            .get('help.json')
            .then((response) => {
                this.help = response.data;
            })
            .catch((err) => {
                this.error = err.data;
            });
    },
    mixins: [clickaway],
    methods: {
        toggleHelp () {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        closeHelp () {
            this.isDropdownOpen = false;
        },
    },
    props: {
        pageHeading: {
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
    },
    computed: {
    },
};
</script>
