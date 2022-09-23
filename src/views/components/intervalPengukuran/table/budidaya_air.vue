<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Siklus budidaya
                                        (Air)</span></li>
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
                                    <h2>Table Siklus budidaya (Air)</h2>
                                </div>
                            </div>
                        </div>
                        <router-link to="/intervalPengukuran/create_interval_pengukuran" @click="toggleMobileMenu"
                            class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items3" :columns="columns2" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center d-flex no-wrap p-4">
                                    <router-link to="/intervalPengukuran/edit_interval_pengukuran" class="cancel"
                                        @click="view_row(props.row)">
                                        <button type="button" class="btn btn-primary btn-sm">Edit</button>
                                    </router-link>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                            data-bs-target="#exampleModalRemoveAnimation">Delete</button>
                                    </div>
                                    <div class="modal" id="exampleModalRemoveAnimation" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Hapus Data</h5>
                                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal"
                                                        aria-label="Close" class="btn-close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p class="modal-text">
                                                        Apakah anda yakin ingin menghapus data tersebut?
                                                    </p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn text-danger" data-dismiss="modal"
                                                        data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i>
                                                        Cancel</button>
                                                    <button type="button" class="btn btn-danger
                                                    ">Save</button>
                                                </div>
                                            </div>
                                        </div>
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
    'pro_air',
    'pro_oral',
    'mineral_kg',
    'actions',
]);

const columns1 = ref([
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

const columns2 = ref([
    'tinggi_air',
    'kecerahan',
    'warna',
    'ph',
    'suhu_air',
    'do',
    'salinitas',
    'alkalinitas',
    'tom',
    'analisa_kimia',
    'fitoplankton',
    'vibrio',
    'hardness',
    'actions',
]);

const columns3 = ref([
    'siklus_udang',
    'actions',
]);

const columns4 = ref([
    'siklus_pakan',
    'actions',
]);

const columns5 = ref([
    'kesehatan_benur',
    'actions',
]);

const columns6 = ref([
    'kesehatan_udang',
    'actions',
]);

const columns7 = ref([
    'panen',
    'actions',
]);

const columns8 = ref([
    'siklus_benur',
    'actions',
]);
const items = ref([]);
const items1 = ref([]);
const items2 = ref([]);
const items3 = ref([]);
const items4 = ref([]);
const items5 = ref([]);
const items6 = ref([]);
const items7 = ref([]);
const items8 = ref([]);
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
            'pro_air',
            'pro_oral',
            'mineral_kg',
        ],
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
        [
            'tinggi_air',
            'kecerahan',
            'warna',
            'ph',
            'suhu_air',
            'do',
            'salinitas',
            'alkalinitas',
            'tom',
            'analisa_kimia',
            'fitoplankton',
            'vibrio',
            'hardness',
            'actions',
        ],
        [
            'siklus_udang',
        ],
        [
            'siklus_pakan',
        ],
        [
            'kesehatan_benur',
        ],
        [
            'siklus_pakan',
        ],
        [
            'kesehatan_udang',
        ],
        [
            'panen',
        ],
        [
            'siklus_benur',
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
            pro_air: 'Tiger Nixon',
            pro_oral: 'System Architect',
            mineral_kg: 'Edinburgh',
        },
        {
            pro_air: 2,
            pro_oral: 'Garrett Winters',
            mineral_kg: 'Accountant',
        },
        {
            pro_air: 3,
            pro_oral: 'Ashton Cox',
            mineral_kg: 'Junior Technical Author',
        },
        {
            pro_air: 4,
            pro_oral: 'Cedric Kelly',
            mineral_kg: 'Senior Javascript Developer',
        },
        {
            pro_air: 5,
            pro_oral: 'Airi Satou',
            mineral_kg: 'Accountant',
        },
        {
            pro_air: 6,
            pro_oral: 'Brielle Williamson',
            mineral_kg: 'Integration Specialist',
        },
        {
            pro_air: 7,
            pro_oral: 'Herrod Chandler',
            mineral_kg: 'Sales Assistant',
        },
        {
            pro_air: 8,
            pro_oral: 'Rhona Davpro_airson',
            mineral_kg: 'Integration Specialist',
        },
        {
            pro_air: 9,
            pro_oral: 'Colleen Hurst',
            mineral_kg: 'Javascript Developer',
        },
        {
            pro_air: 10,
            pro_oral: 'Sonya Frost',
            mineral_kg: 'Software Engineer',
        },
    ],
        items2.value = [
            {
                pengeringan_dasar: 'Tiger Nixon',
                pembuangan_sedimen: 'System Architect',
                sterilisasi_tambak: 'Edinburgh',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 2,
                pembuangan_sedimen: 'Garrett Winters',
                sterilisasi_tambak: 'Accountant',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 3,
                pembuangan_sedimen: 'Ashton Cox',
                sterilisasi_tambak: 'Junior Technical Author',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 4,
                pembuangan_sedimen: 'Cedric Kelly',
                sterilisasi_tambak: 'Senior Javascript Developer',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 5,
                pembuangan_sedimen: 'Airi Satou',
                sterilisasi_tambak: 'Accountant',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 6,
                pembuangan_sedimen: 'Brielle Williamson',
                sterilisasi_tambak: 'Integration Specialist',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 7,
                pembuangan_sedimen: 'Herrod Chandler',
                sterilisasi_tambak: 'Sales Assistant',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 8,
                pembuangan_sedimen: 'Rhona Davpengeringan_dasarson',
                sterilisasi_tambak: 'Integration Specialist',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 9,
                pembuangan_sedimen: 'Colleen Hurst',
                sterilisasi_tambak: 'Javascript Developer',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
            {
                pengeringan_dasar: 10,
                pembuangan_sedimen: 'Sonya Frost',
                sterilisasi_tambak: 'Software Engineer',
                pengisian_air: 'Edinburgh',
                pengapuran: 'Edinburgh',
                pemupukan: 'Edinburgh',
                pertumbuhan_plankton: 'Edinburgh',
                pertumbuhan_patogen: 'Edinburgh',
                probiotik: 'Edinburgh',
            },
        ];
};

const view_row = (item) => {
    alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
};
</script>