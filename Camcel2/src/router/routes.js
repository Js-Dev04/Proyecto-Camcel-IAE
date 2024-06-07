const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') }
    ]
  },
  {
    path: '/log/',
    component: () => import('pages/InicioSesion.vue'),
    
  },
  {
    path: '/reg/',
    component: () => import('pages/Registro.vue'),
    
  },
  {
    path: '/uno/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  },
  {
    path: '/crear/documentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  },
  {
    path: '/inicio/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Inicio.vue') }
    ]
  },
  {
    path: '/calendario/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  }, {
    path: '/cuenta/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  }, {
    path: '/empresas/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  }, {
    path: '/documentos/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Pagina1.vue') }
    ]
  },
]

export default routes
