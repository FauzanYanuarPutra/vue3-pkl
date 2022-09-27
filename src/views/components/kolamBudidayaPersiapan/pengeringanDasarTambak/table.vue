<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Pengeringan Dasar
                                        Tambak</span></li>
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
                                    <h4>Pengeringan Dasar Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/pengeringan-dasar-tambak/create" @click="toggleMobileMenu"
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
                                        <router-link to="/pengeringan-dasar-tambak/edit" data-bs-toggle="tooltip"
                                            title="Edit">
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

const columns = ref(['nama_kolam', 'tanggal', 'lama_hari', 'keterangan', 'actions']);
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
    sortable: ['nama_kolam', 'tanggal', 'lama_hari', 'keterangan', 'status'],
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
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/03/25',
            lama_hari: '23 Hari',
            keterangan: 'null',
        },
        {
            id: 2,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/02/25',
            lama_hari: '43 Hari',
            keterangan: 'null',
        },
        {
            id: 3,
            nama_kolam: 'Kolam Benur',
            tanggal: '2011/07/25',
            lama_hari: '74 Hari',
            keterangan: 'null',
        },
        {
            id: 4,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/05/25',
            lama_hari: '12 Hari',
            keterangan: 'null',
        },
        {
            id: 5,
            nama_kolam: 'Kolam Benur',
            tanggal: '2011/08/25',
            lama_hari: '65 Hari',
            keterangan: 'null',
        },
        {
            id: 6,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/04/25',
            lama_hari: '93 Hari',
            keterangan: 'null',
        },
        {
            id: 7,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/08/25',
            lama_hari: '12 Hari',
            keterangan: 'null',
        },
        {
            id: 8,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/04/25',
            lama_hari: '84 Hari',
            keterangan: 'null',
        },
        {
            id: 9,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/09/25',
            lama_hari: '45 Hari',
            keterangan: 'null',
        },
        {
            id: 10,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/12/25',
            lama_hari: '83 Hari',
            keterangan: 'null',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
};
</script>