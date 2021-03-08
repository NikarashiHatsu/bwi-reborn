<template>
    <div class="w-full h-screen bg-gray-900 font-merriweather">
        <div class="relative grid w-full h-full grid-flow-row grid-cols-12 p-6 gap-9">
            <!-- Logo -->
            <div class="absolute top-0 right-0 flex items-center m-6">
                <router-link to="/">
                    <img src="../assets/logo.png" alt="Logo BWI" class="h-6" />
                </router-link>
                <div class="w-12 mx-4 border-t border-gray-200"></div>
                <router-link class="text-gray-200 transition-colors hover:text-blue-500" to="portfolio">
                    Portfolio
                </router-link>
            </div>
            
            <!-- Main Content -->
            <div class="col-span-2">
                <div class="relative m-4">
                    <div class="w-32 h-8 bg-gray-600"></div>
                    <img src="../assets/triangle-down.png" class="absolute -bottom-10 -right-0" />
                </div>
            </div>
            <div class="relative flex justify-end col-span-5 mt-8">
                <p style="text-underline-position: under;" class="text-5xl leading-loose text-gray-200 underline">
                    Hadir Memenuhi Kebutuhan Organisasi Anda.
                </p>
            </div>
            <div class="flex flex-col items-start justify-center col-span-4">
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

        <img src="../assets/dylan-gillis-KdeqA3aTnBY-unsplash 1.png" class="w-full h-screen" />
        
        <div class="flex flex-col items-center w-full min-h-screen pb-16 bg-gray-900">
            <p class="mt-40 text-gray-200">
                Mengedepankan Kualitas Layanan, Kecepatan, dan Kepercayaan
            </p>
            <div style="width: 1px;" class="h-6 my-8 bg-gray-200"></div>
            <div class="z-10 flex items-center justify-center px-40 py-24 bg-gray-200">
                <img src="../assets/logo_hitam.png" />
            </div>
            
            <div class="relative grid w-full max-w-screen-sm grid-flow-row grid-cols-2 gap-8 pt-48 pb-24 -mt-32 border border-gray-600">
                <div class="absolute w-full h-full -mt-4 -ml-4 border border-gray-600"></div>
                <div class="absolute h-full -mt-4 border border-r border-gray-600 left-1/2"></div>
                <div class="absolute w-16 h-4 -mt-8 -ml-8 bg-red-500 left-1/2 top-1/2"></div>

                <div class="flex flex-col items-center col-span-1">
                    <p class="text-2xl leading-loose text-center text-gray-200">
                        Strategi<br />Digital
                    </p>
                    <ol class="mt-8 text-center">
                        <li class="mb-4 text-gray-200">IT Consultant</li>
                        <li class="mb-4 text-gray-200">Business Analyst</li>
                        <li class="mb-4 text-gray-200">UI/UX</li>
                    </ol>
                </div>
                <div class="flex flex-col items-center col-span-1">
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

        <div class="flex flex-col items-center w-full min-h-screen pb-16 bg-gray-900">
            <p class="mt-40 text-gray-200">
                Client Kami
            </p>
            <div style="width: 1px;" class="h-6 my-8 bg-gray-200"></div>
            <p class="leading-loose tracking-wider text-center text-gray-200">
                Partner kerja yang memiliki keterampilan <br />untuk mengubah ide menjadi sebuah produk jadi.
            </p>

            <div class="relative grid w-full max-w-screen-md grid-flow-row grid-cols-4 mt-16">
                <div class="flex items-center justify-center col-span-1 py-6 border border-gray-600">
                    <img src="../assets/clients/polri.png" height="75" alt="Kepolisian Republik Indonesia" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-l-0 border-gray-600">
                    <img src="../assets/clients/irwasum_polri.png" height="75" alt="Itwasum Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-l-0 border-gray-600">
                    <img src="../assets/clients/polda_kalteng.png" height="75" alt="Polda Kalimantan Tengah" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-l-0 border-gray-600">
                    <img src="../assets/clients/polda_sumbar.png" height="75" alt="Polda Sumatera Barat" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/polda_aceh.png" height="75" alt="Polda Aceh" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/korpolairud.png" height="75" alt="Korpolairud" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/satbrimob.png" height="75" alt="Satbrimob" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/inspektorat_narkoba.png" height="75" alt="Inspektorat Narkoba Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/polantas.png" height="75" alt="Polantas Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/sdm_polri.png" height="75" alt="SDM Polri" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/dpr_ri.png" height="75" alt="DPR RI" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/bnn.png" height="75" alt="BNN RI" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pnpsi.png" height="75" alt="Padepokan Pencak Silat Indonesia" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pt_as.png" height="75" alt="PT. Amelia Sentosa" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pt_dpj.png" height="75" alt="PT. Dinamika Propertindo Jaya" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/pt_kbg.png" height="75" alt="PT. Karya Berkah Gemilang" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/luragung_pesona_regency.png" height="75" alt="Luragung Pesona Regency" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/universitas_mh_thamrin.png" height="75" alt="Universitas MH. Thamrin" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/unswagati.png" height="75" alt="Universitas Swadaya Gunung Jati" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/rs_banjarharjo.png" height="75" alt="RS. As-Syifa Banjaharjo" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/aposerba.png" height="75" alt="Aposerba" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/klinik_dan_apotik.png" height="75" alt="Klinik dan Apotik" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
                    <img src="../assets/clients/e-kinerja.png" height="75" alt="E-Kinerja" />
                </div>
                <div class="flex items-center justify-center col-span-1 py-6 border border-t-0 border-gray-600">
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
                Adalah anak muda Indonesia yang memiliki <br/> keahlian dan pengalaman dibidangnya
            </p>

            <div class="flex flex-row w-full mt-16">
                <div class="grid w-1/2 grid-flow-row grid-cols-2">
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/yono_maulana.png" alt="Yono Maulana S.Kom.,MM.,MPM.,ICTPM.,CMA" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/darsono.png" alt="Darsono, S.Kom" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/muhamad_ahmadin.png" alt="Muhamad Ahmadin, S.Kom" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/zoel_halim.png" alt="Ade Kuryasin, S.Kom" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/ade_iyas_kuryasin.png" alt="Zoel Halim, S.Kom.,M.Kom" class="w-full h-full" />
                    </div>
                    <div class="col-span-1 aspect-w-1 aspect-h-1">
                        <img src="../assets/team/aghits_nidallah.png" alt="Aghits Nidallah, S.Kom" class="w-full h-full" />
                    </div>
                </div>
                <div class="flex flex-col-reverse w-1/2">
                    <div class="w-aspect-2 h-aspect-1">
                        <img src="../assets/teamwork.png" alt="Teamwork" class="w-full h-full">
                    </div>
                    <div class="flex items-center h-full p-8 w-aspect-2">
                        <p class="text-gray-200">Kunjungi Kami</p>
                        <div class="w-16 mx-4 border-t border-gray-200"></div>
                        <div class="flex flex-col">
                            <a href="javascript:void(0)" class="mb-4 text-6xl text-gray-200 hover:underline">Facebook</a>
                            <a href="javascript:void(0)" class="mb-4 text-6xl text-gray-200 hover:underline">Instagram</a>
                            <a href="javascript:void(0)" class="mb-4 text-6xl text-gray-200 hover:underline">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative flex flex-col items-center w-full min-h-screen p-8 bg-gray-200">
            <p class="mt-16 text-gray-700">Kontak Kami</p>
            <div class="h-6 my-4 border-r border-gray-700"></div>
            <p class="mt-4 text-4xl tracking-wider text-gray-700">
                bengkelwebindonesia@gmail.com
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
    export default {
        name: 'Tentang'
    }
</script>