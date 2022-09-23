<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Table Kontent Edukasi</span></li>
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
                                    <h4>Table Kontent Edukasi</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage-kontent/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
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

    const columns = ref(['tanggal_input', 'tipe_kolam', 'judul', 'deskripsi', 'gambar', 'video', 'pdf', 'luas_kolam', 'tinggi_kolam', 'status', 'actions']);
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
        sortable: ['tanggal_input', 'tipe_kolam', 'judul', 'deskripsi', 'gambar', 'video', 'pdf', 'luas_kolam', 'tinggi_kolam', 'status'],
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
        ];
    };

    const view_row = (item) => {
        alert('Id: ' + item.id + ', Judul: ' + item.judul);
    };
</script>