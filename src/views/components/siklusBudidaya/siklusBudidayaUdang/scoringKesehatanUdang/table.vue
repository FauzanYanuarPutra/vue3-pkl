<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya Udang</span></li>
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
                                    <h4>Siklus Budidaya Udang</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/scoring-kesehatan-udang/create" @click="toggleMobileMenu" class="btn y mb-2 mx-3 tambah-data">Tambah Data</router-link>
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
                                    <div class="mx-2">
                                        <router-link to="/scoring-kesehatan-udang/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns = ref([ 'nama_tambak', 'nama_kolam', 'tanggal', 'scoring', 'DOC', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: {
            actions: 'actions text-center',
            tanggal_input: 'text-center',
            ABW: 'text-end',
            ADG: 'text-end',
            SR: 'text-end',
            total_biomassa: 'text-end',
            ukuran_udang: 'text-end',
            scoring_udang: 'text-end',
        },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: [ 'nama_tambak', 'nama_kolam', 'tanggal', 'scoring', 'DOC'],
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
                nama_kolam: 'Kolam B1',
                tanggal_input: '2011/04/25',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '2',
                scoring_udang: 'null',
            },
            {
                id: 2,
                nama_kolam: 'Kolam B2',
                tanggal_input: '2011/07/25',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '32',
                scoring_udang: 'null',
            },
            {
                id: 3,
                nama_kolam: 'Kolam B3',
                tanggal_input: '2009/01/12',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '4',
                scoring_udang: 'null',
            },
            {
                id: 4,
                nama_kolam: 'Kolam B4',
                tanggal_input: '2012/03/29',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '14',
                scoring_udang: 'null',
            },
            {
                id: 5,
                nama_kolam: 'Kolam B5',
                tanggal_input: '2008/11/28',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '43',
                scoring_udang: 'null',
            },
            {
                id: 6,
                nama_kolam: 'Kolam B6',
                tanggal_input: '2012/12/02',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '53',
                scoring_udang: 'null',
            },
            {
                id: 7,
                nama_kolam: 'Kolam B7',
                tanggal_input: '2012/08/06',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '35',
                scoring_udang: 'null',
            },
            {
                id: 8,
                nama_kolam: 'Kolam B8',
                tanggal_input: '2010/10/14',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '35',
                scoring_udang: 'null',
            },
            {
                id: 9,
                nama_kolam: 'Kolam B9',
                tanggal_input: '2009/09/15',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '64',
                scoring_udang: 'null',
            },
            {
                id: 10,
                nama_kolam: 'Kolam B10',
                tanggal_input: '2008/12/13',
                ABW: 'null',
                ADG: 'null',
                SR: 'null',
                total_biomassa: '320,800',
                ukuran_udang: '6',
                scoring_udang: 'null',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Siklus Budidaya (Udang)</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama kolam</b> : ' +
                item.nama_kolam +
                '</p>' +
                '<p><b>Tanggal dan jam input</b> : ' +
                item.tanggal_input +
                '</p>' +
                '<p><b>ABW = Avg. Body Weight (gr)</b> : ' +
                item.ABW +
                '</p>' +
                '<p><b>ADG = Avg. Daily Growth (gr)</b> : ' +
                item.ADG +
                '</p>' +
                '<p><b>SR = Survival rate (%)</b> : ' +
                item.SR +
                '</p>' +
                '<p><b>Total biomassa (Kg)</b> : ' +
                item.total_biomassa +
                '</p>' +
                '<p><b>Ukuran udang</b> : ' +
                item.ukuran_udang +
                '</p>' +
                '<p><b>Scoring udang</b> : ' +
                item.scoring_udang +
                '</p>',
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
