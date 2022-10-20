<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Tambah Data Kontent
                                        Edukasi</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="manageKontentEdukasi" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Tambah Data Kontent Edukasi</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Upload Gambar</label>
                                    <div class="custom-file-container">
                                        <div class="invoice-logo">
                                            <div class="upload pe-md-5">
                                                <input ref="fl_profile" type="file" name="gambar" class="d-none"
                                                    accept="image/*" @change="change_file" />
                                                <img v-if="selected_file"
                                                    :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                    alt="profile" class="profile-preview"
                                                    @click="$refs.fl_profile.click()" />
                                                <div v-else class="profile-preview upload-preview text-center border"
                                                    @click="$refs.fl_profile.click()">
                                                    <div class="my-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                            stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="feather feather-upload-cloud">
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                            <line x1="12" y1="12" x2="12" y2="21"></line>
                                                            <path
                                                                d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3">
                                                            </path>
                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                        </svg>
                                                    </div>
                                                    <div class="mt-2">Click to Upload Picture</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Upload Video</label>
                                    <input type="file" name="video" class="form-control"
                                        placeholder="Masukkan nama tambak" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Upload File (PDF)</label>
                                    <input type="file" name="pdf" class="form-control" />
                                </div>
                            </div>
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Tanggal dan jam input:</label>
                                    <div class="mb-0">
                                        <flat-pickr v-model="date2"
                                            :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                                            class="form-control flatpickr active"></flat-pickr>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Kategori</label>
                                    <multiselect v-model="inputs['input3']" :options="options1" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Judul</label>
                                    <input type="text" name="judul" class="form-control" placeholder="Masukkan judul" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Deskripsi</label>
                                    <input type="text" name="deskripsi" class="form-control"
                                        placeholder="Beri deskripsi" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Status</label>
                                    <multiselect v-model="inputs2['input3']" :options="options2" :searchable="true"
                                        placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                            </div>

                            <div class="submit">
                                <input type="submit" value="Simpan" class="btn btn-submit mt-3" />
                                <router-link to="/manage-kontent" @click="toggleMobileMenu"
                                    class="btn btn-kembali mt-3">
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
        code_arr.value = code_arr.value.filter((d) => d != name);
    } else {
        code_arr.value.push(name);
    }
};

const options1 = ref(['Penyakit udang', 'Cara pengecekan kondisi air', 'Cara pengecekan kesehatan udang']);
const inputs = ref({
    input1: [],
    input2: [],
    input3: [],
});

const options2 = ref(['Aktif', 'Tidak Aktif']);
const inputs2 = ref({
    input1: [],
    input2: [],
});

const change_file = (event) => {
    selected_file.value = URL.createObjectURL(event.target.files[0]);
};
</script>
