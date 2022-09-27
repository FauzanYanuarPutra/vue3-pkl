<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Interval
                                        Pengukuran</span>
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
                                <h3>Siklus budidaya (persiapan)</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="form-group">
                                <label class="control-label">Pengeringan dasar tambak</label>
                                <input type="number" name="pengeringan_dasar" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pembuangan sedimen organik</label>
                                <input type="number" name="pembuangan_sedimen" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Sterilisasi tambak</label>
                                <input type="number" name="sterilisasi_tambak" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pengisian air dan sterilisasi air tambak</label>
                                <input type="number" name="pengisian_air" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pengapuran</label>
                                <input type="number" name="pengapuran" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pemupukan dan pemberian mineral</label>
                                <input type="number" name="pemupukan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pertumbuhan plankton</label>
                                <input type="number" name="pertumbuhan_plankton" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pertumbuhan patogen atau yang merugikan</label>
                                <input type="number" name="pertumbuhan_patogen" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Probiotik</label>
                                <input type="number" name="probiotik" class="form-control" />
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