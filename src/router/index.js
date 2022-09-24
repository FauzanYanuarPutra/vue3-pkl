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
        path: '/parameter-biologi-fitoplankton',
        name: 'parameter-biologi-fitoplankton',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/fitoplankton/table.vue'),
    },
    {
        path: '/parameter-biologi-fitoplankton/create',
        name: 'parameter-biologi-fitoplankton-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/fitoplankton/input.vue'),
    },
    {
        path: '/parameter-biologi-vibrioTCBS',
        name: 'parameter-biologi-vibrioTCBS',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/vibrioTCBS/table.vue'),
    },
    {
        path: '/parameter-biologi-vibrioTCBS/create',
        name: 'parameter-biologi-vibrioTCBS-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/vibrioTCBS/input.vue'),
    },
    {
        path: '/parameter-biologi-vibrioCHROMagar',
        name: 'parameter-biologi-vibrioCHROMagar',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/vibrioCHROMagar/table.vue'),
    },
    {
        path: '/parameter-biologi-vibrioCHROMagar/create',
        name: 'parameter-biologi-vibrioCHROMagar-create',
        component: () => import('../views/components/idealParameter/kondisiAir/parameterBiologi/vibrioCHROMagar/input.vue'),
    },
    {
        path: '/ideal-parameter/pertumbuhan-udang',
        name: 'pertumbuhan-udang',
        component: () => import('../views/components/idealParameter/pertumbuhanUdang/table.vue'),
    },
    {
        path: '/ideal-parameter/konsumsi-pakan',
        name: 'konsumsi-pakan',
        component: () => import('../views/components/idealParameter/konsumsiPakan/table.vue'),
    },
    {
        path: '/ideal-parameter/benur',
        name: 'benur',
        component: () => import('../views/components/idealParameter/benur/table.vue'),
    },
    // {
    //     path: '/ideal-parameter/edit',
    //     name: 'ideal-parameter-edit',
    //     component: () => import('../views/components/manage/manageTambak/edit.vue'),
    // },

    //intervalPengukuran
    // intervalPengecekan
    {
        path: '/interval-pengecekan/create',
        name: 'intervalPengukuran-create-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/intervalPengecekan/input.vue'),
    },
    {
        path: '/interval-pengecekan/edit',
        name: 'intervalPengukuran-edit-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/intervalPengecekan/edit.vue'),
    },
    {
        path: '/interval-pengecekan/table',
        name: 'intervalPengukuran-table-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/intervalPengecekan/table.vue'),
    },

    // siklusBudidaya
    // budidayaAir
    {
        path: '/budidaya-air/create',
        name: 'intervalPengukuran-create-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaAir/input.vue'),
    },
    {
        path: '/budidaya-air/edit',
        name: 'intervalPengukuran-edit-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaAir/edit.vue'),
    },
    {
        path: '/budidaya-air/table',
        name: 'intervalPengukuran-table-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaAir/table.vue'),
    },

    // budidayaBenur
    {
        path: '/budidaya-benur/create',
        name: 'intervalPengukuran-create-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaBenur/input.vue'),
    },
    {
        path: '/budidaya-benur/edit',
        name: 'intervalPengukuran-edit-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaBenur/edit.vue'),
    },
    {
        path: '/budidaya-benur/table',
        name: 'intervalPengukuran-table-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaBenur/table.vue'),
    },

    // budidayaPakan
    {
        path: '/budidaya-pakan/create',
        name: 'intervalPengukuran-create-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPakan/input.vue'),
    },
    {
        path: '/budidaya-pakan/edit',
        name: 'intervalPengukuran-edit-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPakan/edit.vue'),
    },
    {
        path: '/budidaya-pakan/table',
        name: 'intervalPengukuran-table-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPakan/table.vue'),
    },

    // budidayaPersiapan
    {
        path: '/budidaya-persiapan/create',
        name: 'intervalPengukuran-create-budidaya-persiapan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPersiapan/input.vue'),
    },
    {
        path: '/budidaya-persiapan/edit',
        name: 'intervalPengukuran-edit-budidaya-persiapan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPersiapan/edit.vue'),
    },
    {
        path: '/budidaya-persiapan/table',
        name: 'intervalPengukuran-table-budidaya-persiapan',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaPersiapan/table.vue'),
    },

    // budidayaUdang
    {
        path: '/budidaya-udang/create',
        name: 'intervalPengukuran-create-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaUdang/input.vue'),
    },
    {
        path: '/budidaya-udang/edit',
        name: 'intervalPengukuran-edit-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaUdang/edit.vue'),
    },
    {
        path: '/budidaya-udang/table',
        name: 'intervalPengukuran-table-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/siklusBudidaya/budidayaUdang/table.vue'),
    },

    // kesehatan
    // kesehatanBenur
    {
        path: '/kesehatan-benur/create',
        name: 'intervalPengukuran-create-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanBenur/input.vue'),
    },
    {
        path: '/kesehatan-benur/edit',
        name: 'intervalPengukuran-edit-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanBenur/edit.vue'),
    },
    {
        path: '/kesehatan-benur/table',
        name: 'intervalPengukuran-table-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanBenur/table.vue'),
    },

    // kesehatanUdang
    {
        path: '/kesehatan-udang/create',
        name: 'intervalPengukuran-create-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanUdang/input.vue'),
    },
    {
        path: '/kesehatan-udang/edit',
        name: 'intervalPengukuran-edit-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanUdang/edit.vue'),
    },
    {
        path: '/kesehatan-udang/table',
        name: 'intervalPengukuran-table-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/kesehatan/kesehatanUdang/table.vue'),
    },

    // panen
    {
        path: '/panen/create',
        name: 'intervalPengukuran-create-panen',
        component: () => import('../views/components/intervalPengukuran/panen/input.vue'),
    },
    {
        path: '/panen/edit',
        name: 'intervalPengukuran-edit-panen',
        component: () => import('../views/components/intervalPengukuran/panen/edit.vue'),
    },
    {
        path: '/panen/table',
        name: 'intervalPengukuran-table-panen',
        component: () => import('../views/components/intervalPengukuran/panen/table.vue'),
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
        path: '/siklus-budidaya-benur-doc',
        name: 'siklus-budidaya-benur-doc',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaBenur&Doc/table.vue'),
    },
    {
        path: '/siklus-budidaya-benur-doc/create',
        name: 'siklus-budidaya-benur-doc-create',
        component: () => import('../views/components/siklusBudidaya/siklusBudidayaBenur&Doc/input.vue'),
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
        component: () => import('../views/components/hargaUdang/table.vue'),
    },
    {
        path: '/hargaudang/create',
        name: 'hargaudang-creat',
        component: () => import('../views/components/hargaUdang/input.vue'),
    },

    // Harga udang
    {
        path: '/airtambak',
        name: 'airtambak',
        component: () => import('../views/components/warnaairtambak/table.vue'),
    },
    {
        path: '/airtambak/create',
        name: 'airtambak-creat',
        component: () => import('../views/components/warnaairtambak/input.vue'),
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
