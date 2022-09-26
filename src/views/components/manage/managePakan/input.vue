<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Pakan</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="managePakan" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Manage Pakan</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="form-group">
                                <label class="control-label">Nama Tambak:</label>
                                <input type="text" name="nama_tambak" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Tanggal dan jam input:</label>
                                <input type="text" name="Tanggal_dan_jam_input" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">ID pakan:</label>
                                <input type="text" name="ID_PaKan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Asal pakan:</label>
                                <input type="text" name="Asal_PaKan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Pakan batch id:</label>
                                <input type="text" name="Pakan_batch_id" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jenis butiran:</label>
                                <input type="text" name="Jenis_butiran" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Tanggal beli:</label>
                                <input type="text" name="Tanggal_beli" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">(kg)Ukuran/Karung:</label>
                                <input type="text" name="(kg)Ukuran/Karung" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Photo:</label>
                                <div class="custom-file-container">
                                    <div class="invoice-logo">
                                        <div class="upload pe-md-5">
                                            <input ref="fl_profile" type="file" class="d-none" accept="image/*"
                                                @change="change_file" />
                                            <img v-if="selected_file"
                                                :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                alt="profile" class="profile-preview"
                                                @click="$refs.fl_profile.click()" />
                                            <div v-else class="profile-preview upload-preview text-center border"
                                                @click="$refs.fl_profile.click()">
                                                <div class="my-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-upload-cloud">
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                        <line x1="12" y1="12" x2="12" y2="21"></line>
                                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3">
                                                        </path>
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                    </svg>
                                                </div>
                                                <div class="mt-2">Click to Upload Picture/Logo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Status:</label>
                                <input type="text" name="Status" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Scoring Pakan:</label>
                                <input type="text" name="Scoring_Pakan" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Aktraktan:</label>
                                <input type="text" name="Aktraktan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Protein untuk pertumbuhan:</label>
                                <input type="text" name="Protein_untuk_pertumbuhan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Keterangan:</label>
                                <input type="text" name="Keterangan" class="form-control" />
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