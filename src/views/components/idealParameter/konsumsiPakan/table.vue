<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Konsumsi Pakan</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Konsumsi Pakan</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/konsumsi-pakan/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <router-link to="/konsumsi-pakan/edit" data-bs-toggle="tooltip" title="Edit">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-edit-2"
                                            >
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="px-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-trash-2"
                                            >
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Default Order Sorting Table' });

    const columns = ref(['fcr', 'scoring', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['fcr', 'scoring'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data();
    });

    const bind_data = () => {
        items.value = [
            {
                id: 1,
                fcr: 'Tiger Nixon',

                scoring: 61,
            },
            {
                id: 2,
                fcr: 'Garrett Winters',
                scoring: 63,
            },
            {
                id: 3,
                fcr: 'Ashton Cox',
                scoring: 66,
            },
            {
                id: 4,
                fcr: 'Cedric Kelly',
                scoring: 22,
            },
            {
                id: 5,
                fcr: 'Airi Satou',
                scoring: 33,
            },
            {
                id: 6,
                fcr: 'Brielle Williamson',
                scoring: 61,
            },
            {
                id: 7,
                fcr: 'Herrod Chandler',
                scoring: 59,
            },
            {
                id: 8,
                fcr: 'Rhona Davidson',
                scoring: 55,
            },
            {
                id: 9,
                fcr: 'Colleen Hurst',
                scoring: 39,
            },
            {
                id: 10,
                fcr: 'Sonya Frost',

                scoring: 23,
            },
            {
                id: 11,
                fcr: 'Jena Gaines',
                scoring: 30,
            },
            {
                id: 12,
                fcr: 'Quinn Flynn',
                scoring: 22,
            },
            {
                id: 13,
                fcr: 'Charde Marshall',

                scoring: 36,
            },
            {
                id: 14,
                fcr: 'Haley Kennedy',
                scoring: 43,
            },
            {
                id: 15,
                fcr: 'Tatyana Fitzpatrick',

                scoring: 19,
            },
            {
                id: 16,
                fcr: 'Michael Silva',
                scoring: 66,
            },
            {
                id: 17,
                fcr: 'Paul Byrd',
                scoring: 64,
            },
            {
                id: 18,
                fcr: 'Gloria Little',
                scoring: 59,
            },
            {
                id: 19,
                fcr: 'Bradley Greer',
                scoring: 41,
            },
            {
                id: 20,
                fcr: 'Dai Rios',
                scoring: 35,
            },
            {
                id: 21,
                fcr: 'Jenette Caldwell',

                scoring: 61,
            },
            {
                id: 22,
                fcr: 'Yuri Berry',
                scoring: 40,
            },
            {
                id: 23,
                fcr: 'Caesar Vance',
                scoring: 21,
            },
            {
                id: 24,
                fcr: 'Doris Wilder',
                scoring: 23,
            },
            {
                id: 25,
                fcr: 'Angelica Ramos',
                scoring: 47,
            },
            {
                id: 26,
                fcr: 'Gavin Joyce',
                scoring: 42,
            },
            {
                id: 27,
                fcr: 'Jennifer Chang',

                scoring: 28,
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.fcr);
    };
</script>
