<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Alat</span></li>
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
                                    <h4>Manage Alat</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative div-tambah">
                            <router-link to="/manage-alat/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #no="props" v-for="index in items">
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
                                    <div class="px-2">
                                        <router-link to="/manage-alat/edit" data-bs-toggle="tooltip" title="Edit">
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
                                    <div class="px-2">
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

    const columns = ref(['no', 'tambak', 'kategori_Alat', 'brand', 'tipe', 'jumlah', 'perkiraan_beli', 'actions']);
    const items = ref([]);
    const table_option = ref({
        skin: 'table table-hover',

        columnsClasses: { no: 'tengah-kanan', actions: 'actions text-center', jumlah: 'tengah-kanan', perkiraan_beli: 'text-center' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['tambak', 'kategori_Alat', 'brand', 'tipe', 'jumlah', 'perkiraan_beli', 'status'],
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
                tanggal_input: '22 / 22:02',
                id_alat: '122',
                kategori_Alat: 'Pompa',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '201',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 2,
                tambak: 'Tambak b',
                tanggal_input: '22 / 22:02',
                id_alat: '213',
                kategori_Alat: 'Pompa',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '121',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 3,
                tambak: 'Tambak c',
                tanggal_input: '22 / 22:02',
                id_alat: '211',
                kategori_Alat: 'Pompa',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '21',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 4,
                tambak: 'Tambak d',
                tanggal_input: '22 / 22:02',
                id_alat: '121',
                kategori_Alat: 'Auto feeder ',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '41',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 5,
                tambak: 'Tambak e',
                tanggal_input: '22 / 22:02',
                id_alat: '61',
                kategori_Alat: 'Auto feeder ',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '14',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 6,
                tambak: 'Tambak f',
                tanggal_input: '22 / 22:02',
                id_alat: '213',
                kategori_Alat: 'Auto feeder ',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '19',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 7,
                tambak: 'Tambak g',
                tanggal_input: '22 / 22:02',
                id_alat: '12',
                kategori_Alat: 'Kincir',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '81',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 8,
                tambak: 'Tambak h',
                tanggal_input: '22 / 22:02',
                id_alat: '39',
                kategori_Alat: 'Kincir',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '10',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 9,
                tambak: 'Tambak i',
                tanggal_input: '22 / 22:02',
                id_alat: '43',
                kategori_Alat: 'Kincir',
                brand: 'null',
                tipe: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '61',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
            {
                id: 10,
                tambak: 'Tambak j',
                tanggal_input: '22 / 22:02',
                id_alat: '34',
                kategori_Alat: 'null',
                brand: 'null',
                tipe: 'Alat laboratorium',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah: '11',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'Juli 2004',
                spesifikasi: 'null',
                status: 'Aktif',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Manage Alat</i>',
            text: 'HALLO',
            html: `
            <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-0  table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tambak</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.tambak }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal dan Jam Input</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.tanggal_input }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Kategori Alat </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.kategori_Alat }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Brand </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.brand }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tipe / Model </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.tipe }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>kegunaan </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.Kegunaan }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Keterangan </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.keterangan }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jumlah </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.jumlah }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Internal </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.internal }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Perkiraan bulan dan taun beli </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.perkiraan_beli }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Spesifikasi </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.spesifikasi }</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${ item.status }</td>
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
            // '<p><b>Nama</b> : ' + item.nama + '</p>'
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
        focusConfirm: true,
        confirmButtonColor: '#1695DC',
        confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
        confirmButtonAriaLabel: 'Oke',
        confirmButtonClass: 'd-none',

        padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
