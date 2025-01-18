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
              <UseTemplate>
                <Command>
                  <CommandInput placeholder="Rechercher ici" />
                  <CommandList>
                    <CommandEmpty>Université non trouvée.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem v-for="university of dataStore.universities" :key="university.name"
                        :value="university.name" @select="(ev) => {
                            if (typeof ev.detail.value === 'string') {
                              selectedUniversity = ev.detail.value;
                            }
                            formData.university_id = dataStore.universities.find(
                              (university) =>
                                university.name === selectedUniversity
                            )?.id;
                            isOpen = false;
                          }
                          ">
                        {{ university.name }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </UseTemplate>

              <Popover v-if="isDesktop" v-model:open="isOpen">
                <PopoverTrigger as-child>
                  <Button variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedUniversity
                        ? dataStore.universities.find(
                          (university) =>
                            university.name === selectedUniversity
                        )?.name
                        : ""
                    }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <UniversityList />
                </PopoverContent>
              </Popover>

              <Drawer v-else :open="isOpen" @update:open="(newOpenValue) => (isOpen = newOpenValue)">
                <DrawerTrigger as-child>
                  <Button variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedUniversity
                        ? dataStore.universities.find(
                          (university) =>
                            university.name === selectedUniversity
                        )?.name
                        : ""
                    }}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div class="mt-4 border-t">
                    <UniversityList />
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div class="flex flex-col space-y-2">
              <Label class="text-sm font-semibold">Faculté</Label>
              <Popover v-if="isDesktop" v-model:open="isFacultyOpen">
                <PopoverTrigger as-child>
                  <Button :disabled="!formData.university_id" variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedFaculty
                        ? faculties?.find(
                          (faculty) =>
                            faculty.name === selectedFaculty
                        )?.name
                        : ""
                    }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <Command class="w-full">
                    <CommandInput placeholder="Rechercher votre faculté ici..." />
                    <CommandList>
                      <CommandEmpty>Faculté non trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem v-for="faculty of faculties" :key="faculty.name" :value="faculty.name" @select="(ev) => {
                            if (typeof ev.detail.value === 'string') {
                              selectedFaculty = ev.detail.value;
                            }
                            formData.faculty_id = faculties.find(
                              (faculty) =>
                                faculty.name === selectedFaculty
                            )?.id;
                            isFacultyOpen = false;
                          }
                          ">
                          {{ faculty.name }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Drawer v-else :open="isFacultyOpen" @update:open="(newOpenValue) => (isFacultyOpen = newOpenValue)">
                <DrawerTrigger as-child>
                  <Button :disabled="!formData.university_id" variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedFaculty
                        ? faculties.find(
                          (faculty) =>
                            faculty.name === selectedFaculty
                        )?.name
                        : ""
                    }}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div class="mt-4 border-t">
                    <Command class="w-full">
                      <CommandInput placeholder="Rechercher votre faculté ici..." />
                      <CommandList>
                        <CommandEmpty>Faculté non trouvée.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem v-for="faculty of faculties" :key="faculty.name" :value="faculty.name" @select="(ev) => {
                              if (typeof ev.detail.value === 'string') {
                                selectedFaculty = ev.detail.value;
                              }
                              formData.faculty_id = faculties.find(
                                (faculty) =>
                                  faculty.name === selectedFaculty
                              )?.id;
                              isFacultyOpen = false;
                            }
                            ">
                            {{ faculty.name }}
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div class="flex flex-col space-y-2">
              <Label class="text-sm font-semibold">Promotion</Label>
              <Popover v-if="isDesktop" v-model:open="isPromotionOpen">
                <PopoverTrigger as-child>
                  <Button :disabled="!formData.faculty_id" variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedPromotion
                        ? promotions.find(
                          (promotion) =>
                            promotion.name === selectedPromotion
                        )?.name
                        : ""
                    }}
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-full p-0" align="start">
                  <Command class="w-full">
                    <CommandInput placeholder="Rechercher votre promotion ici..." />
                    <CommandList>
                      <CommandEmpty>Promotion non trouvée.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem v-for="promotion of promotions" :key="promotion.name" :value="promotion.name"
                          @select="(ev) => {
                              if (typeof ev.detail.value === 'string') {
                                selectedPromotion = ev.detail.value;
                              }
                              formData.promotion_id = promotions.find(
                                (promotion) =>
                                  promotion.name === selectedPromotion
                              )?.id;
                              isPromotionOpen = false;
                            }
                            ">
                          {{ promotion.name }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Drawer v-else :open="isPromotionOpen" @update:open="(newOpenValue) => (isPromotionOpen = newOpenValue)">
                <DrawerTrigger as-child>
                  <Button :disabled="!formData.faculty_id" variant="outline"
                    class="w-full justify-start text-neutral-700 hover:text-neutral-950 dark:bg-white border-neutral-600 focus:border-neutral-700">
                    {{
                      selectedPromotion
                        ? promotions.find(
                          (promotion) =>
                            promotion.name === selectedPromotion
                        )?.name
                        : ""
                    }}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div class="mt-4 border-t">
                    <Command class="w-full">
                      <CommandInput placeholder="Rechercher votre promotion ici..." />
                      <CommandList>
                        <CommandEmpty>Promotion non trouvée.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem v-for="promotion of promotions" :key="promotion.name" :value="promotion.name"
                            @select="(ev) => {
                                if (typeof ev.detail.value === 'string') {
                                  selectedPromotion = ev.detail.value;
                                }
                                formData.promotion_id = promotions.find(
                                  (promotion) =>
                                    promotion.name === selectedPromotion
                                )?.id;
                                isPromotionOpen = false;
                              }
                              ">
                            {{ promotion.name }}
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <div class="space-y-2 flex justify-end items-center">
              <Button variant="outline"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                :disabled="!formData.university_id || !formData.faculty_id || !formData.promotion_id"
                @click="toNextStep">
                Suivant
              </Button>
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
                      autocomplete="off" v-bind="componentField" />
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
                      autocomplete="off" v-bind="componentField" />
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
                    autocomplete="off" v-bind="componentField" />
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
                      autocomplete="off" v-bind="componentField" />
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
                      autocomplete="off" v-bind="componentField" />
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
                    autocomplete="off" v-bind="componentField" />
                </FormControl>
                <FormMessage class="text-xs text-red-500" />
              </FormItem>
            </FormField>

            <div class="flex justify-between items-center space-y-2 w-full">
              <Button variant="outline"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                @click="toPreviousStep">
                Precedent
              </Button>
              <Button variant="outline" type="submit"
                class="p-2.5 bg-emerald-500 rounded text-white hover:bg-emerald-700 hover:text-white font-semibold text-sm 2xl:text-md uppercase border-none"
                >
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
import { reactive, ref, watch, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useDataStore } from "~/stores/data";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { createReusableTemplate, useMediaQuery } from "@vueuse/core";
import { toast } from "vue-sonner";
import type { Faculty, Promotion } from "~/types/models";

