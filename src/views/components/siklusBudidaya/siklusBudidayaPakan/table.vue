<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya
                                        Pakan</span></li>
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
                                    <h4>Siklus Budidaya Pakan</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/siklus-budidaya-pakan/create" @click="toggleMobileMenu"
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
                                        <router-link to="/siklus-budidaya-pakan/edit" data-bs-toggle="tooltip"
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

const columns = ref(['no', 'tambak', 'kolam', 'tanggal_Input', 'merk_Pakan', 'Pemberian_Pakan(Kg)', 'pakan_Kumulative(Kg)', 'DOC', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'text-end', actions: 'actions text-center', tanggal_Input: 'text-center', No_auto_feeder: 'text-end', 'Pemberian_Pakan(Kg)': 'text-end', 'pakan_Kumulative(Kg)': 'text-end', DOC: 'text-end' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['tambak', 'kolam', 'tanggal_Input', 'merk_Pakan', 'No_auto_feeder', 'Pemberian_Pakan(Kg)', 'pakan_Kumulative(Kg)'],
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
            tambak: 'Tambak a',
            kolam: 'Kolam B1',
            tanggal_Input: '2021/04/25',
            merk_Pakan: 'null',
            No_pakan: 'null',
            No_auto_feeder: 'null',
            'Pemberian_Pakan(Kg)': '12',
            'pakan_Kumulative(Kg)': '31',
            DOC: '23',
            FCR: 'null',
        },
        {
            id: 2,
            tambak: 'Tambak b',
            kolam: 'Kolam B2',
            tanggal_Input: '2021/04/25',
            merk_Pakan: 'null',
            No_pakan: 'null',
            No_auto_feeder: 'null',
            'Pemberian_Pakan(Kg)': '22',
            'pakan_Kumulative(Kg)': '23',
            DOC: '12',
            FCR: 'null',
        },
        {
            id: 3,
            tambak: 'Tambak c',
            kolam: 'Kolam B3',
            tanggal_Input: '2021/04/25',
            merk_Pakan: 'null',
            No_pakan: 'null',
            No_auto_feeder: 'null',
            'Pemberian_Pakan(Kg)': '12',
            'pakan_Kumulative(Kg)': '32',
            DOC: '13',
            FCR: 'null',
        },
        {
            id: 4,
            tambak: 'Tambak d',
            kolam: 'Kolam B4',
            tanggal_Input: '2021/04/25',
            merk_Pakan: 'null',
            No_pakan: 'null',
            No_auto_feeder: 'null',
            'Pemberian_Pakan(Kg)': '14',
            'pakan_Kumulative(Kg)': '42',
            DOC: '21',
            FCR: 'null',
        },
        {
            id: 5,
            tambak: 'Tambak e',
            kolam: 'Kolam B5',
            tanggal_Input: '2021/04/25',
            merk_Pakan: 'null',
            No_pakan: 'null',
            No_auto_feeder: 'null',
            'Pemberian_Pakan(Kg)': '22',
            'pakan_Kumulative(Kg)': '11',
            DOC: '23',
            FCR: 'null',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Siklus budidaya (Udang)</i>',
        text: 'HALLO',
        html: `
        <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-0  table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tambak</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.tambak}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Kolam</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.kolam}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal dan Jam Input</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.tanggal_Input}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Merk Pakan</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.merk_Pakan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>No. Pakan </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.No_pakan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>No. Auto Feeder </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.No_auto_feeder}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Pemberian Pakan (Kg) </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.No_pakan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Pakan Kumulative (Kg) </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.No_pakan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>DOC </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.DOC}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>FCR </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.FCR}</td>
                                        </tr>
                                    </tbody>
            </table>   
            `,
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
