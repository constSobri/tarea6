let compras = ['Leche', 'Huevos', 'Mantequilla', 'Platano', 'Tomate']

compras.push('Aceite Girasol')

const peliculas = [
    {
        titulo : 'Titanic',
        director : 'James Cameron',
        fecha : new Date('1998, 01, 01')
    },
    {
        titulo : 'La lista de Schindler',
        director : 'Steven Spielberg',
        fecha : new Date('1994, 02, 04')
    },
    {
        titulo : 'La vida es bella',
        director : 'Roberto Benigni',
        fecha : new Date('1997, 12, 20')
    }
]


const despuesDe = new Array(peliculas.filter(valor => valor.fecha > new Date('1995, 01, 01')))
const directores = new Array(peliculas.map(valor => `${valor.director}`))
const titulos = new Array(peliculas.map(valor => `${valor.titulo}`))

const listaDirectoresTitulos = new Array(directores.concat(titulos))
const listaDirTitPropagacion = new Array(...directores, ...titulos)

console.log(listaDirTitPropagacion)