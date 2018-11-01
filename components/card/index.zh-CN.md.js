webpackJsonp([211],{

/***/ 1776:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "通用卡片容器。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。"
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "title": "Card",
    "subtitle": "卡片",
    "cols": 1,
    "filename": "components/card/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "pre",
      {
        "lang": "html",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Card</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>卡片标题<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>卡片内容<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Card title=\"卡片标题\">卡片内容</Card>"
      ]
    ],
    [
      "h3",
      "Card"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "actions"
          ],
          [
            "td",
            "卡片操作组，位置在卡片底部"
          ],
          [
            "td",
            "Array",
            [
              "reactnode"
            ]
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "activeTabKey"
          ],
          [
            "td",
            "当前激活页签的 key"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "headStyle"
          ],
          [
            "td",
            "自定义标题区域样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "bodyStyle"
          ],
          [
            "td",
            "内容区域自定义样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "bordered"
          ],
          [
            "td",
            "是否有边框"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "cover"
          ],
          [
            "td",
            "卡片封面"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultActiveTabKey"
          ],
          [
            "td",
            "初始化选中页签的 key，如果没有设置 activeTabKey"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "第一个页签"
          ]
        ],
        [
          "tr",
          [
            "td",
            "extra"
          ],
          [
            "td",
            "卡片右上角的操作区域"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hoverable"
          ],
          [
            "td",
            "鼠标移过时可浮起"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "loading"
          ],
          [
            "td",
            "当卡片内容还在加载中时，可以用 loading 展示一个占位"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabList"
          ],
          [
            "td",
            "页签标题列表"
          ],
          [
            "td",
            "Array",
            "<",
            "{key: string, tab: ReactNode}>"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "卡片标题"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "卡片类型，可设置为 ",
            [
              "code",
              "inner"
            ],
            " 或 不设置"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onTabChange"
          ],
          [
            "td",
            "页签切换的回调"
          ],
          [
            "td",
            "(key) => void"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Card.Grid"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "网格容器类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "定义网格容器类名的样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Card.Meta"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "avatar"
          ],
          [
            "td",
            "头像/图标"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "容器类名"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "description"
          ],
          [
            "td",
            "描述内容"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "定义容器类名的样式"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "标题内容"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});