<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Panen</span></li>
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
                                    <h4>Panen</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/panen/create1" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div>
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
                                    <div>
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

    const columns = ref(['Id_kolam', 'Tanggal_panen', 'Tipe_panen', 'Doc', 'actions']);
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
        sortable: ['Id_kolam', 'Tanggal_panen', 'Tipe_panen', 'Doc'],
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
                Id_kolam: 'Tiger Nixon',
                Tanggal_panen: 'System Architect',
                Tipe_panen: 61,
                Doc: '2011/04/25',
            },
            {
                id: 2,
                Id_kolam: 'Garrett Winters',
                Tanggal_panen: 'Accountant',
                Tipe_panen: 63,
                Doc: '2011/07/25',
            },
            {
                id: 3,
                Id_kolam: 'Ashton Cox',
                Tanggal_panen: 'Junior Technical Author',
                Tipe_panen: 66,
                Doc: '2009/01/12',
            },
            {
                id: 4,
                Id_kolam: 'Cedric Kelly',
                Tanggal_panen: 'Senior Javascript Developer',
                Tipe_panen: 22,
                Doc: '2012/03/29',
            },
            {
                id: 5,
                Id_kolam: 'Airi Satou',
                Tanggal_panen: 'Accountant',
                Tipe_panen: 33,
                Doc: '2008/11/28',
            },
            {
                id: 6,
                Id_kolam: 'Brielle Williamson',
                Tanggal_panen: 'Integration Specialist',
                Tipe_panen: 61,
                Doc: '2012/12/02',
            },
            {
                id: 7,
                Id_kolam: 'Herrod Chandler',
                Tanggal_panen: 'Sales Assistant',
                Tipe_panen: 59,
                Doc: '2012/08/06',
            },
            {
                id: 8,
                Id_kolam: 'Rhona Davidson',
                Tanggal_panen: 'Integration Specialist',
                Tipe_panen: 55,
                Doc: '2010/10/14',
            },
            {
                id: 9,
                Id_kolam: 'Colleen Hurst',
                Tanggal_panen: 'Javascript Developer',
                Tipe_panen: 39,
                Doc: '2009/09/15',
            },
        ];
    };
    const columns1 = ref(['ABW', 'Size', 'Total_biomassa', 'Total_populasi', 'Total_kebutuhan_pakan', 'FCR', 'SR', 'Produktivity', 'actions']);
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
        sortable: ['ABW', 'Size', 'Total_biomassa (Kg)', 'Total_populasi', 'Total_kebutuhan_pakan', 'FCR', 'SR', 'Produktivity'],
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
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
            },
            {
                id: 2,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
            },
            {
                id: 3,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
            },
            {
                id: 4,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
            },
            {
                id: 5,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
            },
        ];
    };
    const columns2 = ref([
        'ABW',
        'Size',
        'Total_biomassa',
        'Total_populasi',
        'Total_kebutuhan_pakan',
        'FCR',
        'SR',
        'Produktivity',
        'Jumlah_udang_fresh',
        'Jumlah_udang_molting',
        'Jumlah_udang_broken',
        'actions',
    ]);
    const items2 = ref([]);
    const table_option2 = ref({
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
        sortable: ['ABW', 'Size', 'Total_biomassa', 'Total_populasi', 'Total kebutuhan_pakan', 'FCR', 'SR', 'Produktivity', 'Jumlah_udang_fresh', 'Jumlah_udang_molting', 'Jumlah_udang_broken'],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data2();
    });

    const bind_data2 = () => {
        items2.value = [
            {
                id: 1,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
                Jumlah_udang_fresh: '2034',
                Jumlah_udang_molting: '213',
                Jumlah_udang_broken: '755',
            },
            {
                id: 2,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
                Jumlah_udang_fresh: '2034',
                Jumlah_udang_molting: '213',
                Jumlah_udang_broken: '755',
            },
            {
                id: 3,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
                Jumlah_udang_fresh: '2034',
                Jumlah_udang_molting: '213',
                Jumlah_udang_broken: '755',
            },
            {
                id: 4,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
                Jumlah_udang_fresh: '2034',
                Jumlah_udang_molting: '213',
                Jumlah_udang_broken: '755',
            },
            {
                id: 5,
                ABW: '2132',
                Size: '333',
                Total_biomassa: '4322',
                Total_populasi: '12',
                Total_kebutuhan_pakan: '2333',
                FCR: '23',
                SR: '100%',
                Produktivity: '23',
                Jumlah_udang_fresh: '2034',
                Jumlah_udang_molting: '213',
                Jumlah_udang_broken: '755',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>
