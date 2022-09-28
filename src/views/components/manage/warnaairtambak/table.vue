<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Warna Air Tambak</span>
                                </li>
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
                                    <h4>Warna Air Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/airtambak/create" @click="toggleMobileMenu"
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
                                        <router-link to="/airtambak/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['WARNA_AIR_YANG_DITIMBULKAN', 'JENIS_PLANKTON', 'KECERAHAN', 'KETERANGAN', 'actions']);
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
    sortable: ['WARNA_AIR_YANG_DITIMBULKAN', 'JENIS_PLANKTON', 'KECERAHAN', 'KETERANGAN'],
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
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat muda',
            JENIS_PLANKTON: 'navicula sp',
            KECERAHAN: '35',
            KETERANGAN: 'Baik,pertahankan',
        },
        {
            id: 2,
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat tua',
            JENIS_PLANKTON: 'Nitzschia sp',
            KECERAHAN: '25',
            KETERANGAN: 'Baik,air perlu dicairkan',
        },
        {
            id: 3,
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat biru',
            JENIS_PLANKTON: 'Chaetoceros sp',
            KECERAHAN: '<25',
            KETERANGAN: 'Tidak baik,air perlu diganti',
        },
        {
            id: 4,
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat kemerahan',
            JENIS_PLANKTON: 'Brachionus sp',
            KECERAHAN: '25',
            KETERANGAN: 'Bahaya,air dibuang & diganti',
        },
        {
            id: 5,
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat kehijauan',
            JENIS_PLANKTON: 'Diantomae',
            KECERAHAN: '25',
            KETERANGAN: 'Kurang baik,air perlu diencerkan',
        },
        {
            id: 6,
            WARNA_AIR_YANG_DITIMBULKAN: 'Cokelat kehitaman jernih',
            JENIS_PLANKTON: 'Asam organik(tambah baru)',
            KECERAHAN: '50-60',
            KETERANGAN: 'Tidak baik,perlu reklamasi tanah dasar',
        },
        {
            id: 7,
            WARNA_AIR_YANG_DITIMBULKAN: 'Hijau daun muda',
            JENIS_PLANKTON: 'Chorella sp',
            KECERAHAN: '35',
            KETERANGAN: 'Baik,pertahankan',
        },
        {
            id: 8,
            WARNA_AIR_YANG_DITIMBULKAN: 'Hijau tua',
            JENIS_PLANKTON: 'Oasystis sp',
            KECERAHAN: '<25',
            KETERANGAN: 'Tidak baik,air perlu banyak diencerkan',
        },
        {
            id: 9,
            WARNA_AIR_YANG_DITIMBULKAN: 'Hijau kebituan',
            JENIS_PLANKTON: 'Anabaena sp',
            KECERAHAN: '<20',
            KETERANGAN: 'Tidak baik,air dibuang & diganti',
        },
        {
            id: 10,
            WARNA_AIR_YANG_DITIMBULKAN: '',
            JENIS_PLANKTON: '',
            KECERAHAN: '',
            KETERANGAN: '',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Kolam Treament</i>',
        text: 'HALLO',
        html:
            '<p><b>Warna Air yang ditimbulkan</b> : ' + item.WARNA_AIR_YANG_DITIMBULKAN + '</p>' +
            '<p><b>Jenis Plankton</b> : ' + item.JENIS_PLANKTON + '</p>' +
            '<p><b>Kecerahan</b> : ' + item.KECERAHAN + '</p>' +
            '<p><b>Keterangan</b> : ' + item.KETERANGAN + '</p>'
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
