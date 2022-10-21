<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Kontent
                                        Edukasi</span></li>
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
                                    <h4>Table Kontent Edukasi</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-kontent/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="(item, index) in items">
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
                                        <router-link to="/manage-kontent/create" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['no', 'tanggal_Input', 'Kategori', 'judul', 'no_of_View', 'no_of_Like', 'status', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'no text-end', actions: 'actions text-center', tanggal_Input: 'text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['id_konten', 'tanggal_Input', 'kategori', 'judul', 'deskripsi', 'gambar', 'video', 'pdf', 'no_of_View', 'no_of_Like', 'status'],
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
            id_konten: '1',
            tanggal_Input: '2021/04/25',
            Kategori: 'Penyakit udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '14',
            no_of_Like: '13',
            status: 'Aktif',
        },
        {
            id: 2,
            id_konten: '2',
            tanggal_Input: '2021/04/25',
            Kategori: 'Penyakit udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '33',
            no_of_Like: '12',
            status: 'Tidak Aktif',
        },
        {
            id: 3,
            id_konten: '3',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '34',
            no_of_Like: '23',
            status: 'Aktif',
        },
        {
            id: 4,
            id_konten: '4',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '35',
            no_of_Like: '12',
            status: 'Tidak Aktif',
        },
        {
            id: 5,
            id_konten: '5',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '34',
            no_of_Like: '15',
            status: 'Tidak Aktif',
        },
        {
            id: 6,
            id_konten: '6',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '25',
            no_of_Like: '15',
            status: 'Aktif',
        },
        {
            id: 7,
            id_konten: '7',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '54',
            no_of_Like: '13',
            status: 'Aktif',
        },
        {
            id: 8,
            id_konten: '8',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '57',
            no_of_Like: '13',
            status: 'Tidak Aktif',
        },
        {
            id: 9,
            id_konten: '9',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '46',
            no_of_Like: '31',
            status: 'Aktif',
        },
        {
            id: 10,
            id_konten: '10',
            tanggal_Input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_View: '46',
            no_of_Like: '31',
            status: 'Aktif',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage Kontent Edukasi</i>',
        text: 'HALLO',
        html: `
        <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-0  table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal Input</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.tanggal_Input}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Kategori</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Kategori}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Judul</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.judul}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Deskripsi</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.deskripsi}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Gambar </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.gambar}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Video </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.video}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>PDF </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.pdf}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>No of View </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.no_of_View}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>No of Like </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.no_of_Like}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.status}</td>
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
        // '<p><b>Nama</b> : ' + item.nama + '</p>'
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
