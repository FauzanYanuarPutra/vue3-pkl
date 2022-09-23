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
    // input
    {
        path: '/interval-pengecekan/create',
        name: 'intervalPengukuran-create-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/create/interval_pengecekan.vue'),
    },
    {
        path: '/budidaya-persiapan/create',
        name: 'interval-pengukuran-create-budidaya-persiapan',
        component: () => import('../views/components/intervalPengukuran/create/budidaya_persiapan.vue'),
    },
    {
        path: '/budidaya-benur/create',
        name: '/interval-pengukuran-create-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/create/budidaya_benur.vue'),
    },
    {
        path: '/budidaya-air/create',
        name: '/interval-pengukuran-create-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/create/budidaya_air.vue'),
    },
    {
        path: '/budidaya-udang/create',
        name: '/interval-pengukuran-create-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/create/budidaya_udang.vue'),
    },
    {
        path: '/budidaya-pakan/create',
        name: '/interval-pengukuran-create-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/create/budidaya_pakan.vue'),
    },
    {
        path: '/kesehatan-benur/create',
        name: '/interval-pengukuran-create-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/create/kesehatan_benur.vue'),
    },
    {
        path: '/kesehatan-udang/create',
        name: '/interval-pengukuran-create-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/create/kesehatan_udang.vue'),
    },
    {
        path: '/panen/create',
        name: '/interval-pengukuran-create-panen',
        component: () => import('../views/components/intervalPengukuran/create/panen.vue'),
    },
    // edit
    {
        path: '/interval-pengecekan/edit',
        name: '/interval-pengukuran-edit-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/edit/interval_pengecekan.vue'),
    },
    {
        path: '/budidaya-persiapan/edit',
        name: '/interval-pengukuran-edit-budidaya-ersiapan',
        component: () => import('../views/components/intervalPengukuran/edit/budidaya_persiapan.vue'),
    },
    {
        path: '/budidaya-benur/edit',
        name: '/interval-engukuran-edit-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/edit/budidaya_benur.vue'),
    },
    {
        path: '/budidaya-air/edit',
        name: '/interval-pengukuran-edit-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/edit/budidaya_air.vue'),
    },
    {
        path: '/budidaya-udang/edit',
        name: '/interval-pengukuran-edit-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/edit/budidaya_udang.vue'),
    },
    {
        path: '/budidaya-pakan/edit',
        name: '/interval-pengukuran-edit-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/edit/budidaya_pakan.vue'),
    },
    {
        path: '/kesehatan-benur/edit',
        name: '/interval-pengukuran-edit-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/edit/kesehatan_benur.vue'),
    },
    {
        path: '/kesehatan-udang/edit',
        name: '/interval-pengukuran-edit-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/edit/kesehatan_udang.vue'),
    },
    {
        path: '/panen/edit',
        name: '/interval-pengukuran-edit-panen',
        component: () => import('../views/components/intervalPengukuran/edit/panen.vue'),
    },
    // table
    {
        path: '/interval-pengecekan/table',
        name: 'interval-pengukuran-table-interval-pengecekan',
        component: () => import('../views/components/intervalPengukuran/table/interval_pengecekan.vue'),
    },
    {
        path: '/budidaya-persiapan/table',
        name: 'budidaya-persiapan-table-budidaya-persiapan',
        component: () => import('../views/components/intervalPengukuran/table/budidaya_persiapan.vue'),
    },
    {
        path: '/budidaya-benur/table',
        name: '/budidaya-benur-table-budidaya-benur',
        component: () => import('../views/components/intervalPengukuran/table/budidaya_benur.vue'),
    },
    {
        path: '/budidaya-air/table',
        name: '/budidaya-air-table-budidaya-air',
        component: () => import('../views/components/intervalPengukuran/table/budidaya_air.vue'),
    },
    {
        path: '/budidaya-udang/table',
        name: '/budidaya-udang-table-budidaya-udang',
        component: () => import('../views/components/intervalPengukuran/table/budidaya_udang.vue'),
    },
    {
        path: '/budidaya-pakan/table',
        name: '/budidaya-pakan-table-budidaya-pakan',
        component: () => import('../views/components/intervalPengukuran/table/budidaya_pakan.vue'),
    },
    {
        path: '/kesehatan-benur/table',
        name: '/kesehatan-benur-table-kesehatan-benur',
        component: () => import('../views/components/intervalPengukuran/table/kesehatan_benur.vue'),
    },
    {
        path: '/kesehatan-udang/table',
        name: '/kesehatan-udang-table-kesehatan-udang',
        component: () => import('../views/components/intervalPengukuran/table/kesehatan_udang.vue'),
    },
    {
        path: '/panen/table',
        name: '/panen-table-panen',
        component: () => import('../views/components/intervalPengukuran/table/panen.vue'),
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
        path: '/panen-create',
        name: 'panen-create1',
        component: () => import('../views/components/panen/panen/input.vue'),
    },
    {
        path: '/panen-edit',
        name: 'panen-edit',
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
