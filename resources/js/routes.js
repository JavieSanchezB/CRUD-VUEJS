// import App from './components/App.vue';
import AllProduct from '../components/AllProduct.vue';
import CreateProduct from '../components/CreateProduct.vue';
import EditProduct from '../components/EditProduct.vue';
 
export const routes = [
    // {
    //     name: 'app',
    //     path: '/',
    //     component: App
    // },
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];