<template>
  <div class="max-w-2xl w-full md:w-full mx-auto py-8">
    <!-- Today -->
    <div>
      <h3 class="text-3xl">Aujourd'huiy</h3>
      <p class="text-xs md:text-sm text-muted-foreground">Jeudi 06 Février 2025</p>
      <div class ="my-4">
        <div class="inline">
          <span class="mr-2">Mon agénda</span>
          <span class="text-xs md:text-sm">3</span>
        </div>
        <!-- Swiper -->
        <ClientOnly>
          <swiper-container ref="swiperRef" :init="false">
            <swiper-slide>
              <div class="my-2 flex flex-col justify-between xl:h-40 gap-4 text-white bg-gradient-to-tr from-purple-600 to-purple-700 rounded-md p-3">
                <div class="flex justify-between items-end">
                  <h3 class="uppercase text-md xl:text-2xl md:text-xl font-bold">Cours de chimie</h3>
                  <span class="text-xs md:text-md">En cours</span>
                </div>
                <div class="flex justify-between items-end py-1">
                  <div class="text-xs md:text-md font-semibold">
                    <p>10h - 12h</p>
                    <p>Valérie l'estropied</p>
                    <p>Salle Monge</p>
                  </div>
                  <div>
                    <span class="text-xs md:text-md">Fin dans 10 minutes</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="my-2 flex flex-col justify-between xl:h-40 gap-4 text-white bg-gradient-to-r from-emerald-700 to-emerald-500 rounded-md p-3">
                <div class="flex justify-between items-end">
                  <h3 class="uppercase text-md xl:text-2xl md:text-xl font-bold">Cours de GAP</h3>
                  <span class="text-xs md:text-md">En cours</span>
                </div>
                <div class="flex justify-between items-end py-1">
                  <div class="text-xs md:text-md font-semibold">
                    <p>10h - 12h</p>
                    <p>Valérie l'estropied</p>
                    <p>Salle Monge</p>
                  </div>
                  <div>
                    <span class="text-xs md:text-md"></span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>

    <!-- Weekly  -->
    <div class="my-4">
      <div class="flex justify-between mb-2">
        <div class="inline">
          <span class="mr-2">Cette semaine</span>
          <span class="text-xs md:text-sm">5+</span>
        </div>
        <span>Tri</span>
      </div>

      <!-- Events -->
      <div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-emerald-500 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">TP de Chimie</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>Aujourd'hui</p>
            </div>
            <div>
              <span class="text-xs md:text-md"></span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-emerald-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Cours de Chimie</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>Aujourd'hui</p>
            </div>
            <div>
              <span class="text-xs md:text-md">Fin dans 10 minutes</span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-orange-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Seminaire de GAP</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>28 Février 2025</p>
            </div>
            <div>
              <span class="text-xs md:text-md">Fin dans 10 minutes</span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-purple-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Conférence sur la paix à l'est</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>12 Février 2025</p>
            </div>
            <div>
              <span class="text-xs md:text-md">Fin dans 10 minutes</span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-emerald-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Cours de GAP</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>14 Février</p>
            </div>
            <div>
              <span class="text-xs md:text-md"></span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-cyan-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Interrogation de GAP</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>14 Février 2025</p>
            </div>
            <div>
              <span class="text-xs md:text-md"></span>
            </div>
          </div>
        </div>
        <div class="mb-2 flex flex-col justify-between gap-1 md:gap-3 text-white bg-yellow-600 rounded-md p-3">
          <div class="flex justify-between items-center">
            <h3 class="uppercase text-md xl:text-2xl md:text-xl font-medium">Accueil des Nouveaux</h3>
            <span class="text-xs md:text-md">Favoris</span>
          </div>
          <div class="flex justify-between items-end">
            <div class="text-xs md:text-md font-normal">
              <p>15 Février 2025</p>
            </div>
            <div>
              <span class="text-xs md:text-md"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

definePageMeta({
  layout: 'student'
})
const authStore = useAuthStore();
const containerRef =ref<null>(null)
const todayOptions = {
  loop: false, autoplay: false,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    578: {
      slidesPerView: 2,
      spaceBetween: 5,
    }
  }
}
const weekOptions = {
  loop: false, autoplay: false,
  breakpoints: {
    300: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    578: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 10,
    }
  }
}
const swiperRef =ref<null>(null)
const swiper = useSwiper(swiperRef, todayOptions)
const weekSwiperRef =ref<null>(null)
const weekSwiper = useSwiper(weekSwiperRef, weekOptions)
</script>
<style></style>