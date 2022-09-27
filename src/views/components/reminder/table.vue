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

const columns = ref(['id', 'tanggal', 'nama_kolam', 'id_user', 'kategori', 'judul', 'keterangan', 'status', 'actions']);
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
            id: 'Tiger Nixon',
            tanggal: 'System Architect',
            nama_kolam: 'Edinburgh',
            id_user: 61,
            kategori: '2011/04/25',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '320,800',
        },
        {
            id: 2,
            id: 'Garrett Winters',
            tanggal: 'Accountant',
            nama_kolam: 'Tokyo',
            id_user: 63,
            kategori: '2011/07/25',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '170,750',
        },
        {
            id: 3,
            id: 'Ashton Cox',
            tanggal: 'Junior Technical Author',
            nama_kolam: 'San Francisco',
            id_user: 66,
            kategori: '2009/01/12',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '86,000',
        },
        {
            id: 4,
            id: 'Cedric Kelly',
            tanggal: 'Senior Javascript Developer',
            nama_kolam: 'Edinburgh',
            id_user: 22,
            kategori: '2012/03/29',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '433,060',
        },
        {
            id: 5,
            id: 'Airi Satou',
            tanggal: 'Accountant',
            nama_kolam: 'Tokyo',
            id_user: 33,
            kategori: '2008/11/28',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '162,700',
        },
        {
            id: 6,
            id: 'Brielle Williamson',
            tanggal: 'Integration Specialist',
            nama_kolam: 'New York',
            id_user: 61,
            kategori: '2012/12/02',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '372,000',
        },
        {
            id: 7,
            id: 'Herrod Chandler',
            tanggal: 'Sales Assistant',
            nama_kolam: 'San Francisco',
            id_user: 59,
            kategori: '2012/08/06',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '137,500',
        },
        {
            id: 8,
            id: 'Rhona Davidson',
            tanggal: 'Integration Specialist',
            nama_kolam: 'Tokyo',
            id_user: 55,
            kategori: '2010/10/14',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '327,900',
        },
        {
            id: 9,
            id: 'Colleen Hurst',
            tanggal: 'Javascript Developer',
            nama_kolam: 'San Francisco',
            id_user: 39,
            kategori: '2009/09/15',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '205,500',
        },
        {
            id: 10,
            id: 'Sonya Frost',
            tanggal: 'Software Engineer',
            nama_kolam: 'Edinburgh',
            id_user: 23,
            kategori: '2008/12/13',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '103,600',
        },
        {
            id: 11,
            id: 'Jena Gaines',
            tanggal: 'nama_kolam Manager',
            nama_kolam: 'London',
            id_user: 30,
            kategori: '2008/12/19',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '90,560',
        },
        {
            id: 12,
            id: 'Quinn Flynn',
            tanggal: 'Support Lead',
            nama_kolam: 'Edinburgh',
            id_user: 22,
            kategori: '2013/03/03',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '342,000',
        },
        {
            id: 13,
            id: 'Charde Marshall',
            tanggal: 'Regional Director',
            nama_kolam: 'San Francisco',
            id_user: 36,
            kategori: '2008/10/16',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '470,600',
        },
        {
            id: 14,
            id: 'Haley Kennedy',
            tanggal: 'Senior Marketing Designer',
            nama_kolam: 'London',
            id_user: 43,
            kategori: '2012/12/18',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '313,500',
        },
        {
            id: 15,
            id: 'Tatyana Fitzpatrick',
            tanggal: 'Regional Director',
            nama_kolam: 'London',
            id_user: 19,
            kategori: '2010/03/17',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '385,750',
        },
        {
            id: 16,
            id: 'Michael Silva',
            tanggal: 'Marketing Designer',
            nama_kolam: 'London',
            id_user: 66,
            kategori: '2012/11/27',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '198,500',
        },
        {
            id: 17,
            id: 'Paul Byrd',
            tanggal: 'Chief Financial nama_kolamr (CFO)',
            nama_kolam: 'New York',
            id_user: 64,
            kategori: '2010/06/09',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '725,000',
        },
        {
            id: 18,
            id: 'Gloria Little',
            tanggal: 'Systems Administrator',
            nama_kolam: 'New York',
            id_user: 59,
            kategori: '2009/04/10',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '237,500',
        },
        {
            id: 19,
            id: 'Bradley Greer',
            tanggal: 'Software Engineer',
            nama_kolam: 'London',
            id_user: 41,
            kategori: '2012/10/13',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '132,000',
        },
        {
            id: 20,
            id: 'Dai Rios',
            tanggal: 'Personnel Lead',
            nama_kolam: 'Edinburgh',
            id_user: 35,
            kategori: '2012/09/26',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '217,500',
        },
        {
            id: 21,
            id: 'Jenette Caldwell',
            tanggal: 'Development Lead',
            nama_kolam: 'New York',
            id_user: 61,
            kategori: '2011/09/03',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '345,000',
        },
        {
            id: 22,
            id: 'Yuri Berry',
            tanggal: 'Chief Marketing nama_kolamr (CMO)',
            nama_kolam: 'New York',
            id_user: 40,
            kategori: '2009/06/25',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '675,000',
        },
        {
            id: 23,
            id: 'Caesar Vance',
            tanggal: 'Pre-Sales Support',
            nama_kolam: 'New York',
            id_user: 21,
            kategori: '2011/12/12',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '106,450',
        },
        {
            id: 24,
            id: 'Doris Wilder',
            tanggal: 'Sales Assistant',
            nama_kolam: 'Sidney',
            id_user: 23,
            kategori: '2010/09/20',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '85,600',
        },
        {
            id: 25,
            id: 'Angelica Ramos',
            tanggal: 'Chief Executive nama_kolamr (CEO)',
            nama_kolam: 'London',
            id_user: 47,
            kategori: '2009/10/09',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '1,200,000',
        },
        {
            id: 26,
            id: 'Gavin Joyce',
            tanggal: 'Developer',
            nama_kolam: 'Edinburgh',
            id_user: 42,
            kategori: '2010/12/22',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '92,575',
        },
        {
            id: 27,
            id: 'Jennifer Chang',
            tanggal: 'Regional Director',
            nama_kolam: 'Singapore',
            id_user: 28,
            kategori: '2010/11/14',
            judul: 'null',
            keterangan: 'null',
            status: 'null',
            jumlah_unit: 'null',
            photo: 'null',
            internal_id: 'null',
            perkiraan_beli: 'null',
            tenaga_hp: 'null',
            sadasda: '57,650',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.id);
};
</script>