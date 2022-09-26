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
                        <router-link to="/manage-pakan/create" @click="toggleMobileMenu"
                            class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-edit-2">
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                </path>
                                            </svg>
                                        </a>
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

const columns = ref(['nama_tambak', 'Tanggal_dan_jam_input', 'ID_Pakan', 'Asal_Pakan', 'Pakan_batch_id', 'Jenis_butiran', 'Tanggal_beli',
    'Ukuran_Karung', 'photo', 'status', 'Scoring_Pakan', 'Aktraktan', 'Protein_untuk_pertumbuhan', 'Keterangan', 'actions']);
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
    sortable: ['nama_tambak', 'Tanggal_dan_jam_input', 'ID_Pakan', 'Asal_Paan', 'Pakan_batch_id', 'Jenis_butiran', 'Tanggal_beli',
        'Ukuran_Karung', 'photo', 'status', 'Scoring_Pakan', 'Aktraktan', 'Protein_untuk_pertumbuhan', 'Keterangan'],
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
            nama_tambak: 'Tiger Nixon',
            Tanggal_dan_jam_input: 'System Architect',
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
            nama_tambak: 'Garrett Winters',
            Tanggal_dan_jam_input: 'Accountant',
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
            nama_tambak: 'Ashton Cox',
            Tanggal_dan_jam_input: 'Junior Technical Author',
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
            nama_tambak: 'Cedric Kelly',
            Tanggal_dan_jam_input: 'Senior Javascript Developer',
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
            nama_tambak: 'Airi Satou',
            Tanggal_dan_jam_input: 'Accountant',
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
            nama_tambak: 'Brielle Williamson',
            Tanggal_dan_jam_input: 'Integration Specialist',
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
            nama_tambak: 'Herrod Chandler',
            Tanggal_dan_jam_input: 'Sales Assistant',
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
            nama_tambak: 'Rhona Davidson',
            Tanggal_dan_jam_input: 'Integration Specialist',
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
            nama_tambak: 'Colleen Hurst',
            Tanggal_dan_jam_input: 'Javascript Developer',
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
            nama_tambak: 'Sonya Frost',
            Tanggal_dan_jam_input: 'Software Engineer',
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
        {
            ID_Pakan: 11,
            nama_tambak: 'Jena Gaines',
            Tanggal_dan_jam_input: 'nama_area Manager',
            Asal_Pakan: 'London',
            Pakan_batch_id: 30,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2008/12/19',
            map_location: 'null',
            status: '90,560',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 12,
            nama_tambak: 'Quinn Flynn',
            Tanggal_dan_jam_input: 'Support Lead',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 22,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2013/03/03',
            map_location: 'null',
            status: '342,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 13,
            nama_tambak: 'Charde Marshall',
            Tanggal_dan_jam_input: 'Regional Director',
            Asal_Pakan: 'San Francisco',
            Pakan_batch_id: 36,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2008/10/16',
            map_location: 'null',
            status: '470,600',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 14,
            nama_tambak: 'Haley Kennedy',
            Tanggal_dan_jam_input: 'Senior Marketing Designer',
            Asal_Pakan: 'London',
            Pakan_batch_id: 43,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/12/18',
            map_location: 'null',
            status: '313,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 15,
            nama_tambak: 'Tatyana Fitzpatrick',
            Tanggal_dan_jam_input: 'Regional Director',
            Asal_Pakan: 'London',
            Pakan_batch_id: 19,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/03/17',
            map_location: 'null',
            status: '385,750',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },

        {
            ID_Pakan: 16,
            nama_tambak: 'Michael Silva',
            Tanggal_dan_jam_input: 'Marketing Designer',
            Asal_Pakan: 'London',
            Pakan_batch_id: 66,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/11/27',
            map_location: 'null',
            status: '198,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },

        {
            ID_Pakan: 17,
            nama_tambak: 'Paul Byrd',
            Tanggal_dan_jam_input: 'Chief Financial nama_arear (CFO)',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 64,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/06/09',
            map_location: 'null',
            status: '725,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 18,
            nama_tambak: 'Gloria Little',
            Tanggal_dan_jam_input: 'Systems Administrator',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 59,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2009/04/10',
            map_location: 'null',
            status: '237,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 19,
            nama_tambak: 'Bradley Greer',
            Tanggal_dan_jam_input: 'Software Engineer',
            Asal_Pakan: 'London',
            Pakan_batch_id: 41,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/10/13',
            map_location: 'null',
            status: '132,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 20,
            nama_tambak: 'Dai Rios',
            Tanggal_dan_jam_input: 'Personnel Lead',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 35,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2012/09/26',
            map_location: 'null',
            status: '217,500',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 21,
            nama_tambak: 'Jenette Caldwell',
            Tanggal_dan_jam_input: 'Development Lead',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 61,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2011/09/03',
            map_location: 'null',
            status: '345,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 22,
            nama_tambak: 'Yuri Berry',
            Tanggal_dan_jam_input: 'Chief Marketing nama_arear (CMO)',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 40,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2009/06/25',
            map_location: 'null',
            status: '675,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 23,
            nama_tambak: 'Caesar Vance',
            Tanggal_dan_jam_input: 'Pre-Sales Support',
            Asal_Pakan: 'New York',
            Pakan_batch_id: 21,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2011/12/12',
            map_location: 'null',
            status: '106,450',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 24,
            nama_tambak: 'Doris Wilder',
            Tanggal_dan_jam_input: 'Sales Assistant',
            Asal_Pakan: 'Sidney',
            Pakan_batch_id: 23,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/09/20',
            map_location: 'null',
            status: '85,600',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 25,
            nama_tambak: 'Angelica Ramos',
            Tanggal_dan_jam_input: 'Chief Executive nama_arear (CEO)',
            Asal_Pakan: 'London',
            Pakan_batch_id: 47,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2009/10/09',
            map_location: 'null',
            status: '1,200,000',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 26,
            nama_tambak: 'Gavin Joyce',
            Tanggal_dan_jam_input: 'Developer',
            Asal_Pakan: 'Edinburgh',
            Pakan_batch_id: 42,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/12/22',
            map_location: 'null',
            status: '92,575',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
        {
            ID_Pakan: 27,
            nama_tambak: 'Jennifer Chang',
            Tanggal_dan_jam_input: 'Regional Director',
            Asal_Pakan: 'Singapore',
            Pakan_batch_id: 28,
            Jenis_butiran: 61,
            Tanggal_beli: 61,
            Ukuran_Karung: 61,
            photo: '2010/11/14',
            map_location: 'null',
            status: '57,650',
            Scoring_Pakan: 'null',
            Aktraktan: 'null',
            Protein_untuk_pertumbuhan: 'null',
            Keterangan: 'null',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
};
</script>
