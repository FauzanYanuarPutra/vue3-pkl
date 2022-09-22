<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Alat</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="manageAlat" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Manage Alat</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="form-group">
                                <label class="control-label">Kategori Alat:</label>
                                <input type="text" name="kategori_alat" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Brand:</label>
                                <input type="text" name="brand" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Tipe / Model:</label>
                                <multiselect
                                    v-model="inputs['input3']"
                                    :options="options1"
                                    :searchable="true"
                                    placeholder="Choose..."
                                    selected-label=""
                                    select-label=""
                                    deselect-label=""
                                ></multiselect>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Kegunaan:</label>
                                <input type="text" name="kegunaan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Keterangan:</label>
                                <input type="text" name="keterangan" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah unit:</label>
                                <input type="text" name="jumlah_unit" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Photo:</label>
                                <div class="custom-file-container">
                                    <label class="file-button">
                                        <input type="file" class="" multiple />
                                        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Internal ID:</label>
                                <input type="number" placeholder="0.00" required name="price" min="0" value="0" step="0.01" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label class="control-label">Perkiraan bulan dan tahun beli:</label>
                                <div class="form-group mb-0">
                                    <flat-pickr v-model="date1" class="form-control flatpickr active">s</flat-pickr>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Tenaga(HP):</label>
                                <input type="number" name="tenaga_hp" class="form-control" />
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

    const options1 = ref(['pompa', 'Kincir', 'Auto feeder', 'Alat laboratorium dan Pengukuran']);
    const inputs = ref({
        input1: [],
        input2: [],
        input3: [],
        input4: [],
        input5: [],
    });
</script>