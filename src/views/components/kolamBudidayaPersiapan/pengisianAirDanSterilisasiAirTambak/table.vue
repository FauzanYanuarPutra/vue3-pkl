<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Pengisian Air dan Sterilisasi Air Tambak</span></li>
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
                                    <h4>Pengisian Air dan Sterilisasi Air Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/pengisian-air-dan-sterilisasi-air-tambak/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
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

    const columns = ref(['nama_kolam', 'tanggal', 'tinggi_air', 'pemakaian_sterilisasi', 'keterangan', 'actions']);
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
        sortable: ['nama_kolam', 'tanggal', 'tinggi_air', 'pemakaian_sterilisasi', 'keterangan', 'status'],
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
                tanggal: 'System Architect',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 61,
                brand: '2011/04/25',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '320,800',
            },
            {
                id: 2,
                nama_kolam: 'Garrett Winters',
                tanggal: 'Accountant',
                tinggi_air: 'Tokyo',
                pemakaian_sterilisasi: 63,
                brand: '2011/07/25',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '170,750',
            },
            {
                id: 3,
                nama_kolam: 'Ashton Cox',
                tanggal: 'Junior Technical Author',
                tinggi_air: 'San Francisco',
                pemakaian_sterilisasi: 66,
                brand: '2009/01/12',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '86,000',
            },
            {
                id: 4,
                nama_kolam: 'Cedric Kelly',
                tanggal: 'Senior Javascript Developer',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 22,
                brand: '2012/03/29',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '433,060',
            },
            {
                id: 5,
                nama_kolam: 'Airi Satou',
                tanggal: 'Accountant',
                tinggi_air: 'Tokyo',
                pemakaian_sterilisasi: 33,
                brand: '2008/11/28',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '162,700',
            },
            {
                id: 6,
                nama_kolam: 'Brielle Williamson',
                tanggal: 'Integration Specialist',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 61,
                brand: '2012/12/02',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '372,000',
            },
            {
                id: 7,
                nama_kolam: 'Herrod Chandler',
                tanggal: 'Sales Assistant',
                tinggi_air: 'San Francisco',
                pemakaian_sterilisasi: 59,
                brand: '2012/08/06',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '137,500',
            },
            {
                id: 8,
                nama_kolam: 'Rhona Davidson',
                tanggal: 'Integration Specialist',
                tinggi_air: 'Tokyo',
                pemakaian_sterilisasi: 55,
                brand: '2010/10/14',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '327,900',
            },
            {
                id: 9,
                nama_kolam: 'Colleen Hurst',
                tanggal: 'Javascript Developer',
                tinggi_air: 'San Francisco',
                pemakaian_sterilisasi: 39,
                brand: '2009/09/15',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '205,500',
            },
            {
                id: 10,
                nama_kolam: 'Sonya Frost',
                tanggal: 'Software Engineer',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 23,
                brand: '2008/12/13',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '103,600',
            },
            {
                id: 11,
                nama_tambak: 'Jena Gaines',
                tanggal: 'tinggi_air Manager',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 30,
                brand: '2008/12/19',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '90,560',
            },
            {
                id: 12,
                nama_tambak: 'Quinn Flynn',
                tanggal: 'Support Lead',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 22,
                brand: '2013/03/03',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '342,000',
            },
            {
                id: 13,
                nama_tambak: 'Charde Marshall',
                tanggal: 'Regional Director',
                tinggi_air: 'San Francisco',
                pemakaian_sterilisasi: 36,
                brand: '2008/10/16',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '470,600',
            },
            {
                id: 14,
                nama_tambak: 'Haley Kennedy',
                tanggal: 'Senior Marketing Designer',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 43,
                brand: '2012/12/18',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '313,500',
            },
            {
                id: 15,
                nama_tambak: 'Tatyana Fitzpatrick',
                tanggal: 'Regional Director',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 19,
                brand: '2010/03/17',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '385,750',
            },
            {
                id: 16,
                nama_tambak: 'Michael Silva',
                tanggal: 'Marketing Designer',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 66,
                brand: '2012/11/27',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '198,500',
            },
            {
                id: 17,
                nama_tambak: 'Paul Byrd',
                tanggal: 'Chief Financial tinggi_airr (CFO)',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 64,
                brand: '2010/06/09',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '725,000',
            },
            {
                id: 18,
                nama_tambak: 'Gloria Little',
                tanggal: 'Systems Administrator',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 59,
                brand: '2009/04/10',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '237,500',
            },
            {
                id: 19,
                nama_tambak: 'Bradley Greer',
                tanggal: 'Software Engineer',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 41,
                brand: '2012/10/13',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '132,000',
            },
            {
                id: 20,
                nama_tambak: 'Dai Rios',
                tanggal: 'Personnel Lead',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 35,
                brand: '2012/09/26',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '217,500',
            },
            {
                id: 21,
                nama_tambak: 'Jenette Caldwell',
                tanggal: 'Development Lead',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 61,
                brand: '2011/09/03',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '345,000',
            },
            {
                id: 22,
                nama_tambak: 'Yuri Berry',
                tanggal: 'Chief Marketing tinggi_airr (CMO)',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 40,
                brand: '2009/06/25',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '675,000',
            },
            {
                id: 23,
                nama_tambak: 'Caesar Vance',
                tanggal: 'Pre-Sales Support',
                tinggi_air: 'New York',
                pemakaian_sterilisasi: 21,
                brand: '2011/12/12',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '106,450',
            },
            {
                id: 24,
                nama_tambak: 'Doris Wilder',
                tanggal: 'Sales Assistant',
                tinggi_air: 'Sidney',
                pemakaian_sterilisasi: 23,
                brand: '2010/09/20',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '85,600',
            },
            {
                id: 25,
                nama_tambak: 'Angelica Ramos',
                tanggal: 'Chief Executive tinggi_airr (CEO)',
                tinggi_air: 'London',
                pemakaian_sterilisasi: 47,
                brand: '2009/10/09',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '1,200,000',
            },
            {
                id: 26,
                nama_tambak: 'Gavin Joyce',
                tanggal: 'Developer',
                tinggi_air: 'Edinburgh',
                pemakaian_sterilisasi: 42,
                brand: '2010/12/22',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '92,575',
            },
            {
                id: 27,
                nama_tambak: 'Jennifer Chang',
                tanggal: 'Regional Director',
                tinggi_air: 'Singapore',
                pemakaian_sterilisasi: 28,
                brand: '2010/11/14',
                tipe_model: 'null',
                kegunaan: 'null',
                keterangan: 'null',
                jumlah_unit: 'null',
                photo: 'null',
                internal_id: 'null',
                perkiraan_beli: 'null',
                tenaga_hp: 'null',
                status: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>