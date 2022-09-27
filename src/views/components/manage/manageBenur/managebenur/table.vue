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
                                        <router-link to="/manage-Benur/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns = ref(['nama_tambak', 'tanggal_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur', 'actions']);
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
        sortable: ['nama_tambak', 'tanggal_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur'],
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
                nama_tambak: 'Tambak 1',
                tanggal_input: '2022/01/25',
                Id_benur: '1',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18 hari',
            },
            {
                id: 2,
                nama_tambak: 'Tambak 2',
                tanggal_input: '2022/02/26',
                Id_benur: '2',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18-20 hari',
            },
            {
                id: 3,
                nama_tambak: 'Tambak 3',
                tanggal_input: '2022/03/07',
                Id_benur: '3',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '20 hari',
            },
            {
                id: 4,
                nama_tambak: 'Tambak 4',
                tanggal_input: '2022/03/28',
                Id_benur: '4',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18-20 hari',
            },
            {
                id: 5,
                nama_tambak: 'Tambak 5',
                tanggal_input: '2022/04/10',
                Id_benur: '5',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18-20 hari',
            },
            {
                id: 6,
                nama_tambak: 'Tambak 6',
                tanggal_input: '2022/05/29',
                Id_benur: '6',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18 hari',
            },
            {
                id: 7,
                nama_tambak: 'Tambak 7',
                tanggal_input: '2022/06/23',
                Id_benur: '7',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18 hari',
            },
            {
                id: 8,
                nama_tambak: 'Tambak 8',
                tanggal_input: '2022/07/21',
                Id_benur: '8',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '20 hari',
            },
            {
                id: 9,
                nama_tambak: 'Tambak 9',
                tanggal_input: '2022/08/15',
                Id_benur: '9',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '18-20 hari',
            },
            {
                id: 10,
                nama_tambak: 'Tambak 10',
                tanggal_input: '2022/08/15',
                Id_benur: '10',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                usia_benur: '19 hari',
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
