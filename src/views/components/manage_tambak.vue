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

                        

                        <div class="form-group">
                            <label class="control-label">Photo:</label>
                            <div class="custom-file-container" data-upload-id="mySecondImage">
                                <label class="custom-file-container__custom-file">
                                    <input type="file" class="custom-file-container__custom-file__custom-file-input" multiple />
                                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                    <span class="custom-file-container__custom-file__custom-file-control"></span>
                                </label>
                                <div class="custom-file-container__image-preview"></div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label">Map:</label>
                            <input type="text" name="map" class="form-control" />
                        </div>

                        <div class="form-group">
                            <label class="control-label">Status:</label>
                            <input type="text" name="status" class="form-control" />
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
    import { ref } from 'vue';
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    import { useMeta } from '@/composables/use-meta';
    useMeta({ title: 'Forms' });

    const code_arr = ref([]);
    const toggleCode = (name) => {
        if (code_arr.value.includes(name)) {
            code_arr.value = code_arr.value.filter((d) => d != name);
        } else {
            code_arr.value.push(name);
        }
    };
</script>