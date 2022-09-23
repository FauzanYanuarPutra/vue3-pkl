<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Benur</span></li>
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
                                    <h4>Manage Benur</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage-Benur/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
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
                                        </a>
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

    const columns = ref(['nama_tambak', 'tanggal_dan_jam_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur', 'actions']);
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
        sortable: ['nama_tambak', 'tanggal_dan_jam_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur'],
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
                nama_tambak: 'Tiger Nixon',
                tanggal_dan_jam_input: 'System Architect',
                Id_benur: 'Edinburgh',
                Asal_benur: 61,
                benur_batch_id: '2011/04/25',
                usia_benur: 'null',
            },
            {
                id: 2,
                nama_tambak: 'Garrett Winters',
                tanggal_dan_jam_input: 'Accountant',
                Id_benur: 'Tokyo',
                Asal_benur: 63,
                benur_batch_id: '2011/07/25',
                usia_benur: 'null',
            },
            {
                id: 3,
                nama_tambak: 'Ashton Cox',
                tanggal_dan_jam_input: 'Junior Technical Author',
                Id_benur: 'San Francisco',
                Asal_benur: 66,
                benur_batch_id: '2009/01/12',
                usia_benur: 'null',
            },
            {
                id: 4,
                nama_tambak: 'Cedric Kelly',
                tanggal_dan_jam_input: 'Senior Javascript Developer',
                Id_benur: 'Edinburgh',
                Asal_benur: 22,
                benur_batch_id: '2012/03/29',
                usia_benur: 'null',
            },
            {
                id: 5,
                nama_tambak: 'Airi Satou',
                tanggal_dan_jam_input: 'Accountant',
                Id_benur: 'Tokyo',
                Asal_benur: 33,
                benur_batch_id: '2008/11/28',
                usia_benur: 'null',
            },
            {
                id: 6,
                nama_tambak: 'Brielle Williamson',
                tanggal_dan_jam_input: 'Integration Specialist',
                Id_benur: 'New York',
                Asal_benur: 61,
                benur_batch_id: '2012/12/02',
                usia_benur: 'null',
            },
            {
                id: 7,
                nama_tambak: 'Herrod Chandler',
                tanggal_dan_jam_input: 'Sales Assistant',
                Id_benur: 'San Francisco',
                Asal_benur: 59,
                benur_batch_id: '2012/08/06',
                usia_benur: 'null',
            },
            {
                id: 8,
                nama_tambak: 'Rhona Davidson',
                tanggal_dan_jam_input: 'Integration Specialist',
                Id_benur: 'Tokyo',
                Asal_benur: 55,
                benur_batch_id: '2010/10/14',
                usia_benur: 'null',
            },
            {
                id: 9,
                nama_tambak: 'Colleen Hurst',
                tanggal_dan_jam_input: 'Javascript Developer',
                Id_benur: 'San Francisco',
                Asal_benur: 39,
                Benur_batch_id: '2009/09/15',
                usia_benur: 'null',
            },
        ];
    };
    const columns1 = ref([
        'tanggal_dan_jam_input',
        'Panjang_benur',
        'Size_varian',
        'Hepatopankreas',
        'Necrosis',
        'MGR',
        'Ektoparasite',
        'Stress_test',
        'Vibrio_luminnescen',
        'TVC',
        'pH',
        'Selisih_salinitas',
        'DO',
        'Suhu',
        'TAN',
        'Bolitas',
        'Status',
        'actions',
    ]);
    const items1 = ref([]);
    const table_option1 = ref({
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
        sortable: [
            'tanggal_dan_jam_input',
            'Panjang_benur',
            'Size_varian',
            'Hepatopankreas',
            'Necrosis',
            'MGR',
            'Ektoparasite',
            'Stress_test',
            'Vibrio_luminnescen',
            'TVC',
            'pH',
            'Selisih_salinitas',
            'DO',
            'Suhu',
            'TAN',
            'Bolitas',
            'Status',
            'actions',
        ],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data1();
    });

    const bind_data1 = () => {
        items1.value = [
            {
                id: 1,
                tanggal_dan_jam_input: '12',
                Panjang_benur: '12',
                Size_varian: 12,
                Hepatopankreas: '12',
                Necrosis: '2',
                MGR: '22',
                Ektoparasite: '10',
                Stress_test: '33',
                Vibrio_luminnescen: '44',
                TVC: '22',
                pH: '22',
                Selisih_salinitas: '22',
                DO: '22',
                Suhu: '22',
                TAN: '33',
                Bolitas: '44',
                Status: '55',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>
