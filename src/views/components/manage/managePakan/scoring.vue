<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Scoring Pakan</span></li>
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
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Scoring Pakan</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="form-vertical" action="#">
                                <div class="box-wrap">
                                    <div class="form-group">
                                        <label class="control-label">Water stability:</label>
                                        <input type="text" name="" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Atraktan:</label>
                                        <input type="number" name="" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Protein untuk pertumbuhan:</label>
                                        <input type="text" name="" class="form-control" />
                                    </div>
                                    <div class="form-group w-100">
                                        <label class="control-label">Keterangan:</label>
                                        <textarea name="Keterangan" id="" cols="10" rows="10" class="form-control"></textarea>
                                    </div>
                                </div>

                                <input type="submit" value="Submit" class="btn mt-3" />
                            </form>
                        </div>
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

    const options1 = ref(['#', '#']);

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
        input10: [],
        input11: [],
        input12: [],
        input13: [],
        input14: [],
        input15: [],
        input16: [],
        input17: [],
    });

    const options2 = ref(['a) ≥9.1 (score 15)', 'b) 8.1-9.0 (score 10)', 'c) ≤8.0 (score 5)']);

    const options3 = ref(['a) 0 - 0.8 (score 15)', 'b) 0.9-1.3 (score 12)', 'c) ≥1.4 (score 8)']);

    const options4 = ref(['a) ≥90% (score 10)', 'b) 80-89% (score 8)', 'c) 70-79% (score 4', 'd) ≤69%  (score 2)']);

    const options5 = ref(['a) 0-10% (score 10)', 'b) 11-25% (score 8', 'c) 26-49% (score 4)', 'd) ≥50% (score 0']);

    const options6 = ref(['a) ≥95% (score 10)', 'b) 90-94% (score 8)', 'c) ≤89% (score 4)']);

    const options7 = ref(['a) 0-25% (score 10)', 'b) 26-50% (score 5', 'c) 50% (score 0)']);

    const options8 = ref(['a) ≥95% (score 10)', 'b) 90-94% (score 8)', 'c) ≤89% (score 4)']);

    const options9 = ref(['a. (-) (score 10)', 'b. (+) (score 10)']);

    const options10 = ref(['a) ≤102 cfu/ml (score 10)', 'b) ≥103 cfu/ml (score 5)']);

    const options11 = ref(['a) 7.0 - 7.4 (score 10)', 'b) 7.5 - 8.9 (score 5)', 'c) >8.0 (score 0']);

    const options12 = ref(['a) <3 (score10)', 'b) 3 - 5 (score 5)', 'c) >5 (score 0)']);

    const options13 = ref(['a) >14 (score 10)', 'b) 7 - 14 (score 5)', 'c) <7 (score 0']);

    const options14 = ref(['a) 22 - 24 (score 10)', 'b) 25 - 27 (score 5)', 'c) >27 (score 0)']);

    const options15 = ref(['a) 0 - 2 (score 10)', 'b) 2 - 3 (score 5)', 'c) >3 (score 0)']);

    const options16 = ref(['a) 0% (score 10)', 'b) 10 - 30% (score 5', 'c) >30% (score 0']);

    const options17 = ref(['Aktive', 'Tidak Aktive']);

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };
</script>
