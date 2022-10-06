<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya Air - Parameter Kimia</span></li>
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
                                    <h4>Parameter Kimia</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/budidaya-kimia/create" @click="toggleMobileMenu" class="btn mb-2 mx-3 tambah-data">Tambah Data</router-link>
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
                                        <router-link to="/budidaya-kimia/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns = ref(['no', 'Nama_tambak', 'Tanggal', 'PH', 'SAL(%)', '	DO(PPM)', 'CO3', 'HCO3', 'TOTAL', '	TOM', 'NH4', 'NO2', 'NO3', 'PO4', 'FE', 'DOC', 'actions']);
    const items = ref([]);
    const table_option = ref({
        perPage: 10,
        perPageValues: [5, 10, 20, 50],
        skin: 'table table-hover',
        columnsClasses: {
            actions: 'actions text-center',
            Tanggal_panen: 'text-center ',
            GA: 'text-end ',
            DIATOM: 'text-end ',
            DYNO: 'text-end ',
            BGA: 'text-end ',
            OTHER: 'text-end ',
            DENSITY: 'text-end ',
            DOC: 'text-end ',
        },
        pagination: { nav: 'scroll', chunk: 5 },
        texts: {
            count: 'Showing {from} to {to} of {count}',
            filter: '',
            filterPlaceholder: 'Search...',
            limit: 'Results:',
        },
        sortable: ['Nama_tambak', 'Tanggal', 'PH', 'SAL(%)', '	DO(PPM)', 'CO3', 'HCO3', 'TOTAL', '	TOM', 'NH4', 'NO2', 'NO3', 'PO4', 'FE', 'DOC'],
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
                Nama_tambak: 'Tambak a',
                Nama_kolam: 'Kolam B1',
                Tanggal: '2022/03/29',
                PH: '',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 2,
                Nama_tambak: 'Tambak b',
                Nama_kolam: 'Kolam B2',
                Tanggal: '2011/07/25',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 3,
                Nama_tambak: 'Tambak c',
                Nama_kolam: 'Kolam B3',
                Tanggal: '2009/01/12',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 4,
                Nama_tambak: 'Tambak d',
                Nama_kolam: 'Kolam B4',
                Tanggal: '2012/03/29',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 5,
                Nama_tambak: 'Tambak e',
                Nama_kolam: 'Kolam B5',
                Tanggal: '2008/11/28',
                Tipe: 'Parsial',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 6,
                Nama_tambak: 'Tambak f',
                Nama_kolam: 'Kolam B6',
                Tanggal: '2012/12/02',
                Tipe: 'Persial',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 7,
                Nama_tambak: 'Tambak g',
                Nama_kolam: 'Kolam B7',
                Tanggal: '2012/08/06',
                Tipe: 'Persial',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 8,
                Nama_tambak: 'Tambak h',
                Nama_kolam: 'Kolam B8',
                Tanggal: '2010/10/14',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 9,
                Nama_tambak: 'Tambak i',
                Nama_kolam: 'Kolam B9',
                Tanggal: '2009/09/15',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
            {
                id: 10,
                Nama_tambak: 'Tambak i',
                Nama_kolam: 'Kolam B9',
                Tanggal: '2009/09/15',
                'SAL(%)': '',
                'DO(PPM)': '',
                CO3: '',
                HCO3: '',
                TOTAL: '',
                TOM: '',
                NH4: '',
                NO2: '',
                NO3: '',
                PO4: '',
                FE: '',
                DOC: '60',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Parameter Kimia</i>',
            text: 'HALLO',
            html:
                '<p><b>Nama tambak</b> : ' +
                item.Nama_tambak +
                '</p>' +
                '<p><b>Nama kolam </b> : ' +
                item.Nama_kolam +
                '</p>' +
                '<p><b>Tanggal (ppm)</b> : ' +
                item.Tanggal +
                '</p>' +
                '<p><b>CO3</b> : ' +
                item.CO3 +
                '</p>' +
                '<p><b>Total_Vibrio_Count</b> : ' +
                item.HCO3 +
                '</p>' +
                '<p><b>Total</b> : ' +
                item.TOTAL +
                '</p>' +
                '<p><b>Ammonium-NH4 (mg/L)</b> : ' +
                item.NH4 +
                '</p>' +
                '<p><b>Nitrit-NO2 (ppm)</b> : ' +
                item.NO2 +
                '</p>' +
                '<p><b>Nitrat-NO3 (mg/L)</b> : ' +
                item.NO3 +
                '</p>' +
                '<p><b>Phosphate-PO4 (mg/L)</b> : ' +
                item.PO4 +
                '</p>' +
                '<p><b>Iron-Fe (mg/L)</b> : ' +
                item.FE +
                '</p>' +
                '<p><b>DOC</b> : ' +
                item.DOC +
                '</p>',
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
