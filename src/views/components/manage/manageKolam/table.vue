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
                        <router-link to="/manage-kolam/create" @click="toggleMobileMenu"
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

const columns = ref([
    'id_tambak',
    'id_kolam',
    'nama_kolam',
    'tipe_kolam',
    'luas_kolam',
    'tinggi_kolam',
    'jenis_kolam',
    'pilih_kincir',
    'pilih_pompa',
    'pilih_autofeeder',
    'tinggi_kolam',
    'status',
    'actions',
]);
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
    sortable: ['id_tambak', 'id_kolam', 'nama_kolam', 'tipe_kolam', 'luas_kolam', 'tinggi_kolam', 'jenis_kolam', 'pilih_kincir', 'pilih_pompa', 'pilih_autofeeder', 'tinggi_kolam', 'status'],
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
            id_kolam: 1,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 2,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 3,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 4,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 5,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 6,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 7,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 8,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 9,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 10,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 11,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 12,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 13,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 14,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
        {
            id_kolam: 15,
            id_tambak: 'Tiger Nixon',
            nama_kolam: 'System Architect',
            tipe_kolam: 'Edinburgh',
            luas_kolam: 61,
            jenis_kolam: 'null',
            tinggi_kolam: '2011/04/25',
            pilih_kincir: 'null',
            pilih_pompa: '320,800',
            pilih_autofeeder: '320,800',
            tinggi_kolam: '320,800',
            status: '320,800',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id_kolam + ', Name: ' + item.nama_tambak);
};
</script>
