<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Manage Kolam</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="manageKolam" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3>Input Manage Kolam</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="form-group">
                                <label class="control-label">Tambak Id</label>
                                <input type="number" name="id_tambak" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Kolam Id</label>
                                <input type="number" name="id_kolam" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Nama Kolam</label>
                                <input type="text" name="nama_kolam" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="select" class="col-form-label">Tipe Kolam</label>
                                <div>
                                    <select id="select" class="form-select" name="tipe_kolam">
                                        <option value="1">Tandom</option>
                                        <option value="2">Treatment</option>
                                        <option value="2">Budidaya</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Luas kolam (meter persegi)</label>
                                <input type="number" name="luas_kolam" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Tinggi kolam (meter)</label>
                                <input type="text" name="tinggi_kolam" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jenis Kolam</label>
                                <multiselect v-model="inputs['input3']" :options="options1" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
                            </div>
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Pilih Kincir</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="select" class="col-form-label">Pilih Kincir</label>
                                <div>
                                    <select id="select" class="form-select" name="pilih_kincir">
                                        <option value="1">Pilih Kincir</option>
                                    </select>
                                </div>
                            </div>
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Pilih Pompa</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="select" class="col-form-label">Pilih Pompa</label>
                                <div>
                                    <select id="select" class="form-select" name="pilih_pompa">
                                        <option value="1">Pilih Pompa</option>
                                    </select>
                                </div>
                            </div>
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Pilih Auto Feeder</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="select" class="col-form-label">Pilih Auto Feeder</label>
                                <div>
                                    <select id="select" class="form-select" name="pilih_autofeeder">
                                        <option value="1">Pilih Auto Feeder</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah</label>
                                <input type="number" name="tinggi_kolam" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="select" class="col-form-label">Status</label>
                                <div>
                                    <select id="select" class="form-select" name="status">
                                        <option value="1">Aktive</option>
                                        <option value="2">Tidak Aktive</option>
                                    </select>
                                </div>
                            </div>
                            <input type="submit" value="Submit" class="btn btn-primary mt-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import '@/assets/sass/scrollspyNav.scss';
import '@/assets/sass/forms/file-upload-with-preview.min.css';
import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';
import '@/assets/sass/forms/file-upload-with-preview.min.css';
import highlight from '@/components/plugins/highlight.vue';

import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

import Multiselect from '@suadelabs/vue3-multiselect';

import FileUploadWithPreview from 'file-upload-with-preview';

import { useMeta } from '@/composables/use-meta';
useMeta({ title: 'File Upload' });

const code_arr = ref([]);
const selected_file = ref(null);

const toggleCode = (name) => {
    if (code_arr.value.includes(name)) {
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};

const options1 = ref(['pompa', 'Kincir', 'Auto feeder', 'Alat laboratorium dan Pengukuran']);
const inputs = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
});

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};
</script>