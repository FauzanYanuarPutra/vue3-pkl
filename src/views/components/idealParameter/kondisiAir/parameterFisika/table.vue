<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Parameter Fisika</span></li>
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
                                    <h4>Parameter Fisika</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/parameter-fisika/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="action no-wrap">
                                    <div class="text-center text-center d-flex">
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

    const columns = ref(['tinggi_air', 'kecerahan', 'warna', 'suhu_air', 'actions']);
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
        sortable: ['tinggi_air', 'kecerahan', 'warna', 'suhu_air'],
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
                tinggi_air: 'Tiger Nixon',
                kecerahan: 'System Architect',
                warna: 'Edinburgh',
                suhu_air: 61,
                jenis: '2011/04/25',
                keterangan: 'null',
                status: '320,800',
            },
            {
                id: 2,
                tinggi_air: 'Garrett Winters',
                kecerahan: 'Accountant',
                warna: 'Tokyo',
                suhu_air: 63,
                jenis: '2011/07/25',
                keterangan: 'null',
                status: '170,750',
            },
            {
                id: 3,
                tinggi_air: 'Ashton Cox',
                kecerahan: 'Junior Technical Author',
                warna: 'San Francisco',
                suhu_air: 66,
                jenis: '2009/01/12',
                keterangan: 'null',
                status: '86,000',
            },
            {
                id: 4,
                tinggi_air: 'Cedric Kelly',
                kecerahan: 'Senior Javascript Developer',
                warna: 'Edinburgh',
                suhu_air: 22,
                jenis: '2012/03/29',
                keterangan: 'null',
                status: '433,060',
            },
            {
                id: 5,
                tinggi_air: 'Airi Satou',
                kecerahan: 'Accountant',
                warna: 'Tokyo',
                suhu_air: 33,
                jenis: '2008/11/28',
                keterangan: 'null',
                status: '162,700',
            },
            {
                id: 6,
                tinggi_air: 'Brielle Williamson',
                kecerahan: 'Integration Specialist',
                warna: 'New York',
                suhu_air: 61,
                jenis: '2012/12/02',
                keterangan: 'null',
                status: '372,000',
            },
            {
                id: 7,
                tinggi_air: 'Herrod Chandler',
                kecerahan: 'Sales Assistant',
                warna: 'San Francisco',
                suhu_air: 59,
                jenis: '2012/08/06',
                keterangan: 'null',
                status: '137,500',
            },
            {
                id: 8,
                tinggi_air: 'Rhona Davidson',
                kecerahan: 'Integration Specialist',
                warna: 'Tokyo',
                suhu_air: 55,
                jenis: '2010/10/14',
                keterangan: 'null',
                status: '327,900',
            },
            {
                id: 9,
                tinggi_air: 'Colleen Hurst',
                kecerahan: 'Javascript Developer',
                warna: 'San Francisco',
                suhu_air: 39,
                jenis: '2009/09/15',
                keterangan: 'null',
                status: '205,500',
            },
            {
                id: 10,
                tinggi_air: 'Sonya Frost',
                kecerahan: 'Software Engineer',
                warna: 'Edinburgh',
                suhu_air: 23,
                jenis: '2008/12/13',
                keterangan: 'null',
                status: '103,600',
            },
            {
                id: 11,
                tinggi_air: 'Jena Gaines',
                kecerahan: 'id Manager',
                warna: 'London',
                suhu_air: 30,
                jenis: '2008/12/19',
                keterangan: 'null',
                status: '90,560',
            },
            {
                id: 12,
                tinggi_air: 'Quinn Flynn',
                kecerahan: 'Support Lead',
                warna: 'Edinburgh',
                suhu_air: 22,
                jenis: '2013/03/03',
                keterangan: 'null',
                status: '342,000',
            },
            {
                id: 13,
                tinggi_air: 'Charde Marshall',
                kecerahan: 'Regional Director',
                warna: 'San Francisco',
                suhu_air: 36,
                jenis: '2008/10/16',
                keterangan: 'null',
                status: '470,600',
            },
            {
                id: 14,
                tinggi_air: 'Haley Kennedy',
                kecerahan: 'Senior Marketing Designer',
                warna: 'London',
                suhu_air: 43,
                jenis: '2012/12/18',
                keterangan: 'null',
                status: '313,500',
            },
            {
                id: 15,
                tinggi_air: 'Tatyana Fitzpatrick',
                kecerahan: 'Regional Director',
                warna: 'London',
                suhu_air: 19,
                jenis: '2010/03/17',
                keterangan: 'null',
                status: '385,750',
            },
            {
                id: 16,
                tinggi_air: 'Michael Silva',
                kecerahan: 'Marketing Designer',
                warna: 'London',
                suhu_air: 66,
                jenis: '2012/11/27',
                keterangan: 'null',
                status: '198,500',
            },
            {
                id: 17,
                tinggi_air: 'Paul Byrd',
                kecerahan: 'Chief Financial idr (CFO)',
                warna: 'New York',
                suhu_air: 64,
                jenis: '2010/06/09',
                keterangan: 'null',
                status: '725,000',
            },
            {
                id: 18,
                tinggi_air: 'Gloria Little',
                kecerahan: 'Systems Administrator',
                warna: 'New York',
                suhu_air: 59,
                jenis: '2009/04/10',
                keterangan: 'null',
                status: '237,500',
            },
            {
                id: 19,
                tinggi_air: 'Bradley Greer',
                kecerahan: 'Software Engineer',
                warna: 'London',
                suhu_air: 41,
                jenis: '2012/10/13',
                keterangan: 'null',
                status: '132,000',
            },
            {
                id: 20,
                tinggi_air: 'Dai Rios',
                kecerahan: 'Personnel Lead',
                warna: 'Edinburgh',
                suhu_air: 35,
                jenis: '2012/09/26',
                keterangan: 'null',
                status: '217,500',
            },
            {
                id: 21,
                tinggi_air: 'Jenette Caldwell',
                kecerahan: 'Development Lead',
                warna: 'New York',
                suhu_air: 61,
                jenis: '2011/09/03',
                keterangan: 'null',
                status: '345,000',
            },
            {
                id: 22,
                tinggi_air: 'Yuri Berry',
                kecerahan: 'Chief Marketing idr (CMO)',
                warna: 'New York',
                suhu_air: 40,
                jenis: '2009/06/25',
                keterangan: 'null',
                status: '675,000',
            },
            {
                id: 23,
                tinggi_air: 'Caesar Vance',
                kecerahan: 'Pre-Sales Support',
                warna: 'New York',
                suhu_air: 21,
                jenis: '2011/12/12',
                keterangan: 'null',
                status: '106,450',
            },
            {
                id: 24,
                tinggi_air: 'Doris Wilder',
                kecerahan: 'Sales Assistant',
                warna: 'Sidney',
                suhu_air: 23,
                jenis: '2010/09/20',
                keterangan: 'null',
                status: '85,600',
            },
            {
                id: 25,
                tinggi_air: 'Angelica Ramos',
                kecerahan: 'Chief Executive idr (CEO)',
                warna: 'London',
                suhu_air: 47,
                jenis: '2009/10/09',
                keterangan: 'null',
                status: '1,200,000',
            },
            {
                id: 26,
                tinggi_air: 'Gavin Joyce',
                kecerahan: 'Developer',
                warna: 'Edinburgh',
                suhu_air: 42,
                jenis: '2010/12/22',
                keterangan: 'null',
                status: '92,575',
            },
            {
                id: 27,
                tinggi_air: 'Jennifer Chang',
                kecerahan: 'Regional Director',
                warna: 'Singapore',
                suhu_air: 28,
                jenis: '2010/11/14',
                keterangan: 'null',
                status: '57,650',
            },
        ];
    };

    const view_row = (item) => {
        alert('warna: ' + item.id + ', Name: ' + item.tinggi_air);
    };
</script>