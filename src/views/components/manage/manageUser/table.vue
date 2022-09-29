<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage User</span></li>
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
                                    <h4>Manage User</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/manage-user/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items" :columns="columns" :options="table_option">
                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer">
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
                                                class="feather feather-eye"
                                            >
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="px-2">
                                        <router-link to="/manage-user/edit" data-bs-toggle="tooltip" title="Edit">
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
                                        </router-link>
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

    const columns = ref(['nama', 'jabatan', 'no_hp', 'tgl_bergabung', 'status', 'tambak', 'akses_terakhir', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { actions: 'actions text-center', tgl_bergabung: 'text-center'},
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['nama', 'jabatan', 'no_hp', 'tgl_bergabung', 'status', 'tambak', 'akses_terakhir', 'password'],
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
                nama: 'Garrett Winters',
                jabatan: 'Manager',
                no_hp: '087584462',
                tgl_bergabung: '2008/12/13',
                email: 'garrett@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',
                password: '****',
                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 2,
                nama: 'Brielle Williamson',
                jabatan: 'Kepala teknisi',
                no_hp: '089346254',
                tgl_bergabung: '2011/04/25',
                password: '****',
                email: 'briell@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',

                alamat: 'null',
                status1: '',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 3,
                nama: 'Herrod Chandler',
                jabatan: 'Teknisi',
                no_hp: '083645274',
                tgl_bergabung: '2012/03/29',
                password: '****',
                email: 'Chandler@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 4,
                nama: 'Cedric Kelly',
                jabatan: 'Kepala laboratorium',
                no_hp: '085463557',
                tgl_bergabung: '2009/09/15',
                password: '****',
                email: 'Kelyy@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 5,
                nama: 'Ashton Cox',
                jabatan: 'Laboratorium',
                no_hp: '084956371',
                tgl_bergabung: '2012/08/06',
                password: '****',
                email: 'ACOX@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 6,
                nama: 'Herrod Chandler',
                jabatan: 'Laboratorium',
                no_hp: '089756344',
                tgl_bergabung: '	2012/12/02',
                password: '****',
                email: 'Herrod@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 7,
                nama: 'Sonya Frost',
                jabatan: 'Admin',
                no_hp: '089563745',
                tgl_bergabung: '2012/03/29',
                password: '****',
                email: 'Frost@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 8,
                nama: 'Rhona DavIDson',
                jabatan: 'Mekanikal elektrika',
                no_hp: '089735465',
                tgl_bergabung: '2011/04/25',
                password: '****',
                email: 'Rhoma@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 9,
                nama: '	Tiger Nixon',
                jabatan: 'Pompa',
                no_hp: '094756375',
                tgl_bergabung: '2011/07/25',
                password: '****',
                email: 'Tiger@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
            {
                id: 10,
                nama: 'Colleen Hurst',
                jabatan: 'Security',
                no_hp: '089375645',
                tgl_bergabung: '2009/01/12',
                password: '****',
                email: 'collen@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status: 'Aktive',

                alamat: 'null',
                status1: 'Menikah',
                team_tambak: 'null',
                supervisor: 'null',
                tambak: 'Tambak udang',
                access_right: 'null',
                akses_terakhir: 'null',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Management User</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama</b> : ' +
                item.nama +
                '</p>' +
                '<p><b>Jabatan</b> : ' +
                item.jabatan +
                '</p>' +
                '<p><b>No. HP</b> : ' +
                item.no_hp +
                '</p>' +
                '<p><b>Password</b> : ' +
                item.password +
                '</p>' +
                '<p><b>Email</b> : ' +
                item.email +
                '</p>' +
                '<p><b>Photo</b> : ' +
                item.photo +
                '</p>' +
                '<p><b>tanggal Lahir</b> : ' +
                item.tgl_lahir +
                '</p>' +
                '<p><b>Jenis Kelamin</b> : ' +
                item.jenkel +
                '</p>' +
                '<p><b>Status</b> : ' +
                item.status +
                '</p>' +
                '<p><b>Alamat rumah</b> : ' +
                item.alamat +
                '</p>' +
                '<p><b>Tanggal bergabung</b> : ' +
                item.tgl_bergabung +
                '</p>' +
                '<p><b>Status</b> : ' +
                item.status1 +
                '</p>' +
                '<p><b>Team tambak</b> : ' +
                item.team_tambak +
                '</p>' +
                '<p><b>Supervisor</b> : ' +
                item.supervisor +
                '</p>' +
                '<p><b>Access right</b> : ' +
                item.access_right +
                '</p>' +
                '<p><b>Akses terakhir</b> : ' +
                item.akses_terakhir +
                '</p>',
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: '#1695DC',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
