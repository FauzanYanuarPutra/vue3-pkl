<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Persiapan Kolam Budidaya</span></li>
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
                                    <h4>Persiapan Kolam Budidaya</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/persiapan-kolam-budidaya/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
    
                                
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="index in items" >
                                {{ props.index }}
                            </template>

                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer"  title="View">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-eye">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mx-2">
                                        <router-link to="/persiapan-kolam-budidaya/edit" data-bs-toggle="tooltip" title="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-edit-2">
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                </path>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="mx-2">
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

const columns = ref(['no', 'nama_tambak', 'nama_kolam', 'pengeringan_dasar_tambak', 'pembuangan_sendimen_organik', 'sterilisasi_tambak', 'pengisian_air_dan_sterilisasi_air_tambak', 'pengapuran', 'pemupukan_dan_pemberian_mineral', 'pertumbuhan_plankton', 'pertumbuhan_patogen_atau_yang_merugikan', 'probiotik', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: {actions: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['nama_tambak', 'nama_kolam', 'pengeringan_dasar_tambak', 'pembuangan_sendimen_organik', 'sterilisasi_tambak', 'pengisian_air_dan_sterilisasi_air_tambak', 'pengapuran', 'pemupukan_dan_pemberian_mineral', 'pertumbuhan_plankton', 'pertumbuhan_patogen_atau_yang_merugikan', 'probiotik', 'status'],
    sortIcon: {
        base: 'sort-icon-none',
        up: 'sort-icon-asc',
        down: 'sort-icon-desc',
    },
    resizableColumns: true,
});

onMounted(() => {
    bind_data();
});

const bind_data = () => {
    items.value = [
        {
            ID: 1,
            nama_tambak: 'Tambak b1',
            nama_kolam: 'Kolam b1',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 2,
            nama_tambak: 'Tambak b2',
            nama_kolam: 'Kolam b2',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 3,
            nama_tambak: 'Tambak b3',
            nama_kolam: 'Kolam b3',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 4,
            nama_tambak: 'Tambak b4',
            nama_kolam: 'Kolam b4',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 5,
            nama_tambak: 'Tambak b5',
            nama_kolam: 'Kolam b5',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 6,
            nama_tambak: 'Tambak b6',
            nama_kolam: 'Kolam b6',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 7,
            nama_tambak: 'Tambak b7',
            nama_kolam: 'Kolam b7',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 8,
            nama_tambak: 'Tambak b8',
            nama_kolam: 'Kolam b8',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 9,
            nama_tambak: 'Tambak b9',
            nama_kolam: 'Kolam b9',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 10,
            nama_tambak: 'Tambak b10',
            nama_kolam: 'Kolam b10',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        {
            ID: 11,
            nama_tambak: 'Tambak b9',
            nama_kolam: 'Kolam b9',
            pengeringan_dasar_tambak: '✓',
            pembuangan_sendimen_organik: '✓',
            sterilisasi_tambak: '✓',
            pengisian_air_dan_sterilisasi_air_tambak: '✓',
            pengapuran: '✓',
            pemupukan_dan_pemberian_mineral: '✓',
            pertumbuhan_plankton: '✓',
            pertumbuhan_patogen_atau_yang_merugikan: '✓',
            probiotik: '✓',
        },
        
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Pengapuran</i>',
        text: 'HALLO',
        html:
            '<p><b>Nama Kolam</b> : ' +
            item.nama_kolam +
            '</p>' +
            '<p><b>pengeringan_dasar_tambak</b> : ' +
            item.pengeringan_dasar_tambak +
            '</p>' +
            '<p><b>Pemakaian kapur</b> : ' +
            item.pembuangan_sendimen_organik +
            '</p>' +
            '<p><b>sterilisasi_tambak</b> : ' +
            item.sterilisasi_tambak +
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
