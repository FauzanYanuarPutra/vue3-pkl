<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Siklus Budidaya Pakan</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="siklusBudidayaPakan" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h3>Siklus Budidaya Pakan</h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="wrap">
                                    <div class="form-group">
                                        <label class="control-label">Nama Kolam</label>
                                        <input type="text" name="nama_kolam" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Tanggal dan jam input</label>
                                        <div class="form-group mb-0">
                                            <flat-pickr v-model="date1" class="form-control flatpickr active"></flat-pickr>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="select" class="col-form-label">Merek Pakan</label>
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
                                        <label class="control-label">No. Pakan</label>
                                        <input type="text" name="pakan" class="form-control" />
                                    </div>
                                </div>
                                <div class="wrap">
                                    <div class="form-group">
                                        <label for="select" class="col-form-label">No. Auto Feeder</label>
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
                                        <label class="control-label">Pemberian pakan (kg)</label>
                                        <input type="number" name="pemberian_pakan" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Pemberian pakan kumulative (Kg)</label>
                                        <input type="number" name="kumulative" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">FCR (Food conversion rate)</label>
                                        <input type="number" name="fcr" class="form-control" />
                                    </div>
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

    const options1 = ref(['pilihan 1', 'pilihan 2', 'pilihan 3', 'pilihan 4']);
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
