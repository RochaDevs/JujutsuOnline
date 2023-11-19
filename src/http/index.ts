import axios from "axios";

export const httpCapas = axios.create({
    baseURL: 'https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capas'
})

export const httpCapitulos = axios.create({
    baseURL: 'https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/capitulos'
})

export const httpUsuarios = axios.create({
    baseURL: 'https://65495bd0dd8ebcd4ab248482.mockapi.io/manga/usuarios'
})
