<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Tambah Data Kolam</span>
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
                                <h4>Tambah Data Kolam</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Nama Tambak</label>
                                    <multiselect v-model="inputs8['input1']" :options="options8" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nama Kolam</label>
                                    <input type="text" name="nama_kolam" class="form-control"
                                        placeholder="Masukkan nama kolam" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tipe Kolam</label>
                                    <multiselect v-model="inputs['input1']" :options="options1" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Luas Kolam (Meter Persegi)</label>
                                    <input type="number" name="luas_kolam" class="form-control"
                                        placeholder="Masukkan luas kolam" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tinggi Kolam (Meter)</label>
                                    <input type="text" name="tinggi_kolam" class="form-control"
                                        placeholder="Masukkan tinggi kolam" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Jenis Kolam</label>
                                    <multiselect v-model="inputs2['input3']" :options="options2" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div id="pembungkus_nama" class="form-group">
                                    <strong><label class="control-label">Pilih Kincir</label></strong>
                                    <div class="multiple-input">
                                        <input type="text" name="nama_kincir" class="form-control" id="nama_0"
                                            placeholder="Nama Kincir">
                                        <input type="number" name="jumlah_kincir" class="form-control" id="nama_0"
                                            placeholder="Jumlah Kincir">
                                        <buttom class="btn btn-primary" onclick="increment()">Tambah</buttom>
                                    </div>

                                </div>
                                <div id="pembungkus_nama1" class="form-group">
                                    <strong><label class="control-label">Pilih Pompa</label></strong>
                                    <div class="multiple-input">
                                        <multiselect v-model="inputs7['input3']" :options="options7" :searchable="true"
                                            placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                        <input type="text" name="jumlah_pompa" class="form-control"
                                            placeholder="Jumlah Pompa" />
                                        <buttom class="btn btn-primary" onclick="increment1()">Tambah</buttom>
                                    </div>
                                </div>
                                <div id="pembungkus_nama2" class="form-group">
                                    <strong><label class="control-label">Pilih Auto Feeder</label></strong>
                                    <div class="multiple-input">
                                        <multiselect v-model="inputs9['input3']" :options="options9" :searchable="true"
                                            placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                        <input type="text" name="jumlah_autofeeder" class="form-control"
                                            placeholder="Jumlah Auto Feeder" />
                                        <buttom class="btn btn-primary" onclick="increment2()">Tambah</buttom>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Status</label>
                                    <multiselect v-model="inputs6['input3']" :options="options6" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                            </div>
                            <div class="submit">
                                <input type="submit" value="Simpan" class="btn btn-submit mt-3" />
                                <router-link to="/manage-kolam" @click="toggleMobileMenu" class="btn btn-kembali mt-3">
                                    Kembali</router-link>
                            </div>
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
        code_arr.value = code_arr.value.fiter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};

const options1 = ref(['Tandon', 'Treatment', 'Budidaya']);
const inputs = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options2 = ref(['Kolam tanah', 'Kolam beton', 'Kolam HDPE']);
const inputs2 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options6 = ref(['Aktif', 'Tidak Aktif']);
const inputs6 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options7 = ref(['Pilih Pompa']);
const inputs7 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options8 = ref(['Tambak b1', 'Tambak b2']);
const inputs8 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options9 = ref(['Pilih Auto Feeder']);
const inputs9 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};
</script>