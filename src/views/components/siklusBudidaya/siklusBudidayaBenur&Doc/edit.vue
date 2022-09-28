<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya (Benur & DOC)</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="siklusBudidayaBenur&DOC" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Siklus Budidaya (Benur & DOC)</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="wrap">
                                    <div class="form-group">
                                <label class="control-label">Nama Kolam:</label>
                                <input type="text" name="nama_kolam" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Tanggal Tebar Benur:</label>
                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date1" class="form-control flatpickr active">s</flat-pickr>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Asal Benur:</label>
                                <input type="text" name="asal_benur" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Umur benur (Hari):</label>
                                <input type="number" name="umur_benur" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Ukuran Rataan (mm):</label>
                                <input type="number" name="ukuran_rataan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Berat Rataan (gram):</label>
                                <input type="number" name="berat_rataan" class="form-control" />
                            </div>
                                </div>

                                <div class="wrap">
                                     <div class="form-group">
                                <label class="control-label">Jumlah Benih (ekor):</label>
                                <input type="number" name="jumlah_benih" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Scoring Benur:</label>
                                <input type="number" name="scoring_benur" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Periode Siklus Ke:</label>
                                <input type="number" name="periode_siklus_ke" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Perkiraan DOC (hari):</label>
                                <input type="number" name="perkiraan_doc" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Density Per Square Meter:</label>
                                <input type="number" name="density_per_square_meter" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Total Bio Mass:</label>
                                <input type="number" name="total_bio_mass" class="form-control" />
                            </div>
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