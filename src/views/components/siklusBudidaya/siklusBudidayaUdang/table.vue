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
                        <router-link to="/siklus-budidaya-udang/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div>
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
                                    <div>
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

    const columns = ref(['nama_kolam', 'tanggal_input', 'ABW', 'ADG', 'SR', 'total_biomassa', 'ukuran_udang', 'scoring_udang', 'actions']);
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
        sortable: ['nama_kolam', 'tanggal_input', 'ABW', 'ADG', 'SR', 'total_biomassa', 'ukuran_udang', 'scoring_udang'],
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
                tanggal_input: 'System Architect',
                ABW: 'Edinburgh',
                ADG: 61,
                SR: '2011/04/25',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '320,800',
            },
            {
                id: 2,
                nama_kolam: 'Garrett Winters',
                tanggal_input: 'Accountant',
                ABW: 'Tokyo',
                ADG: 63,
                SR: '2011/07/25',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '170,750',
            },
            {
                id: 3,
                nama_kolam: 'Ashton Cox',
                tanggal_input: 'Junior Technical Author',
                ABW: 'San Francisco',
                ADG: 66,
                SR: '2009/01/12',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '86,000',
            },
            {
                id: 4,
                nama_kolam: 'Cedric Kelly',
                tanggal_input: 'Senior Javascript Developer',
                ABW: 'Edinburgh',
                ADG: 22,
                SR: '2012/03/29',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '433,060',
            },
            {
                id: 5,
                nama_kolam: 'Airi Satou',
                tanggal_input: 'Accountant',
                ABW: 'Tokyo',
                ADG: 33,
                SR: '2008/11/28',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '162,700',
            },
            {
                id: 6,
                nama_kolam: 'Brielle Williamson',
                tanggal_input: 'Integration Specialist',
                ABW: 'New York',
                ADG: 61,
                SR: '2012/12/02',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '372,000',
            },
            {
                id: 7,
                nama_kolam: 'Herrod Chandler',
                tanggal_input: 'Sales Assistant',
                ABW: 'San Francisco',
                ADG: 59,
                SR: '2012/08/06',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '137,500',
            },
            {
                id: 8,
                nama_kolam: 'Rhona Davidson',
                tanggal_input: 'Integration Specialist',
                ABW: 'Tokyo',
                ADG: 55,
                SR: '2010/10/14',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '327,900',
            },
            {
                id: 9,
                nama_kolam: 'Colleen Hurst',
                tanggal_input: 'Javascript Developer',
                ABW: 'San Francisco',
                ADG: 39,
                SR: '2009/09/15',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '205,500',
            },
            {
                id: 10,
                nama_kolam: 'Sonya Frost',
                tanggal_input: 'Software Engineer',
                ABW: 'Edinburgh',
                ADG: 23,
                SR: '2008/12/13',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '103,600',
            },
            {
                id: 11,
                nama_kolam: 'Jena Gaines',
                tanggal_input: 'ABW Manager',
                ABW: 'London',
                ADG: 30,
                SR: '2008/12/19',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '90,560',
            },
            {
                id: 12,
                nama_kolam: 'Quinn Flynn',
                tanggal_input: 'Support Lead',
                ABW: 'Edinburgh',
                ADG: 22,
                SR: '2013/03/03',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '342,000',
            },
            {
                id: 13,
                nama_kolam: 'Charde Marshall',
                tanggal_input: 'Regional Director',
                ABW: 'San Francisco',
                ADG: 36,
                SR: '2008/10/16',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '470,600',
            },
            {
                id: 14,
                nama_kolam: 'Haley Kennedy',
                tanggal_input: 'Senior Marketing Designer',
                ABW: 'London',
                ADG: 43,
                SR: '2012/12/18',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '313,500',
            },
            {
                id: 15,
                nama_kolam: 'Tatyana Fitzpatrick',
                tanggal_input: 'Regional Director',
                ABW: 'London',
                ADG: 19,
                SR: '2010/03/17',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '385,750',
            },
            {
                id: 16,
                nama_kolam: 'Michael Silva',
                tanggal_input: 'Marketing Designer',
                ABW: 'London',
                ADG: 66,
                SR: '2012/11/27',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '198,500',
            },
            {
                id: 17,
                nama_kolam: 'Paul Byrd',
                tanggal_input: 'Chief Financial ABWr (CFO)',
                ABW: 'New York',
                ADG: 64,
                SR: '2010/06/09',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '725,000',
            },
            {
                id: 18,
                nama_kolam: 'Gloria Little',
                tanggal_input: 'Systems Administrator',
                ABW: 'New York',
                ADG: 59,
                SR: '2009/04/10',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '237,500',
            },
            {
                id: 19,
                nama_kolam: 'Bradley Greer',
                tanggal_input: 'Software Engineer',
                ABW: 'London',
                ADG: 41,
                SR: '2012/10/13',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '132,000',
            },
            {
                id: 20,
                nama_kolam: 'Dai Rios',
                tanggal_input: 'Personnel Lead',
                ABW: 'Edinburgh',
                ADG: 35,
                SR: '2012/09/26',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '217,500',
            },
            {
                id: 21,
                nama_kolam: 'Jenette Caldwell',
                tanggal_input: 'Development Lead',
                ABW: 'New York',
                ADG: 61,
                SR: '2011/09/03',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '345,000',
            },
            {
                id: 22,
                nama_kolam: 'Yuri Berry',
                tanggal_input: 'Chief Marketing ABWr (CMO)',
                ABW: 'New York',
                ADG: 40,
                SR: '2009/06/25',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '675,000',
            },
            {
                id: 23,
                nama_kolam: 'Caesar Vance',
                tanggal_input: 'Pre-Sales Support',
                ABW: 'New York',
                ADG: 21,
                SR: '2011/12/12',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '106,450',
            },
            {
                id: 24,
                nama_kolam: 'Doris Wilder',
                tanggal_input: 'Sales Assistant',
                ABW: 'Sidney',
                ADG: 23,
                SR: '2010/09/20',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '85,600',
            },
            {
                id: 25,
                nama_kolam: 'Angelica Ramos',
                tanggal_input: 'Chief Executive ABWr (CEO)',
                ABW: 'London',
                ADG: 47,
                SR: '2009/10/09',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '1,200,000',
            },
            {
                id: 26,
                nama_kolam: 'Gavin Joyce',
                tanggal_input: 'Developer',
                ABW: 'Edinburgh',
                ADG: 42,
                SR: '2010/12/22',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '92,575',
            },
            {
                id: 27,
                nama_kolam: 'Jennifer Chang',
                tanggal_input: 'Regional Director',
                ABW: 'Singapore',
                ADG: 28,
                SR: '2010/11/14',
                ukuran_udang: 'null',
                scoring_udang: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                total_biomassa: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_kolam);
    };
</script>