<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Reminder</span></li>
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
                                    <h4>Reminder</h4>
                                </div>
                            </div>
                        </div>
                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/reminder/create" @click="toggleMobileMenu"
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
                                    <div class="mx-2">
                                        <router-link to="/reminder/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['id', 'tanggal', 'nama_kolam', 'kategori', 'judul', 'keterangan', 'status', 'actions']);
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
    sortable: ['id', 'tanggal', 'nama_kolam', 'id_user', 'kategori', 'judul', 'keterangan', 'status'],
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
            tanggal: '2011/04/25',
            nama_kolam: 'Kolam B1',
            id_user: 61,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 2,
            tanggal: '2011/07/25',
            nama_kolam: 'Kolam B2',
            id_user: 63,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 3,
            tanggal: '2009/01/12',
            nama_kolam: 'Kolam B3',
            id_user: 66,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 4,
            tanggal: '2012/03/29',
            nama_kolam: 'Kolam B4',
            id_user: 22,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 5,
            tanggal: '2008/11/28',
            nama_kolam: 'Kolam B5',
            id_user: 33,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 6,
            tanggal: '2012/12/02',
            nama_kolam: 'Kolam B6',
            id_user: 61,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 7,
            tanggal: '2012/08/06',
            nama_kolam: 'Kolam B7',
            id_user: 59,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 8,
            tanggal: '2010/10/14',
            nama_kolam: 'Kolam B8',
            id_user: 55,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 9,
            tanggal: '2009/09/15',
            nama_kolam: 'Kolam B9',
            id_user: 39,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
        {
            id: 10,
            tanggal: '2008/12/13',
            nama_kolam: 'Kolam B10',
            id_user: 23,
            kategori: 'null',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Reminder</i>',
        text: 'HALLO',
        html:
            '<p><b>Tanggal</b> : ' + item.tanggal + '</p>' +
            '<p><b>Nama Kolam</b> : ' + item.nama_kolam + '</p>' +
            '<p><b>Kategori</b> : ' + item.kategori + '</p>' +
            '<p><b>Judul</b> : ' + item.judul + '</p>' +
            '<p><b>Keterangan</b> : ' + item.keterangan + '</p>' +
            '<p><b>Status</b> : ' + item.status + '</p>'
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