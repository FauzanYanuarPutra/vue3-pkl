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
                        <router-link to="/siklus-budidaya-benur-doc/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit">
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
                                        </a>
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

    const columns = ref([
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
        'actions',
    ]);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center' },
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
                nama_kolam: 'Tiger Nixon',
                tanggal_tebar_benur: 'System Architect',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 61,
                berat_rataan: '2011/04/25',
                jumlah_benih: 'null',
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
                nama_kolam: 'Garrett Winters',
                tanggal_tebar_benur: 'Accountant',
                umur_benur: 'Tokyo',
                ukuran_rataan: 63,
                berat_rataan: '2011/07/25',
                jumlah_benih: 'null',
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
                nama_kolam: 'Ashton Cox',
                tanggal_tebar_benur: 'Junior Technical Author',
                umur_benur: 'San Francisco',
                ukuran_rataan: 66,
                berat_rataan: '2009/01/12',
                jumlah_benih: 'null',
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
                nama_kolam: 'Cedric Kelly',
                tanggal_tebar_benur: 'Senior Javascript Developer',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 22,
                berat_rataan: '2012/03/29',
                jumlah_benih: 'null',
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
                nama_kolam: 'Airi Satou',
                tanggal_tebar_benur: 'Accountant',
                umur_benur: 'Tokyo',
                ukuran_rataan: 33,
                berat_rataan: '2008/11/28',
                jumlah_benih: 'null',
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
                nama_kolam: 'Brielle Williamson',
                tanggal_tebar_benur: 'Integration Specialist',
                umur_benur: 'New York',
                ukuran_rataan: 61,
                berat_rataan: '2012/12/02',
                jumlah_benih: 'null',
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
                nama_kolam: 'Herrod Chandler',
                tanggal_tebar_benur: 'Sales Assistant',
                umur_benur: 'San Francisco',
                ukuran_rataan: 59,
                berat_rataan: '2012/08/06',
                jumlah_benih: 'null',
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
                nama_kolam: 'Rhona Davidson',
                tanggal_tebar_benur: 'Integration Specialist',
                umur_benur: 'Tokyo',
                ukuran_rataan: 55,
                berat_rataan: '2010/10/14',
                jumlah_benih: 'null',
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
                nama_kolam: 'Colleen Hurst',
                tanggal_tebar_benur: 'Javascript Developer',
                umur_benur: 'San Francisco',
                ukuran_rataan: 39,
                berat_rataan: '2009/09/15',
                jumlah_benih: 'null',
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
                nama_kolam: 'Sonya Frost',
                tanggal_tebar_benur: 'Software Engineer',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 23,
                berat_rataan: '2008/12/13',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '103,600',
            },
            {
                id: 11,
                nama_kolam: 'Jena Gaines',
                tanggal_tebar_benur: 'umur_benur Manager',
                umur_benur: 'London',
                ukuran_rataan: 30,
                berat_rataan: '2008/12/19',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '90,560',
            },
            {
                id: 12,
                nama_kolam: 'Quinn Flynn',
                tanggal_tebar_benur: 'Support Lead',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 22,
                berat_rataan: '2013/03/03',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '342,000',
            },
            {
                id: 13,
                nama_kolam: 'Charde Marshall',
                tanggal_tebar_benur: 'Regional Director',
                umur_benur: 'San Francisco',
                ukuran_rataan: 36,
                berat_rataan: '2008/10/16',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '470,600',
            },
            {
                id: 14,
                nama_kolam: 'Haley Kennedy',
                tanggal_tebar_benur: 'Senior Marketing Designer',
                umur_benur: 'London',
                ukuran_rataan: 43,
                berat_rataan: '2012/12/18',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '313,500',
            },
            {
                id: 15,
                nama_kolam: 'Tatyana Fitzpatrick',
                tanggal_tebar_benur: 'Regional Director',
                umur_benur: 'London',
                ukuran_rataan: 19,
                berat_rataan: '2010/03/17',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '385,750',
            },
            {
                id: 16,
                nama_kolam: 'Michael Silva',
                tanggal_tebar_benur: 'Marketing Designer',
                umur_benur: 'London',
                ukuran_rataan: 66,
                berat_rataan: '2012/11/27',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '198,500',
            },
            {
                id: 17,
                nama_kolam: 'Paul Byrd',
                tanggal_tebar_benur: 'Chief Financial umur_benurr (CFO)',
                umur_benur: 'New York',
                ukuran_rataan: 64,
                berat_rataan: '2010/06/09',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '725,000',
            },
            {
                id: 18,
                nama_kolam: 'Gloria Little',
                tanggal_tebar_benur: 'Systems Administrator',
                umur_benur: 'New York',
                ukuran_rataan: 59,
                berat_rataan: '2009/04/10',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '237,500',
            },
            {
                id: 19,
                nama_kolam: 'Bradley Greer',
                tanggal_tebar_benur: 'Software Engineer',
                umur_benur: 'London',
                ukuran_rataan: 41,
                berat_rataan: '2012/10/13',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '132,000',
            },
            {
                id: 20,
                nama_kolam: 'Dai Rios',
                tanggal_tebar_benur: 'Personnel Lead',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 35,
                berat_rataan: '2012/09/26',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '217,500',
            },
            {
                id: 21,
                nama_kolam: 'Jenette Caldwell',
                tanggal_tebar_benur: 'Development Lead',
                umur_benur: 'New York',
                ukuran_rataan: 61,
                berat_rataan: '2011/09/03',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '345,000',
            },
            {
                id: 22,
                nama_kolam: 'Yuri Berry',
                tanggal_tebar_benur: 'Chief Marketing umur_benurr (CMO)',
                umur_benur: 'New York',
                ukuran_rataan: 40,
                berat_rataan: '2009/06/25',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '675,000',
            },
            {
                id: 23,
                nama_kolam: 'Caesar Vance',
                tanggal_tebar_benur: 'Pre-Sales Support',
                umur_benur: 'New York',
                ukuran_rataan: 21,
                berat_rataan: '2011/12/12',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '106,450',
            },
            {
                id: 24,
                nama_kolam: 'Doris Wilder',
                tanggal_tebar_benur: 'Sales Assistant',
                umur_benur: 'Sidney',
                ukuran_rataan: 23,
                berat_rataan: '2010/09/20',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '85,600',
            },
            {
                id: 25,
                nama_kolam: 'Angelica Ramos',
                tanggal_tebar_benur: 'Chief Executive umur_benurr (CEO)',
                umur_benur: 'London',
                ukuran_rataan: 47,
                berat_rataan: '2009/10/09',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '1,200,000',
            },
            {
                id: 26,
                nama_kolam: 'Gavin Joyce',
                tanggal_tebar_benur: 'Developer',
                umur_benur: 'Edinburgh',
                ukuran_rataan: 42,
                berat_rataan: '2010/12/22',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '92,575',
            },
            {
                id: 27,
                nama_kolam: 'Jennifer Chang',
                tanggal_tebar_benur: 'Regional Director',
                umur_benur: 'Singapore',
                ukuran_rataan: 28,
                berat_rataan: '2010/11/14',
                jumlah_benih: 'null',
                scoring_benur: 'null',
                periode_siklus_ke: 'null',
                dperkiraan_doc: 'null',
                ddensity_per_square_meter: 'null',
                total_bio_mass: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_kolam);
    };
</script>