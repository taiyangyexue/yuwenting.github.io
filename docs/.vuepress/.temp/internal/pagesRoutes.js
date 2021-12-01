import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-10ef25a3","/feedback/feedback.html","",["/feedback/feedback","/feedback/feedback.md"]],
  ["v-bef35102","/new/test.html","",["/new/test","/new/test.md"]],
  ["v-f50773ac","/new/testcopy.html","",["/new/testcopy","/new/testcopy.md"]],
  ["v-1500d063","/news/","",["/news/index.html","/news/README.md"]],
  ["v-153d8f20","/role/","",["/role/index.html","/role/index.md"]],
  ["v-20110f03","/role/role.html","",["/role/role","/role/role.md"]],
  ["v-422a5982","/web/demo.html","",["/web/demo","/web/demo.md"]],
  ["v-744e6dd4","/web/","",["/web/index.html","/web/index.md"]],
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
