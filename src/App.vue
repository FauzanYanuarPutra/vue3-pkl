<template>
    <div :class="[$store.state.layout_style, $store.state.menu_style]">
        <component v-bind:is="layout"></component>
    </div>
</template>

<style>
    .layout-px-spacing {
        padding: 0px 20px 0 50px !important;
    }

    .sidebar-wrapper{
        width: 250px;
    }
</style>

<script setup>
    import { computed } from 'vue';

    import '@/assets/sass/app.scss';

    import { useMeta } from '@/composables/use-meta';
    import { useStore } from 'vuex';

    useMeta({ title: 'Sales Admin' });

    const store = useStore();

    const layout = computed(() => {
        return store.getters.layout;
    });
</script>
<script>
    // layouts
    import appLayout from './layouts/app-layout.vue';
    import authLayout from './layouts/auth-layout.vue';

    export default {
        components: {
            app: appLayout,
            auth: authLayout,
        },
    };
</script>