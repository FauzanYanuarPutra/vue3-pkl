<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Kolam
                                        Treatment</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="manageTambak" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3>Input Kolam
                                    Treatment</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Nama tambak</label>
                                    <multiselect v-model="inputs4['input3']" :options="options4" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nama kolam</label>
                                    <multiselect v-model="inputs5['input3']" :options="options5" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Jam</label>
                                    <input type="text" name="jam" class="form-control"
                                        placeholder="Masukkan jam input" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Bulan:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Pro+ Air (Liter)</label>
                                    <multiselect v-model="inputs['input3']" :options="options1" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Pro+ Oral (ml)</label>
                                    <multiselect v-model="inputs2['input3']" :options="options2" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Mineral (Kg)</label>
                                    <multiselect v-model="inputs3['input3']" :options="options3" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Keterangan</label>
                                    <input type="text" name="keterangan" class="form-control"
                                        placeholder="Beri Keterangan" />
                                </div>
                            </div>
                            <input type="submit" value="Submit" class="btn mt-3" />
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

const options1 = ref(['TIP', 'BIO', 'MOL', 'Vit B']);
const inputs = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
});

const options2 = ref(['Vit C', 'Bioez', 'bp', 'Bio']);
const inputs2 = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
});

const options3 = ref(['K_P', 'Gpg', 'Azo', 'Tio', 'Agz', 'Quick']);
const inputs3 = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
});

const options4 = ref(['Tambak a', 'Tambak b', 'Tambak c', 'Tambak d', 'Tambak e', 'Tambak f']);
const inputs4 = ref({
    input1: [],
    input2: [],
    input3: [],
    input4: [],
    input5: [],
});

const options5 = ref(['Kolam B1', 'Kolam B2', 'Kolam B3', 'Kolam B4', 'Kolam B5', 'Kolam B6']);
const inputs5 = ref({
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