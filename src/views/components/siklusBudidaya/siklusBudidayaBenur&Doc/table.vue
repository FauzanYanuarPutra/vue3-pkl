<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya Benur & DOC</span></li>
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
                                    <h4>Siklus Budidaya Benur & DOC</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/siklus-budidaya-benur-doc/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
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
                                        <router-link to="/siklus-budidaya-benur-doc/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns = ref(['nama_kolam', 'tanggal_tebar_benur', 'umur_benur', 'ukuran_rataan', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center', tanggal_tebar_benur: 'text-center', umur_benur: 'text-end', ukuran_rataan: 'text-end' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: [
            'nama_kolam',
            'tanggal_tebar_benur',
            'umur_benur',
            'ukuran_rataan',
            'berat_rataan',
            'jumlah_benih',
            'scoring_benur',
            'periode_siklus_ke',
            'dperkiraan_doc',
            'ddensity_per_square_meter',
            'total_bio_mass',
        ],
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
                tanggal_tebar_benur: '2011/04/25',
                asal_benur: 'Edinburgh',
                umur_benur: '22',
                ukuran_rataan: 61,
                berat_rataan: '12',
                jumlah_benih: '4',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '320,800',
            },
            {
                id: 2,
                nama_kolam: 'Kolam B2',
                tanggal_tebar_benur: '2011/07/25',
                asal_benur: 'Tokyo',
                umur_benur: '13',
                ukuran_rataan: 63,
                berat_rataan: '2',
                jumlah_benih: '5',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '170,750',
            },
            {
                id: 3,
                nama_kolam: 'Kolam B3',
                tanggal_tebar_benur: '2009/01/12',
                asal_benur: 'San Francisco',
                umur_benur: '5',
                ukuran_rataan: 66,
                berat_rataan: '4',
                jumlah_benih: '6',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '86,000',
            },
            {
                id: 4,
                nama_kolam: 'Kolam B4',
                tanggal_tebar_benur: '2012/03/29',
                asal_benur: 'Edinburgh',
                umur_benur: '6',
                ukuran_rataan: 22,
                berat_rataan: '1',
                jumlah_benih: '13',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '433,060',
            },
            {
                id: 5,
                nama_kolam: 'Kolam B5',
                tanggal_tebar_benur: '2008/11/28',
                asal_benur: 'Tokyo',
                umur_benur: '22',
                ukuran_rataan: 33,
                berat_rataan: '6',
                jumlah_benih: '4',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '162,700',
            },
            {
                id: 6,
                nama_kolam: 'Kolam B6',
                tanggal_tebar_benur: '2012/12/02',
                asal_benur: 'New York',
                umur_benur: '45',
                ukuran_rataan: 61,
                berat_rataan: '34',
                jumlah_benih: '4',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '372,000',
            },
            {
                id: 7,
                nama_kolam: 'Kolam B7',
                tanggal_tebar_benur: '2012/08/06',
                asal_benur: 'San Francisco',
                umur_benur: '3',
                ukuran_rataan: 59,
                berat_rataan: '12',
                jumlah_benih: '7',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '137,500',
            },
            {
                id: 8,
                nama_kolam: 'Kolam B8',
                tanggal_tebar_benur: '2010/10/14',
                asal_benur: 'Tokyo',
                umur_benur: '2',
                ukuran_rataan: 55,
                berat_rataan: '12',
                jumlah_benih: '7',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '327,900',
            },
            {
                id: 9,
                nama_kolam: 'Kolam B9',
                tanggal_tebar_benur: '2009/09/15',
                asal_benur: 'San Francisco',
                umur_benur: '22',
                ukuran_rataan: 39,
                berat_rataan: '5',
                jumlah_benih: '33',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '205,500',
            },
            {
                id: 10,
                nama_kolam: 'Kolam B10',
                tanggal_tebar_benur: '2008/12/13',
                asal_benur: 'Edinburgh',
                umur_benur: '4',
                ukuran_rataan: 23,
                berat_rataan: '8',
                jumlah_benih: '2',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '103,600',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Siklus budidaya (Benur & DOC)</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama kolam</b> : ' +
                item.nama_kolam +
                '</p>' +
                '<p><b>Tanggal tebar benur</b> : ' +
                item.tanggal_tebar_benur +
                '</p>' +
                '<p><b>Asal benur</b> : ' +
                item.asal_benur +
                '</p>' +
                '<p><b>Umur benur (hari)</b> : ' +
                item.umur_benur +
                '</p>' +
                '<p><b>Ukuran rataan (mm)</b> : ' +
                item.ukuran_rataan +
                '</p>' +
                '<p><b>Berat rataan (gram)</b> : ' +
                item.berat_rataan +
                '</p>' +
                '<p><b>Jumlah benih (ekor)</b> : ' +
                item.jumlah_benih +
                '</p>' +
                '<p><b>Scoring benur</b> : ' +
                item.scoring_benur +
                '</p>' +
                '<p><b>Periode siklus ke</b> : ' +
                item.periode_siklus_ke +
                '</p>' +
                '<p><b>Perkiraan DOC (hari)</b> : ' +
                item.dperkiraan_doc +
                '</p>' +
                '<p><b>Density per square meter</b> : ' +
                item.ddensity_per_square_meter +
                '</p>' +
                '<p><b>Total bio mass</b> : ' +
                item.total_bio_mass +
                '</p>',
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
