webpackJsonp([225],{

/***/ 1754:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "输入框自动完成功能。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "p",
      "需要自动完成时。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "自动完成",
    "type": "Data Entry",
    "cols": 2,
    "title": "AutoComplete",
    "filename": "components/auto-complete/index.zh-CN.md"
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#方法",
          "title": "方法"
        },
        "方法"
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
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'12345'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'23456'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'34567'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span> <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "const dataSource = ['12345', '23456', '34567'];\n<AutoComplete dataSource={dataSource} />"
      ]
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
            "allowClear"
          ],
          [
            "td",
            "支持清除, 单选模式有效"
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
            "autoFocus"
          ],
          [
            "td",
            "自动获取焦点"
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
            "backfill"
          ],
          [
            "td",
            "使用键盘选择选项的时候把选中项回填到输入框中"
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
            "children (自动完成的数据源)"
          ],
          [
            "td",
            "自动完成的数据源"
          ],
          [
            "td",
            "React.ReactElement",
            [
              "optionprops"
            ],
            " / Array",
            "<",
            "React.ReactElement",
            [
              "optionprops"
            ],
            ">"
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
            "children (自定义输入框)"
          ],
          [
            "td",
            "自定义输入框"
          ],
          [
            "td",
            "HTMLInputElement / HTMLTextAreaElement / React.ReactElement",
            [
              "inputprops"
            ]
          ],
          [
            "td",
            [
              "code",
              "<Input />"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "dataSource"
          ],
          [
            "td",
            "自动完成的数据源"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://git.io/vMMKF"
              },
              "DataSourceItemType"
            ],
            "[",
            "]"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultActiveFirstOption"
          ],
          [
            "td",
            "是否默认高亮第一个选项。"
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
            "defaultValue"
          ],
          [
            "td",
            "指定默认选中的条目"
          ],
          [
            "td",
            "string",
            "|",
            "string",
            "[",
            "]",
            "|",
            "{ key: string, label: string",
            "|",
            "ReactNode }",
            "|",
            "Array",
            "<",
            "{ key: string, label: string",
            "|",
            "ReactNode}>"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabled"
          ],
          [
            "td",
            "是否禁用"
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
            "filterOption"
          ],
          [
            "td",
            "是否根据输入项进行筛选。当其为一个函数时，会接收 ",
            [
              "code",
              "inputValue"
            ],
            " ",
            [
              "code",
              "option"
            ],
            " 两个参数，当 ",
            [
              "code",
              "option"
            ],
            " 符合筛选条件时，应返回 ",
            [
              "code",
              "true"
            ],
            "，反之则返回 ",
            [
              "code",
              "false"
            ],
            "。"
          ],
          [
            "td",
            "boolean or function(inputValue, option)"
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
            "optionLabelProp"
          ],
          [
            "td",
            "回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 ",
            [
              "code",
              "value"
            ],
            "。"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "children"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "placeholder"
          ],
          [
            "td",
            "输入框提示"
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
            "value"
          ],
          [
            "td",
            "指定当前选中的条目"
          ],
          [
            "td",
            "string",
            "|",
            "string",
            "[",
            "]",
            "|",
            "{ key: string, label: string",
            "|",
            "ReactNode }",
            "|",
            "Array",
            "<",
            "{ key: string, label: string",
            "|",
            "ReactNode }>"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onBlur"
          ],
          [
            "td",
            "失去焦点时的回调"
          ],
          [
            "td",
            "function()"
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
            "onChange"
          ],
          [
            "td",
            "选中 option，或 input 的 value 变化时，调用此函数"
          ],
          [
            "td",
            "function(value)"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onFocus"
          ],
          [
            "td",
            "获得焦点时的回调"
          ],
          [
            "td",
            "function()"
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
            "onSearch"
          ],
          [
            "td",
            "搜索补全项的时候调用"
          ],
          [
            "td",
            "function(value)"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onSelect"
          ],
          [
            "td",
            "被选中时调用，参数为选中项的 value 值"
          ],
          [
            "td",
            "function(value, option)"
          ],
          [
            "td",
            "无"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultOpen"
          ],
          [
            "td",
            "是否默认展开下拉菜单"
          ],
          [
            "td",
            "boolean"
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
            "open"
          ],
          [
            "td",
            "是否展开下拉菜单"
          ],
          [
            "td",
            "boolean"
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
            "onDropdownVisibleChange"
          ],
          [
            "td",
            "展开下拉菜单的回调"
          ],
          [
            "td",
            "function(open)"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h2",
      "方法"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "名称"
          ],
          [
            "th",
            "描述"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "blur()"
          ],
          [
            "td",
            "移除焦点"
          ]
        ],
        [
          "tr",
          [
            "td",
            "focus()"
          ],
          [
            "td",
            "获取焦点"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});