<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Siklus budidaya
                                        (persiapan)</span></li>
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
                                    <h2>Table Siklus budidaya
                                        (persiapan)</h2>
                                </div>
                            </div>
                        </div>
                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/budidaya-persiapan/create" @click="toggleMobileMenu"
                                class="btn btn-primary mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor:pointer;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="px-2">
                                        <router-link to="/budidaya-persiapan/edit" data-bs-toggle="tooltip"
                                            title="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-edit-2">
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                </path>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="px-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-trash-2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path
                                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table><br>
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

const columns = ref([
    'pengeringan_dasar',
    'pembuangan_sedimen',
    'sterilisasi_tambak',
    'pengisian_air',
    'actions',
]);
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
    sortable: [
        [
            'pengeringan_dasar',
            'pembuangan_sedimen',
            'sterilisasi_tambak',
            'pengisian_air',
            'pengapuran',
            'pemupukan',
            'pertumbuhan_plankton',
            'pertumbuhan_patogen',
            'probiotik',
        ],
    ],

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
            ID: 1,
            pengeringan_dasar: '12',
            pembuangan_sedimen: '45',
            sterilisasi_tambak: '2',
            pengisian_air: '7',
            suhu_air: '64',
            pengapuran: '3',
            pemupukan: '4',
            pertumbuhan_plankton: '7',
            pertumbuhan_patogen: '3',
            probiotik: '12',
        },
        {
            ID: 2,
            pengeringan_dasar: '4',
            pembuangan_sedimen: '2',
            sterilisasi_tambak: '5',
            pengisian_air: '64',
            suhu_air: '34',
            pengapuran: '44',
            pemupukan: '77',
            pertumbuhan_plankton: '37',
            pertumbuhan_patogen: '11',
            probiotik: '2',
        },
        {
            ID: 3,
            pengeringan_dasar: '2',
            pembuangan_sedimen: '4',
            sterilisasi_tambak: '45',
            pengisian_air: '5',
            suhu_air: '5',
            pengapuran: '66',
            pemupukan: '66',
            pertumbuhan_plankton: '34',
            pertumbuhan_patogen: '99',
            probiotik: '68',
        },
        {
            ID: 4,
            pengeringan_dasar: '23',
            pembuangan_sedimen: '45',
            sterilisasi_tambak: '23',
            pengisian_air: '2',
            suhu_air: '2',
            pengapuran: '23',
            pemupukan: '5',
            pertumbuhan_plankton: '75',
            pertumbuhan_patogen: '85',
            probiotik: '45',
        },
        {
            ID: 5,
            pengeringan_dasar: '75',
            pembuangan_sedimen: '5',
            sterilisasi_tambak: '75',
            pengisian_air: '45',
            suhu_air: '34',
            pengapuran: '5',
            pemupukan: '75',
            pertumbuhan_plankton: '45',
            pertumbuhan_patogen: '5',
            probiotik: '45',
        },
        {
            ID: 6,
            pengeringan_dasar: '4',
            pembuangan_sedimen: '2',
            sterilisasi_tambak: '5',
            pengisian_air: '64',
            suhu_air: '34',
            pengapuran: '44',
            pemupukan: '77',
            pertumbuhan_plankton: '37',
            pertumbuhan_patogen: '11',
            probiotik: '2',
        },
        {
            ID: 7,
            pengeringan_dasar: '12',
            pembuangan_sedimen: '12',
            sterilisasi_tambak: '12',
            pengisian_air: '12',
            suhu_air: '12',
            pengapuran: '12',
            pemupukan: '12',
            pertumbuhan_plankton: '12',
            pertumbuhan_patogen: '12',
            probiotik: '12',
        },
        {
            ID: 8,
            ID: 4,
            pengeringan_dasar: '23',
            pembuangan_sedimen: '45',
            sterilisasi_tambak: '23',
            pengisian_air: '2',
            suhu_air: '2',
            pengapuran: '23',
            pemupukan: '5',
            pertumbuhan_plankton: '75',
            pertumbuhan_patogen: '85',
            probiotik: '45',
        },
        {
            ID: 9,
            pengeringan_dasar: '2',
            pembuangan_sedimen: '4',
            sterilisasi_tambak: '45',
            pengisian_air: '5',
            suhu_air: '5',
            pengapuran: '66',
            pemupukan: '66',
            pertumbuhan_plankton: '34',
            pertumbuhan_patogen: '99',
            probiotik: '68',
        },
        {
            ID: 10,
            pengeringan_dasar: '45',
            pembuangan_sedimen: '6',
            sterilisasi_tambak: '34',
            pengisian_air: '6',
            suhu_air: '75',
            pengapuran: '8',
            pemupukan: '45',
            pertumbuhan_plankton: '6',
            pertumbuhan_patogen: '34',
            probiotik: '1',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Siklus budidaya (persiapan)</i>',
        text: 'HALLO',
        html:
            '<p><b>Pengeringan dasar tambak</b> : ' + item.pengeringan_dasar + '</p>' +
            '<p><b>Pembuangan sedimen organik</b> : ' + item.pembuangan_sedimen + '</p>' +
            '<p><b>Sterilisasi tambak</b> : ' + item.sterilisasi_tambak + '</p>' +
            '<p><b>Pengisian air dan sterilisasi air tambak</b> : ' + item.pengisian_air + '</p>' +
            '<p><b>Pengapuran</b> : ' + item.pengapuran + '</p>' +
            '<p><b>Pemupukan dan pemberian mineral</b> : ' + item.pemupukan + '</p>' +
            '<p><b>Pertumbuhan plankton</b> : ' + item.pertumbuhan_plankton + '</p>' +
            '<p><b>Pertumbuhan patogen atau yang merugikan</b> : ' + item.pertumbuhan_patogen + '</p>' +
            '<p><b>Probiotik</b> : ' + item.probiotik + '</p>'
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
        ,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonColor: '#4361ee',
        confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
        confirmButtonAriaLabel: 'Oke',

        padding: '2em',
    });
    // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
};
</script>