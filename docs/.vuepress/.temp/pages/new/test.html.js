export const data = {
  "key": "v-bef35102",
  "path": "/new/test.html",
  "title": "",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "test 先试试吧 不知道呢 管他呢",
      "slug": "test-先试试吧-不知道呢-管他呢",
      "children": []
    }
  ],
  "filePathRelative": "new/test.md",
  "git": {
    "updatedTime": 1638775465000,
    "contributors": [
      {
        "name": "yuwenting",
        "email": "yuwenting@fehorizon.com",
        "commits": 3
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
