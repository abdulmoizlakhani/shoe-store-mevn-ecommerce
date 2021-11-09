import Vue from "vue";
import VueRouter from "vue-router";

// Components
import CartPage from "../views/CartPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
  },
  {
    path: "/products/:id",
    name: "Product Details Page",
    component: ProductDetailPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage,
  },
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
