import { defineStore } from "pinia";
import type {
  Admin,
  User,
  Student,
  Account,
  University,
  Faculty,
  Promotion,
} from "~/types/models";

export const useDataStore = defineStore("data", {
  state: () => ({
    admins: [{ id: 1 }] as Admin[],
    users: [
      {
        id: 1,
        name: "Jemima Anyikoy",
        username: "janyla",
        email: "jemima.anyikoy11@gmail.com",
        password: "Janyla2@",
        phone: "0825064872",
      },
      {
        id: 2,
        name: "Marina Kaniki",
        username: "flexy",
        email: "flexybxbx@gmail.com",
        password: "FlexyBxBx2@",
        phone: "0975064872",
      },
      {
        id: 3,
        name: "Lionel Kaniki",
        username: "mr-leo",
        email: "lionnelkaniki44@gmail.com",
        password: "MrLeo2023@",
        phone: "0821102608",
      },
    ] as User[],
    students: [
      { id: 1, promotion_id: 1, university_id: 1 },
      { id: 2, promotion_id: 16, university_id: 6 },
    ] as Student[],
    universities: [
      { id: 1, name: "Université de Kinshasa", sigle: "unikin" },
      { id: 2, name: "Université Libre de Kinshasa", sigle: "ulk" },
      { id: 3, name: "Leadership Academia University", sigle: "lau" },
      { id: 4, name: "Université Catholique au Congo", sigle: "ucc" },
      { id: 5, name: "Université Loyola", sigle: "ulc-icam" },
      { id: 6, name: "Université Simon Kimbangu", sigle: "usk" },
      { id: 7, name: "Haute Ecole de Commerce/Kin", sigle: "hec-kin" },
      {
        id: 8,
        name: "Institut Supérieur d'Informatique Programmation et Analyse/Kin",
        sigle: "isipa-kin",
      },
      { id: 9, name: "Université Pédagogique Nationale", sigle: "upn" },
      {
        id: 10,
        name: "Institut Nation du Batiment et Travaux Publics",
        sigle: "inbtp",
      },
      {
        id: 11,
        name: "Institut Supérieur des Techniques Appliquées",
        sigle: "ista",
      },
      {
        id: 12,
        name: "Institut Supérieur Pédagogique/Gombe",
        sigle: "isp/gombe",
      },
      { id: 13, name: "Université Nouveaux-Horizons", sigle: "unh" },
    ] as University[],
    faculties: [
      {
        id: 1,
        name: "Droit",
        sigle: "droit",
        universities: [1, 2, 3, 4, 6, 9, 13],
      },
      {
        id: 2,
        name: "Sciences",
        sigle: "fds",
        universities: [1, 2, 3, 4, 6, 9, 13],
      },
      { id: 3, name: "Sciences Economiques", sigle: "fdse", universities: [] },
      {
        id: 4,
        name: "Polytechnique",
        sigle: "fdp",
        universities: [1, 13, 5, 3],
      },
      { id: 5, name: "Pétrole et Gaz", sigle: "fdp&g", universities: [1, 3] },
      { id: 6, name: "Urbanisation", sigle: "urba", universities: [10] },
      { id: 7, name: "Informatique", sigle: "dpi", universities: [2, 8, 5, 7] },
      { id: 8, name: "Electronique", sigle: "dpelectro", universities: [11] },
      { id: 9, name: "Electricité", sigle: "dpelec", universities: [11] },
      { id: 10, name: "Mécanique", sigle: "dpmec", universities: [11] },
      { id: 11, name: "Génie civil", sigle: "dpgc", universities: [10] },
      { id: 12, name: "Communication", sigle: "fdsc", universities: [3, 4, 9] },
      { id: 13, name: "Médécine", sigle: "fdmed", universities: [1, 4, 6] },
      { id: 14, name: "Marketing", sigle: "dpmark", universities: [7] },
      {
        id: 15,
        name: "Hotellerie et tourisme",
        sigle: "dphot",
        universities: [12],
      },
      {
        id: 16,
        name: "Gestion des Entreprise & RH",
        sigle: "dprh",
        universities: [1, 12],
      },
      {
        id: 17,
        name: "Sciences comptable",
        sigle: "dpcompta",
        universities: [7, 12],
      },
    ] as Faculty[],
    promotions: [
      { id: 1, name: "L1 Droit", sigle: "l1droit", faculty_id: 1 },
      { id: 2, name: "L2 Droit", sigle: "l2droit", faculty_id: 1 },
      { id: 3, name: "L3 Droit", sigle: "l3droit", faculty_id: 1 },
      { id: 4, name: "M1 Droit", sigle: "m1droit", faculty_id: 1 },
      { id: 5, name: "M2 Droit", sigle: "m2droit", faculty_id: 1 },
      { id: 6, name: "L1 Economie", sigle: "l1eco", faculty_id: 3 },
      { id: 7, name: "L2 BTP", sigle: "l2btp", faculty_id: 11 },
      { id: 8, name: "L3 Mécanique", sigle: "l3meca", faculty_id: 10 },
      {
        id: 9,
        name: "M1 Communication sociale",
        sigle: "m1cs",
        faculty_id: 12,
      },
      {
        id: 10,
        name: "M2 Droit Privé Judiciaire",
        sigle: "m2dpj",
        faculty_id: 1,
      },
      { id: 11, name: "L1 Electricité", sigle: "l1elec", faculty_id: 8 },
      { id: 12, name: "L2 Marketing", sigle: "l2market", faculty_id: 14 },
      { id: 13, name: "L3 Réseaux", sigle: "l3rx", faculty_id: 7 },
      {
        id: 14,
        name: "M1 Gestion des Entreprises",
        sigle: "m1ge",
        faculty_id: 16,
      },
      { id: 15, name: "M2 Comptabilité", sigle: "m2compta", faculty_id: 17 },
      {
        id: 16,
        name: "D4 Médécine interne",
        sigle: "d4medint",
        faculty_id: 13,
      },
      { id: 17, name: "L3 Raffinage", sigle: "l3rafin", faculty_id: 5 },
      { id: 18, name: "L1 ELectronique", sigle: "l1electro", faculty_id: 8 },
    ] as Promotion[],
    accounts: [
      {
        id: 1,
        user_id: 1,
        accountable: { type: "student", id: 1 },
        is_active: true,
      },
      {
        id: 2,
        user_id: 2,
        accountable: { type: "student", id: 2 },
        is_active: true,
      },
      {
        id: 3,
        user_id: 3,
        accountable: { type: "admin", id: 1 },
        is_active: true,
      },
    ] as Account[],
  }),
  actions: {
    getFacultiesByUniversity(university_id: number): Faculty[] {
      return this.faculties.filter((faculty) =>
        faculty.universities.includes(university_id)
      );
    },
    getPromotionsByFaculty(faculty_id: number): Promotion[] {
      return this.promotions.filter(
        (promotion) => promotion.faculty_id === faculty_id
      );
    },
  },
});
