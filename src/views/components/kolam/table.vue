<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">

            <div v-scroll-spy class="row layout-top-spacing">
                <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tabel Management Kolam</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered"
                                    id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1">
                                                <div>Tambak ID</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="2">
                                                <div>Kolam ID</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="3">
                                                <div>Nama Kolam</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="4">
                                                <div>Tipe Kolam</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="5">
                                                <div>Luas Kolam</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="6">
                                                <div>Tinggi Kolam</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="7">
                                                <div>Jenis Kolam</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="10" class="text-center">
                                                <div>status</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="11" aria-label="Action"
                                                class="text-center">
                                                <div></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="2" role="cell">{{ item.date }}</td>
                                            <td aria-colindex="3" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="4" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="5" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="6" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="7" role="cell">{{ item.sale }}</td>
                                            <td aria-colindex="10" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="11" role="cell" class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 icon">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br>
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Kincir</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered"
                                    id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1">
                                                <div>Nama Kincir</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="10" class="text-center">
                                                <div>status</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="11" aria-label="Action"
                                                class="text-center">
                                                <div></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="10" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="11" role="cell" class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 icon">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br>
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Pompa</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered"
                                    id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheader" scope="col" aria-colindex="1">
                                                <div>Nama Pompa</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="10" class="text-center">
                                                <div>status</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="11" aria-label="Action"
                                                class="text-center">
                                                <div></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="10" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="11" role="cell" class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 icon">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br>
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Auto Feeder</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered"
                                    id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheade   r" scope="col" aria-colindex="1">
                                                <div>Nama Auto Feeder</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="10" class="text-center">
                                                <div>status</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="11" aria-label="Action"
                                                class="text-center">
                                                <div></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="10" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="11" role="cell" class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 icon">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br>
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Jumlah</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table role="table" aria-busy="false" aria-colcount="5" class="table table-bordered"
                                    id="__BVID__415">
                                    <thead role="rowgroup">
                                        <tr role="row">
                                            <th role="columnheade   r" scope="col" aria-colindex="1">
                                                <div>Jumlah</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="10" class="text-center">
                                                <div>status</div>
                                            </th>
                                            <th role="columnheader" scope="col" aria-colindex="11" aria-label="Action"
                                                class="text-center">
                                                <div></div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        <tr v-for="item in table_1" :key="item.name" role="row">
                                            <td aria-colindex="1" role="cell">{{ item.name }}</td>
                                            <td aria-colindex="10" role="cell" class="text-center">
                                                <span :class="`text-${item.status_class}`"> {{ item.status }} </span>
                                            </td>
                                            <td aria-colindex="11" role="cell" class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-trash-2 icon">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/tables/table-basic.scss';
import highlight from '@/components/plugins/highlight.vue';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Tables' });

const code_arr = ref([]);
const table_1 = ref([]);
const table_2 = ref([]);

onMounted(() => {
    initTooltip();
    init_tables();
});

const toggleCode = (name) => {
    if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};

const initTooltip = () => {
    setTimeout(() => {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    });
};

const init_tables = () => {
    table_1.value = [
        {
            thumb: 'boy.png',
            name: 'Shaun Park',
            'first name': 'John',
            'last name': 'Doe',
            email: 'johndoe@yahoo.com',
            date: '10/08/2020',
            sale: '320',
            sales: '29.56',
            status: 'Complete',
            status_class: 'success',
            register: '5 min ago',
            position: 'Developer',
            office: 'London',
        },
        {
            thumb: 'girl-1.png',
            name: 'Alma Clarke',
            'first name': 'Andy',
            'last name': 'King',
            email: 'andyking@gmail.com',
            date: '11/08/2020',
            sale: '420',
            sales: '19.15',
            status: 'Pending',
            status_class: 'secondary',
            register: '10 min ago',
            position: 'Designer',
            office: 'New York',
        },
        {
            thumb: 'girl-2.png',
            name: 'Xavier',
            'first name': 'Lisa',
            'last name': 'Doe',
            email: 'lisadoe@yahoo.com',
            date: '12/08/2020',
            sale: '130',
            sales: '39.00',
            status: 'In progress',
            status_class: 'info',
            register: '1 hour ago',
            position: 'Accountant',
            office: 'Amazon',
        },
        {
            thumb: 'boy-2.png',
            name: 'Vincent Carpenter',
            'first name': 'Vincent',
            'last name': 'Carpenter',
            email: 'vinnyc@yahoo.com',
            date: '13/08/2020',
            sale: '260',
            sales: '88.03',
            status: 'Canceled',
            status_class: 'danger',
            register: '1 day ago',
            position: 'Data Scientist',
            office: 'Canada',
        },
    ];

    table_2.value = [
        {
            thumb: 'boy.png',
            name: 'Amy Diaz',
            'first name': 'Amy',
            'last name': 'Diaz',
            email: 'amydiaz@yahoo.com',
            date: '10/08/2020',
            sale: '320',
            sales: '29.56',
            status: 'Complete',
            status_class: 'success',
            register: '5 min ago',
        },
        {
            thumb: 'girl-1.png',
            name: 'Nia Hillyer',
            'first name': 'Nia',
            'last name': 'Hillyer',
            email: 'niahill@gmail.com',
            date: '11/08/2020',
            sale: '420',
            sales: '19.15',
            status: 'Pending',
            status_class: 'secondary',
            register: '10 min ago',
        },
        {
            thumb: 'girl-2.png',
            name: 'Marry',
            'first name': 'Marry',
            'last name': 'McDonald',
            email: 'marryMcD@yahoo.com',
            date: '12/08/2020',
            sale: '130',
            sales: '39.00',
            status: 'In progress',
            status_class: 'info',
            register: '1 hour ago',
        },
        {
            thumb: 'boy-2.png',
            name: 'Shaun Park',
            'first name': 'Shaun',
            'last name': 'Park',
            email: 'park@yahoo.com',
            date: '13/08/2020',
            sale: '260',
            sales: '88.03',
            status: 'Canceled',
            status_class: 'danger',
            register: '1 day ago',
        },
    ];
    table_2.value = table_1.value.concat(table_2.value);
};

const random_class = (index) => {
    if (index == 0) {
        return 'default';
    } else if (index == 1) {
        return 'primary';
    } else if (index == 2) {
        return 'secondary';
    } else if (index == 3) {
        return 'success';
    } else if (index == 4) {
        return 'dark';
    } else if (index == 5) {
        return 'danger';
    } else if (index == 6) {
        return 'info';
    } else if (index == 7) {
        return 'warning';
    }
    return 'dark';
};
</script>
