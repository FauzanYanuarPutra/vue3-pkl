<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Parameter Kimia</span></li>
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
                                <h4>Input Parameter Kimia</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="box-wrap">
                                <div class="form-group">
                                    <label class="control-label">Nama Kolam:</label>
                                    <multiselect v-model="inputs['input1']" :options="options1" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Tanggal input:</label>
                                    <div class="mb-0">
                                        <flat-pickr v-model="date1" class="form-control flatpickr active"> </flat-pickr>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Nama Tambak:</label>
                                    <multiselect v-model="inputs['input2']" :options="options2" :searchable="true" placeholder="Choose..." selected-label="" select-label="" deselect-label="">
                                    </multiselect>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">pH:</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Salinitas(%):</label>
                                    <input type="number" name="salinitas" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">DO (ppm):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Alkalinitas (ppm)</h6>
                                <div class="form-group">
                                    <label class="control-label">CO3:</label>
                                    <input type="number" name="HCO3" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">HCO3:</label>
                                    <input type="number" name="HC03" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Total:</label>
                                    <input type="number" name="total" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-4 mb-1"></h6>
                                <div class="form-group">
                                    <label class="control-label">Ammonium-NH4 (mg/L):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nitrit-NO2 (ppm):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Nitrat-NO3 (mg/L):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Phosphate-PO4 (mg/L):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Iron-Fe (mg/L):</label>
                                    <input type="number" placeholder="0.00" required name="price" class="form-control" />
                                </div>
                            </div>

                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-4">Hardness</h6>
                                <div class="form-group">
                                    <label class="control-label">Magnesium-Mg (mg/L):</label>
                                    <input type="number" name="" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Calium-Ca (mg/L):</label>
                                    <input type="number" name="" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Total:</label>
                                    <input type="number" name="" class="form-control" />
                                </div>
                            </div>
                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-5 mb-2"></h6>
                                <div class="form-group">
                                    <label class="control-label">Residual Chlorin-Cl:</label>
                                    <input type="number" name="" class="form-control" />
                                </div>
                            </div>
                            <div class="box-wrap">
                                <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-1 mb-1"></h6>
                                <div class="form-group">
                                    <label class="control-label">Redox (mV):</label>
                                    <input type="number" name="" class="form-control" />
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

    const options1 = ref(['Tambak a', 'Tambak b']);
    const inputs = ref({
        input1: [],
        input2: [],
        input3: [],
        input4: [],
        input5: [],
    });
    const options2 = ref(['Kolam B1', 'Kolam B2']);
    const options3 = ref(['Parsial', 'Full']);
    const options4 = ref(['Aktiv', 'Tidak aktiv']);

    const code_arr = ref([]);
    const form1 = ref({ name: '' });
    const is_submit_form1 = ref(false);
    const form2 = ref({ email: '' });
    const is_submit_form2 = ref(false);
    const form3 = ref({ select: '' });
    const is_submit_form3 = ref(false);
    const form4 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
    const is_submit_form4 = ref(false);
    const form5 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
    const is_submit_form5 = ref(false);
    const form6 = ref({ first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false });
    const is_submit_form6 = ref(false);

    const items = ref([]);
    const selected_file = ref(null);
    const params = ref({
        title: '',
        invoice_no: '',
        from: { name: '', email: '', address: '', phone: '' },
        to: { name: '', email: '', address: '', phone: '' },

        invoice_date: '',
        due_date: '',
        bank_info: { no: '', name: '', swift_code: '', country: '' },
        notes: '',
    });
    const currency_list = ref([]);
    const selected_currency = ref({ key: 'USD - US Dollar', thumb: 'flags/en.png' });
    const tax_type_list = ref([]);
    const selected_tax_type = ref({ key: 'None', value: null });
    const discount_list = ref([]);
    const selected_discount = ref({ key: 'None', value: null, type: '' });

    onMounted(() => {
        //set default data
        items.value.push({ id: 1, title: '', description: '', rate: 0, quantity: 0, amount: 100, is_tax: false });

        let dt = new Date();
        params.value.invoice_date = JSON.parse(JSON.stringify(dt));
        dt.setDate(dt.getDate() + 5);
        params.value.due_date = dt;

        //currency list
        currency_list.value = [
            { key: 'USD - US Dollar', thumb: 'flags/en.png' },
            { key: 'GBP - British Pound', thumb: 'flags/gbp.png' },
            { key: 'IDR - Indonesian Rupiah', thumb: 'flags/idr.png' },
            { key: 'INR - Indian Rupee', thumb: 'flags/inr.png' },
            { key: 'BRL - Brazilian Real', thumb: 'flags/brl.png' },
            { key: 'EUR - Germany (Euro)', thumb: 'flags/de.png' },
            { key: 'TRY - Turkish Lira', thumb: 'flags/tr.png' },
        ];

        //tax type list
        tax_type_list.value = [
            { key: 'Deducted', value: 10 },
            { key: 'Per Item', value: 5 },
            { key: 'On Total', value: 25 },
            { key: 'None', value: null },
        ];

        //discount list
        discount_list.value = [
            { key: 'Percent', value: 10, type: 'percent' },
            { key: 'Flat Amount', value: 25, type: 'amount' },
            { key: 'None', value: null, type: '' },
        ];
    });

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };

    const add_item = () => {
        let max_id = 0;
        if (items.value && items.value.length) {
            max_id = items.value.reduce((max, character) => (character.id > max ? character.id : max), items.value[0].id);
        }
        items.value.push({ id: max_id + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0, is_tax: false });
    };

    const remove_item = (item) => {
        items.value = items.value.filter((d) => d.id != item.id);
    };
</script>
