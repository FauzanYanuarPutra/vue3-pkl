<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Pembuangan Sedimen
                                        Organik</span></li>
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
                                    <h4>Pembuangan Sedimen Organik</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/pembuangan-sendimen-organik/create" @click="toggleMobileMenu"
                            class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="mx-2">
                                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/pembuangan-sendimen-organik/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                                       
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
    sortable: ['nama_kolam', 'tanggal', 'keterangan', 'status'],
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
            ID: 1,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/04/25',
            lama_hari: '20 Hari',
            keterangan: 'null',
        },
        {
            ID: 2,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/03/25',
            lama_hari: '23 Hari',
            keterangan: 'null',
        },
        {
            ID: 3,
            nama_kolam: 'Kolam Benur',
            tanggal: '2011/07/25',
            lama_hari: '12 Hari',
            keterangan: 'null',
        },
        {
            ID: 4,
            nama_kolam: 'Kolam Fitoplankton',
            tanggal: '2011/08/25',
            lama_hari: '23 Hari',
            keterangan: 'null',
        },
        {
            ID: 5,
            nama_kolam: 'Kolam Benur',
            tanggal: '2011/01/25',
            lama_hari: '25 Hari',
            keterangan: 'null',
        },
        {
            ID: 6,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/12/25',
            lama_hari: '15 Hari',
            keterangan: 'null',
        },
        {
            ID: 7,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/05/25',
            lama_hari: '63 Hari',
            keterangan: 'null',
        },
        {
            ID: 8,
            nama_kolam: 'Kolam Udang',
            tanggal: '2011/12/25',
            lama_hari: '35 Hari',
            keterangan: 'null',
        },
        {
            ID: 9,
            nama_kolam: 'Kolam Benur',
            tanggal: '2011/09/25',
            lama_hari: '52 Hari',
            keterangan: 'null',
        },
        {
            ID: 10,
            nama_kolam: 'Kolam Ikan',
            tanggal: '2011/06/25',
            lama_hari: '63 Hari',
            keterangan: 'null',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
};
</script>