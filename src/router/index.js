import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/index.vue';
import store from '../store';

// Vue.use(VueRouter);
// import { createApp } from 'vue';
// const app = createApp();
// app.use(createRouter);

const routes = [
    //dashboard
    { path: '/', name: 'Home', component: Home },

    {
        path: '/index2',
        name: 'index2',
        component: () => import(/* webpackChunkName: "index2" */ '../views/index2.vue'),
    },

    // Ideal  Parameter
    {
        path: '/parameter-fisika',
        name: 'parameter-fisika',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterFisika/table.vue'),
    },
    {
        path: '/parameter-fisika/create',
        name: 'parameter-fisika-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterFisika/input.vue'),
    },
    {
        path: '/parameter-fisika/edit',
        name: 'parameter-fisika-edit',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterFisika/edit.vue'),
    },

    {
        path: '/parameter-kimia',
        name: 'parameter-kimia',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterKimia/table.vue'),
    },
    {
        path: '/parameter-kimia/create',
        name: 'parameter-kimia-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterKimia/input.vue'),
    },
    {
        path: '/parameter-kimia/edit',
        name: 'parameter-kimia-edit',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterKimia/edit.vue'),
    },

    {
        path: '/parameter-biologi',
        name: 'parameter-biologi',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/table.vue'),
    },
    {
        path: '/parameter-biologi/create',
        name: 'parameter-biologi-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/input.vue'),
    },
    {
        path: '/parameter-biologi/edit',
        name: 'parameter-biologi-edit',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/edit.vue'),
    },

    {
        path: '/pertumbuhan-udang',
        name: '/pertumbuhan-udang',
        component: () => import('../views/components/idealParameter/pertumbuhanUdang/table.vue'),
    },
    {
        path: '/pertumbuhan-udang/create',
        name: '/pertumbuhan-udang-create',
        component: () => import('../views/components/idealParameter/pertumbuhanUdang/input.vue'),
    },
    {
        path: '/pertumbuhan-udang/edit',
        name: '/pertumbuhan-udang-edit',
        component: () => import('../views/components/idealParameter/pertumbuhanUdang/edit.vue'),
    },

    {
        path: '/konsumsi-pakan',
        name: 'konsumsi-pakan',
        component: () => import('../views/components/idealParameter/konsumsiPakan/table.vue'),
    },
    {
        path: '/konsumsi-pakan/create',
        name: 'konsumsi-pakan-create',
        component: () => import('../views/components/idealParameter/konsumsiPakan/input.vue'),
    },
    {
        path: '/konsumsi-pakan/edit',
        name: 'konsumsi-pakan-edit',
        component: () => import('../views/components/idealParameter/konsumsiPakan/edit.vue'),
    },

    {
        path: '/benur',
        name: 'benur',
        component: () => import('../views/components/idealParameter/benur/table.vue'),
    },
    {
        path: '/benur/create',
        name: 'benur-create',
        component: () => import('../views/components/idealParameter/benur/input.vue'),
    },
    {
        path: '/benur/edit',
        name: 'benur-edit',
        component: () => import('../views/components/idealParameter/benur/edit.vue'),
    },

    // AKHIR IDEAL PARAMETER

    //intervalPengukuran
    {
        path: '/interval-pengukuran/create',
        name: 'intervalPengukuran-create-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/input.vue'),
    },

    // manage tambak
    {
        path: '/manage-tambak',
        name: 'manage-tambak',
        component: () => import('../views/components/manage/manageTambak/table.vue'),
    },
    {
        path: '/manage-tambak/create',
        name: 'manage-tambak-create',
        component: () => import('../views/components/manage/manageTambak/input.vue'),
    },
    {
        path: '/manage-tambak/edit',
        name: 'manage-tambak-edit',
        component: () => import('../views/components/manage/manageTambak/edit.vue'),
    },

    // manage pakan
    {
        path: '/manage-pakan',
        name: 'manage-pakan',
        component: () => import('../views/components/manage/managePakan/table.vue'),
    },
    {
        path: '/manage-pakan/create',
        name: 'manage-pakan-create',
        component: () => import('../views/components/manage/managePakan/input.vue'),
    },
    {
        path: '/manage-pakan/edit',
        name: 'manage-pakan-edit',
        component: () => import('../views/components/manage/managePakan/edit.vue'),
    },

    // manage alat
    {
        path: '/manage-alat',
        name: 'manage-alat',
        component: () => import('../views/components/manage/manageAlat/table.vue'),
    },
    {
        path: '/manage-alat/create',
        name: 'manage-alat-create',
        component: () => import('../views/components/manage/manageAlat/input.vue'),
    },
    {
        path: '/manage-alat/edit',
        name: 'manage-alat-edit',
        component: () => import('../views/components/manage/manageAlat/edit.vue'),
    },

    // manage energi
    {
        path: '/manage-energi',
        name: 'manage-energi',
        component: () => import('../views/components/manage/manageEnergi/table.vue'),
    },
    {
        path: '/manage-energi/create',
        name: 'manage-energi-create',
        component: () => import('../views/components/manage/manageEnergi/input.vue'),
    },
    {
        path: '/manage-energi/edit',
        name: 'manage-energi-edit',
        component: () => import('../views/components/manage/manageEnergi/edit.vue'),
    },

    // manageSaponin
    {
        path: '/saponin',
        name: 'saponin',
        component: () => import('../views/components/manage/manageSaponin/table.vue'),
    },
    {
        path: '/saponin/create',
        name: 'saponin-create',
        component: () => import('../views/components/manage/manageSaponin/input.vue'),
    },
    {
        path: '/saponin/edit',
        name: 'saponin-edit',
        component: () => import('../views/components/manage/manageSaponin/edit.vue'),
    },
    // manageUser
    {
        path: '/manage-user',
        name: 'manage-user',
        component: () => import('../views/components/manage/manageUser/table.vue'),
    },
    {
        path: '/manage-user/create',
        name: 'manage-user-create',
        component: () => import('../views/components/manage/manageUser/input.vue'),
    },
    {
        path: '/manage-user/edit',
        name: 'manage-user-edit',
        component: () => import('../views/components/manage/manageUser/edit.vue'),
    },

    // manageBenur
    {
        path: '/manage-benur',
        name: 'manage-benur',
        component: () => import('../views/components/manage/manageBenur/managebenur/table.vue'),
    },
    {
        path: '/manage-Benur/create',
        name: 'manage-Benur-create',
        component: () => import('../views/components/manage/manageBenur/managebenur/input.vue'),
    },
    {
        path: '/manage-Benur/edit',
        name: 'manage-Benur-edit',
        component: () => import('../views/components/manage/manageBenur/managebenur/edit.vue'),
    },
    {
        path: '/scoring-benur',
        name: 'scoring-benur',
        component: () => import('../views/components/manage/manageBenur/scoringbenur/table.vue'),
    },
    {
        path: '/scoring-benur/create',
        name: 'scoring-benur-create',
        component: () => import('../views/components/manage/manageBenur/scoringbenur/input.vue'),
    },
    {
        path: '/scoring-benur/edit',
        name: 'scoring-benur-edit',
        component: () => import('../views/components/manage/manageBenur/scoringbenur/edit.vue'),
    },

    // siklusBudidayaPakan
    {
        path: '/siklus-budidaya-pakan',
        name: 'siklus-budidaya-pakan',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaPakan/table.vue'),
    },
    {
        path: '/siklus-budidaya-pakan/create',
        name: 'siklus-budidaya-pakan-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaPakan/input.vue'),
    },
    {
        path: '/siklus-budidaya-pakan/edit',
        name: 'siklus-budidaya-pakan-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaPakan/edit.vue'),
    },

    {
        path: '/siklus-budidaya-benur-doc',
        name: 'siklus-budidaya-benur-doc',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaBenur&Doc/table.vue'),
    },
    {
        path: '/siklus-budidaya-benur-doc/create',
        name: 'siklus-budidaya-benur-doc-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaBenur&Doc/input.vue'),
    },
    {
        path: '/siklus-budidaya-benur-doc/edit',
        name: 'siklus-budidaya-benur-doc-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaBenur&Doc/edit.vue'),
    },

    //manageKolam
    {
        path: '/manage-kolam/create',
        name: 'manage-kolam-input',
        component: () => import('../views/components/manage/manageKolam/input.vue'),
    },
    {
        path: '/manage-kolam/edit',
        name: 'manage-kolam-edit',
        component: () => import('../views/components/manage/manageKolam/edit.vue'),
    },
    {
        path: '/manage-kolam',
        name: 'manage-kolam-table',
        component: () => import('../views/components/manage/manageKolam/table.vue'),
    },

    //manageKolam
    {
        path: '/manage-kontent/create',
        name: 'manage-kontent-input',
        component: () => import('../views/components/manage/manageKontent/input.vue'),
    },
    {
        path: '/manage-kontent/edit',
        name: 'manage-kontent-edit',
        component: () => import('../views/components/manage/manageKontent/edit.vue'),
    },
    {
        path: '/manage-kontent',
        name: 'manage-kontent-table',
        component: () => import('../views/components/manage/manageKontent/table.vue'),
    },
    // Panen
    {
        path: '/panen-',
        name: 'panen-',
        component: () => import('../views/components/panen/panen/table.vue'),
    },
    {
        path: '/panen-create-',
        name: 'panen-create',
        component: () => import('../views/components/panen/panen/input.vue'),
    },
    {
        path: '/panen-edit1',
        name: 'panen-edit1',
        component: () => import('../views/components/panen/panen/edit.vue'),
    },
    {
        path: '/perkiraan',
        name: 'perkiraan',
        component: () => import('../views/components/panen/perkiraan/table.vue'),
    },
    {
        path: '/perkiraan/edit',
        name: 'perkiraan-edit',
        component: () => import('../views/components/panen/perkiraan/edit.vue'),
    },
    {
        path: '/perkiraan/create',
        name: 'perkiraan-create',
        component: () => import('../views/components/panen/perkiraan/input.vue'),
    },
    {
        path: '/aktual',
        name: 'aktual',
        component: () => import('../views/components/panen/aktual/table.vue'),
    },

    {
        path: '/aktual/create',
        name: 'aktual-create',
        component: () => import('../views/components/panen/aktual/input.vue'),
    },

    {
        path: '/aktual/edit',
        name: 'aktual-edit',
        component: () => import('../views/components/panen/aktual/edit.vue'),
    },

    // Harga udang
    {
        path: '/harga-udang',
        name: 'harga-udang',
        component: () => import('../views/components/manage/hargaUdang/table.vue'),
    },
    {
        path: '/hargaudang/create',
        name: 'hargaudang-creat',
        component: () => import('../views/components/manage/hargaUdang/input.vue'),
    },
    {
        path: '/hargaudang/edit',
        name: 'hargaudang-edit',
        component: () => import('../views/components/manage/hargaUdang/edit.vue'),
    },

    // Air Tambak
    {
        path: '/airtambak',
        name: 'airtambak',
        component: () => import('../views/components/manage/warnaairtambak/table.vue'),
    },
    {
        path: '/airtambak/create',
        name: 'airtambak-create',
        component: () => import('../views/components/manage/warnaairtambak/input.vue'),
    },
    {
        path: '/airtambak/edit',
        name: 'airtambak-edit',
        component: () => import('../views/components/manage/warnaairtambak/edit.vue'),
    },

    // Kolam Budidaya Persiapan

    {
        path: '/persiapan-kolam-budidaya',
        name: 'persiapan-kolam-budidaya',
        component: () => import('../views/components/persiapanKolamBudidaya/table.vue'),
    },
    {
        path: '/persiapan-kolam-budidaya/create',
        name: 'persiapan-kolam-budidaya-create',
        component: () => import('../views/components/persiapanKolamBudidaya/input.vue'),
    },
    {
        path: '/persiapan-kolam-budidaya/edit',
        name: 'persiapan-kolam-budidaya-edit',
        component: () => import('../views/components/persiapanKolamBudidaya/edit.vue'),
    },

    // akhir Kolam Budidaya Persiapan

    // kolamTreatment
    {
        path: '/kolam-treatment/create',
        name: 'kolam-treatment-create',
        component: () => import('../views/components/kolamTreatment/input.vue'),
    },
    {
        path: '/kolam-treatment/edit',
        name: 'kolam-treatment-edit',
        component: () => import('../views/components/kolamTreatment/edit.vue'),
    },
    {
        path: '/kolam-treatment/table',
        name: 'kolam-treatment-table',
        component: () => import('../views/components/kolamTreatment/table.vue'),
    },
    // reminder
    {
        path: '/reminder',
        name: 'reminder',
        component: () => import('../views/components/reminder/table.vue'),
    },
    {
        path: '/reminder/create',
        name: 'reminder-create',
        component: () => import('../views/components/reminder/input.vue'),
    },
    {
        path: '/reminder/edit',
        name: 'reminder-edit',
        component: () => import('../views/components/reminder/edit.vue'),
    },

    // siklus budidaya udang
    {
        path: '/pertumbuhan-udangs',
        name: 'pertumbuhan-udangs',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/pertumbuhanUdang/table.vue'),
    },
    {
        path: '/pertumbuhan-udangs/create',
        name: 'pertumbuhan-udangs-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/pertumbuhanUdang/input.vue'),
    },
    {
        path: '/pertumbuhan-udangs/edit',
        name: 'pertumbuhan-udangs-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/pertumbuhanUdang/edit.vue'),
    },

    // siklus budidaya udang
    {
        path: '/scoring-kesehatan-udang',
        name: 'scoring-kesehatan-udang',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/scoringKesehatanUdang/table.vue'),
    },
    {
        path: '/scoring-kesehatan-udang/create',
        name: 'scoring-kesehatan-udang-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/scoringKesehatanUdang/input.vue'),
    },
    {
        path: '/scoring-kesehatan-udang/edit',
        name: 'scoring-kesehatan-udang-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaUdang/scoringKesehatanUdang/edit.vue'),
    },

    // siklusBudidayaAir
    {
        path: '/budidaya-fisika',
        name: 'budidaya-fisika',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterFisika/table.vue'),
    },
    {
        path: '/budidaya-fisika/create',
        name: 'budidaya-fisika-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterFisika/input.vue'),
    },
    {
        path: '/budidaya-fisika/edit',
        name: 'budidaya-fisika-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterFisika/edit.vue'),
    },

    {
        path: '/budidaya-kimia',
        name: 'budidaya-kimia',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterKimia/table.vue'),
    },
    {
        path: '/budidaya-kimia/create',
        name: 'budidaya-kimia-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterKimia/input.vue'),
    },
    {
        path: '/budidaya-kimia/edit',
        name: 'budidaya-kimia-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterKimia/edit.vue'),
    },
    {
        path: '/budidaya-biologi',
        name: 'budidaya-biologi',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/table.vue'),
    },
    {
        path: '/budidaya-biologi/create',
        name: 'budidaya-biologi-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/input.vue'),
    },
    {
        path: '/budidaya-biologi/edit',
        name: 'budidaya-biologi-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/edit.vue'),
    },
    {
        path: '/budidaya-biologi-fitoplankton',
        name: 'budidaya-biologi-fitoplankton',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/fitoplankton/table.vue'),
    },
    {
        path: '/budidaya-biologi-fitoplankton/create',
        name: 'budidaya-biologi-fitoplankton-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/fitoplankton/input.vue'),
    },
    {
        path: '/budidaya-biologi-fitoplankton/edit',
        name: 'budidaya-biologi-fitoplankton-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/fitoplankton/edit.vue'),
    },

    {
        path: '/budidaya-biologi-vibrioTCBS',
        name: 'budidaya-biologi-vibrioTCBS',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioTCBS/table.vue'),
    },
    {
        path: '/budidaya-biologi-vibrioTCBS/create',
        name: 'budidaya-biologi-vibrioTCBS-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioTCBS/input.vue'),
    },
    {
        path: '/budidaya-biologi-vibrioTCBS/edit',
        name: 'budidaya-biologi-vibrioTCBS-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioTCBS/edit.vue'),
    },

    {
        path: '/budidaya-biologi-vibrioCHROMagar',
        name: 'budidaya-biologi-vibrioCHROMagar',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioCHROMagar/table.vue'),
    },
    {
        path: '/budidaya-biologi-vibrioCHROMagar/create',
        name: 'budidaya-biologi-vibrioCHROMagar-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioCHROMagar/input.vue'),
    },
    {
        path: '/budidaya-biologi-vibrioCHROMagar/edit',
        name: 'budidaya-biologi-vibrioCHROMagar-edit',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaAir/parameterBiologi/vibrioCHROMagar/edit.vue'),
    },

    // Setting
    {
        path: '/setting/table',
        name: 'manage-setting',
        component: () => import('../views/components/manage/setting/table.vue'),
    },
    {
        path: '/setting/create',
        name: 'manage-setting-create',
        component: () => import('../views/components/manage/setting/input.vue'),
    },
    {
        path: '/setting/edit',
        name: 'manage-setting-edit',
        component: () => import('../views/components/manage/setting/edit.vue'),
    },
    // Laporan
    {
        path: '/laporan',
        name: 'laporan',
        component: () => import('../views/components/laporan/laporan.vue'),
    },
];

const router = new createRouter({
    // mode: 'history',
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});

export default router;
