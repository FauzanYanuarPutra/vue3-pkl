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

const columns = ref(['no', 'tanggal_input', 'Kategori', 'judul', 'no_of_view', 'no_of_like', 'status', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { no: 'no text-end', actions: 'actions text-center', tanggal_input: 'text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: ['id_konten', 'tanggal_input', 'kategori', 'judul', 'deskripsi', 'gambar', 'video', 'pdf', 'no_of_view', 'no_of_like', 'status'],
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
            tanggal_input: '2021/04/25',
            Kategori: 'Penyakit udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 2,
            id_konten: '2',
            tanggal_input: '2021/04/25',
            Kategori: 'Penyakit udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 3,
            id_konten: '3',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 4,
            id_konten: '4',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 5,
            id_konten: '5',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 6,
            id_konten: '6',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kondisi air',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 7,
            id_konten: '7',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 8,
            id_konten: '8',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 9,
            id_konten: '9',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
        {
            id: 10,
            id_konten: '10',
            tanggal_input: '2021/04/25',
            Kategori: 'Cara pengecekan kesehatan udang',
            judul: 'null',
            deskripsi: 'null',
            gambar: 'null',
            video: 'null',
            pdf: 'null',
            no_of_view: 'null',
            no_of_like: 'null',
            status: 'Aktive',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Manage Kontent Edukasi</i>',
        text: 'HALLO',
        html:
            '<p><b>Tanggal</b> : ' +
            item.tanggal_input +
            '</p>' +
            '<p><b>Kategori</b> : ' +
            item.Kategori +
            '</p>' +
            '<p><b>Judul</b> : ' +
            item.judul +
            '</p>' +
            '<p><b>Gambar</b> : ' +
            item.gambar +
            '</p>' +
            '<p><b>Video</b> : ' +
            item.video +
            '</p>' +
            '<p><b>PDF</b> : ' +
            item.pdf +
            '</p>' +
            '<p><b>No. of view</b> : ' +
            item.no_of_view +
            '</p>' +
            '<p><b>No. of like</b> : ' +
            item.no_of_like +
            '</p>' +
            '<p><b>Status</b> : ' +
            item.status +
            '</p>',
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
