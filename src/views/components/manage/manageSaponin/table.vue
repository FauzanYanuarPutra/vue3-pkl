<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Saponin</span></li>
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
                                    <h4>Saponin</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/saponin/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div class=" d-flex flex-row-reverse position-relative">
                            <router-link to="/saponin/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>
                                        
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

    const columns = ref(['nama_tambak', 'tanggal_input', 'id', 'kategori', 'jenis', 'keterangan', 'status', 'actions']);
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
        sortable: ['nama_tambak', 'tanggal_input', 'id', 'kategori', 'jenis', 'keterangan', 'status'],
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
                nama_tambak: 'Tiger Nixon',
                tanggal_input: 'System Architect',
                id: 'Edinburgh',
                kategori: 61,
                jenis: '2011/04/25',
                keterangan: 'null',
                status: '320,800',
            },
            {
                id: 2,
                nama_tambak: 'Garrett Winters',
                tanggal_input: 'Accountant',
                id: 'Tokyo',
                kategori: 63,
                jenis: '2011/07/25',
                keterangan: 'null',
                status: '170,750',
            },
            {
                id: 3,
                nama_tambak: 'Ashton Cox',
                tanggal_input: 'Junior Technical Author',
                id: 'San Francisco',
                kategori: 66,
                jenis: '2009/01/12',
                keterangan: 'null',
                status: '86,000',
            },
            {
                id: 4,
                nama_tambak: 'Cedric Kelly',
                tanggal_input: 'Senior Javascript Developer',
                id: 'Edinburgh',
                kategori: 22,
                jenis: '2012/03/29',
                keterangan: 'null',
                status: '433,060',
            },
            {
                id: 5,
                nama_tambak: 'Airi Satou',
                tanggal_input: 'Accountant',
                id: 'Tokyo',
                kategori: 33,
                jenis: '2008/11/28',
                keterangan: 'null',
                status: '162,700',
            },
            {
                id: 6,
                nama_tambak: 'Brielle Williamson',
                tanggal_input: 'Integration Specialist',
                id: 'New York',
                kategori: 61,
                jenis: '2012/12/02',
                keterangan: 'null',
                status: '372,000',
            },
            {
                id: 7,
                nama_tambak: 'Herrod Chandler',
                tanggal_input: 'Sales Assistant',
                id: 'San Francisco',
                kategori: 59,
                jenis: '2012/08/06',
                keterangan: 'null',
                status: '137,500',
            },
            {
                id: 8,
                nama_tambak: 'Rhona Davidson',
                tanggal_input: 'Integration Specialist',
                id: 'Tokyo',
                kategori: 55,
                jenis: '2010/10/14',
                keterangan: 'null',
                status: '327,900',
            },
            {
                id: 9,
                nama_tambak: 'Colleen Hurst',
                tanggal_input: 'Javascript Developer',
                id: 'San Francisco',
                kategori: 39,
                jenis: '2009/09/15',
                keterangan: 'null',
                status: '205,500',
            },
            {
                id: 10,
                nama_tambak: 'Sonya Frost',
                tanggal_input: 'Software Engineer',
                id: 'Edinburgh',
                kategori: 23,
                jenis: '2008/12/13',
                keterangan: 'null',
                status: '103,600',
            },
            {
                id: 11,
                nama_tambak: 'Jena Gaines',
                tanggal_input: 'id Manager',
                id: 'London',
                kategori: 30,
                jenis: '2008/12/19',
                keterangan: 'null',
                status: '90,560',
            },
            {
                id: 12,
                nama_tambak: 'Quinn Flynn',
                tanggal_input: 'Support Lead',
                id: 'Edinburgh',
                kategori: 22,
                jenis: '2013/03/03',
                keterangan: 'null',
                status: '342,000',
            },
            {
                id: 13,
                nama_tambak: 'Charde Marshall',
                tanggal_input: 'Regional Director',
                id: 'San Francisco',
                kategori: 36,
                jenis: '2008/10/16',
                keterangan: 'null',
                status: '470,600',
            },
            {
                id: 14,
                nama_tambak: 'Haley Kennedy',
                tanggal_input: 'Senior Marketing Designer',
                id: 'London',
                kategori: 43,
                jenis: '2012/12/18',
                keterangan: 'null',
                status: '313,500',
            },
            {
                id: 15,
                nama_tambak: 'Tatyana Fitzpatrick',
                tanggal_input: 'Regional Director',
                id: 'London',
                kategori: 19,
                jenis: '2010/03/17',
                keterangan: 'null',
                status: '385,750',
            },
            {
                id: 16,
                nama_tambak: 'Michael Silva',
                tanggal_input: 'Marketing Designer',
                id: 'London',
                kategori: 66,
                jenis: '2012/11/27',
                keterangan: 'null',
                status: '198,500',
            },
            {
                id: 17,
                nama_tambak: 'Paul Byrd',
                tanggal_input: 'Chief Financial idr (CFO)',
                id: 'New York',
                kategori: 64,
                jenis: '2010/06/09',
                keterangan: 'null',
                status: '725,000',
            },
            {
                id: 18,
                nama_tambak: 'Gloria Little',
                tanggal_input: 'Systems Administrator',
                id: 'New York',
                kategori: 59,
                jenis: '2009/04/10',
                keterangan: 'null',
                status: '237,500',
            },
            {
                id: 19,
                nama_tambak: 'Bradley Greer',
                tanggal_input: 'Software Engineer',
                id: 'London',
                kategori: 41,
                jenis: '2012/10/13',
                keterangan: 'null',
                status: '132,000',
            },
            {
                id: 20,
                nama_tambak: 'Dai Rios',
                tanggal_input: 'Personnel Lead',
                id: 'Edinburgh',
                kategori: 35,
                jenis: '2012/09/26',
                keterangan: 'null',
                status: '217,500',
            },
            {
                id: 21,
                nama_tambak: 'Jenette Caldwell',
                tanggal_input: 'Development Lead',
                id: 'New York',
                kategori: 61,
                jenis: '2011/09/03',
                keterangan: 'null',
                status: '345,000',
            },
            {
                id: 22,
                nama_tambak: 'Yuri Berry',
                tanggal_input: 'Chief Marketing idr (CMO)',
                id: 'New York',
                kategori: 40,
                jenis: '2009/06/25',
                keterangan: 'null',
                status: '675,000',
            },
            {
                id: 23,
                nama_tambak: 'Caesar Vance',
                tanggal_input: 'Pre-Sales Support',
                id: 'New York',
                kategori: 21,
                jenis: '2011/12/12',
                keterangan: 'null',
                status: '106,450',
            },
            {
                id: 24,
                nama_tambak: 'Doris Wilder',
                tanggal_input: 'Sales Assistant',
                id: 'Sidney',
                kategori: 23,
                jenis: '2010/09/20',
                keterangan: 'null',
                status: '85,600',
            },
            {
                id: 25,
                nama_tambak: 'Angelica Ramos',
                tanggal_input: 'Chief Executive idr (CEO)',
                id: 'London',
                kategori: 47,
                jenis: '2009/10/09',
                keterangan: 'null',
                status: '1,200,000',
            },
            {
                id: 26,
                nama_tambak: 'Gavin Joyce',
                tanggal_input: 'Developer',
                id: 'Edinburgh',
                kategori: 42,
                jenis: '2010/12/22',
                keterangan: 'null',
                status: '92,575',
            },
            {
                id: 27,
                nama_tambak: 'Jennifer Chang',
                tanggal_input: 'Regional Director',
                id: 'Singapore',
                kategori: 28,
                jenis: '2010/11/14',
                keterangan: 'null',
                status: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>
