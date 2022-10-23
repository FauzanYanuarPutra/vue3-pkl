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
                            <template #no="props" v-for="(item, index) in items">
                                {{ props.index }}
                            </template>

                            <template #actions="props">
                                <div class="table-controls d-flex no-wrap justify-content-center">
                                    <div class="px-2">
                                        <div @click="view_row(props.row)" style="cursor: pointer" title="View">
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

    const columns = ref(['no', 'nama', 'jabatan', 'No_Hp', 'Tanggal_Bergabung', 'Team_Tambak', 'Access_Right', 'Akses_Terakhir', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: { no: 'no text-center', actions: 'actions text-center ', Tanggal_Bergabung: 'text-center ', No_Hp: 'text-end', Akses_Terakhir: 'text-center ' },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: [
            'nama',
            'jabatan',
            'No_Hp',
            'password',
            'email',
            'photo',
            'Tanggal_Lahir',
            'jenis_kelamin',
            'status_pernikahan',
            'alamat_rumah',
            'Tanggal_Bergabung',
            'status',
            'Team_Tambak',
            'Access_Right',
            'Akses_Terakhir',
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
                nama: 'Garrett Winters',
                jabatan: 'Manager',
                No_Hp: '087584462',
                Tanggal_Bergabung: '2008/12/13',
                password: '****',
                email: 'garrett@gmail.com',
                photo: 'null',
                tgl_lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Tanggal_Bergabung: '2010/01/25',
                Team_Tambak: 'Bandung',
                tambak: 'Tambak udang',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 2,
                nama: 'Brielle Williamson',
                jabatan: 'Kepala teknisi',
                No_Hp: '089346254',
                Tanggal_Bergabung: '2011/04/25',
                password: '****',
                email: 'briell@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Bandung',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 3,
                nama: 'Herrod Chandler',
                jabatan: 'Teknisi',
                No_Hp: '083645274',
                Tanggal_Bergabung: '2012/03/29',
                password: '****',
                email: 'Chandler@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Cirebon',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 4,
                nama: 'Cedric Kelly',
                jabatan: 'Kepala laboratorium',
                No_Hp: '085463557',
                Tanggal_Bergabung: '2009/09/15',
                password: '****',
                email: 'Kelyy@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Lombok',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 5,
                nama: 'Ashton Cox',
                jabatan: 'Laboratorium',
                No_Hp: '084956371',
                Tanggal_Bergabung: '2012/08/06',
                password: '****',
                email: 'ACOX@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Bali',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 6,
                nama: 'Herrod Chandler',
                jabatan: 'Laboratorium',
                No_Hp: '089756344',
                Tanggal_Bergabung: '	2012/12/02',
                password: '****',
                email: 'Herrod@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Bali',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 7,
                nama: 'Sonya Frost',
                jabatan: 'Admin',
                No_Hp: '089563745',
                Tanggal_Bergabung: '2012/03/29',
                password: '****',
                email: 'Frost@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Perempuan',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Cirebon',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 8,
                nama: 'Rhona DavIDson',
                jabatan: 'Mekanikal elektrika',
                No_Hp: '089735465',
                Tanggal_Bergabung: '2011/04/25',
                password: '****',
                email: 'Rhoma@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Bali',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 9,
                nama: '	Tiger Nixon',
                jabatan: 'Security',
                No_Hp: '094756375',
                Tanggal_Bergabung: '2011/07/25',
                password: '****',
                email: 'Tiger@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Lampung',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
            {
                id: 10,
                nama: 'Colleen Hurst',
                jabatan: 'Security',
                No_Hp: '089375645',
                Tanggal_Bergabung: '2009/01/12',
                password: '****',
                email: 'collen@gmail.com',
                photo: 'null',
                Tanggal_Lahir: '1990/12/13',
                jenkel: 'Laki-Laki',
                status_pernikahan: 'Menikah',
                alamat: 'null',
                Team_Tambak: 'Lampung',
                Access_Right: 'Yes',
                Akses_Terakhir: '2022/01/25',
                status: 'Aktif',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Manage User</i>',
            text: 'HALLO',
            html: `
        <table role="table" border="5" aria-busy="false" aria-colcount="5" class="table table-0  table-bordered" id="__BVID__415">
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Nama</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.nama}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jabatan</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.jabatan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>No Hp</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.No_Hp}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Password</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.password}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Email</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.email}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Photo</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.photo}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal Lahir</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Tanggal_Lahir}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Jenis Kelamin</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.jenkel}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status Pernikahan </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.status_pernikahan}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Alamat Rumah</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.alamat}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Tanggal Bergabung</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Tanggal_Bergabung}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Status </b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.status}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Team Tambak</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Team_Tambak}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Access Right</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Access_Right}</td>
                                        </tr>
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell"><b>Akses Akhir</b></td>
                                            <td class="titik-dua"><b>:</b></td>
                                            <td aria-colindex="2" role="cell">${item.Akses_Terakhir}</td>
                                        </tr>
                                    </tbody>
            </table>   
            `,
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'+
            // '<p><b>Nama</b> : ' + item.nama + '</p>'
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
            focusConfirm: true,
            confirmButtonColor: '#1695DC',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',
            confirmButtonClass: 'd-none',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
