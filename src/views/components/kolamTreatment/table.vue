<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Kolam Treatment</span></li>
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
                                    <h2>Table Kolam Treatment</h2>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/kolam-treatment/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer">
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
                                        <router-link to="/kolam-treatment/edit" data-bs-toggle="tooltip" title="Edit">
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
                            <template #salary="props"> ${{ props.row.salary }} </template> </v-client-table
                        ><br />
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

const columns = ref(['nama_kolam', 'tanggal_input', 'pro_air', 'pro_oral', 'mineral_kg', 'keterangan', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { actions: 'actions text-center', tanggal_input: 'text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: [['nama_kolam', 'tanggal_input', 'pro_air', 'pro_oral', 'mineral', 'keterangan']],

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
                nama_kolam: 'Kolam b1',
                tanggal_input: '2011/04/25',
                pro_air: '23',
                pro_oral: '53',
                mineral_kg: '54',
                keterangan: 'null',
            },
            {
                ID: 2,
                nama_kolam: 'Kolam b2',
                tanggal_input: '2011/04/25',
                pro_air: '54',
                pro_oral: '43',
                mineral_kg: '22',
                keterangan: 'null',
            },
            {
                ID: 3,
                nama_kolam: 'Kolam b3',
                tanggal_input: '2011/04/25',
                pro_air: '64',
                pro_oral: '33',
                mineral_kg: '24',
                keterangan: 'null',
            },
            {
                ID: 4,
                nama_kolam: 'Kolam b4',
                tanggal_input: '2011/04/25',
                pro_air: '42',
                pro_oral: '54',
                mineral_kg: '64',
                keterangan: 'null',
            },
            {
                ID: 5,
                nama_kolam: 'Kolam b5',
                tanggal_input: '2011/04/25',
                pro_air: '23',
                pro_oral: '53',
                mineral_kg: '54',
                keterangan: 'null',
            },
            {
                ID: 6,
                nama_kolam: 'Kolam b6',
                tanggal_input: '2011/04/25',
                pro_air: '3',
                pro_oral: '64',
                mineral_kg: '64',
                keterangan: 'null',
            },
            {
                ID: 7,
                nama_kolam: 'Kolam b7',
                tanggal_input: '2011/04/25',
                pro_air: '53',
                pro_oral: '5',
                mineral_kg: '55',
                keterangan: 'null',
            },
            {
                ID: 8,
                nama_kolam: 'Kolam b8',
                tanggal_input: '2011/04/25',
                pro_air: '53',
                pro_oral: '42',
                mineral_kg: '53',
                keterangan: 'null',
            },
            {
                ID: 9,
                nama_kolam: 'Kolam b9',
                tanggal_input: '2011/04/25',
                pro_air: '23',
                pro_oral: '3',
                mineral_kg: '56',
                keterangan: 'null',
            },
            {
                ID: 10,
                nama_kolam: 'Kolam b10',
                tanggal_input: '2011/04/25',
                pro_air: '86',
                pro_oral: '86',
                mineral_kg: '46',
                keterangan: 'null',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Kolam Treament</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama Kolam</b> : ' +
                item.nama_kolam +
                '</p>' +
                '<p><b>Tanggal</b> : ' +
                item.tanggal_input +
                '</p>' +
                '<p><b>Pro+ Air (Liter)</b> : ' +
                item.pro_air +
                '</p>' +
                '<p><b>Pro+ Oral (ml)</b> : ' +
                item.pro_oral +
                '</p>' +
                '<p><b>Mineral (Kg)</b> : ' +
                item.mineral_kg +
                '</p>' +
                '<p><b>Keterangan</b> : ' +
                item.keterangan +
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
