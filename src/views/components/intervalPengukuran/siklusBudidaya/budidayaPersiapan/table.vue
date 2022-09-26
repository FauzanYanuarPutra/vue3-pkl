<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Siklus budidaya
                                        (persiapan)</span></li>
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
                                    <h2>Table Siklus budidaya
                                        (persiapan)</h2>
                                </div>
                            </div>
                        </div>
                        <router-link to="/budidaya-persiapan/create" @click="toggleMobileMenu"
                            class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <router-link to="/budidaya-persiapan/edit" data-bs-toggle="tooltip" title="Edit">
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
                        </v-client-table><br>
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
    'pengeringan_dasar',
    'pembuangan_sedimen',
    'sterilisasi_tambak',
    'pengisian_air',
    'pengapuran',
    'pemupukan',
    'pertumbuhan_plankton',
    'pertumbuhan_patogen',
    'probiotik',
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
    sortable: [
        [
            'pengeringan_dasar',
            'pembuangan_sedimen',
            'sterilisasi_tambak',
            'pengisian_air',
            'pengapuran',
            'pemupukan',
            'pertumbuhan_plankton',
            'pertumbuhan_patogen',
            'probiotik',
        ],
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
            ID: 1,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 2,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 3,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 4,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 5,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 6,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 7,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 8,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 9,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
        {
            ID: 10,
            pengeringan_dasar: 'System Architect',
            pembuangan_sedimen: 'System Architect',
            sterilisasi_tambak: 'System Architect',
            pengisian_air: 'System Architect',
            suhu_air: 'System Architect',
            pengapuran: 'System Architect',
            pemupukan: 'System Architect',
            pertumbuhan_plankton: 'System Architect',
            pertumbuhan_patogen: 'System Architect',
            probiotik: 'System Architect',
        },
    ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
};
</script>