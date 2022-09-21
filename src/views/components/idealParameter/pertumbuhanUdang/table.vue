<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Pertumbuhan Udang</span></li>
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
                                    <h4>Pertumbuhan Udang</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/Pertumbuhan Udang/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="action no-wrap">
                                    <div class="text-center text-center d-flex ">
                                        <router-link to="/Pertumbuhan Udang/edit" class="cancel w-50" @click="view_row(props.row)">
                                            <button type="button" class="btn btn-primary btn-sm w-100">Edit</button>
                                        </router-link>
                                        <div class="text-centerc w-50">
                                            <button type="button" class="btn btn-danger btn-sm w-100" data-bs-toggle="modal" data-bs-target="#exampleModalRemoveAnimation">Delete</button>
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

    const columns = ref(['ADG', 'SR', 'scoring', 'actions']);
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
        sortable: ['ADG', 'SR', 'scoring'],
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
                ADG: 'Tiger Nixon',
                SR: 'System Architect',
                scoring: 61,
            },
            {
                id: 2,
                ADG: 'Garrett Winters',
                SR: 'Accountant',
                scoring: 63,
            },
            {
                id: 3,
                ADG: 'Ashton Cox',
                SR: 'Junior Technical Author',
                scoring: 66,
            },
            {
                id: 4,
                ADG: 'Cedric Kelly',
                SR: 'Senior Javascript Developer',
                scoring: 22,
            },
            {
                id: 5,
                ADG: 'Airi Satou',
                SR: 'Accountant',
                scoring: 33,
            },
            {
                id: 6,
                ADG: 'Brielle Williamson',
                SR: 'Integration Specialist',
                scoring: 61,
            },
            {
                id: 7,
                ADG: 'Herrod Chandler',
                SR: 'Sales Assistant',
                scoring: 59,
            },
            {
                id: 8,
                ADG: 'Rhona Davidson',
                SR: 'Integration Specialist',
                scoring: 55,
            },
            {
                id: 9,
                ADG: 'Colleen Hurst',
                SR: 'Javascript Developer',
                scoring: 39,
            },
            {
                id: 10,
                ADG: 'Sonya Frost',
                SR: 'Software Engineer',
                scoring: 23,
            },
            {
                id: 11,
                ADG: 'Jena Gaines',
                SR: 'id Manager',
                scoring: 30,
            },
            {
                id: 12,
                ADG: 'Quinn Flynn',
                SR: 'Support Lead',
                scoring: 22,
            },
            {
                id: 13,
                ADG: 'Charde Marshall',
                SR: 'Regional Director',
                scoring: 36,
            },
            {
                id: 14,
                ADG: 'Haley Kennedy',
                SR: 'Senior Marketing Designer',
                scoring: 43,
            },
            {
                id: 15,
                ADG: 'Tatyana Fitzpatrick',
                SR: 'Regional Director',
                scoring: 19,
            },
            {
                id: 16,
                ADG: 'Michael Silva',
                SR: 'Marketing Designer',
                scoring: 66,
            },
            {
                id: 17,
                ADG: 'Paul Byrd',
                SR: 'Chief Financial idr (CFO)',
                scoring: 64,
            },
            {
                id: 18,
                ADG: 'Gloria Little',
                SR: 'Systems Administrator',
                scoring: 59,
            },
            {
                id: 19,
                ADG: 'Bradley Greer',
                SR: 'Software Engineer',
                scoring: 41,
            },
            {
                id: 20,
                ADG: 'Dai Rios',
                SR: 'Personnel Lead',
                scoring: 35,
            },
            {
                id: 21,
                ADG: 'Jenette Caldwell',
                SR: 'Development Lead',
                scoring: 61,
            },
            {
                id: 22,
                ADG: 'Yuri Berry',
                SR: 'Chief Marketing idr (CMO)',
                scoring: 40,
            },
            {
                id: 23,
                ADG: 'Caesar Vance',
                SR: 'Pre-Sales Support',
                scoring: 21,
            },
            {
                id: 24,
                ADG: 'Doris Wilder',
                SR: 'Sales Assistant',
                scoring: 23,
            },
            {
                id: 25,
                ADG: 'Angelica Ramos',
                SR: 'Chief Executive idr (CEO)',
                scoring: 47,
            },
            {
                id: 26,
                ADG: 'Gavin Joyce',
                SR: 'Developer',
                scoring: 42,
            },
            {
                id: 27,
                ADG: 'Jennifer Chang',
                SR: 'Regional Director',
                scoring: 28,
            },
        ];
    };

    const view_row = (item) => {
        alert('ID: ' + item.id + ', Name: ' + item.ADG);
    };
</script>