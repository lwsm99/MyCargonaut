import {createRouter, createWebHistory} from "vue-router";

import home from "@/components/views/homeView"
import profileView from "@/components/views/profileView";
import trackingView from "@/components/views/trackingView";
import myVehicelView from "@/components/views/myVehicelView";
import offerListView from "@/components/views/offerListView";
import createOfferView from "@/components/views/createOfferView";
import loginView from "@/components/views/loginView";
import registerView from "@/components/views/registerView";


const routes =[
    {path: "/", component: home},
    {path: "/profile", component: profileView},
    {path: "/tracking", component: trackingView},
    {path: "/myVehicels", component: myVehicelView},
    {path: "/offers", component: offerListView},
    {path: "/createoffer", component: createOfferView},
    {path: "/login", component: loginView},
    {path: "/register", component: registerView},
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active"
})
export default router;
