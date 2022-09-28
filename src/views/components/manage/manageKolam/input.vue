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
                                <h4>Input Manage Kolam</h4>
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
                                <label class="control-label">Tipe Kolam</label>
                                <multiselect v-model="inputs['input1']" :options="options1" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
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
                                <multiselect v-model="inputs2['input3']" :options="options2" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
                            </div>
                            <div class="form-group">
                                <strong><label class="control-label">Pilih Kincir</label></strong>
                                <multiselect v-model="inputs3['input3']" :options="options3" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
                            </div>
                            <div class="form-group">
                                <strong><label class="control-label">Pilih Pompa</label></strong>
                                <multiselect v-model="inputs4['input3']" :options="options4" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
                            </div>
                            <div class="form-group">
                                <strong><label class="control-label">Pilih Auto Feeder</label></strong>
                                <multiselect v-model="inputs5['input3']" :options="options5" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah</label>
                                <input type="number" name="tinggi_kolam" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Status</label>
                                <multiselect v-model="inputs6['input3']" :options="options6" :searchable="true"
                                    placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                </multiselect>
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

const options3 = ref(['Pilih Kincir']);
const inputs3 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options4 = ref(['Pilih Pompa']);
const inputs4 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options5 = ref(['Pilih Auto Feeder']);
const inputs5 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options6 = ref(['Aktive', 'Tidak Aktive']);
const inputs6 = ref({
    input1: [],
    input2: [],
    input3: [],
});

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};
</script>