<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya Air - Parameter Biologi </span></li>
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
                                    <h4>Parameter Biologi</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/budidaya-biologi/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
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
                                    <div class="px-2">
                                        <router-link to="/budidaya-biologi/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns = ref(['no', 'Nama_tambak', 'Nama_kolam', 'GA', 'DIATOM', 'DYNO', 'BGA', 'OTHER', 'DENSITY', 'Total_Vibrio_TCBS', 'Total_Vibrio_CHROMagar', 'DOC', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: {
            actions: 'actions text-center',
            Tanggal_panen: 'text-center ',
            GA: 'text-end ',
            DIATOM: 'text-end ',
            DYNO: 'text-end ',
            BGA: 'text-end ',
            OTHER: 'text-end ',
            DENSITY: 'text-end ',
            DOC: 'text-end ',
        },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['Nama_tambak', 'Nama_kolam', 'GA', 'DIATOM', 'DYNO', 'BGA', 'OTHER', 'DENSITY', 'Total_Vibrio_TCBS', 'Total_Vibrio_CHROMagar', 'DOC'],
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
                Nama_tambak: 'Tambak a',
                Nama_kolam: 'Kolam B1',
                Tanggal: '2022/03/29',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 2,
                Nama_tambak: 'Tambak b',
                Nama_kolam: 'Kolam B2',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 3,
                Nama_tambak: 'Tambak c',
                Nama_kolam: 'Kolam B3',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 4,
                Nama_tambak: 'Tambak d',
                Nama_kolam: 'Kolam B4',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 5,
                Nama_tambak: 'Tambak e',
                Nama_kolam: 'Kolam B5',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 6,
                Nama_tambak: 'Tambak f',
                Nama_kolam: 'Kolam B6',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 7,
                Nama_tambak: 'Tambak g',
                Nama_kolam: 'Kolam B7',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 8,
                Nama_tambak: 'Tambak h',
                Nama_kolam: 'Kolam B8',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 9,
                Nama_tambak: 'Tambak i',
                Nama_kolam: 'Kolam B9',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
            {
                id: 10,
                Nama_tambak: 'Tambak i',
                Nama_kolam: 'Kolam B9',
                GA: '',
                DIATOM: '',
                DYNO: '',
                BGA: '',
                OTHER: '',
                DENSITY: '',
                Total_Vibrio_TCBS: '',
                Total_Vibrio_CHROMagar: '',
                DOC: '60',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Panen</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama Tambak</b> : ' +
                item.Nama_tambak +
                '</p>' +
                '<p><b>Nama Kolam</b> : ' +
                item.Nama_kolam +
                '</p>' +
                '<p><b>GA </b> : ' +
                item.GA +
                '</p>' +
                '<p><b> DIATOM </b> : ' +
                item.DIATOM +
                '</p>' +
                '<p><b>DYNO </b> : ' +
                item.DYNO +
                '</p>' +
                '<p><b>BGA</b> : ' +
                item.BGA +
                '</p>' +
                '<p><b>OTHER </b> : ' +
                item.OTHER +
                '</p>' +
                '<p><b>DENSITY </b> : ' +
                item.DENSITY +
                '</p>' +
                '<p><b>Total Vibrio TCBS </b> : ' +
                item.Total_Vibrio_TCBS +
                '</p>' +
                '<p><b>Total Vibrio CHROMagar</b> : ' +
                item.Total_Vibrio_CHROMagar +
                '</p>' +
                '<p><b>DOC (Day of cultivation)</b> : ' +
                item.DOC +
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
            confirmButtonColor: '#1695DC',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
