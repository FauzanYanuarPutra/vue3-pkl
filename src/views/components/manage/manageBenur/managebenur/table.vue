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
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-Benur/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer" title="View">
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
                                                class="feather feather-eye"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
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
                                    <div class="px-2">
                                        <a href="/scoring-benur/create" data-bs-toggle="tooltip" title="Scoring">
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
                                                class="feather feather-clipboard"
                                            >
                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
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

    const columns = ref(['nama_tambak', 'tanggal_input', 'Asal_benur', 'usia_benur(hari)', 'nilai_scoring', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center', tanggal_input: 'text-center', 'usia_benur(hari)': 'text-end ' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['nama_tambak', 'tanggal_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur(hari)', 'nilai_scoring'],
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
                nama_tambak: 'Tambak a',
                tanggal_input: '2022/01/25',
                Id_benur: '1',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18 ',
                nilai_scoring: 'A',
            },
            {
                id: 2,
                nama_tambak: 'Tambak b',
                tanggal_input: '2022/02/26',
                Id_benur: '2',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18-20 ',
                nilai_scoring: 'B',
            },
            {
                id: 3,
                nama_tambak: 'Tambak c',
                tanggal_input: '2022/03/07',
                Id_benur: '3',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '20 ',
                nilai_scoring: 'B',
            },
            {
                id: 4,
                nama_tambak: 'Tambak d',
                tanggal_input: '2022/03/28',
                Id_benur: '4',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18-20 ',
                nilai_scoring: 'A',
            },
            {
                id: 5,
                nama_tambak: 'Tambak e',
                tanggal_input: '2022/04/10',
                Id_benur: '5',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18-20 ',
                nilai_scoring: 'C',
            },
            {
                id: 6,
                nama_tambak: 'Tambak f',
                tanggal_input: '2022/05/29',
                Id_benur: '6',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18 ',
                nilai_scoring: 'A',
            },
            {
                id: 7,
                nama_tambak: 'Tambak g',
                tanggal_input: '2022/06/23',
                Id_benur: '7',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18 ',
                nilai_scoring: 'B',
            },
            {
                id: 8,
                nama_tambak: 'Tambak h',
                tanggal_input: '2022/07/21',
                Id_benur: '8',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '20 ',
                nilai_scoring: 'B',
            },
            {
                id: 9,
                nama_tambak: 'Tambak i',
                tanggal_input: '2022/08/15',
                Id_benur: '9',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '18-20 ',
                nilai_scoring: 'C',
            },
            {
                id: 10,
                nama_tambak: 'Tambak j',
                tanggal_input: '2022/08/15',
                Id_benur: '10',
                Asal_benur: 'Udang vaname',
                benur_batch_id: 'null',
                'usia_benur(hari)': '19 ',
                nilai_scoring: 'A',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Manage Benur</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama Tambak</b> : ' +
                item.nama_tambak +
                '</p>' +
                '<p><b>Tanggal Input</b> : ' +
                item.tanggal_input +
                '</p>' +
                '<p><b>ID Benur</b> : ' +
                item.Id_benur +
                '</p>' +
                '<p><b>Asal Benur</b> : ' +
                item.Asal_benur +
                '</p>' +
                '<p><b>Benur Batch Id</b> : ' +
                item.benur_batch_id +
                '</p>' +
                '<p><b>Usia Benur</b> : ' +
                item.usia_benur +
                '</p>' +
                '<p><b>Nilai Scoring</b> : ' +
                item.nilai_scoring +
                '</p>',
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: '#1695DC',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
