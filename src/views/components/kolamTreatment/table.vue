<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Kolam
                                        Treatment</span></li>
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
                                    <h2>Kolam Treatment</h2>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/kolam-treatment/create" @click="toggleMobileMenu"
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
                                        <router-link to="/kolam-treatment/edit" data-bs-toggle="tooltip" title="Edit">
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
                        </v-client-table><br />
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

const columns = ref(['no', 'nama_tambak', 'nama_kolam', 'tanggal_input', 'pro_air', 'pro_oral', 'mineral_kg', 'keterangan', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'text-end', pro_air: 'text-end', pro_oral: 'text-end', actions: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['nama_tambak', 'nama_kolam', 'tanggal_input', 'pro_air', 'pro_oral', 'mineral_kg', 'keterangan'],
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
            nama_tambak: 'Tambak a',
            nama_kolam: 'Kolam b1',
            tanggal_input: '2011/04/25',
            pro_air: 'Probio',
            pro_oral: 'Pro1',
            mineral_kg: 'Bio Max',
            keterangan: 'null',
        },
        {
            ID: 2,
            nama_tambak: 'Tambak b',
            nama_kolam: 'Kolam b2',
            tanggal_input: '2011/04/25',
            pro_air: 'Lodan',
            pro_oral: 'AquXit',
            mineral_kg: 'Premix Aquavita',
            keterangan: 'null',
        },
        {
            ID: 3,
            nama_tambak: 'Tambak c',
            nama_kolam: 'Kolam b3',
            tanggal_input: '2011/04/25',
            pro_air: 'Lodax',
            pro_oral: 'QuickPro',
            mineral_kg: 'Vrisda',
            keterangan: 'null',
        },
        {
            ID: 4,
            nama_tambak: 'Tambak d',
            nama_kolam: 'Kolam b4',
            tanggal_input: '2011/04/25',
            pro_air: 'Tionat',
            pro_oral: 'Shrimp Gold',
            mineral_kg: 'Vrisda',
            keterangan: 'null',
        },
        {
            ID: 5,
            nama_tambak: 'Tambak e',
            nama_kolam: 'Kolam b5',
            tanggal_input: '2011/04/25',
            pro_air: 'Probio',
            pro_oral: 'Pro1',
            mineral_kg: 'Bio Max',
            keterangan: 'null',
        },
        {
            ID: 6,
            nama_tambak: 'Tambak f',
            nama_kolam: 'Kolam b6',
            tanggal_input: '2011/04/25',
            pro_air: 'Lodan',
            pro_oral: 'AquXit',
            mineral_kg: 'Premix Aquavita',
            keterangan: 'null',
        },
        {
            ID: 7,
            nama_tambak: 'Tambak g',
            nama_kolam: 'Kolam b7',
            tanggal_input: '2011/04/25',
            pro_air: 'Lodax',
            pro_oral: 'Pro1',
            mineral_kg: 'Vrisda',
            keterangan: 'null',
        },
        {
            ID: 8,
            nama_tambak: 'Tambak h',
            nama_kolam: 'Kolam b8',
            tanggal_input: '2011/04/25',
            pro_air: 'Tionat',
            pro_oral: 'QuickPro',
            mineral_kg: 'Vrisda',
            keterangan: 'null',
        },
        {
            ID: 9,
            nama_tambak: 'Tambak i',
            nama_kolam: 'Kolam b9',
            tanggal_input: '2011/04/25',
            pro_air: 'Probio',
            pro_oral: 'QuickPro',
            mineral_kg: 'Bio Max',
            keterangan: 'null',
        },
        {
            ID: 10,
            nama_tambak: 'Tambak j',
            nama_kolam: 'Kolam b10',
            tanggal_input: '2011/04/25',
            pro_air: 'Lodan',
            pro_oral: 'AquXit',
            mineral_kg: 'Vrisda',
            keterangan: 'null',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Kolam Treament</i>',
        text: 'HALLO',
        html: `
            <h6 class="judul-detail"><b>Nama Tambak</b> : ${item.nama_tambak}</h6>
            <h6 class="judul-detail"><b>Nama Kolam</b> : ${item.nama_kolam}</h6> 

            <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-hover table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal dan Jam Input</b></td>
                                            <td aria-colindex="2" role="cell">${item.tanggal_input}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Pro+ Air (Liter)</b></td>
                                            <td aria-colindex="2" role="cell">${item.pro_air}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Pro+ Oral (ml)</b></td>
                                            <td aria-colindex="2" role="cell">${item.pro_oral}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Mineral (Kg)</b></td>
                                            <td aria-colindex="2" role="cell">${item.mineral_kg}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Keterangan </b></td>
                                            <td aria-colindex="2" role="cell">${item.keterangan}</td>
                                        </tr>
                                    </tbody>
            </table>    
        `,
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
