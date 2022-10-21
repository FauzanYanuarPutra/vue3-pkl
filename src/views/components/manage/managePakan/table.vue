<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Pakan</span></li>
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
                                    <h4>Manage Pakan</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-pakan/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="(item, index) in items">
                                {{ props.index }}
                            </template>

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
                                        <router-link to="/manage-pakan/edit" data-bs-toggle="tooltip" title="Edit">
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
                                        <a href="/manage-pakan/scoring" data-bs-toggle="tooltip" title="Scoring">
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

    const columns = ref(['no', 'Tambak', 'Tanggal', 'Merk_Pakan', 'Harga_Pakan', 'Kode_Pakan', 'Jenis_Butiran', 'Scoring', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: {
            no: 'no text-end ',
            actions: 'actions text-center',
            Tanggal: 'text-center ',
            Harga_Pakan: 'text-end ',
            Kode_Pakan: 'text-end ',
            'SR(%)': 'text-end ',
            Scoring: 'text-end ',
        },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['Tambak', 'Tanggal', ' Asal_Pakan', 'Merk_Pakan', 'Harga_Pakan', 'Kode_Pakan', 'Pakan_Batch_id', 'Jenis_Butiran', 'Tanggal_Beli', 'Ukuran', 'Jumlah_Karung', 'Status', 'Scoring'],
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
                Tambak: 'Tambak a',
                Tanggal: '2022/03/29',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',

                Scoring: 'A',
            },
            {
                id: 2,
                Tambak: 'Tambak b',
                Tanggal: '2011/07/05',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
            {
                id: 3,
                Tambak: 'Tambak c',
                Tanggal: '2009/01/12',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
            {
                id: 4,
                Tambak: 'Tambak d',
                Tanggal: '2012/03/29',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
            {
                id: 5,
                Tambak: 'Tambak e',
                Tanggal: '2008/11/28',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'B',
            },
            {
                id: 6,
                Tambak: 'Tambak f',
                Tanggal: '2012/12/02',
                Asal_Pakan: '',
                Merk_Pakan: 'Persial',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'B',
            },
            {
                id: 7,
                Tambak: 'Tambak g',
                Tanggal: '2012/08/06',
                Asal_Pakan: '',
                Merk_Pakan: 'Persial',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'B',
            },
            {
                id: 8,
                Tambak: 'Tambak h',
                Tanggal: '2010/10/14',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
            {
                id: 9,
                Tambak: 'Tambak i',
                Tanggal: '2009/09/15',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
            {
                id: 10,
                Tambak: 'Tambak i',
                Tanggal: '2009/09/15',
                Asal_Pakan: '',
                Merk_Pakan: 'Jafpa',
                Harga_Pakan: '500,000',
                Kode_Pakan: '583 - SP',
                Pakan_Batch_id: '',
                Jenis_Butiran: 'Pelet',
                Tanggal_Beli: '',
                Ukuran: '',
                Jumlah_Karung: '',
                Status: '',
                Scoring: 'A',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Panen</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama Tambak</b> : ' +
                item.Tambak +
                '</p>' +
                '<p><b>Tanggal</b> : ' +
                item.Tanggal +
                '</p>' +
                '<p><b>Merk_Pakan Panen</b> : ' +
                item.Merk_Pakan +
                '</p>' +
                '<p><b>Jenis_Butiran</b> : ' +
                item.Jenis_Butiran +
                '</p>' +
                '<p><b>Scoring</b> : ' +
                item.Scoring +
                '</p>',
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
            focusConfirm: true,
            confirmButtonColor: '#1695DC',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',
            confirmButtonClass: 'd-none',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
