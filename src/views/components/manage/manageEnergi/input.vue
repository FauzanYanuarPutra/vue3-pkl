<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage Energi</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="container">
            <div id="manageEnergi" class="col-lg-12">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Manage Energi</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                
                                    <div class="form-group">
                                        <label class="control-label">Nama Tambak:</label>
                                        <multiselect v-model="inputs['input1']" :options="tambak" :searchable="true"
                                            placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>

                                </div>

                                    <div class="form-group">
                                        <label class="control-label">Tanggal dan Jam Input:</label>
                                        <div class=" mb-0">
                                            <flat-pickr v-model="date1" class="form-control flatpickr active">
                                            </flat-pickr>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Bulan:</label>
                                        <multiselect v-model="inputs['input2']" :options="bulan" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Sumber Energi:</label>
                                        <multiselect v-model="inputs['input3']" :options="sumberEnergi" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                    </div>
                                

                                    
                            </div>

                            <div class="box-wrap">

                            <div class="col-xl-12 col-md-12 col-sm-12 col-12 mb-4 mt-5">
                                <h6>Jika Sumber Energi Listrik</h6>
                            </div>
                            
                                
                                    <div class="form-group">
                                        <label class="control-label">Penggunaan Listrik (KwH):</label>
                                        <input type="text" name="id" class="form-control" />
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Kategori Konsumsi listrik:</label>
                                        <multiselect v-model="inputs['input4']" :options="konsumsiListrik" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                        </multiselect>
                                    </div>

                                    
                            </div>

                            <div class="box-wrap">

                            <div class="col-xl-12 col-md-12 col-sm-12 col-12 mb-4 mt-5">
                                <h6>Jika SumberGenset</h6>
                            </div>
                            
                                
                                    <div class="form-group">
                                        <label class="control-label">Durasi menyala (menit):</label>
                                        <input type="text" name="id" class="form-control" />
                                    </div>

                                     <div class="form-group">
                                        <label class="control-label">Konsumsi BBM (liter):</label>
                                        <input type="text" name="id" class="form-control" />
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

    const options1 = ref(['Kincir', 'Pompa', 'Autofeeder', 'Auxiliaries']);
const tambak = ref(['Tambak b1', 'Tambak b2']);
const sumberEnergi = ref(['Listrik', 'Genset']);


const bulan = ref(['Bulan']);
    const konsumsiListrik = ref(['konsumsi listrik']);
    

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
