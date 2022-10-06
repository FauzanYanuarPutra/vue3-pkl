<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Tambak</span></li>
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
                                    <h4>Manage Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-tambak/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="index in items">
                                {{ props.index }}
                            </template>
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer" title="View">
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
                                        <router-link to="/manage-tambak/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['no', 'nama_tambak', 'nama_area', 'provinsi', 'status', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'text-end', actions: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['nama_tambak', 'nama_area', 'provinsi', 'map_location', 'status'],
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
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 2,
            nama_tambak: 'Tambak b',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 3,
            nama_tambak: 'Tambak c',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 4,
            nama_tambak: 'Tambak d',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 5,
            nama_tambak: 'Tambak e',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 6,
            nama_tambak: 'Tambak f',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 7,
            nama_tambak: 'Tambak g',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 8,
            nama_tambak: 'Tambak h',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 9,
            nama_tambak: 'Tambak i',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
        {
            id: 10,
            nama_tambak: 'Tambak j',
            nama_area: 'null',
            provinsi: 'Jawa Barat',
            map_location: 'null',
            status: 'Aktive',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage Tambak</i>',
        text: 'HALLO',
        html:
            '<p><b>Nama Tambak</b> : ' +
            item.nama_tambak +
            '</p>' +
            '<p><b>Alamat</b> : ' +
            item.alamat +
            '</p>' +
            '<p><b>Nama Area</b> : ' +
            item.nama_area +
            '</p>' +
            '<p><b>Provinsi</b> : ' +
            item.provinsi +
            '</p>' +
            '<p><b>Photo</b> : ' +
            item.photo +
            '</p>' +
            '<p><b>Google map location</b> : ' +
            item.map_location +
            '</p>' +
            '<p><b>Status</b> : ' +
            item.status +
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
