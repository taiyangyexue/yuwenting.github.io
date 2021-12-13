export const data = {
  "key": "v-f50773ac",
  "path": "/new/testcopy.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "testcopy",
      "slug": "testcopy",
      "children": []
    }
  ],
  "filePathRelative": "new/testcopy.md",
  "git": {
    "updatedTime": 1638343298000,
    "contributors": [
      {
        "name": "yuwenting",
        "email": "yuwenting@fehorizon.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
