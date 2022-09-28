<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Parameter Kimia</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="parameterKimia" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Parameter Kimia</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                        <div class="box-wrap">
                            <div class="wrap">
                                <div class="form-group">
                                <label class="control-label">PH:</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">DO (ppm):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Salinitas (%):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Alkalinitas (ppm):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">CO3:</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">HC03:</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            
                                <div class="form-group">
                                <label class="control-label">Total:</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Ammonium-NH4 (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>
                                                        </div>

                        <div class="wrap">

                            <div class="form-group">
                                <label class="control-label">Nitrit-NO2 (ppm):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Nitrit-NO2 (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Phosphate-PO4 (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                        <div class="form-group">
                                <label class="control-label">Iron-Fe (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Magnesium-Mg (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Calium-Ca (mg/L):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Residual Chlorin-CI:</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Redox (mV):</label>
                                <div class="d-flex">
                                    <input type="number" class="form-control form-control-sm w-60 d-flex" placeholder="Min" />
                                    <input type="number" class="form-control form-control-sm w-60" placeholder="Max" />
                                </div>
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

    const options1 = ref(['Kincir', 'Pompa', 'Autofeeder', 'Auxiliaries']);
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