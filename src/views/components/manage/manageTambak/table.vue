<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Tambak</span></li>
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
                                    <h4>Manage Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage-tambak/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
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

    const columns = ref(['nama_tambak', 'alamat', 'nama_area', 'provinsi', 'photo', 'map_location', 'status', 'actions']);
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
        sortable: ['nama_tambak', 'alamat', 'nama_area', 'provinsi', 'photo', 'map_location', 'status'],
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
                alamat: 'System Architect',
                nama_area: 'Edinburgh',
                provinsi: 61,
                photo: '2011/04/25',
                map_location: 'null',
                status: '320,800',
            },
            {
                id: 2,
                nama_tambak: 'Garrett Winters',
                alamat: 'Accountant',
                nama_area: 'Tokyo',
                provinsi: 63,
                photo: '2011/07/25',
                map_location: 'null',
                status: '170,750',
            },
            {
                id: 3,
                nama_tambak: 'Ashton Cox',
                alamat: 'Junior Technical Author',
                nama_area: 'San Francisco',
                provinsi: 66,
                photo: '2009/01/12',
                map_location: 'null',
                status: '86,000',
            },
            {
                id: 4,
                nama_tambak: 'Cedric Kelly',
                alamat: 'Senior Javascript Developer',
                nama_area: 'Edinburgh',
                provinsi: 22,
                photo: '2012/03/29',
                map_location: 'null',
                status: '433,060',
            },
            {
                id: 5,
                nama_tambak: 'Airi Satou',
                alamat: 'Accountant',
                nama_area: 'Tokyo',
                provinsi: 33,
                photo: '2008/11/28',
                map_location: 'null',
                status: '162,700',
            },
            {
                id: 6,
                nama_tambak: 'Brielle Williamson',
                alamat: 'Integration Specialist',
                nama_area: 'New York',
                provinsi: 61,
                photo: '2012/12/02',
                map_location: 'null',
                status: '372,000',
            },
            {
                id: 7,
                nama_tambak: 'Herrod Chandler',
                alamat: 'Sales Assistant',
                nama_area: 'San Francisco',
                provinsi: 59,
                photo: '2012/08/06',
                map_location: 'null',
                status: '137,500',
            },
            {
                id: 8,
                nama_tambak: 'Rhona Davidson',
                alamat: 'Integration Specialist',
                nama_area: 'Tokyo',
                provinsi: 55,
                photo: '2010/10/14',
                map_location: 'null',
                status: '327,900',
            },
            {
                id: 9,
                nama_tambak: 'Colleen Hurst',
                alamat: 'Javascript Developer',
                nama_area: 'San Francisco',
                provinsi: 39,
                photo: '2009/09/15',
                map_location: 'null',
                status: '205,500',
            },
            {
                id: 10,
                nama_tambak: 'Sonya Frost',
                alamat: 'Software Engineer',
                nama_area: 'Edinburgh',
                provinsi: 23,
                photo: '2008/12/13',
                map_location: 'null',
                status: '103,600',
            },
            {
                id: 11,
                nama_tambak: 'Jena Gaines',
                alamat: 'nama_area Manager',
                nama_area: 'London',
                provinsi: 30,
                photo: '2008/12/19',
                map_location: 'null',
                status: '90,560',
            },
            {
                id: 12,
                nama_tambak: 'Quinn Flynn',
                alamat: 'Support Lead',
                nama_area: 'Edinburgh',
                provinsi: 22,
                photo: '2013/03/03',
                map_location: 'null',
                status: '342,000',
            },
            {
                id: 13,
                nama_tambak: 'Charde Marshall',
                alamat: 'Regional Director',
                nama_area: 'San Francisco',
                provinsi: 36,
                photo: '2008/10/16',
                map_location: 'null',
                status: '470,600',
            },
            {
                id: 14,
                nama_tambak: 'Haley Kennedy',
                alamat: 'Senior Marketing Designer',
                nama_area: 'London',
                provinsi: 43,
                photo: '2012/12/18',
                map_location: 'null',
                status: '313,500',
            },
            {
                id: 15,
                nama_tambak: 'Tatyana Fitzpatrick',
                alamat: 'Regional Director',
                nama_area: 'London',
                provinsi: 19,
                photo: '2010/03/17',
                map_location: 'null',
                status: '385,750',
            },
            {
                id: 16,
                nama_tambak: 'Michael Silva',
                alamat: 'Marketing Designer',
                nama_area: 'London',
                provinsi: 66,
                photo: '2012/11/27',
                map_location: 'null',
                status: '198,500',
            },
            {
                id: 17,
                nama_tambak: 'Paul Byrd',
                alamat: 'Chief Financial nama_arear (CFO)',
                nama_area: 'New York',
                provinsi: 64,
                photo: '2010/06/09',
                map_location: 'null',
                status: '725,000',
            },
            {
                id: 18,
                nama_tambak: 'Gloria Little',
                alamat: 'Systems Administrator',
                nama_area: 'New York',
                provinsi: 59,
                photo: '2009/04/10',
                map_location: 'null',
                status: '237,500',
            },
            {
                id: 19,
                nama_tambak: 'Bradley Greer',
                alamat: 'Software Engineer',
                nama_area: 'London',
                provinsi: 41,
                photo: '2012/10/13',
                map_location: 'null',
                status: '132,000',
            },
            {
                id: 20,
                nama_tambak: 'Dai Rios',
                alamat: 'Personnel Lead',
                nama_area: 'Edinburgh',
                provinsi: 35,
                photo: '2012/09/26',
                map_location: 'null',
                status: '217,500',
            },
            {
                id: 21,
                nama_tambak: 'Jenette Caldwell',
                alamat: 'Development Lead',
                nama_area: 'New York',
                provinsi: 61,
                photo: '2011/09/03',
                map_location: 'null',
                status: '345,000',
            },
            {
                id: 22,
                nama_tambak: 'Yuri Berry',
                alamat: 'Chief Marketing nama_arear (CMO)',
                nama_area: 'New York',
                provinsi: 40,
                photo: '2009/06/25',
                map_location: 'null',
                status: '675,000',
            },
            {
                id: 23,
                nama_tambak: 'Caesar Vance',
                alamat: 'Pre-Sales Support',
                nama_area: 'New York',
                provinsi: 21,
                photo: '2011/12/12',
                map_location: 'null',
                status: '106,450',
            },
            {
                id: 24,
                nama_tambak: 'Doris Wilder',
                alamat: 'Sales Assistant',
                nama_area: 'Sidney',
                provinsi: 23,
                photo: '2010/09/20',
                map_location: 'null',
                status: '85,600',
            },
            {
                id: 25,
                nama_tambak: 'Angelica Ramos',
                alamat: 'Chief Executive nama_arear (CEO)',
                nama_area: 'London',
                provinsi: 47,
                photo: '2009/10/09',
                map_location: 'null',
                status: '1,200,000',
            },
            {
                id: 26,
                nama_tambak: 'Gavin Joyce',
                alamat: 'Developer',
                nama_area: 'Edinburgh',
                provinsi: 42,
                photo: '2010/12/22',
                map_location: 'null',
                status: '92,575',
            },
            {
                id: 27,
                nama_tambak: 'Jennifer Chang',
                alamat: 'Regional Director',
                nama_area: 'Singapore',
                provinsi: 28,
                photo: '2010/11/14',
                map_location: 'null',
                status: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>
