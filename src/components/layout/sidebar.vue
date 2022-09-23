<template>
    <!--  BEGIN SIDEBAR  -->
    <div class="sidebar-wrapper sidebar-theme">
        <nav ref="menu" id="sidebar">
            <div class="shadow-bottom"></div>

            <perfect-scrollbar class="list-unstyled menu-categories" tag="ul" :options="{ wheelSpeed: 0.5, swipeEasing: !0, minScrollbarLength: 40, maxScrollbarLength: 3000, suppressScrollX: true }">
                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard" aria-controls="dashboard" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-home"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>{{ $t('dashboard') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>

                    <ul id="dashboard" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/" @click="toggleMobileMenu">
                                {{ $t('sales') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/index2" @click="toggleMobileMenu">
                                {{ $t('analytics') }}
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#idealParameter" aria-controls="idealParameter" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Ideal Parameter') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="idealParameter" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <a class="dropdown-toggle" href="#appInvoice" data-bs-parent="#idealParameter" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                Kondisi Air
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
                                    class="feather feather-chevron-right"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>

                            <ul id="appInvoice" class="mx-3 collapse list-unstyled sub-submenu">
                                <li>
                                    <router-link to="/parameter-fisika" @click="toggleMobileMenu">Parameter Fisika </router-link>
                                </li>
                                <li>
                                    <router-link to="/parameter-kimia" @click="toggleMobileMenu">Pamareter Kimia </router-link>
                                </li>
                                <li>
                                    <a class="dropdown-toggle" href="#parameterBiologi" data-bs-parent="#parameterBiologi" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                        Parameter Biologi
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="13"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-chevron-right"
                                        >
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </a>

                                    <ul id="parameterBiologi" class="mx-3 collapse list-unstyled sub-submenu">
                                        <li>
                                            <router-link to="/parameter-biologi-fitoplankton" @click="toggleMobileMenu">Filoplankton </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/parameter-biologi-vibrioTCBS" @click="toggleMobileMenu">Vibrio TCBS </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/belum" @click="toggleMobileMenu">Vibrio CHROMagar </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/ideal-parameter/pertumbuhan-udang" @click="toggleMobileMenu">Pertumbuhan Udang</router-link>
                        </li>
                        <li>
                            <router-link to="/ideal-parameter/konsumsi-pakan" @click="toggleMobileMenu">Komsumsi Pakan </router-link>
                        </li>
                        <li>
                            <router-link to="/ideal-parameter/benur" @click="toggleMobileMenu">Benur</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#intervalPengukuran" aria-controls="intervalPengukuran" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Interval Pengukuran') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="intervalPengukuran" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/interval-pengecekan/table" @click="toggleMobileMenu">Interval pengecekan kolam treatment </router-link>
                        </li>
                        <li>
                            <a class="dropdown-toggle" href="#budidaya" data-bs-parent="#budidaya" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                Siklus Budidaya
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
                                    class="feather feather-chevron-right"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>

                            <ul id="budidaya" class="collapse list-unstyled sub-submenu">
                                <li>
                                    <router-link to="/budidaya-persiapan/table" @click="toggleMobileMenu">Persiapan </router-link>
                                </li>
                                <li>
                                    <router-link to="/budidaya-benur/table" @click="toggleMobileMenu">Benur & DOC </router-link>
                                </li>
                                <li>
                                    <router-link to="/budidaya-air/table" @click="toggleMobileMenu">Air</router-link>
                                </li>
                                <li>
                                    <router-link to="/budidaya-udang/table" @click="toggleMobileMenu">Udang </router-link>
                                </li>
                                <li>
                                    <router-link to="/budidaya-pakan/table" @click="toggleMobileMenu">Pakan </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a class="dropdown-toggle" href="#kesehatan" data-bs-parent="#kesehatan" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                Kesehatan
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
                                    class="feather feather-chevron-right"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>
                            <ul id="kesehatan" class="collapse list-unstyled sub-submenu">
                                <li>
                                    <router-link to="/kesehatan-benur/table" @click="toggleMobileMenu">Benur </router-link>
                                </li>
                                <li>
                                    <router-link to="/kesehatan-udang/table" @click="toggleMobileMenu">Udang </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/panen/table" @click="toggleMobileMenu">Panen</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#manage" aria-controls="manage" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Manage') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="manage" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/manage-user" @click="toggleMobileMenu">User</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-alat" @click="toggleMobileMenu">Alat</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-energi" @click="toggleMobileMenu">Energi</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-tambak" @click="toggleMobileMenu">Tambak</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-kolam" @click="toggleMobileMenu">Kolam</router-link>
                        </li>
                        <li>
                            <router-link to="/saponin" @click="toggleMobileMenu">Saponin</router-link>
                        </li>
                        <li>
                            <a class="dropdown-toggle" href="#kesehatan" data-bs-parent="#kesehatan" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                Benur
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
                                    class="feather feather-chevron-right"
                                >
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>
                            <ul id="kesehatan" class="collapse list-unstyled sub-submenu">
                                <li>
                                    <router-link to="/manage-benur" @click="toggleMobileMenu">Manage Benur </router-link>
                                </li>
                                <li>
                                    <router-link to="/scoring-benur" @click="toggleMobileMenu">Scoring Benur</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/manage-kontent" @click="toggleMobileMenu">Kontent Edukasi</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#siklusBudidaya" aria-controls="siklusBudidaya" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Siklus Budidaya') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="siklusBudidaya" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/siklus-budidaya-pakan" @click="toggleMobileMenu">Pakan</router-link>
                        </li>
                        <li>
                            <router-link to="/siklus-budidaya-benur-doc" @click="toggleMobileMenu">Benur & DOC</router-link>
                        </li>
                    </ul>
                </li>
                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#panen" aria-controls="panen" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Panen') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="panen" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/panen-" @click="toggleMobileMenu">Panen</router-link>
                        </li>
                        <li>
                            <router-link to="/perkiraan" @click="toggleMobileMenu">Perkiraan</router-link>
                        </li>
                        <li>
                            <router-link to="/aktual" @click="toggleMobileMenu">Aktual</router-link>
                        </li>
                    </ul>
                </li>
                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#hargaUdang" aria-controls="hargaUdang" aria-expanded="false">
                        <div class="">
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
                                class="feather feather-cpu"
                            >
                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                <rect x="9" y="9" width="6" height="6"></rect>
                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                <line x1="1" y1="14" x2="4" y2="14"></line>
                            </svg>
                            <span>{{ $t('Harga') }}</span>
                        </div>
                        <div>
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
                                class="feather feather-chevron-right"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </a>
                    <ul id="hargaUdang" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/harga-udang" @click="toggleMobileMenu">Udang</router-link>
                        </li>
                    </ul>
                </li>
            </perfect-scrollbar>
        </nav>
    </div>
    <!--  END SIDEBAR  -->
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();

    const menu_collapse = ref('dashboard');

    onMounted(() => {
        const selector = document.querySelector('#sidebar a[href="' + window.location.pathname + '"]');
        if (selector) {
            const ul = selector.closest('ul.collapse');
            if (ul) {
                let ele = ul.closest('li.menu').querySelectorAll('.dropdown-toggle');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            } else {
                selector.click();
            }
        }
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };
</script>