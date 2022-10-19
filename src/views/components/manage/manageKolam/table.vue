<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Manage Kolam</span>
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
                                    <h4>Table Manage Kolam</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-kolam/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="item,index in items">
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
                                        <router-link to="/manage-kolam/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['no', 'tambak', 'kolam', 'tipe_kolam', 'luas_kolam(M2)', 'tinggi_kolam(M)', 'jenis_kolam', 'status', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'no text-center', actions: 'actions text-center', 'luas_kolam(M2)': 'text-end', 'tinggi_kolam(M)': 'text-end' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['id_tambak', 'tambak', 'id_kolam', 'kolam', 'tipe_kolam', 'luas_kolam', 'tinggi_kolam', 'jenis_kolam', 'nama_kincir', 'nama_pompa', 'nama_autofeeder', 'status'],
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
            id_tambak: '12',
            id_kolam: 'null',
            tambak: 'Tambak a',
            kolam: 'Kolam B1',
            tipe_kolam: 'Treatment',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Beton',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 2,
            id_tambak: '14',
            id_kolam: 'null',
            tambak: 'Tambak b',
            kolam: 'Kolam B2',
            tipe_kolam: 'Treatment',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Beton',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 3,
            id_tambak: '18',
            id_kolam: 'null',
            tambak: 'Tambak c',
            kolam: 'Kolam B3',
            tipe_kolam: 'Treatment',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Beton',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 4,
            id_tambak: '15',
            id_kolam: 'null',
            tambak: 'Tambak d',
            kolam: 'Kolam B4',
            tipe_kolam: 'Treatment',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Beton',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Tidak Aktif',
        },
        {
            id: 5,
            id_tambak: '16',
            id_kolam: 'null',
            tambak: 'Tambak e',
            kolam: 'Kolam B5',
            tipe_kolam: 'Treatment',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Beton',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Tidak Aktif',
        },
        {
            id: 6,
            id_tambak: '4',
            id_kolam: 'null',
            tambak: 'Tambak f',
            kolam: 'Kolam B6',
            tipe_kolam: 'Tandon',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'HDPE',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 7,
            id_tambak: '9',
            id_kolam: 'null',
            tambak: 'Tambak g',
            kolam: 'Kolam B7',
            tipe_kolam: 'Budidaya',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Tanah',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 8,
            id_tambak: '2',
            id_kolam: 'null',
            tambak: 'Tambak h',
            kolam: 'Kolam B8',
            tipe_kolam: 'Budidaya',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Tanah',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Tidak Aktif',
        },
        {
            id: 9,
            id_tambak: '21',
            id_kolam: 'null',
            tambak: 'Tambak i',
            kolam: 'Kolam B9',
            tipe_kolam: 'Budidaya',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Tanah',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
        {
            id: 10,
            id_tambak: '10',
            id_kolam: 'null',
            tambak: 'Tambak j',
            kolam: 'Kolam B10',
            tipe_kolam: 'Budidaya',
            'luas_kolam(M2)': '52',
            'tinggi_kolam(M)': '25',
            jenis_kolam: 'Tanah',
            nama_kincir: 'null',
            jumlah_kincir: 'null',
            nama_pompa: 'null',
            jumlah_pompa: 'null',
            nama_autofeeder: 'null',
            jumlah_autofeeder: 'null',
            status: 'Aktif',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage Kolam</i>',
        text: 'HALLO',
        html: `
            <h6 class="judul-detail"><b>Nama Tambak</b> : ${item.tambak}</h6>
            <h6 class="judul-detail"><b>Nama Kolam</b> : ${item.kolam}</h6> 

            <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tipe Kolam</b></td>
                                            <td aria-colindex="2" role="cell">${item.tipe_kolam}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Luas kolam (meter persegi)</b></td>
                                            <td aria-colindex="2" role="cell">${item.luas_kolam}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tinggi kolam (meter)</b></td>
                                            <td aria-colindex="2" role="cell">${item.tinggi_kolam}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jenis Kolam</b></td>
                                            <td aria-colindex="2" role="cell">${item.jenis_kolam}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status </b></td>
                                            <td aria-colindex="2" role="cell">${item.status}</td>
                                        </tr>
                                    </tbody>
            </table>    
            <h6 class="judul-detail"><b>Kincir</b></h6> 
            <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                <tbody role="rowgroup">
                    <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Nama Kincir</b></td>
                                            <td aria-colindex="2" role="cell">${item.nama_kincir}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jumlah Kincir</b></td>
                                            <td aria-colindex="2" role="cell">${item.jumlah_kincir}</td>
                                        </tr>
                    </tbody>
                </table>
                <h6 class="judul-detail"><b>Pompa</b></h6> 
                <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                <tbody role="rowgroup">
                    <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Nama Pompa</b></td>
                                            <td aria-colindex="2" role="cell">${item.nama_pompa}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jumlah Pompa</b></td>
                                            <td aria-colindex="2" role="cell">${item.jumlah_pompa}</td>
                                        </tr>
                    </tbody>
                </table>
                <h6 class="judul-detail"><b>Auto Feeder</b></h6> 
                <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                <tbody role="rowgroup">
                    <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Nama Auto Feeder</b></td>
                                            <td aria-colindex="2" role="cell">${item.nama_autofeeder}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jumlah Auto Feeder</b></td>
                                            <td aria-colindex="2" role="cell">${item.jumlah_autofeeder}</td>
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
