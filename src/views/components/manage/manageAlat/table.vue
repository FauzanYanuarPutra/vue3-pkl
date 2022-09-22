<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Alat</span></li>
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
                                    <h4>Manage Alat</h4>
                                </div>
                            </div>
                        </div>
                        <router-link to="/manage-alat/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 my-1">Tambah Data</router-link>
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

    const columns = ref([
        'nama_tambak',
        'tanggal_input',
        'id_alat',
        'kategori_alat',
        'brand',
        'tipe_model',
        'kegunaan',
        'keterangan',
        'jumlah_unit',
        'photo',
        'internal_id',
        'perkiraan_beli',
        'tenaga_hp',
        'status',
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
            'nama_tambak',
            'tanggal_input',
            'id_alat',
            'kategori_alat',
            'brand',
            'tipe_model',
            'kegunaan',
            'keterangan',
            'jumlah_unit',
            'photo',
            'internal_id',
            'perkiraan_beli',
            'tenaga_hp',
            'status',
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
                nama_tambak: 'Tiger Nixon',
                tanggal_input: 'System Architect',
                id_alat: 'Edinburgh',
                kategori_alat: 61,
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
                nama_tambak: 'Garrett Winters',
                tanggal_input: 'Accountant',
                id_alat: 'Tokyo',
                kategori_alat: 63,
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
                nama_tambak: 'Ashton Cox',
                tanggal_input: 'Junior Technical Author',
                id_alat: 'San Francisco',
                kategori_alat: 66,
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
                nama_tambak: 'Cedric Kelly',
                tanggal_input: 'Senior Javascript Developer',
                id_alat: 'Edinburgh',
                kategori_alat: 22,
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
                nama_tambak: 'Airi Satou',
                tanggal_input: 'Accountant',
                id_alat: 'Tokyo',
                kategori_alat: 33,
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
                nama_tambak: 'Brielle Williamson',
                tanggal_input: 'Integration Specialist',
                id_alat: 'New York',
                kategori_alat: 61,
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
                nama_tambak: 'Herrod Chandler',
                tanggal_input: 'Sales Assistant',
                id_alat: 'San Francisco',
                kategori_alat: 59,
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
                nama_tambak: 'Rhona Davidson',
                tanggal_input: 'Integration Specialist',
                id_alat: 'Tokyo',
                kategori_alat: 55,
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
                nama_tambak: 'Colleen Hurst',
                tanggal_input: 'Javascript Developer',
                id_alat: 'San Francisco',
                kategori_alat: 39,
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
                nama_tambak: 'Sonya Frost',
                tanggal_input: 'Software Engineer',
                id_alat: 'Edinburgh',
                kategori_alat: 23,
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
                tanggal_input: 'id_alat Manager',
                id_alat: 'London',
                kategori_alat: 30,
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
                tanggal_input: 'Support Lead',
                id_alat: 'Edinburgh',
                kategori_alat: 22,
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
                tanggal_input: 'Regional Director',
                id_alat: 'San Francisco',
                kategori_alat: 36,
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
                tanggal_input: 'Senior Marketing Designer',
                id_alat: 'London',
                kategori_alat: 43,
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
                tanggal_input: 'Regional Director',
                id_alat: 'London',
                kategori_alat: 19,
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
                tanggal_input: 'Marketing Designer',
                id_alat: 'London',
                kategori_alat: 66,
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
                tanggal_input: 'Chief Financial id_alatr (CFO)',
                id_alat: 'New York',
                kategori_alat: 64,
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
                tanggal_input: 'Systems Administrator',
                id_alat: 'New York',
                kategori_alat: 59,
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
                tanggal_input: 'Software Engineer',
                id_alat: 'London',
                kategori_alat: 41,
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
                tanggal_input: 'Personnel Lead',
                id_alat: 'Edinburgh',
                kategori_alat: 35,
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
                tanggal_input: 'Development Lead',
                id_alat: 'New York',
                kategori_alat: 61,
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
                tanggal_input: 'Chief Marketing id_alatr (CMO)',
                id_alat: 'New York',
                kategori_alat: 40,
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
                tanggal_input: 'Pre-Sales Support',
                id_alat: 'New York',
                kategori_alat: 21,
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
                tanggal_input: 'Sales Assistant',
                id_alat: 'Sidney',
                kategori_alat: 23,
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
                tanggal_input: 'Chief Executive id_alatr (CEO)',
                id_alat: 'London',
                kategori_alat: 47,
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
                tanggal_input: 'Developer',
                id_alat: 'Edinburgh',
                kategori_alat: 42,
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
                tanggal_input: 'Regional Director',
                id_alat: 'Singapore',
                kategori_alat: 28,
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