<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Interval pengecekan kolam
                                        treatment</span>
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
                                <h3>Interval Pengukuran</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <h4>Interval pengecekan kolam treatment</h4><br>
                            <div class="box-wrap">
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Pro+ Air (Liter)</label>
                                        <input type="number" name="pro_air" class="form-control"
                                            placeholder="Input setiap hari" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pro+ Oral (ml)</label>
                                        <input type="number" name="pro_oral" class="form-control"
                                            placeholder="Input setiap hari" />
                                    </div>
                                </div>

                                <div class="wrap form-group">
                                    <label class="control-label">Mineral (Kg)</label>
                                    <input type="number" name="mineral_kg" class="form-control"
                                        placeholder="Input setiap hari" />
                                </div>
                            </div>

                            <h4 class="mt-5">Siklus budidaya (persiapan)</h4><br>
                            <div class="box-wrap">
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Pengeringan dasar tambak</label>
                                        <input type="number" name="pengeringan_dasar" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pembuangan sedimen organik</label>
                                        <input type="number" name="pembuangan_sedimen" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Sterilisasi tambak</label>
                                        <input type="number" name="sterilisasi_tambak" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pengisian air dan sterilisasi air tambak</label>
                                        <input type="number" name="pengisian_air" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pengapuran</label>
                                        <input type="number" name="pengapuran" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Pemupukan dan pemberian mineral</label>
                                        <input type="number" name="pemupukan" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pertumbuhan plankton</label>
                                        <input type="number" name="pertumbuhan_plankton" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pertumbuhan patogen atau yang merugikan</label>
                                        <input type="number" name="pertumbuhan_patogen" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Probiotik</label>
                                        <input type="number" name="probiotik" class="form-control"
                                            placeholder="Input hanya 1 kali persiklus" />
                                    </div>
                                </div>
                            </div>

                            <h4 class="mt-5">Siklus budidaya (Benur & DOC)</h4><br>
                            <div class="box-wrap">
                                <div class="wrap form-group">
                                    <label>Siklus budidaya (Benur & DOC)</label>
                                    <input type="number" name="siklus_benur" class="form-control"
                                        placeholder="Input hanya 1 kali persiklus" />
                                </div>
                            </div>

                            <h4 class="mt-5">Siklus budidaya (Air)</h4><br>
                            <div class="box-wrap">
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Tinggi Air (cm)</label>
                                        <input type="number" name="tinggi_air" class="form-control"
                                            placeholder="Input setiap hari (Pagi dan sore)" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Kecerahan (cm)</label>
                                        <input type="number" name="kecerahan" class="form-control"
                                            placeholder="Input setiap hari (Pagi dan sore)" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Warna</label>
                                        <input type="number" name="warna" class="form-control"
                                            placeholder="Input setiap hari (Pagi dan sore)" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">pH</label>
                                        <input type="number" name="ph" class="form-control"
                                            placeholder="Input setiap hari (Pagi dan sore)" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Suhu air (celcius)</label>
                                        <input type="number" name="suhu_air" class="form-control"
                                            placeholder="Input setiap 3 hari sekali (Subuh dan malam)" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">DO (ppm)</label>
                                        <input type="number" name="do" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Salinitas (%)</label>
                                        <input type="number" name="salinitas" class="form-control"
                                            placeholder="Input setiap 3 hari sekali" />
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Alkalinitas (ppm)</label>
                                        <input type="number" name="alkalinitas" class="form-control"
                                            placeholder="Input setiap 3 hari sekali" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">TOM</label>
                                        <input type="number" name="tom" class="form-control"
                                            placeholder="Input setiap 3 hari sekali" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Analisa kimia</label>
                                        <input type="number" name="analisa_kimia" class="form-control"
                                            placeholder="Input setiap 3 hari sekali" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Fitoplankton</label>
                                        <input type="number" name="fitoplankton" class="form-control"
                                            placeholder="Input setiap 3 hari sekali" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Vibrio</label>
                                        <input type="number" name="vibrio" class="form-control"
                                            placeholder="Input setiap 5 hari sekali" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">TBC</label>
                                        <input type="number" name="tbc" class="form-control"
                                            placeholder="Input setiap 5 hari sekali" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Hardness</label>
                                        <input type="number" name="hardness" class="form-control"
                                            placeholder="Input setiap 10 hari sekali" />
                                    </div>
                                </div>

                            </div>

                            <h4 class="mt-5">Siklus budidaya (Udang)</h4><br>
                            <div class="box-wrap">
                                <div class="wrap form-group">
                                    <label>Siklus budidaya (Udang)</label>
                                    <input type="number" name="siklus_udang" class="form-control"
                                        placeholder="Input setiap hari" />
                                </div>
                            </div>

                            <h4 class="mt-5">Siklus budidaya (Pakan)</h4><br>
                            <div class="box-wrap">
                                <div class=" wrap form-group">
                                    <label>Siklus budidaya (Pakan)</label>
                                    <input type="number" name="siklus_pakan" class="form-control"
                                        placeholder="Input setiap hari" />
                                </div>
                            </div>

                            <h4 class="mt-5">Kesehatan Benur</h4><br>
                            <div class="box-wrap">
                                <div class="wrap form-group">
                                    <label>Kesehatan Benur</label>
                                    <input type="number" name="kesehatan_benur" class="form-control"
                                        placeholder="Input hanya 1 kali persiklus" />
                                </div>
                            </div>

                            <h4 class="mt-5">Kesehatan udang</h4><br>
                            <div class="box-wrap">
                                <div class="wrap form-group">
                                    <label>Kesehatan Udang</label>
                                    <input type="number" name="kesehatan_udang" class="form-control"
                                        placeholder="Input setiap 10 hari sekali" />
                                </div>
                            </div>

                            <h4 class="mt-5">Panen</h4><br>
                            <div class="box-wrap">
                                <div class="wrap form-group">
                                    <label>Panen</label>
                                    <input type="number" name="panen" class="form-control"
                                        placeholder="Input hanya 1 kali persiklus" />
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