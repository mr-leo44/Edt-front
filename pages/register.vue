<template>
  <div
    class="flex justify-center items-end md:items-center h-screen bg-no-repeat bg-center md:bg-left-top bg-cover bg-[url('~/assets/images/register-bg-xs-sm.png')] md:bg-[url('~/assets/images/register-bg.png')] md:relative">
    <div
      class="md:absolute flex xl:right-16 bottom-0 md:bottom-auto md:right-8 items-center max-w-xl sm:max-w-3xl md:max-w-sm xl:max-w-lg w-full bg-white rounded-3xl mb-2 md:mb-0 px-8 py-6 text-gray-600">
      <div class="w-full">
        <h3 class="text-2xl xl:text-3xl text-center font-bold" :class="currentStep === 1 ? 'mb-8' : 'mb-3'">
          S'inscrire à <span class="text-emerald-700">Wakati App</span>
        </h3>
        <div v-if="currentStep === 1" class="space-y-3 animate-fade-in">
          <div class="flex flex-col space-y-4">
            <div class="flex flex-col space-y-2">
              <Label class="text-sm font-semibold">Université</Label>
              <Popover v-model:open="isOpen">
                <PopoverTrigger as-child>
                  <Button variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{ selectedUniversity ? universities.find((university) => university.name ===
                      selectedUniversity)?.name : "" }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Tapez pour rechercher votre université" />
                    <CommandList>
                      <CommandEmpty>Université non trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem v-for="university of universities" :key="university.name" :value="university.name"
                          @select="(ev) => {
                            if (typeof ev.detail.value === 'string') {
                              selectedUniversity = ev.detail.value
                            }
                            formData.university_id = universities.find((university) => university.name === selectedUniversity)?.id
                            isOpen = false
                          }">
                          {{ university.name }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div class="flex flex-col space-y-2">
              <Label class="text-sm font-semibold">Faculté</Label>
              <Popover v-model:open="isFacultyOpen">
                <PopoverTrigger as-child>
                  <Button variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{ selectedFaculty ? faculties.find((faculty) => faculty.name ===
                      selectedFaculty)?.name : "" }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Rechercher votre faculté" />
                    <CommandList>
                      <CommandEmpty>Faculté non trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem v-for="faculty of faculties" :key="faculty.name" :value="faculty.name" @select="(ev) => {
                          if (typeof ev.detail.value === 'string') {
                            selectedFaculty = ev.detail.value
                          }
                          formData.faculty_id = faculties.find((faculty) => faculty.name === selectedFaculty)?.id
                          isFacultyOpen = false
                        }">
                          {{ faculty.name }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div class="flex flex-col space-y-2">
              <Label class="text-sm font-semibold">Promotion</Label>
              <Popover v-model:open="isPromotionOpen">
                <PopoverTrigger as-child>
                  <Button variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{ selectedPromotion ? promotions.find((promotion) => promotion.name ===
                      selectedPromotion)?.name : "" }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Rechercher votre promotion" />
                    <CommandList>
                      <CommandEmpty>Promotion non trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem v-for="promotion of promotions" :key="promotion.name" :value="promotion.name"
                          @select="(ev) => {
                            if (typeof ev.detail.value === 'string') {
                              selectedPromotion = ev.detail.value
                            }
                            formData.promotion_id = promotions.find((promotion) => promotion.name === selectedPromotion)?.id
                            isPromotionOpen = false
                          }">
                          {{ promotion.name }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div class="space-y-2 flex justify-end items-center">
              <Button variant="outline"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                :disabled="!formData.university_id || !formData.faculty_id || !formData.promotion_id"
                @click="toNextStep">Suivant</Button>
            </div>
          </div>
        </div>

        <div v-if="currentStep === 2" class="space-y-2 animate-fade-in">
          <h2 class="text-md font-bold mb-2">Informations personnelles</h2>
          <form @submit="onSubmit" class="flex flex-col space-y-1">
            <div class="flex gap-2 flex-col md:flex-row w-full">
              <FormField v-slot="{ componentField }" name="name">
                <FormItem>
                  <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Nom</FormLabel>
                  <FormControl>
                    <Input type="text"
                      class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                      v-model="formData.name" autocomplete="off" v-bind="componentField" />
                  </FormControl>
                  <FormMessage class="text-xs text-red-500" />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="username">
                <FormItem>
                  <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Username</FormLabel>
                  <FormControl>
                    <Input type="text"
                      class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                      v-model="formData.username" autocomplete="off" v-bind="componentField" />
                  </FormControl>
                  <FormMessage class="text-xs text-red-500" />
                </FormItem>
              </FormField>
            </div>
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Email</FormLabel>
                <FormControl>
                  <Input type="email"
                    class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                    v-model="formData.email" autocomplete="off" v-bind="componentField" />
                </FormControl>
                <FormMessage class="text-xs text-red-500" />
              </FormItem>
            </FormField>
            <div class="flex gap-2 flex-col md:flex-row w-full">
              <FormField v-slot="{ componentField }" name="password">
                <FormItem>
                  <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password"
                      class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                      v-model="formData.password" autocomplete="off" v-bind="componentField" />
                  </FormControl>
                  <FormMessage class="text-xs text-red-500" />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="password_confirmation">
                <FormItem>
                  <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Confirmer mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input type="password"
                      class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                      v-model="formData.password_confirmation" autocomplete="off" v-bind="componentField" />
                  </FormControl>
                  <FormMessage class="text-xs text-red-500" />
                </FormItem>
              </FormField>
            </div>
            <FormField v-slot="{ componentField }" name="phone">
              <FormItem>
                <FormLabel class="text-xs md:text-sm text-neutral-700 font-semibold">Téléphone</FormLabel>
                <FormControl>
                  <Input type="text"
                    class="w-full p-2 sm:px-4 text-sm sm:text-md rounded text-neutral-800 border border-neutral-600 focus:border-neutral-700 outline-none"
                    v-model="formData.phone" autocomplete="off" v-bind="componentField" />
                </FormControl>
                <FormMessage class="text-xs text-red-500" />
              </FormItem>
            </FormField>

            <div class="flex justify-between items-center space-y-2 w-full">
              <Button variant="outline"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                @click="toPreviousStep">
                Précédent
              </Button>
              <Button variant="outline" type="submit"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                :disabled="!formData.name || !formData.username || !formData.email || !formData.password ||
                  !formData.password_confirmation || !formData.phone">
                S'inscrire
              </Button>
            </div>
          </form>
        </div>

        <p class="my-4 text-xs text-center" :class="currentStep === 1 ? 'hidden' : 'block'">
          En cliquant sur le bouton s'inscrire ci-dessous, vous acceptez <span class="text-emerald-700">les
            conditions de service</span> de wakati app
        </p>
        <div class="text-center font-bold text-xs sm:text-sm" :class="currentStep === 1 ? 'mt-8' : 'mt-4 mb-2'">
          <span>Vous avez déjà un compte? </span>
          <NuxtLink to="/login" class="text-emerald-700">
            Se connecter
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

useHead({
  title: "Wakati App | register"
})

const router = useRouter();
const currentStep = ref(1)

const isOpen = ref(false)
const isFacultyOpen = ref(false)
const isPromotionOpen = ref(false)
const selectedUniversity = ref('')
const selectedFaculty = ref('')
const selectedPromotion = ref('')

const universities = ref([
  { id: 1, name: 'Université de Kinshasa' },
  { id: 2, name: 'Université Libre de Kinshasa' },
  { id: 3, name: 'Leadership Academia' },
  { id: 4, name: 'Université Catholique au Congo' },
  { id: 5, name: 'Université Loyola' },
  { id: 6, name: 'Université Simon Kimbangu' },
  { id: 7, name: 'Haute Ecole de Commerce' },
  { id: 8, name: 'Institut Supérieur d\'Informatique Programmation et Analyse' },
  { id: 9, name: 'Université Pédagogique Nationale' },
  { id: 10, name: 'Institut Nation du Batiment et Travaux Publics' },
  { id: 11, name: 'Institut Supérieur des Techniques Appliquées' },
  { id: 12, name: 'Institut Supérieur Pédagogique/Gombe' },
])
const faculties = ref([
  { id: 1, name: 'Droit' },
  { id: 2, name: 'Sciences' },
  { id: 3, name: 'Sciences Economiques' },
  { id: 4, name: 'Polytechnique' },
  { id: 5, name: 'Pétrole et Gaz' },
  { id: 6, name: 'Urbanisation' },
  { id: 7, name: 'Informatique' },
  { id: 8, name: 'Electronique' },
  { id: 9, name: 'Electricité' },
  { id: 10, name: 'Mécanique' },
  { id: 11, name: 'Génie civil' },
  { id: 12, name: 'Communication' },
  { id: 13, name: 'Médécine' },
])
const promotions = ref([
  { id: 1, name: 'L1 Droit' },
  { id: 2, name: 'L2 Droit' },
  { id: 3, name: 'L3 Droit' },
  { id: 4, name: 'M1 Droit' },
  { id: 5, name: 'M2 Droit' },
  { id: 6, name: 'L1 Economie' },
  { id: 7, name: 'L2 BTP' },
  { id: 8, name: 'L3 Mécanique' },
  { id: 9, name: 'M1 Communication sociale' },
  { id: 10, name: 'M2 Droit Privé' },
  { id: 11, name: 'L1 Electricité' },
  { id: 12, name: 'L2 Marketing' },
  { id: 13, name: 'L3 Réseaux' },
  { id: 14, name: 'M1 Gestion des Entreprises' },
  { id: 15, name: 'M2 Comptabilité' },
  { id: 16, name: 'D4 Médécine interne' },
])

const formData = reactive({
  university_id: null,
  faculty_id: null,
  promotion_id: null,
  name: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  phone: '',
  type: 'student',
})

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1, { message: "Champ obligatoire" }).min(3, 'Minimum 3 caractères'),
  username: z.string().min(1, "Champ obligatoire").min(3, 'Minimum 3 caractères'),
  email: z.string().min(1, "Champ obligatoire").email('Cet email est invalide'),
  phone: z.string().min(1, "Champ obligatoire").min(10, 'Minimum 10 chiffres').max(15, 'Maximum 15 chiffres').regex(/^\d+$/, 'Ne doit contenir que des chiffres'),
  password: z.string().min(1, "Champ obligatoire").min(8, 'Minimum 8 caractères').regex(/[A-Z]/, 'Au moins une majuscule').regex(/\d/, 'Au moins un chiffre').regex(/[!$@#?&*%]/, 'Au moins un caractère spécial'),
  password_confirmation: z.string().min(1, "Champ obligatoire"),
}).refine((data) => data.password === data.password_confirmation, { path: ["password_confirmation"], message: "Mot de passe différents" }))

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})
const toPreviousStep = () => {
  currentStep.value--
}

const toNextStep = () => {
  currentStep.value++
}

const onSubmit = handleSubmit((values) => {
  try {
    console.log(JSON.parse(JSON.stringify(formData)))
    router.push(`students/${formData.username}`)
  } catch (error) {
    console.error('Erreur de soumission :', error)
  }
})

</script>

<style>
.animate-fade-in {
  animation: fadeIn .5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>