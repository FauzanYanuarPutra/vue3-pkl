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
                    <router-link to="/laporan" class="dropdown-toggle" @click="toggleMobileMenu">
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
                                class="feather feather-save"
                            >
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                <polyline points="7 3 7 8 15 8"></polyline>
                            </svg>
                            <span>{{ $t('Laporan') }}</span>
                        </div>
                    </router-link>
                </li>

                <li class="menu">
                    <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#kolamBudidayaPersiapan" aria-controls="kolamBudidayaPersiapan" aria-expanded="false">
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
                                class="feather feather-command"
                            >
                                <path
                                    d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                                ></path>
                            </svg>
                            <span>{{ $t('Kolam Budidaya (Persiapan)') }}</span>
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
                    <ul id="kolamBudidayaPersiapan" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
                        <li>
                            <router-link to="/pengeringan-dasar-tambak" @click="toggleMobileMenu">Pengeringan Dasar Tambak</router-link>
                        </li>
                        <li>
                            <router-link to="/pembuangan-sendimen-organik" @click="toggleMobileMenu">Pebuangan Sendimen Organik</router-link>
                        </li>
                        <li>
                            <router-link to="/sterilisasi-tambak" @click="toggleMobileMenu">Sterilisasi Tambak </router-link>
                        </li>
                        <li>
                            <router-link to="/pengisian-air-dan-sterilisasi-air-tambak" @click="toggleMobileMenu"> Pengisian Air Dan Sterilisasi Air Tambak</router-link>
                        </li>
                        <li>
                            <router-link to="/pengapuran" @click="toggleMobileMenu">Pengapuran</router-link>
                        </li>
                        <li>
                            <router-link to="/pemupukan-dan-pemberian-mineral" @click="toggleMobileMenu">Pemupukan Dan Pemberian Mineral</router-link>
                        </li>
                        <li>
                            <router-link to="/pertumbuhan-plankton" @click="toggleMobileMenu">Pertumbuhan Plankton </router-link>
                        </li>
                        <li>
                            <router-link to="/pertumbuhan-patogen-atau-yang-merugikan" @click="toggleMobileMenu"> Pertumbuhan Patogen atau Yang Merugikan</router-link>
                        </li>
                        <li>
                            <router-link to="/probiotik" @click="toggleMobileMenu">Probiotik</router-link>
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
                                class="feather feather-repeat"
                            >
                                <polyline points="17 1 21 5 17 9"></polyline>
                                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                                <polyline points="7 23 3 19 7 15"></polyline>
                                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
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
                            <router-link to="/siklus-budidaya-benur-doc" @click="toggleMobileMenu">Benur & DOC </router-link>
                        </li>
                        <li>
                            <router-link to="/siklus-budidaya-udang" @click="toggleMobileMenu">Udang</router-link>
                        </li>
                        <li>
                            <a class="dropdown-toggle" href="#appInvoice" data-bs-parent="#siklusBudidaya" data-bs-toggle="collapse" role="button" aria-expanded="false">
                                Air
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
                                    <router-link to="/budidaya-fisika" @click="toggleMobileMenu">Parameter Fisika </router-link>
                                </li>
                                <li>
                                    <router-link to="/budidaya-kimia" @click="toggleMobileMenu">Parameter Kimia </router-link>
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
                                            <router-link to="/budidaya-biologi-fitoplankton" @click="toggleMobileMenu"> Filoplankton </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/budidaya-biologi-vibrioTCBS" @click="toggleMobileMenu"> Vibrio TCBS </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/budidaya-biologi-vibrioCHROMagar" @click="toggleMobileMenu">Vibrio CHROMagar </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
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
                                class="feather feather-crop"
                            >
                                <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
                                <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
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
                    </ul>
                </li>

                <li class="menu">
                    <router-link to="/kolam-treatment/table" class="dropdown-toggle" @click="toggleMobileMenu">
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
                                class="feather feather-briefcase"
                            >
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <span>{{ $t('Kolam Treatment') }}</span>
                        </div>
                    </router-link>
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
                                class="feather feather-git-pull-request"
                            >
                                <circle cx="18" cy="18" r="3"></circle>
                                <circle cx="6" cy="6" r="3"></circle>
                                <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                                <line x1="6" y1="9" x2="6" y2="21"></line>
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
                            <router-link to="/manage-pakan" @click="toggleMobileMenu">Pakan</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-kolam" @click="toggleMobileMenu">Kolam</router-link>
                        </li>
                        <li>
                            <router-link to="/saponin" @click="toggleMobileMenu">Saponin</router-link>
                        </li>
                        <li>
                            <router-link to="/airtambak" @click="toggleMobileMenu">Warna Air Tambak</router-link>
                        </li>
                        <li>
                            <router-link to="/harga-udang" @click="toggleMobileMenu">Harga Udang</router-link>
                        </li>
                        <li>
                            <router-link to="/manage-benur" @click="toggleMobileMenu">Benur</router-link>
                        </li>

                        <li>
                            <router-link to="/manage-kontent" @click="toggleMobileMenu">Kontent Edukasi</router-link>
                        </li>
                        <li>
                            <router-link to="/setting/table" @click="toggleMobileMenu">Setting</router-link>
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
                                class="feather feather-book"
                            >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
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
                                    <router-link to="/parameter-biologi" @click="toggleMobileMenu">Pamareter Biologi </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/pertumbuhan-udang" @click="toggleMobileMenu">Pertumbuhan Udang </router-link>
                        </li>
                        <li>
                            <router-link to="/konsumsi-pakan" @click="toggleMobileMenu">Komsumsi Pakan </router-link>
                        </li>
                        <li>
                            <router-link to="/benur" @click="toggleMobileMenu">Benur</router-link>
                        </li>
                    </ul>
                </li>

                <li class="menu">
                    <router-link to="/interval-pengukuran/create" class="dropdown-toggle" @click="toggleMobileMenu">
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
                                class="feather feather-percent"
                            >
                                <line x1="19" y1="5" x2="5" y2="19"></line>
                                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                                <circle cx="17.5" cy="17.5" r="2.5"></circle>
                            </svg>
                            <span>{{ $t('Interval Pengukuran') }}</span>
                        </div>
                    </router-link>
                </li>

                <li class="menu">
                    <router-link to="/reminder" class="dropdown-toggle" @click="toggleMobileMenu">
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
                                class="feather feather-bell"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                            <span>{{ $t('reminder') }}</span>
                        </div>
                    </router-link>
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
