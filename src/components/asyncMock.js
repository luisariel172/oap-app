const products = [
    { 
        id: '1', 
        name: 'Tarjeta Comunion', 
        price: 700, 
        category: 'souvenir', 
        img:'', 
        stock: 300, 
        description:'Tarjeta de comunion personalizada, con fotografia'
    },
    { id: '2', name: 'Tarjeta Bautismo', price: 800, category: 'souvenir', img:'', stock: 500, description:'Tarjeta de bautismo personalizada, con fotografia'},
    { id: '3', name: 'Tarjeta Cumpleaños', price: 400, category: 'souvenir', img:'', stock: 700, description:'Tarjeta de cumpleaños, con fotografia'},
    { id: '4', name: 'Bandeja Cumpleaños', price: 3500, category: 'bandeja', img:'', stock: 10, description:'Bandeja de cumpleaños, personalizada con hasta 10 fotografias'},
    { id: '5', name: 'Bandeja San Valentin', price: 4000, category: 'bandeja', img:'', stock: 20, description:'Bandeja Dia de los Enamorados, personalizada con hasta 10 fotografias'},
    { id: '6', name: 'Muñeca con cuna', price: 6500, category: 'juguete', img:'', stock: 30, description:'Muñeca articulada con cuna y accesorios.'},
    { id: '7', name: 'Auto chocador', price: 2700, category: 'juguete', img:'', stock: 15, description:'Auto de goma, resistente a golpes fuertes, ideal para niños pequeños.'},
    { id: '8', name: 'Pista de carrera', price: 4800, category: 'juguete', img:'', stock: 5, description:'Pista de carreras, con 5 autos, para mantenerlos entretenidos los dias de lluvia!!'},
    { id: '9', name: 'Escencia con hornito', price: 9700, category: 'perfume', img:'', stock: 25, description:'Escencias de La Pasionaria, para disfrutar en tus ambientes preferidos.'},
    { id: '10', name: 'Atomizador', price: 1700, category: 'perfume', img:'', stock: 8, description:'Atomizador de La Pasionaria, las mejores fregancias para respirar aromas tranquilizantes.'},

]

export const getProducts = (categoryId) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve(categoryId ?  products.filter(prod => prod.category === categoryId) : products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve(products.find(prod => prod.id ===id))
        }, 1000)
    })
}