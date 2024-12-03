<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/forgot-bg-xs-sm.png')] md:bg-[url('~/assets/images/forgot-bg.png')] md:relative">
    <div
      class="md:absolute xl:right-16 bottom-0 md:bottom-auto md:right-8 max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full flex flex-col space-y-6 justify-center items-center py-8">
        <h3 class="text-2xl font-bold">
          Vérification du code
        </h3>

        <p class="text-xs text-center font-medium italic">
          Un email contenant un code à 6 chiffres vous a été envoyé à l'adresse <strong>{{ email }}</strong>. Veuillez
          saisir ce code
          ci-dessous pour continuer.
        </p>

        <div class="flex flex-col justify-center items-center space-y-3">
          <PinInput id="pin-input" :disabled="isExpired" v-model="value" placeholder="○" @complete="handleComplete" :otp=true>
            <PinInputGroup class="flex justify-center items-center">
              <template v-for="(id, index) in 6" :key="id">
                <PinInputInput :class="success ? 'border-emerald-500 focus:border-emerald-500' : 'border-neutral-600'" class="rounded-md text-center border w-10 h-10" :index="index" />
                <template v-if="index !== 5">
                  <PinInputSeparator />
                </template>
              </template>
            </PinInputGroup>
          </PinInput>

          <div>
            <div v-if="error" class="font-semibold text-xs text-red-500" >{{ error }}</div>
            <div v-if="success" class="font-semibold text-xs text-emerald-500">{{ success }}</div>
          </div>
        </div>

        <div v-if="!isExpired" class="text-sm text-center font-semibold">
          Le code expire dans {{ formattedTimeLeft }}
        </div>
        <div class="flex justify-center">
          <Button variant="outline" @click="resendCode"
            class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-xs 2xl:text-md uppercase border-none"
            :class="!isExpired ? 'hidden' : 'block cursor-pointer'">
            Renvoyer le code
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '@/components/ui/pin-input'

useHead({
  title: "Wakati App | Vérification"
})

const router = useRouter();
const route = useRoute();
const email = ref(route.query.email || '');
const error = ref('')
const success = ref('')
const value = ref<string[]>([])

const formData = reactive({
  verificationCode: '',
})

const initialTime = 120
const timeLeft = ref(initialTime)
const isExpired = computed(() => timeLeft.value <= 0)

const formattedTimeLeft = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const secondes = timeLeft.value % 60

  return `${String(minutes).padStart(2, '0')}:${String(secondes).padStart(2, '0')}`
})

const handleComplete = async (e: string[]) => {
  const code = e.join('')
  try {
    if (isExpired.value) {
      value.value = []
      error.value = 'Code expiré'
      return
    }
    error.value = ''
    const isValid = await verifyOtp(code)
    if (!isValid) {
          value.value = []
      error.value = 'Ce code est invalide'
    } else {
      formData.verificationCode = code
      console.log(JSON.parse(JSON.stringify(formData)))
      success.value = 'Code valide'
      setTimeout(() => {
        router.push(`/reset-password`)
      }, 1500)
    }
  } catch (err: any) {
    error.value = err.message
  }
}

const verifyOtp = async (otp: string) => { return otp === '200422' }

const startTimer = () => {
  timeLeft.value = initialTime
  value.value = []
  const interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value -= 1
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

const resendCode = () => {
  formData.verificationCode = ''
  error.value = ''
  startTimer()
}

onMounted(() => {
  startTimer()
})
</script>

<style></style>