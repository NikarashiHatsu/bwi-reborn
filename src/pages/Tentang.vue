<template>
    <div class="w-full h-screen bg-gray-900 font-merriweather">
        <div class="relative grid w-full h-full grid-flow-row grid-cols-12 gap-0 p-6 md:gap-9">
            <!-- Logo -->
            <div class="fixed top-0 right-0 z-50 flex items-center m-6">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo BWI" class="h-6" />
                </router-link>
                <div class="w-12 mx-4 border-t border-gray-200"></div>
                <router-link class="text-gray-200 transition-colors hover:text-blue-500" to="portfolio">
                    Portfolio
                </router-link>
            </div>
            
            <!-- Main Content -->
            <div class="hidden lg:col-span-2 lg:block">
                <div class="relative m-4">
                    <div class="w-32 h-8 bg-gray-600"></div>
                    <img src="../assets/triangle-down.png" class="absolute -bottom-10 -right-0" />
                </div>
            </div>
            <div class="relative flex items-end justify-start col-span-12 mt-0 md:justify-end md:items-center lg:mt-8 md:col-span-6 lg:col-span-5 lg:items-start">
                <div class="absolute top-0 left-0 block m-4 lg:hidden">
                    <div class="w-32 h-8 bg-gray-600"></div>
                    <img src="../assets/triangle-down.png" class="absolute -bottom-10 -right-0" />
                </div>
                <p style="text-underline-position: under;" class="mb-6 text-3xl leading-relaxed text-gray-200 underline sm:text-5xl xl:leading-loose 2xl:text-7xl 2xl:leading-loose sm:leading-loose md:mb-0">
                    Hadir Memenuhi Kebutuhan <span class="inline md:hidden"><br /></span> Organisasi Anda.
                </p>
            </div>
            <div class="flex flex-col items-start justify-start col-span-12 md:justify-center md:col-span-6 lg:col-span-4">
                <div class="relative">
                    <img src="../assets/triangle-right.png" class="absolute -right-4 -top-16" />
                    <p class="mb-6 leading-loose text-gray-200">Bengkel Web Indonesia adalah usaha jasa konsultan IT dan Pengembang Sistem dan Aplikasi yang lahir dari perkumpulan para generasi muda yang dinamis.</p>
                </div>
                <div class="relative">
                    <a href="javascript:void(0)" class="relative flex items-center justify-start w-64 px-4 py-3 -mr-4 overflow-hidden text-gray-900 bg-gray-200 group focus:outline-none">
                        <div class="absolute right-0 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full bg-red-500 group-hover:translate-x-0"></div>
                        <span class="z-10 tracking-wider uppercase transition-colors duration-300 ease-in-out group-hover:text-gray-200">
                            Mulai Sebuah Proyek
                        </span>
                    </a>
                    <img class="absolute -right-12 -bottom-4" src="../assets/diagonal-lines.png" />
                </div>
            </div>
        </div>

        <img src="../assets/dylan-gillis-KdeqA3aTnBY-unsplash.png" class="object-cover w-full h-screen" />
        
        <div class="flex flex-col items-center w-full min-h-screen pb-0 bg-gray-900 md:pb-16">
            <p class="mt-40 text-center text-gray-200">
                Mengedepankan Kualitas Layanan, Kecepatan, dan Kepercayaan
            </p>
            <div style="width: 1px;" class="h-6 my-8 bg-gray-200"></div>
            <div class="z-10 flex items-center justify-center px-20 bg-gray-200 py-28 md:px-40 md:py-24">
                <img src="../assets/logo_hitam.png" />
            </div>
            
            <div class="relative grid w-full max-w-screen-sm grid-flow-row grid-cols-2 gap-8 pt-48 pb-24 -mt-32 border border-gray-600">
                <div class="absolute hidden w-full h-full -mt-4 -ml-4 border border-gray-600 md:block"></div>
                <div class="absolute hidden h-full -mt-4 border border-r border-gray-600 md:block left-1/2"></div>
                <div class="absolute hidden w-16 h-4 -mt-8 -ml-8 bg-red-500 md:block left-1/2 top-1/2"></div>
                <div class="absolute w-4 h-16 -ml-2 bg-red-500 md:hidden left-1/2 top-1/2"></div>

                <div class="flex flex-col items-center col-span-2 border-b border-gray-600 md:border-b-0 pb-14 md:pb-0 md:col-span-1">
                    <p class="text-2xl leading-loose text-center text-gray-200">
                        Strategi<br />Digital
                    </p>
                    <ol class="mt-8 text-center">
                        <li class="mb-4 text-gray-200">IT Consultant</li>
                        <li class="mb-4 text-gray-200">Business Analyst</li>
                        <li class="mb-4 text-gray-200">UI/UX</li>
                    </ol>
                </div>
                <div class="flex flex-col items-center col-span-2 pt-12 md:pt-0 md:col-span-1">
                    <p class="text-2xl leading-loose text-center text-gray-200 w-">
                        Pengembangan<br />Digital
                    </p>
                    <ol class="mt-8 text-center">
                        <li class="mb-4 text-gray-200">Website Development</li>
                        <li class="mb-4 text-gray-200">Android Development</li>
                        <li class="mb-4 text-gray-200">Custom CMS & WordPress</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full min-h-screen pb-0 bg-gray-900 md:pb-16">
            <p class="mt-40 text-gray-200">
                Client Kami
            </p>
            <div style="width: 1px;" class="h-6 my-8 bg-gray-200"></div>
            <p class="leading-loose tracking-wider text-center text-gray-200">
                Partner kerja yang memiliki keterampilan <br />untuk mengubah ide menjadi sebuah produk jadi.
            </p>

            <!-- TODO: Buat ke bentuk JSON -->
            <div class="relative grid w-full max-w-screen-md grid-flow-row grid-cols-2 p-4 mt-16 lg:grid-cols-4">
                <div class="flex items-center justify-center col-span-1 py-6 border border-gray-600">
                    <img src="../assets/clients/polri.png" height="75" alt="Kepolisian Republik Indonesia" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-l-0 border-gray-600">
                    <img src="../assets/clients/irwasum_polri.png" height="75" alt="Itwasum Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-l border-gray-600 md:border-t-0 lg:border-t lg:border-l-0">
                    <img src="../assets/clients/polda_kalteng.png" height="75" alt="Polda Kalimantan Tengah" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-t">
                    <img src="../assets/clients/polda_sumbar.png" height="75" alt="Polda Sumatera Barat" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/polda_aceh.png" height="75" alt="Polda Aceh" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/korpolairud.png" height="75" alt="Korpolairud" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/satbrimob.png" height="75" alt="Satbrimob" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/inspektorat_narkoba.png" height="75" alt="Inspektorat Narkoba Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/polantas.png" height="75" alt="Polantas Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/sdm_polri.png" height="75" alt="SDM Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/dpr_ri.png" height="75" alt="DPR RI" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/bnn.png" height="75" alt="BNN RI" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pnpsi.png" height="75" alt="Padepokan Pencak Silat Indonesia" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/pt_as.png" height="75" alt="PT. Amelia Sentosa" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pt_dpj.png" height="75" alt="PT. Dinamika Propertindo Jaya" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/pt_kbg.png" height="75" alt="PT. Karya Berkah Gemilang" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/luragung_pesona_regency.png" height="75" alt="Luragung Pesona Regency" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/universitas_mh_thamrin.png" height="75" alt="Universitas MH. Thamrin" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/unswagati.png" height="75" alt="Universitas Swadaya Gunung Jati" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/rs_banjarharjo.png" height="75" alt="RS. As-Syifa Banjaharjo" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/aposerba.png" height="75" alt="Aposerba" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/klinik_dan_apotik.png" height="75" alt="Klinik dan Apotik" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/e-kinerja.png" height="75" alt="E-Kinerja" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-l-0 border-gray-600 lg:border-l">
                    <img src="../assets/clients/rudos.png" height="75" alt="Ruang Dosen" />
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center w-full min-h-screen bg-gray-900">
            <p class="mt-40 text-gray-200">
                Tim Kami
            </p>
            <div style="width: 1px;" class="h-6 my-8 bg-gray-200"></div>
            <p class="leading-loose tracking-wider text-center text-gray-200">
                Adalah anak muda Indonesia yang memiliki <span class="hidden md:inline"><br/></span> keahlian dan pengalaman dibidangnya
            </p>

            <div class="flex flex-col w-full mt-16 md:flex-row">
                <!-- TODO: Buat ke bentuk JSON -->
                <!-- TODO: Buat imagenya clickable (mobile) atau hover (pc), tampilin nama sama jabatan doang -->
                <div class="grid w-full grid-flow-row grid-cols-3 md:w-1/2 md:grid-cols-2">
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/yono_maulana.png" alt="Yono Maulana S.Kom.,MM.,MPM.,ICTPM.,CMA" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/darsono.png" alt="Darsono, S.Kom" class="object-cover w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/muhamad_ahmadin.png" alt="Muhamad Ahmadin, S.Kom" class="object-cover w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/zoel_halim.png" alt="Ade Kuryasin, S.Kom" class="object-cover w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/ade_iyas_kuryasin.png" alt="Zoel Halim, S.Kom.,M.Kom" class="object-cover w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/aghits_nidallah.png" alt="Aghits Nidallah, S.Kom" class="object-cover w-full h-full" />
                    </div>
                </div>
                <div class="flex flex-col-reverse w-full md:w-1/2">
                    <div class="w-aspect-2 h-aspect-1">
                        <img :src="meetingImage" alt="Teamwork" class="w-full h-full">
                    </div>
                    <div class="flex flex-col items-start h-full p-8 md:items-center md:flew-row md:flex-row w-aspect-2">
                        <p class="text-lg text-gray-200 md:text-base">Kunjungi Kami</p>
                        <div class="w-32 mx-4 mb-8 border-t border-gray-200 md:w-16 md:mb-0"></div>
                        <div class="flex flex-col">
                            <a href="javascript:void(0)" class="mb-4 text-base tracking-wider text-gray-200 md:tracking-normal md:text-2xl lg:text-6xl hover:underline">Facebook</a>
                            <a href="javascript:void(0)" class="mb-4 text-base tracking-wider text-gray-200 md:tracking-normal md:text-2xl lg:text-6xl hover:underline">Instagram</a>
                            <a href="javascript:void(0)" class="mb-4 text-base tracking-wider text-gray-200 md:tracking-normal md:text-2xl lg:text-6xl hover:underline">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative flex flex-col items-center w-full min-h-screen p-8 bg-gray-200">
            <p class="mt-16 text-gray-700">Kontak Kami</p>
            <div class="h-6 my-4 border-r border-gray-700"></div>
            <p class="mt-4 text-xl tracking-wider text-center text-gray-700 md:text-left md:text-4xl">
                bengkelwebindonesia<span class="inline md:hidden"><br /></span>@gmail.com
            </p>

            <div class="absolute bottom-0 left-0 flex m-8">
                <div class="w-12 h-0.5 bg-red-500 mt-3 mr-4"></div>
                <div class="flex flex-col">
                    <p class="text-xl text-gray-700">Alamat</p>
                    <p class="mt-2 text-gray-500">Jl. Ir. Sukarno</p>
                    <p class="mt-1 text-gray-500">Talun, Cirebon, Jawa Barat</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import images from '../database/images'

    export default {
        name: 'Tentang',
        data() {
            return {
                meetingImage: images.meeting,
            }
        }
    }
</script>