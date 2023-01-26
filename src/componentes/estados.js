import {TYPES} from "./acciones"

export const estadoInicial = {
    products: [
        // {id: 1, nombre:"Producto A", precio: 200, envio: "Envio Gratis", src: "https://img.freepik.com/psd-gratis/frente-camiseta-negra-aislada_125540-1167.jpg?w=2000"},
        // {id: 2, nombre:"Producto B", precio: 550, envio: "Envio Full", src: "https://img.freepik.com/foto-gratis/gorra-negra-aislada_125540-1023.jpg?w=2000"},
        // {id: 3, nombre:"Producto C", precio: 230, envio: "Envio Al Contado", src: "https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png"},
        // {id: 4, nombre:"Producto D", precio: 602, envio: "Envio Gratis", src: "https://w7.pngwing.com/pngs/614/591/png-transparent-blue-washed-denim-pants-carpenter-jeans-trousers-denim-slim-fit-pants-blue-jeans-blue-fashion-vintage-clothing.png"},
        // {id: 5, nombre:"Producto E", precio: 700, envio: "Envio Al Contado", src: "https://thumbs.dreamstime.com/b/guantes-del-invierno-16669507.jpg"},
        // {id: 6, nombre:"Producto F", precio: 451, envio: "Envio Full", src: "https://images.squarespace-cdn.com/content/v1/5357f654e4b08052edaaee4b/1478367782131-VABUF2QN84ZI49YBDU5C/boxercraft-grey-womens-sweat-shorts.jpg"},
        // {id: 7, nombre:"Producto G", precio: 129, envio: "Envio Al Contado", src: "https://img.freepik.com/foto-gratis/par-entrenadores_144627-3800.jpg?w=2000"},
        // {id: 8, nombre:"Producto H", precio: 320, envio: "Envio Gratis", src: "https://img.freepik.com/foto-gratis/zapatos-marrones-aislados-sobre-fondo-blanco-estudio_268835-1354.jpg?w=2000"},
        // {id: 9, nombre:"Producto I", precio: 450, envio: "Envio Full", src: "https://http2.mlstatic.com/D_NQ_NP_943174-MLA31037401882_062019-W.jpg"}
    ], 
    carrito: []
}

export function estadoCambiante (state, action) {
    switch (action.type) {
        case TYPES.LEER_ESTADO: {
            return {
                ...state,
                products: action.payload[0],
                carrito: action.payload[1]
            }
        }
        case TYPES.METER_AL_CARRITO: {
            const nuevoItem = state.products.find( (producto) => producto.id === action.payload)
            // console.log(nuevoItem)

            const itemEnCarrito = state.carrito.find((item) => item.id === nuevoItem.id)

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map((item) => item.id === nuevoItem.id ? {...item, quantity: item.quantity + 1} : item)
            } 
            : {
                ...state,
                carrito: [...state.carrito, {...nuevoItem, quantity: 1}],
            }
        }
        case TYPES.SACAR_DEL_CARRITO: {
            const sacarUnItem = state.carrito.find((item) => item.id === action.payload)
            
            return sacarUnItem.quantity > 1 ? {
                ...state,
                carrito: state.carrito.map((item) => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            } : {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.SACAR_TODO_ITEM: { 
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.LIMPIAR_CARRITO: {
            return {
                ...state,
                carrito: []
            }
        }
        // case TYPES.CONTADOR_PRODUCTOS: { 
        //     const sumarTodo = state.carrito.map((item) => item.precio !== action.payload)
            
        //     return sumarTodo = {
        //         ...state,
        //         carrito: [...state.carrito],
        //     }
        // }
        default: 
            return state;
    }
}