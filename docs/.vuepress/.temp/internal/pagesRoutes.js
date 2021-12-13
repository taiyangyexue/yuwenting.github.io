import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-602a880a","/css/blackWhite.html","",["/css/blackWhite","/css/blackWhite.md"]],
  ["v-3da1c7f5","/css/home.html","",["/css/home","/css/home.md"]],
  ["v-7a22bd2f","/html/home.html","",["/html/home","/html/home.md"]],
  ["v-7572ba74","/node/home.html","",["/node/home","/node/home.md"]],
  ["v-e9dd60e6","/js/home.html","",["/js/home","/js/home.md"]],
  ["v-cb4f7eba","/subdirectory/subdirectory.html","",["/subdirectory/subdirectory","/subdirectory/subdirectory.md"]],
  ["v-47867090","/vue/home.html","",["/vue/home","/vue/home.md"]],
  ["v-6aa0d1da","/vue/vuepress.html","",["/vue/vuepress","/vue/vuepress.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
