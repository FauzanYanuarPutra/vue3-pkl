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
                            <router-link to="/manage-pakan/create" @click="toggleMobileMenu"
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
                                        <router-link to="/manage-pakan/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['nama_tambak', 'tanggal_input', 'ID_Pakan', 'Asal_Pakan', 'Pakan_batch_id', 'actions']);
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
        'nama_tambak',
        'Tanggal_input',
        'ID_Pakan',
        'Asal_Paan',
        'Pakan_batch_id',
        'Jenis_butiran',
        'Tanggal_beli',
        'Ukuran_Karung',
        'jumlah_karung',
        'photo',
        'status',
        'Scoring_Pakan',
        'Aktraktan',
        'Protein_untuk_pertumbuhan',
        'Keterangan',
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
            ID_Pakan: 1,
            nama_tambak: 'Tambak 1',
            tanggal_input: '2022/01/25',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 61,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2011/04/25',
            status: '320,800',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 2,
            nama_tambak: 'Tambak 2',
            tanggal_input: '2022/02/26',
            Asal_Pakan: 'Tokyo',
            Pakan_batch_id: 63,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2011/07/25',
            map_location: 'null',
            status: '170,750',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 3,
            id: 3,
            nama_tambak: 'Tambak 3',
            tanggal_input: '2022/03/07',
            Asal_Pakan: 'San Francisco',
            Pakan_batch_id: 66,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2009/01/12',
            map_location: 'null',
            status: '86,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 4,
            nama_tambak: 'Tambak 4',
            tanggal_input: '2022/03/28',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 22,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/03/29',
            map_location: 'null',
            status: '433,060',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 5,
            nama_tambak: 'Tambak 5',
            tanggal_input: '2022/04/10',
            Asal_Pakan: 'Tokyo',
            Pakan_batch_id: 33,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2008/11/28',
            map_location: 'null',
            status: '162,700',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 6,
            nama_tambak: 'Tambak 6',
            tanggal_input: '2022/05/29',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 61,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/12/02',
            map_location: 'null',
            status: '372,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 7,
            nama_tambak: 'Tambak 7',
            tanggal_input: '2022/06/23',
            Asal_Pakan: 'San Francisco',
            Pakan_batch_id: 59,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/08/06',
            map_location: 'null',
            status: '137,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 8,
            nama_tambak: 'Tambak 8',
            tanggal_input: '2022/07/21',
            Asal_Pakan: 'Tokyo',
            Pakan_batch_id: 55,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/10/14',
            map_location: 'null',
            status: '327,900',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 9,
            nama_tambak: 'Tambak 9',
            tanggal_input: '2022/08/15',
            Asal_Pakan: 'San Francisco',
            Pakan_batch_id: 39,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2009/09/15',
            map_location: 'null',
            status: '205,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 10,
            nama_tambak: 'Tambak 10',
            tanggal_input: '2022/08/15',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 23,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2008/12/13',
            map_location: 'null',
            status: '103,600',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Kolam Treament</i>',
        text: 'HALLO',
        html:
            '<p><b>Nama Kolam</b> : ' + item.nama_tambak + '</p>' +
            '<p><b>Tanggal</b> : ' + item.tanggal_input + '</p>' +
            '<p><b>Pro+ Air (Liter) (Kg)</b> : ' + item.Asal_Pakan + '</p>' +
            '<p><b>Pro+ Oral (ml)</b> : ' + item.Pakan_batch_id + '</p>' +
            '<p><b>Mineral (Kg)</b> : ' + item.Jenis_butiran + '</p>' +
            '<p><b>Keterangan</b> : ' + item.Tanggal_beli + '</p>'
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
