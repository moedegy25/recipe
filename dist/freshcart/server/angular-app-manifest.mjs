
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/meals",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/meals"
  },
  {
    "renderMode": 2,
    "route": "/Ingredients"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6112, hash: '6fa52e854aaa63f436b54e6c6c2cb25c06396d73fb378f4c20dd948307ff07a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1070, hash: '192210b9fcd3821af072a60bf36a32a5cfe1889745213f94a93b616ce5b9867a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Ingredients/index.html': {size: 19758, hash: '1c16d7db90c29efdf6628fb3a8efb2cdabb3e97b4a2700e41a283afc9fb41bd6', text: () => import('./assets-chunks/Ingredients_index_html.mjs').then(m => m.default)},
    'meals/index.html': {size: 117867, hash: 'b83d64182d7e4ce053dfb9faa635528c028b039be14e2a6fbd785df43b8254e5', text: () => import('./assets-chunks/meals_index_html.mjs').then(m => m.default)},
    'styles-JAFVDV57.css': {size: 101805, hash: 'IKbwzp5Ek0g', text: () => import('./assets-chunks/styles-JAFVDV57_css.mjs').then(m => m.default)}
  },
};
