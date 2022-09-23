<template>
    <div class="layout-px-spacing dash_1 mx-2 my-3">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Manage User</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="layout-px-spacing">
            <div v-scroll-spy class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Management User</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="form-vertical" action="#">
                                <div class="form-group">
                                    <label class="control-label">Member ID:</label>
                                    <input type="id" name="member_id" class="form-control" />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Name</label>
                                    <input type="text" name="name" class="form-control" />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Status</label>
                                    <multiselect
                                        v-model="inputs['input1']"
                                        :options="options1"
                                        :searchable="true"
                                        placeholder="Choose..."
                                        selected-label=""
                                        select-label=""
                                        deselect-label=""
                                    ></multiselect>
                                </div>

                                <div class="mb-3">
                                    <label for="select" class="col-form-label">Jabatan</label>
                                    <div>
                                        <select id="select" class="form-select">
                                            <option value="1">Manager & kepala teknisi</option>
                                            <option value="2">Manager</option>
                                            <option value="3">Kepala teknisi</option>
                                            <option value="4">Kepala laboratorium</option>
                                            <option value="5">Teknisi</option>
                                            <option value="6">Laboratorium</option>
                                            <option value="7">Feeder</option>
                                            <option value="8">Mekanikal elektrika</option>
                                            <option value="9">Admin</option>
                                            <option value="10">Security</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="ph-number">No hp</label>
                                    <input type="text" id="ph-number" class="form-control" v-maska="'(##) ###-###-####'" placeholder="(__) ___-___-____" />
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Password</label>
                                    <input type="password" class="form-control" id="sPassword" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Email</label>
                                    <div class="input-group">
                                        <div class="input-group-text">@</div>
                                        <input type="text" name="email" class="form-control" />
                                    </div>
                                </div>

                                <div class="row">
                                    <label for="fullName">Photo</label>
                                </div>

                                <div class="row">
                                    <div class="invoice-detail-title">
                                        <div class="invoice-logo">
                                            <div class="upload pe-md-4">
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
                                <div class="form-group">
                                    <label class="control-label">Tgl lahir</label>
                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                </div>

                                <div class="mb-3">
                                    <label for="select" class="col-form-label">Jenis Kelamin</label>
                                    <div>
                                        <select id="select" class="form-select">
                                            <option value="0">choose jenis kelamin</option>
                                            <option value="1">Laki Laki</option>
                                            <option value="2">Perempuan</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="select" class="col-form-label">Status</label>
                                    <div>
                                        <select id="select" class="form-select">
                                            <option value="0">choose status</option>
                                            <option value="1">Menikah</option>
                                            <option value="2">Belum menikah</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Alamat rumah</label>
                                    <input type="text" name="alamat_rumah" class="form-control" />
                                </div>
                                <div class="row">
                                    <label for="fullName">Tanggal bergabung</label>
                                </div>
                                <div class="form-group mb-4">
                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                </div>
                                <div class="mb-3">
                                    <label for="select" class="col-form-label">Status</label>
                                    <div>
                                        <select id="select" class="form-select">
                                            <option value="0">choose status</option>
                                            <option value="1">Aktiv</option>
                                            <option value="2">Tidak aktiv</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Supervisor</label>
                                    <input type="id" name="name" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Team tambak</label>
                                    <input type="id" name="name" class="form-control" />
                                </div>

                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <form>
                                            <div class="form-group">
                                                <label class="control-label">Access right</label>
                                                <input type="id" name="name" class="form-control" required />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Akses terakhir</label>

                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                </div>

                                <button type="submit" class="btn mt-2 btn-primary">Submit form</button>
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
    });

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };
</script>