useHead({
  title: "Wakati App | register",
});

const authStore = useAuthStore();
const dataStore = useDataStore();
const router = useRouter();
const currentStep = ref(1);

const [UseTemplate, UniversityList] = createReusableTemplate();
const isDesktop = useMediaQuery("(min-width: 768px)");

const disabled = ref(true);
const isOpen = ref(false);
const isFacultyOpen = ref(false);
const isPromotionOpen = ref(false);
const selectedUniversity = ref('')
const selectedFaculty = ref('')
const selectedPromotion = ref('')
const faculties = ref<Faculty[]>([])
const promotions = ref<Promotion[]>([])
const formData = reactive({
  university_id: null as number | null,
  faculty_id: null as number | null,
  promotion_id: null as number | null,
});

const formSchema = toTypedSchema(
  z
    .object({
      name: z
        .string()
        .min(1, { message: 'Champ obligatoire' })
        .min(3, "Minimum 3 caractères"),
      username: z
        .string()
        .min(1, { message: 'Champ obligatoire' })
        .min(3, "Minimum 3 caractères"),
      email: z
        .string()
        .min(1, { message: 'Champ obligatoire' })
        .email("Cet email est invalide"),
      phone: z
        .string()
        .min(1, { message: 'Champ obligatoire' })
        .min(10, "Minimum 10 chiffres")
        .max(15, "Maximum 15 chiffres")
        .regex(/^\d+$/, "Ne doit contenir que des chiffres"),
      password: z
        .string()
        .min(1, { message: 'Champ obligatoire' })
        .min(8, "Minimum 8 caractères")
        .regex(/[A-Z]/, "Au moins une majuscule")
        .regex(/\d/, "Au moins un chiffre")
        .regex(/[!$@#?&*%]/, "Au moins un caractère spécial"),
      password_confirmation: z.string().min(1, { message: 'Champ obligatoire' }),
    })
    .refine((data) => data.password === data.password_confirmation, {
      path: ["password_confirmation"],
      message: "Mot de passe différents",
    })
);

watch(
  () => formData.university_id,
  (newUniversityId) => {
    if (newUniversityId) {
      faculties.value = dataStore.getFacultiesByUniversity(newUniversityId);
      formData.faculty_id = null;
      disabled.value = false;
      promotions.value = [];
    }
  }
);

watch(
  () => formData.faculty_id,
  (newFacultyId) => {
    if (newFacultyId) {
      promotions.value = dataStore.getPromotionsByFaculty(newFacultyId);
      formData.promotion_id = null;
      disabled.value = false;
    }
  }
);

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
});
const toPreviousStep = () => {
  currentStep.value--;
};

const toNextStep = () => {
  currentStep.value++;
};

const onSubmit = handleSubmit((values) => {
  const result = authStore.registerStudent({
    name: values.name,
    username: values.username,
    email: values.email,
    password: values.password,
    password_confirmation: values.password_confirmation,
    phone: values.phone,
    university_id: formData.university_id as number,
    promotion_id: formData.promotion_id as number,
    type: "student"
  })
  console.log(formData, values)
  
  if(result.success) {
    router.push(`students/${values.username}`)
  }
})

</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
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
