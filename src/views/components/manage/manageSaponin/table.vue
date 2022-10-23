<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Saponin</span></li>
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
                                    <h4>Saponin</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative div-tambah">
                            <router-link to="/saponin/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="(item, index) in items" class="w-10">
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
                                        <router-link to="/saponin/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['no', 'tambak', 'tanggal_Input', 'jenis', 'status', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'no text-end', actions: 'actions text-center', tanggal_Input: 'text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['tambak', 'tanggal_Input', 'id', 'kategori', 'jenis', 'keterangan', 'status'],
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
            tambak: 'Tambak a',
            tanggal_Input: '2021/04/25',
            id: '23',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 2,
            tambak: 'Tambak b',
            tanggal_Input: '2021/05/05',
            id: '12',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 3,
            tambak: 'Tambak c',
            tanggal_Input: '2022/09/18',
            id: '14',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 4,
            tambak: 'Tambak d',
            tanggal_Input: '2022/07/23',
            id: '2',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 5,
            tambak: 'Tambak e',
            tanggal_Input: '2022/01/15',
            id: '7',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 6,
            tambak: 'Tambak f',
            tanggal_Input: '2022/01/17',
            id: '8',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 7,
            tambak: 'Tambak g',
            tanggal_Input: '2022/03/25',
            id: '17',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 8,
            tambak: 'Tambak h',
            tanggal_Input: '2022/02/18',
            id: '12',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 9,
            tambak: 'Tambak i',
            tanggal_Input: '2022/04/05',
            id: '10',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 10,
            tambak: 'Tambak j',
            tanggal_Input: '2022/06/24',
            id: '21',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 11,
            tambak: 'Tambak k',
            tanggal_Input: '2022/05/13',
            id: '21',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
        {
            id: 12,
            tambak: 'Tambak l',
            tanggal_Input: '2022/07/15',
            id: '21',
            kategori: 'Saponin',
            jenis: 'saponin steroid',
            keterangan: 'null',
            status: 'Aktif',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage, saponin, probiotik, vitamin</i>',
        text: 'HALLO',
        html: `
        <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-0  table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tambak</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.tambak}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal Input</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.tanggal_Input}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Kategori</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.kategori}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Keterangan</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.keterangan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.status}</td>
                                        </tr>
                                    </tbody>
            </table>   
            `,
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
        confirmButtonClass: 'd-none',

        padding: '2em',
    });
    // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
};
</script>
