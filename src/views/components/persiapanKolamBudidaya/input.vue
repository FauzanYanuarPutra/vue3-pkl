<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Persiapan Budidaya</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="PemupukanDanPemberianMineral" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3>Input Persiapan Budidaya</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Nama Kolam:</label>
                                    <multiselect v-model="inputs['input1']" :options="kolam" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nama Tambak:</label>
                                    <multiselect v-model="inputs['input2']" :options="tambak" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">pengeringan Dasar Tambak</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal dan Jam Input:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date2"
                                            :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                                            class="form-control flatpickr active"></flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Lama Hari:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group-panjang">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pembuangan Sedimen Organik
                                </h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Sterilisasi Tambak</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal Mulai:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tanggal Berakhir:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pemakaian Sterilisasi:</label>
                                    <multiselect v-model="inputs['input3']" :options="sterilisasi" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>

                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pengisisan air dan
                                    sterilisasi air tambak</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal Mulai:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tanggal Berakhir:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tinggi Air (cm):</label>
                                    <input type="number" name="keterangan" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pemakaian Sterilisasi:</label>
                                    <multiselect v-model="inputs['input4']" :options="pemakaianSterilisasi"
                                        :searchable="true" placeholder="Choose..." selected-label="" select-label=""
                                        deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group w-100">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>

                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pengapuran</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal Mulai:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tanggal Berakhir:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pemakaian Kapur:</label>
                                    <multiselect v-model="inputs['input5']" :options="pengapuran" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>

                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pemupukan dan pemberian
                                    mineral</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal Mulai:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tanggal Berakhir:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>

                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pemakaian Pupuk dan Mineral:</label>
                                    <multiselect v-model="inputs['input6']" :options="pupukDanMineral"
                                        :searchable="true" placeholder="Choose..." selected-label="" select-label=""
                                        deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>

                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pertumbuhan Plankton</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Teridentifikasi:</label>
                                    <multiselect v-model="inputs['input7']" :options="teridentifikasi"
                                        :searchable="true" placeholder="Choose..." selected-label="" select-label=""
                                        deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group w-100">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>

                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Pertumbuhan Patogen atau yang
                                    merugikan</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Teridentifikasi:</label>
                                    <multiselect v-model="inputs['input8']" :options="teridentifikasi"
                                        :searchable="true" placeholder="Choose..." selected-label="" select-label=""
                                        deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group w-100">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>


                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Probiotik</h6>

                                <div class="form-group">
                                    <label class="control-label">Tanggal:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pemakaian Probiotik:</label>
                                    <multiselect v-model="inputs['input9']" :options="probiotik" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group w-100">
                                    <label class="control-label">keterangan:</label>
                                    <input type="text" name="keterangan" class="form-control" />
                                </div>


                            </div>


                            <div class="submit">
                                <input type="submit" value="Simpan" class="btn btn-submit mt-3" />
                                <router-link to="/persiapan-kolam-budidaya" @click="toggleMobileMenu" class="btn btn-kembali mt-3" >Kembali</router-link>
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
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};

const kolam = ref(['Kolam b1', 'Kolam b2']);
const tambak = ref(['Tambak b1', 'Tambak b2']);

const sterilisasi = ref(['Sterilisasi tambak 1', 'Sterilisasi tambak 2']);
const pemakaianSterilisasi = ref(['Kalium', 'Hydrogen Peroksida', 'Kaporit', 'Saponin']);
const pengapuran = ref(['Kapur Kalsit', 'Kapur Oksida', 'Kapur Hidrat', 'Kapur Dolomit']);
const pupukDanMineral = ref(['pupuk dan mineral 1', 'pupuk dan mineral 2', 'pupuk dan mineral 3', 'pupuk dan mineral 4']);
const teridentifikasi = ref(['Ada', 'Tidak']);
const probiotik = ref(['Merek Probiotik 1', 'Merek Probiotik 2', 'Merek Probiotik 3', 'Merek Probiotik 4']);








const inputs = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
    input6: [],
    input7: [],
    input8: [],
    input9: [],
});

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};
</script>