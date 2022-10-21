<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Setting</span></li>
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
                                    <h4>Setting</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/setting/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                        <template #no="props" v-for="(item, index) in items">
                                {{ props.index }}
                            </template>

                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer" title="View">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-eye"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="mx-2">
                                        <router-link to="/setting/edit" data-bs-toggle="tooltip" title="Edit">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-edit-2"
                                            >
                                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                            </svg>
                                        </router-link>
                                    </div>
                                    <div class="mx-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-trash-2"
                                            >
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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

    const columns = ref(['no', 'id', 'nama', 'kategori', 'deskripsi', 'status', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { no: 'no text-center', id: 'no text-center', actions: 'actions text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['no', 'id', 'nama', 'kategori', 'deskripsi', 'status'],
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
                nama: 'Indonesia',
                kategori: 'Leanguage',
                deskripsi: 'asd',
                status: '1',
            },
            {
                id: 2,
                nama: 'Jawa Barat',
                kategori: 'Provinsi',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 3,
                nama: 'Manager',
                kategori: 'Jabatan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 4,
                nama: 'Merah',
                kategori: 'Warna air tambak',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 5,
                nama: 'Kategori Alat 1',
                kategori: 'Kategori alat',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 6,
                nama: 'Merek Benur 1',
                kategori: 'Merek benur',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 7,
                nama: 'Merek Pakan 1',
                kategori: 'Merek Pakan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 8,
                nama: 'Tipe Pakan 1',
                kategori: 'Tipe Pakan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 9,
                nama: 'Tipe Panen 1',
                kategori: 'Tipe Panen',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 10,
                nama: 'Tipe SPV 1',
                kategori: 'Tipe SPV',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 9,
                nama: 'Kategori Kontent 1',
                kategori: 'Kategori Kontent',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 10,
                nama: 'Kategori Konsumsi 1',
                kategori: 'Kategori Konsumsi',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 11,
                nama: 'Warna Air Tambak 1',
                kategori: 'Warna Air Tambak',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 12,
                nama: 'Jepang',
                kategori: 'Leanguage',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 13,
                nama: 'Jawa Tengah',
                kategori: 'Provinsi',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 14,
                nama: 'M.Kom',
                kategori: 'Jabatan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 15,
                nama: 'Kuning',
                kategori: 'Warna air tambak',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 15,
                nama: 'Kategori Alat 2',
                kategori: 'Kategori alat',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 17,
                nama: 'Merek Benur 2',
                kategori: 'Merek benur',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 18,
                nama: 'Merek Pakan 2',
                kategori: 'Merek Pakan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 19,
                nama: 'Tipe Pakan 2',
                kategori: 'Tipe Pakan',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 20,
                nama: 'Tipe Panen 2',
                kategori: 'Tipe Panen',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 21,
                nama: 'Tipe SPV 2',
                kategori: 'Tipe SPV',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 22,
                nama: 'Kategori Kontent 2',
                kategori: 'Kategori Kontent',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 23,
                nama: 'Kategori Konsumsi 2',
                kategori: 'Kategori Konsumsi',
                deskripsi: '-',
                status: '1',
            },
            {
                id: 24,
                nama: 'Warna Air Tambak 2',
                kategori: 'Warna Air Tambak',
                deskripsi: '-',
                status: '1',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Parameter Fisika</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama</b> : ' +
                item.nama +
                '</p>' +
                '<p><b>Kategori</b> : ' +
                item.kategori +
                '</p>' +
                '<p><b>Deskripsi</b> : ' +
                item.deskripsi +
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
