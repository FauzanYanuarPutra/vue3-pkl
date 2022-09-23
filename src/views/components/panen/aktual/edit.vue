<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Aktual</span></li>
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
                                <h4>Aktual</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <form class="form-vertical" action="#">
                            <div class="form-group">
                                <label class="control-label">ABW (gram)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Size</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Total biomassa (Kg)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Total populasi (ekor)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Total kebutuhan pakan (Kg)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">FCR</label>
                                <input type="number" placeholder="0.00" required name="price" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">SR (%)</label>
                                <input type="number" placeholder="0.00" required name="price" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Produktivity (Ton / Ha)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah udang fresh (pcs)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah udang molting (pcs)</label>
                                <input type="number" name="" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Jumlah udang broken (pcs)</label>
                                <input type="number" name="" class="form-control" />
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
    import '@/assets/sass/apps/invoice-add.scss';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Invoice Add' });

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
