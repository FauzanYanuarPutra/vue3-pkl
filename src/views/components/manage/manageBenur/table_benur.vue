<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Benur</span></li>
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
                                    <h4>Manage Benur</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage_benur" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center d-flex no-wrap p-4">
                                    <router-link to="/manage-tambak/edit" class="cancel" @click="view_row(props.row)">
                                        <button type="button" class="btn btn-primary btn-sm">Edit</button>
                                    </router-link>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalRemoveAnimation">Delete</button>
                                    </div>
                                    <div class="modal" id="exampleModalRemoveAnimation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Hapus Data</h5>
                                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p class="modal-text">Apakah anda yakin ingin menghapus data tersebut?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn text-danger" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                                                    <button type="button" class="btn btn-danger">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Manage Tambak</h4>
                                </div>
                            </div>
                        </div>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="actions text-center d-flex no-wrap p-4">
                                    <router-link to="/manage-tambak/edit" class="cancel" @click="view_row(props.row)">
                                        <button type="button" class="btn btn-primary btn-sm">Edit</button>
                                    </router-link>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalRemoveAnimation">Delete</button>
                                    </div>
                                    <div class="modal" id="exampleModalRemoveAnimation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Hapus Data</h5>
                                                    <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p class="modal-text">Apakah anda yakin ingin menghapus data tersebut?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn text-danger" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                                                    <button type="button" class="btn btn-danger">Save</button>
                                                </div>
                                            </div>
                                        </div>
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

    const columns = ref(['nama_tambak', 'tanggal_dan_jam_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur', 'actions']);
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
        sortable: ['nama_tambak', 'tanggal_dan_jam_input', 'Id_benur', 'Asal_benur', 'benur_batch_id', 'usia_benur'],
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
                tanggal_dan_jam_input: 'System Architect',
                Id_benur: 'Edinburgh',
                Asal_benur: 61,
                benur_batch_id: '2011/04/25',
                usia_benur: 'null',
            },
            {
                id: 2,
                nama_tambak: 'Garrett Winters',
                tanggal_dan_jam_input: 'Accountant',
                Id_benur: 'Tokyo',
                Asal_benur: 63,
                benur_batch_id: '2011/07/25',
                usia_benur: 'null',
            },
            {
                id: 3,
                nama_tambak: 'Ashton Cox',
                tanggal_dan_jam_input: 'Junior Technical Author',
                Id_benur: 'San Francisco',
                Asal_benur: 66,
                benur_batch_id: '2009/01/12',
                usia_benur: 'null',
            },
            {
                id: 4,
                nama_tambak: 'Cedric Kelly',
                tanggal_dan_jam_input: 'Senior Javascript Developer',
                Id_benur: 'Edinburgh',
                Asal_benur: 22,
                benur_batch_id: '2012/03/29',
                usia_benur: 'null',
            },
            {
                id: 5,
                nama_tambak: 'Airi Satou',
                tanggal_dan_jam_input: 'Accountant',
                Id_benur: 'Tokyo',
                Asal_benur: 33,
                benur_batch_id: '2008/11/28',
                usia_benur: 'null',
            },
            {
                id: 6,
                nama_tambak: 'Brielle Williamson',
                tanggal_dan_jam_input: 'Integration Specialist',
                Id_benur: 'New York',
                Asal_benur: 61,
                benur_batch_id: '2012/12/02',
                usia_benur: 'null',
            },
            {
                id: 7,
                nama_tambak: 'Herrod Chandler',
                tanggal_dan_jam_input: 'Sales Assistant',
                Id_benur: 'San Francisco',
                Asal_benur: 59,
                benur_batch_id: '2012/08/06',
                usia_benur: 'null',
            },
            {
                id: 8,
                nama_tambak: 'Rhona Davidson',
                tanggal_dan_jam_input: 'Integration Specialist',
                Id_benur: 'Tokyo',
                Asal_benur: 55,
                benur_batch_id: '2010/10/14',
                usia_benur: 'null',
            },
            {
                id: 9,
                nama_tambak: 'Colleen Hurst',
                tanggal_dan_jam_input: 'Javascript Developer',
                Id_benur: 'San Francisco',
                Asal_benur: 39,
                Benur_batch_id: '2009/09/15',
                usia_benur: 'null',
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.nama_tambak);
    };
</script>
