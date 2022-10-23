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
                                    <h4>Tambah Data User</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="form-vertical" action="#">
                                <div class="box-wrap">
                                    <div class="form-group">
                                        <label class="control-label">Photo:</label>
                                        <div class="custom-file-container">
                                            <div class="invoice-logo">
                                                <div class="upload pe-md-5">
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
                                                        <div class="mt-2">Click to Upload Picture</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-wrap">
                                    <div class="form-group">
                                        <label class="control-label">Nama</label>
                                        <input type="text" name="name" class="form-control" placeholder="Masukkan Nama" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Jabatan</label>
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
                                    <div class="form-group">
                                        <label for="ph-number">No Hp</label>
                                        <input type="text" id="ph-number" class="form-control" v-maska="'#############'" placeholder="Masukan No Hp" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Password</label>
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <svg
                                                    @click="set_pwd_type"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    id="toggle-password"
                                                    class="feather feather-eye"
                                                >
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </div>
                                            <input :type="pwd_type" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Email</label>
                                        <div class="input-group">
                                            <div class="input-group-text">@</div>
                                            <input type="email" name="email" class="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Tanggal Lahir:</label>
                                        <div class="mb-0">
                                            <flat-pickr v-model="date1" class="form-control flatpickr active"> </flat-pickr>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Jenis Kelamin</label>
                                        <multiselect
                                            v-model="inputs['input2']"
                                            :options="options2"
                                            :searchable="true"
                                            placeholder="Choose..."
                                            selected-label=""
                                            select-label=""
                                            deselect-label=""
                                        ></multiselect>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Status Pernikahan</label>
                                        <multiselect
                                            v-model="inputs['input3']"
                                            :options="options3"
                                            :searchable="true"
                                            placeholder="Choose..."
                                            selected-label=""
                                            select-label=""
                                            deselect-label=""
                                        ></multiselect>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Alamat Rumah</label>
                                        <input type="text" name="alamat_rumah" class="form-control" placeholder="Masukan Alamat Rumah" />
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Tanggal Bergabung:</label>
                                        <div class="mb-0">
                                            <flat-pickr v-model="date1" class="form-control flatpickr active"> </flat-pickr>
                                        </div>
                                    </div>
                                </div>

                                <div class="box-wrap">
                                    <h6 class="col-xl-12 col-md-12 col-sm-12 col-12 mt-3 mb-2"></h6>
                                    <div class="form-group">
                                        <label class="control-label">Access Right:</label>
                                        <multiselect
                                            v-model="inputs['input6']"
                                            :options="options6"
                                            :searchable="true"
                                            placeholder="Choose..."
                                            selected-label=""
                                            select-label=""
                                            deselect-label=""
                                        ></multiselect>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Team Tambak</label>
                                        <multiselect
                                            v-model="inputs['input5']"
                                            :options="options5"
                                            :searchable="true"
                                            placeholder="Choose..."
                                            selected-label=""
                                            select-label=""
                                            deselect-label=""
                                        ></multiselect>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Status</label>
                                        <multiselect
                                            v-model="inputs['input4']"
                                            :options="options4"
                                            :searchable="true"
                                            placeholder="Choose..."
                                            selected-label=""
                                            select-label=""
                                            deselect-label=""
                                        ></multiselect>
                                    </div>
                                </div>

                                <div class="submit">
                                    <input type="submit" value="Simpan" class="btn btn-submit mt-3" />
                                    <router-link to="/manage-user" @click="toggleMobileMenu" class="btn btn-kembali mt-3"> Kembali</router-link>
                                </div>
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

    const pwd_type = ref('password');

    const set_pwd_type = () => {
        if (pwd_type.value === 'password') {
            pwd_type.value = 'text';
        } else {
            pwd_type.value = 'password';
        }
    };
    const code_arr = ref([]);
    const selected_file = ref(null);

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const options1 = ref(['Manager', 'Kepala teknisi', 'Kepala laboratorium', 'Teknisi', 'Laboratorium', 'Feeder', 'Mekanikal elektrika', 'Admin', 'Security']);
    const inputs = ref({
        input1: [],
        input2: [],
        input3: [],
        input4: [],
        input5: [],
        input6: [],
    });
    const options2 = ref(['Laki Laki', 'Perempuan']);
    const options3 = ref(['Menikah', 'Belum menikah']);
    const options4 = ref(['Aktif', 'Tidak aktif']);
    const options5 = ref(['Bandung', 'Bali', 'Lombok', 'Lampung']);
    const options6 = ref(['Yes', 'No']);

    const change_file = (event) => {
        selected_file.value = URL.createObjectURL(event.target.files[0]);
    };
</script>
