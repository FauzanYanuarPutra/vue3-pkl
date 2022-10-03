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
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/budidaya-air/create" @click="toggleMobileMenu"
                                class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer"  title="View">
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
                                        <router-link to="/budidaya-air/edit" data-bs-toggle="tooltip" title="Edit">
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

const columns = ref(['tinggi_air', 'kecerahan', 'warna', 'ph', 'actions']);
const items = ref([]);
const table_option = ref({
    perPage: 10,
    perPageValues: [5, 10, 20, 50],
    skin: 'table table-hover',
    columnsClasses: { ph: 'text-end', warna: 'text-end', kecerahan: 'text-end', tinggi_air: 'text-end', actions: 'actions text-center' },
    pagination: { nav: 'scroll', chunk: 5 },
    texts: {
        count: 'Showing {from} to {to} of {count}',
        filter: '',
        filterPlaceholder: 'Search...',
        limit: 'Results:',
    },
    sortable: [['tinggi_air', 'kecerahan', 'warna', 'ph', 'suhu_air', 'do', 'salinitas', 'alkalinitas', 'tom', 'analisa_kimia', 'fitoplankton', 'vibrio', 'hardness']],

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
            tinggi_air: '12',
            kecerahan: '43',
            warna: '22',
            ph: '3',
            suhu_air: '5',
            do: '65',
            salinitas: '8',
            alkalinitas: '19',
            tom: '54',
            analisa_kimia: '54',
            fitoplankton: '34',
            vibrio: '54',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 2,
            tinggi_air: '5',
            kecerahan: '45',
            warna: '33',
            ph: '6',
            suhu_air: '74',
            do: '3',
            salinitas: '6',
            alkalinitas: '23',
            tom: '86',
            analisa_kimia: '56',
            fitoplankton: '4',
            vibrio: '76',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 3,
            tinggi_air: '3',
            kecerahan: '4',
            warna: '5',
            ph: '25',
            suhu_air: '5',
            do: '75',
            salinitas: '4',
            alkalinitas: '87',
            tom: '3',
            analisa_kimia: '56',
            fitoplankton: '5',
            vibrio: '97',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 4,
            tinggi_air: '34',
            kecerahan: '5',
            warna: '25',
            ph: '75',
            suhu_air: '55',
            do: '64',
            salinitas: '3',
            alkalinitas: '15',
            tom: '74',
            analisa_kimia: '2',
            fitoplankton: '75',
            vibrio: '2',
            tbc: '12',
            hardness: '3',
        },
        {
            ID: 5,
            tinggi_air: '12',
            kecerahan: '43',
            warna: '22',
            ph: '3',
            suhu_air: '5',
            do: '65',
            salinitas: '8',
            alkalinitas: '19',
            tom: '54',
            analisa_kimia: '54',
            fitoplankton: '34',
            vibrio: '54',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 6,
            tinggi_air: '12',
            kecerahan: '43',
            warna: '22',
            ph: '3',
            suhu_air: '5',
            do: '65',
            salinitas: '8',
            alkalinitas: '19',
            tom: '54',
            analisa_kimia: '54',
            fitoplankton: '34',
            vibrio: '54',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 7,
            tinggi_air: '12',
            kecerahan: '43',
            warna: '22',
            ph: '3',
            suhu_air: '5',
            do: '65',
            salinitas: '8',
            alkalinitas: '19',
            tom: '54',
            analisa_kimia: '54',
            fitoplankton: '34',
            vibrio: '54',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 8,
            tinggi_air: '6',
            kecerahan: '44',
            warna: '34',
            ph: '23',
            suhu_air: '4',
            do: '74',
            salinitas: '16',
            alkalinitas: '32',
            tom: '94',
            analisa_kimia: '16',
            fitoplankton: '8',
            vibrio: '26',
            tbc: '12',
            hardness: '2',
        },
        {
            ID: 9,
            tinggi_air: '12',
            kecerahan: '43',
            warna: '22',
            ph: '3',
            suhu_air: '5',
            do: '65',
            salinitas: '8',
            alkalinitas: '19',
            tom: '54',
            analisa_kimia: '54',
            fitoplankton: '34',
            vibrio: '54',
            tbc: '12',
            hardness: '5',
        },
        {
            ID: 10,
            tinggi_air: '34',
            kecerahan: '5',
            warna: '25',
            ph: '75',
            suhu_air: '55',
            do: '64',
            salinitas: '3',
            alkalinitas: '15',
            tom: '74',
            analisa_kimia: '2',
            fitoplankton: '75',
            vibrio: '2',
            tbc: '12',
            hardness: '3',
        },
    ];
};

const view_row = (item) => {
    new window.Swal({
        title: '<i>Siklus budidaya (Air)</i>',
        text: 'HALLO',
        html:
            '<p><b>Tinggi Air (cm)</b> : ' +
            item.tinggi_air +
            '</p>' +
            '<p><b>Kecerahan (cm)</b> : ' +
            item.kecerahan +
            '</p>' +
            '<p><b>Warna</b> : ' +
            item.warna +
            '</p>' +
            '<p><b>pH</b> : ' +
            item.ph +
            '</p>' +
            '<p><b>Suhu air (celcius)</b> : ' +
            item.suhu_air +
            '</p>' +
            '<p><b>DO (ppm)</b> : ' +
            item.do +
            '</p>' +
            '<p><b>Salinitas (%)</b> : ' +
            item.salinitas +
            '</p>' +
            '<p><b>Alkalinitas (ppm)</b> : ' +
            item.alkalinitas +
            '</p>' +
            '<p><b>TOM</b> : ' +
            item.tom +
            '</p>' +
            '<p><b>Analisa kimia</b> : ' +
            item.analisa_kimia +
            '</p>' +
            '<p><b>Fitoplankton</b> : ' +
            item.fitoplankton +
            '</p>' +
            '<p><b>Vibrio</b> : ' +
            item.vibrio +
            '</p>' +
            '<p><b>TBC</b> : ' +
            item.tbc +
            '</p>' +
            '<p><b>Hardness</b> : ' +
            item.hardness +
            '</p>',
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
