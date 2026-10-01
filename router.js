const {createRouter, createWebHashHistory, useRoute} = VueRouter;

const routes = [
    {path: '', redirect: '/home'},
    {path: '/home', component: HomeView},
    {path: '/about', component: AboutView},
    {path: '/projects', component: ProjectsView},
    {path: '/education', component: EducationView},
    {path: '/contact', component: ContactView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});