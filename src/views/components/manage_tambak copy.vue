<template>
    <div class="container">
        <div id="flActionButtons" class="col-lg-12">
            <div class="statbox panel box box-shadow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                            <h4>Manage Tombak</h4>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    <form class="form-vertical" action="#">
                        <div class="form-group">
                            <label class="control-label">Nama Tambak:</label>
                            <input type="text" name="nama_tambak" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Alamat:</label>
                            <input type="text" name="alamat" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Nama Area:</label>
                            <input type="text" name="nama_area" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label class="control-label">Provinsi:</label>
                            <input type="text" name="provinsi" class="form-control" />
                        </div>

                        <div class="container">
                            <div class="nav sidenav">
                                <div class="sidenav-content" v-scroll-spy-active v-scroll-spy-link>
                                    <a href="#fuSingleFile" class="nav-link">Single File</a>
                                    <a href="#fuMultipleFile" class="nav-link">Multiple File</a>
                                </div>
                            </div>

                            <div class="row layout-top-spacing">
                                <div class="col-12">
                                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-bell"
                                        >
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg>
                                        Documentation:
                                        <a target="_blank" href="https://www.npmjs.com/package/file-upload-with-preview" class="text-info"> https://www.npmjs.com/package/file-upload-with-preview </a>
                                    </div>
                                </div>
                            </div>

                            <div v-scroll-spy class="row layout-top-spacing">
                                <div id="fuMultipleFile" class="col-lg-12 layout-spacing">
                                    <div class="statbox panel box box-shadow">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                    <h4>Multiple File Upload</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <div class="custom-file-container" data-upload-id="mySecondImage">
                                                <label>Upload (Allow Multiple) <a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image">x</a></label>
                                                <label class="custom-file-container__custom-file">
                                                    <input type="file" class="custom-file-container__custom-file__custom-file-input" multiple />
                                                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                                    <span class="custom-file-container__custom-file__custom-file-control"></span>
                                                </label>
                                                <div class="custom-file-container__image-preview"></div>
                                            </div>

                                            <div class="code-section-container show-code">
                                                <button type="button" class="btn btn-default toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></button>

                                                <div v-if="code_arr.includes('code2')" class="code-section text-start">
                                                    <highlight>
                                                        <pre>
&lt;!-- Multiple File Upload --&gt;
==========
   HTML
==========
&lt;div class="custom-file-container" data-upload-id="mySecondImage"&gt;
    &lt;label&gt;Upload (Allow Multiple) &lt;a href="javascript:void(0)" class="custom-file-container__image-clear" title="Clear Image"&gt;x&lt;/a&gt;&lt;/label&gt;
    &lt;label class="custom-file-container__custom-file" &gt;
        &lt;input type="file" class="custom-file-container__custom-file__custom-file-input" multiple&gt;
        &lt;input type="hidden" name="MAX_FILE_SIZE" value="10485760" /&gt;
        &lt;span class="custom-file-container__custom-file__custom-file-control"&gt;&lt;/span&gt;
    &lt;/label&gt;
    &lt;div class="custom-file-container__image-preview"&gt;&lt;/div&gt;
&lt;/div&gt;

==========
   CODE
==========
new FileUploadWithPreview('myFirstImage', {
    images: {
        baseImage: require('@/assets/images/file-preview.png'),
        backgroundImage:''
    },
});
</pre
                                                        >
                                                    </highlight>
                                                </div>
                                            </div>
                                        </div>
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
</template>

<style scoped>
    .text-center {
        align-items: center;
        margin: auto;
    }
</style>

<script setup>
    import { onMounted, ref } from 'vue';

    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/forms/file-upload-with-preview.min.css';
    import highlight from '@/components/plugins/highlight.vue';
    import FileUploadWithPreview from 'file-upload-with-preview';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'File Upload' });

    const code_arr = ref([]);

    onMounted(() => {
        initTooltip();

        //single file upload
        new FileUploadWithPreview('myFirstImage', {
            images: {
                baseImage: require('@/assets/images/file-preview.png'),
                backgroundImage: '',
            },
        });

        //multiple file upload
        new FileUploadWithPreview('mySecondImage', {
            images: {
                baseImage: require('@/assets/images/file-preview.png'),
                backgroundImage: '',
            },
        });
    });

    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };

    const initTooltip = () => {
        setTimeout(() => {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map((tooltipTriggerEl) => {
                return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        });
    };
</script>