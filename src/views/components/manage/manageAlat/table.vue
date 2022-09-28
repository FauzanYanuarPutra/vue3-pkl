<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Alat</span></li>
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
                                    <h4>Manage Alat</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative div-tambah">
                            <router-link to="/manage-alat/create" @click="toggleMobileMenu"
                                class="btn btn-primary mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer">
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
                                        <router-link to="/manage-alat/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['nama_tambak', 'tanggal_input', 'id_alat', 'kategori_alat', 'brand', 'jumlah_unit', , 'actions']);
const items = ref([]);
const table_option = ref({
    skin: 'table table-hover',
    columnsClasses: { actions: 'actions text-center', view: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: [
        'nama_tambak',
        'tanggal_input',
        'id_alat',
        'kategori_alat',
        'brand',
        'tipe_model',
        'kegunaan',
        'keterangan',
        'jumlah_unit',
        'photo',
        'internal_id',
        'perkiraan_beli',
        'tenaga_hp',
        'status',
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
            id: 1,
            nama_tambak: 'Tambak1',
            tanggal_input: '2011/04/25',
            id_alat: '122',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '20l',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '320,800',
        },
        {
            id: 2,
            nama_tambak: 'Tambak2',
            tanggal_input: '2011/07/25',
            id_alat: '213',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '121',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '170,750',
        },
        {
            id: 3,
            nama_tambak: 'Tambak3',
            tanggal_input: '2009/01/12',
            id_alat: '211',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '21',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '86,000',
        },
        {
            id: 4,
            nama_tambak: 'Tambak4',
            tanggal_input: '2012/03/29',
            id_alat: '121',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '41',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '433,060',
        },
        {
            id: 5,
            nama_tambak: 'Tambak5',
            tanggal_input: '2008/11/28',
            id_alat: '61',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '14',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '162,700',
        },
        {
            id: 6,
            nama_tambak: 'Tambak6',
            tanggal_input: '2012/12/02',
            id_alat: '213',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '19',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '372,000',
        },
        {
            id: 7,
            nama_tambak: 'Tambak7',
            tanggal_input: '2012/08/06',
            id_alat: '12',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '81',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '137,500',
        },
        {
            id: 8,
            nama_tambak: 'Tambak8',
            tanggal_input: '2010/10/14',
            id_alat: '39',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '10',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '327,900',
        },
        {
            id: 9,
            nama_tambak: 'Tambak9',
            tanggal_input: '2009/09/15',
            id_alat: '43',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '61',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '205,500',
        },
        {
            id: 10,
            nama_tambak: 'Tambak10',
            tanggal_input: '2008/12/13',
            id_alat: '34',
            kategori_alat: 'null',
            brand: 'null',
            tipe_model: 'null',
            kegunaan: 'null',
            keterangan: 'null',
            jumlah_unit: '11',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            status: '103,600',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage Alat</i>',
        text: 'HALLO',
        html:
            '<p><b>Nama Tambak</b> : ' + item.nama_tambak + '</p>' +
            '<p><b>Tanggal</b> : ' + item.tanggal_input + '</p>' +
            '<p><b>Id Alat</b> : ' + item.id_alat + '</p>' +
            '<p><b>Kategori ALat</b> : ' + item.kategori_alat + '</p>' +
            '<p><b>Brand</b> : ' + item.brand + '</p>' +
            '<p><b>Tipe Model</b> : ' + item.tipe_model + '</p>' +
            '<p><b>Kegunaan</b> : ' + item.kegunaan + '</p>' +
            '<p><b>Keterangan</b> : ' + item.keterangan + '</p>' +
            '<p><b>Jumlah Unit</b> : ' + item.jumlah_unit + '</p>' +
            '<p><b>Photo</b> : ' + item.photo + '</p>' +
            '<p><b>Interval Id</b> : ' + item.internal_id + '</p>' +
            '<p><b>Perkiraan Beli</b> : ' + item.perkiraan_beli + '</p>' +
            '<p><b>Tenaga HP</b> : ' + item.tenaga_hp + '</p>' +
            '<p><b>Status</b> : ' + item.status + '</p>'
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
