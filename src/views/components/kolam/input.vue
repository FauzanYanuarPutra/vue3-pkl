<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Validation</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>
        <div class="container">
            <div v-scroll-spy class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h3>Input Management Kolam</h3>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form novalidate class="simple-example" @submit.stop.prevent="submit_form1">
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="tambak">Tambak ID</label>
                                        <input v-model="form1.name" id="tambak" type="text" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="kolam">Kolam ID</label>
                                        <input v-model="form1.name" id="kolam" type="text" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="namaKolam">Nama Kolam</label>
                                        <input v-model="form1.name" id="namaKolam" type="text" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="select" class="col-form-label">Tipe Kolam</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">Tandom</option>
                                                <option value="2">Treatment</option>
                                                <option value="3">Budidaya</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="luasKolam">Luas kolam (meter persegi)</label>
                                        <input v-model="form1.name" id="luasKolam" type="number" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="luasKolam">Tinggi kolam (meter)</label>
                                        <input v-model="form1.name" id="luasKolam" type="number" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please fill the name</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="select" class="col-form-label">Jenis Kolam</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">Kolam tanah</option>
                                                <option value="2">Kolam beton</option>
                                                <option value="3">kolam HDPE</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Pilih Kincir</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="select" class="col-form-label">Pilih Kincir</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">Pilih Kincir</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Pilih Pompa</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="select" class="col-form-label">Tipe Pompa</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">Pilih Pompa</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Pilih Auto Feeder</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="select" class="col-form-label">Tipe Auto Feeder</label>
                                        <div>
                                            <select id="select" class="form-select">
                                                <option value="1">Pilih Auto Feeder</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="jumlah">Jumlah</label>
                                        <input v-model="form1.name" id="jumlah" type="number" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <label for="status">Status</label>
                                        <input v-model="form1.name" id="status" type="text" class="form-control"
                                            :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import '@/assets/sass/scrollspyNav.scss';
import highlight from '@/components/plugins/highlight.vue';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'Form Validation' });

const code_arr = ref([]);
const form1 = ref({ name: '' });
const is_submit_form1 = ref(false);
const form2 = ref({ email: '' });
const is_submit_form2 = ref(false);
const form3 = ref({ select: '' });
const is_submit_form3 = ref(false);
const form4 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
const is_submit_form4 = ref(false);
const form5 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
const is_submit_form5 = ref(false);
const form6 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
const is_submit_form6 = ref(false);

const toggleCode = (name) => {
    if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};
const email_validate = (email) => {
    const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
    return regexp.test(email);
};
const submit_form1 = () => {
    is_submit_form1.value = true;
    if (form1.value.name) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};
const submit_form2 = () => {
    is_submit_form2.value = true;
    if (email_validate(form2.value.email)) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};
const submit_form3 = () => {
    is_submit_form3.value = true;
    if (form3.value.select) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};
const submit_form4 = () => {
    is_submit_form4.value = true;
    if (form4.value.first_name && form4.value.last_name && form4.value.username && form4.value.city && form4.value.state && form4.value.zip && form4.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};
const submit_form5 = () => {
    is_submit_form5.value = true;
    if (form5.value.first_name && form5.value.last_name && form5.value.username && form5.value.city && form5.value.state && form5.value.zip && form5.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};
const submit_form6 = () => {
    is_submit_form6.value = true;
    if (form6.value.first_name && form6.value.last_name && form6.value.username && form6.value.city && form6.value.state && form6.value.zip && form6.value.is_terms) {
        //form validated success
        showMessage('Form submitted successfully.');
    }
};

const showMessage = (msg = '', type = 'success') => {
    const toast = window.Swal.mixin({ toast: true, position: 'top', showConfirmButton: false, timer: 3000 });
    toast.fire({ icon: type, title: msg, padding: '10px 20px' });
};
</script>
