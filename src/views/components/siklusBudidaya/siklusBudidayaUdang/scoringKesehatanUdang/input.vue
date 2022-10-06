<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Pemupukan Dan
                                        Pemberian
                                        Mineral</span></li>
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
                                <h3>Input Pemupukan Dan Pemberian Mineral</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap w-100">
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
                                    <div class="form-group">
                                    <label class="control-label">Tanggal Input:</label>
                                    <div class=" mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active">
                                        </flat-pickr>
                                    </div>
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Hepatopancreas</h6>
                                <div class="box-wrap w-100">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview text-center border" @click="$refs.fl_profile.click()">
                                                        <div class="my-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Picture/Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label class="control-label">Necrosis:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Wringkle:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Gregarin:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Lipid:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Microfili:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Kosong:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>

                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Total Vabrio Count</h6>

                                <div class="form-group">
                                    <label class="control-label">Kuning:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Hijau:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nyala:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Usus</h6>
                                <div class="box-wrap w-100">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview text-center border" @click="$refs.fl_profile.click()">
                                                        <div class="my-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Picture/Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label class="control-label">Warna:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Gregarin:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Insang</h6>
                                <div class="box-wrap w-100">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview text-center border" @click="$refs.fl_profile.click()">
                                                        <div class="my-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Picture/Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label class="control-label">Necrosis:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Ektoparasit:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Kaki</h6>
                                <div class="box-wrap w-100">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview text-center border" @click="$refs.fl_profile.click()">
                                                        <div class="my-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Picture/Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label class="control-label">Necrosis:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Ektoparasit:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Ekor</h6>
                                <div class="box-wrap w-100">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
                                                    <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                    <img
                                                        v-if="selected_file"
                                                        :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')"
                                                        alt="profile"
                                                        class="profile-preview"
                                                        @click="$refs.fl_profile.click()"
                                                    />
                                                    <div v-else class="profile-preview upload-preview text-center border" @click="$refs.fl_profile.click()">
                                                        <div class="my-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="50"
                                                                height="50"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                class="feather feather-upload-cloud"
                                                            >
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                <polyline points="16 16 12 12 8 16"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div class="mt-2">Click to Upload Picture/Logo</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div class="form-group">
                                    <label class="control-label">Necrosis:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Ektoparasit:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap w-100">
                                <div class="form-group">
                                    <label class="control-label">Scoring:</label>
                                    <input type="number" name="lama_hari" class="form-control" />
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