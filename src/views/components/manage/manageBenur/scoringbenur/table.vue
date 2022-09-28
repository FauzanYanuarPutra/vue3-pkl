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
                                    <h4>Scoring benur</h4>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse position-relative">
                            <router-link to="/scoring-benur/create" @click="toggleMobileMenu" class="btn btn-primary mb-2 mx-3 tambah-data">Tambah Data</router-link>
                        </div>

                        <v-client-table :data="items1" :columns="columns1" :options="table_option1">
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
                                        <router-link to="/scoring-benur/edit" data-bs-toggle="tooltip" title="Edit">
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

    const columns1 = ref(['tanggal_input', 'Panjang_benur', 'Size_varian', 'Status', 'actions']);
    const items1 = ref([]);
    const table_option1 = ref({
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
            'tanggal_input',
            'Panjang_benur',
            'Size_varian',
            'Hepatopankreas',
            'Necrosis',
            'MGR',
            'Ektoparasite',
            'Stress_test',
            'Vibrio_luminnescen',
            'TVC',
            'pH',
            'Selisih_salinitas',
            'DO',
            'Suhu',
            'TAN',
            'Bolitas',
            'Status',
            'actions',
        ],
        sortIcon: {
            base: 'sort-icon-none',
            up: 'sort-icon-asc',
            down: 'sort-icon-desc',
        },
        resizableColumns: false,
    });

    onMounted(() => {
        bind_data1();
    });

    const bind_data1 = () => {
        items1.value = [
            {
                id: 1,
                tanggal_input: '2021/01/25',
                Panjang_benur: 'a) ≥9.1 (score 15)',
                Size_varian: 'a) 0 - 0.8 (score 15)',
                Hepatopankreas: 'a) ≥90% (score 10)',
                Necrosis: 'a) 0-10% (score 10)',
                MGR: 'a) ≥95% (score 10',
                Ektoparasite: 'a) 0-25% (score 10)',
                Stress_test: 'a) ≥95% (score 10)',
                Vibrio_luminnescen: 'a. (-) (score 10)',
                TVC: 'a) ≤102 cfu/ml (score 10)',
                pH: 'a) 7.0 - 7.4 (score 10)',
                Selisih_salinitas: 'a) <3 (score10)',
                DO: 'a) >14 (score 10)',
                Suhu: 'a) 22 - 24 (score 10)',
                TAN: 'a) 0 - 2 (score 10)',
                Bolitas: 'a) 0% (score 10)',
                Status: 'Aktive',
            },
            {
                id: 2,
                tanggal_input: '2021/01/25',
                Panjang_benur: 'a) ≥9.1 (score 15)',
                Size_varian: 'a) 0 - 0.8 (score 15)',
                Hepatopankreas: 'a) ≥90% (score 10)',
                Necrosis: 'a) 0-10% (score 10)',
                MGR: 'a) ≥95% (score 10',
                Ektoparasite: 'a) 0-25% (score 10)',
                Stress_test: 'a) ≥95% (score 10)',
                Vibrio_luminnescen: 'a. (-) (score 10)',
                TVC: 'a) ≤102 cfu/ml (score 10)',
                pH: 'a) 7.0 - 7.4 (score 10)',
                Selisih_salinitas: 'a) <3 (score10)',
                DO: 'a) >14 (score 10)',
                Suhu: 'a) 22 - 24 (score 10)',
                TAN: 'a) 0 - 2 (score 10)',
                Bolitas: 'a) 0% (score 10)',
                Status: 'Aktive',
            },
            {
                id: 3,
                tanggal_input: '2021/01/25',
                Panjang_benur: 'a) ≥9.1 (score 15)',
                Size_varian: 'a) 0 - 0.8 (score 15)',
                Hepatopankreas: 'a) ≥90% (score 10)',
                Necrosis: 'a) 0-10% (score 10)',
                MGR: 'a) ≥95% (score 10',
                Ektoparasite: 'a) 0-25% (score 10)',
                Stress_test: 'a) ≥95% (score 10)',
                Vibrio_luminnescen: 'a. (-) (score 10)',
                TVC: 'a) ≤102 cfu/ml (score 10)',
                pH: 'a) 7.0 - 7.4 (score 10)',
                Selisih_salinitas: 'a) <3 (score10)',
                DO: 'a) >14 (score 10)',
                Suhu: 'a) 22 - 24 (score 10)',
                TAN: 'a) 0 - 2 (score 10)',
                Bolitas: 'a) 0% (score 10)',
                Status: 'Aktive',
            },
            {
                id: 4,
                tanggal_input: '2021/01/25',
                Panjang_benur: 'a) ≥9.1 (score 15)',
                Size_varian: 'a) 0 - 0.8 (score 15)',
                Hepatopankreas: 'a) ≥90% (score 10)',
                Necrosis: 'a) 0-10% (score 10)',
                MGR: 'a) ≥95% (score 10',
                Ektoparasite: 'a) 0-25% (score 10)',
                Stress_test: 'a) ≥95% (score 10)',
                Vibrio_luminnescen: 'a. (-) (score 10)',
                TVC: 'a) ≤102 cfu/ml (score 10)',
                pH: 'a) 7.0 - 7.4 (score 10)',
                Selisih_salinitas: 'a) <3 (score10)',
                DO: 'a) >14 (score 10)',
                Suhu: 'a) 22 - 24 (score 10)',
                TAN: 'a) 0 - 2 (score 10)',
                Bolitas: 'a) 0% (score 10)',
                Status: 'Aktive',
            },

            {
                id: 5,
                tanggal_input: '2021/01/25',
                Panjang_benur: 'a) ≥9.1 (score 15)',
                Size_varian: 'a) 0 - 0.8 (score 15)',
                Hepatopankreas: 'a) ≥90% (score 10)',
                Necrosis: 'a) 0-10% (score 10)',
                MGR: 'a) ≥95% (score 10',
                Ektoparasite: 'a) 0-25% (score 10)',
                Stress_test: 'a) ≥95% (score 10)',
                Vibrio_luminnescen: 'a. (-) (score 10)',
                TVC: 'a) ≤102 cfu/ml (score 10)',
                pH: 'a) 7.0 - 7.4 (score 10)',
                Selisih_salinitas: 'a) <3 (score10)',
                DO: 'a) >14 (score 10)',
                Suhu: 'a) 22 - 24 (score 10)',
                TAN: 'a) 0 - 2 (score 10)',
                Bolitas: 'a) 0% (score 10)',
                Status: 'Aktive',
            },
        ];
    };

    const view_row = (item) => {
        new window.Swal({
            title: '<i>Scoring benur</i>',
            text: 'HALLO',
            html:
                '<p><b>Tanggal</b> : ' +
                item.tanggal_input +
                '</p>' +
                '<p><b>Panjang benur (mm)</b> : ' +
                item.Panjang_benur +
                '</p>' +
                '<p><b>Size Varian</b> : ' +
                item.Size_varian +
                '</p>' +
                '<p><b>Hepatopankreas</b> : ' +
                item.Hepatopankreas +
                '</p>' +
                '<p><b>Necrosis</b> : ' +
                item.Necrosis +
                '</p>' +
                '<p><b>MGR (muscle gut ratio)</b> : ' +
                item.MGR +
                '</p>' +
                '<p><b>Ektoparasite</b> : ' +
                item.Ektoparasite +
                '</p>' +
                '<p><b>Stress test (Formaline dan Salinitas)</b> : ' +
                item.Stress_test +
                '</p>' +
                '<p><b>Vibrio luminnescen (water & fry)</b> : ' +
                item.Vibrio_luminnescen +
                '</p>' +
                '<p><b>TVC (water)</b> : ' +
                item.TVC +
                '</p>' +
                '<p><b>pH</b> : ' +
                item.pH +
                '</p>' +
                '<p><b>Selisih Salinitas</b> : ' +
                item.Selisih_salinitas +
                '</p>' +
                '<p><b>DO</b> : ' +
                item.DO +
                '</p>' +
                '<p><b>Suhu</b> : ' +
                item.Suhu +
                '</p>' +
                '<p><b>TAN</b> : ' +
                item.TAN +
                '</p>' +
                '<p><b>Bolitas</b> : ' +
                item.Bolitas +
                '</p>' +
                '<p><b>Status</b> : ' +
                item.Status +
                '</p>',
            // BUKA KOMENTAR JIKA BUTUH LEBIH BANYAK DATA
            // DIAKHIR TIDAK MENGGUNAKAN tanda +
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonColor: '#4361ee',
            confirmButtonText: '<i class="flaticon-checked-1"></i> Oke',
            confirmButtonAriaLabel: 'Oke',

            padding: '2em',
        });
        // alert(' Name: ' + item.nama + ', MIN: ' + item.min + ', MAX: ' + item.max);
    };
</script>
