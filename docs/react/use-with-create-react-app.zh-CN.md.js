webpackJsonp([105],{

/***/ 1925:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "安装和初始化"
    ],
    [
      "p",
      "我们需要在命令行中安装 create-react-app 工具，你可能还需要安装 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yarnpkg/yarn/"
        },
        "yarn"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g create-react-app yarn"
      },
      [
        "code",
        "$ npm install -g create-react-app yarn"
      ]
    ],
    [
      "p",
      "然后新建一个项目。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ create-react-app antd-demo"
      },
      [
        "code",
        "$ create-react-app antd-demo"
      ]
    ],
    [
      "p",
      "工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。"
    ],
    [
      "p",
      "然后我们进入项目并启动。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">cd</span> antd-demo\n$ yarn start"
      },
      [
        "code",
        "$ cd antd-demo\n$ yarn start"
      ]
    ],
    [
      "p",
      "此时浏览器会访问 ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:3000/"
        },
        "http://localhost:3000/"
      ],
      " ，看到 ",
      [
        "code",
        "Welcome to React"
      ],
      " 的界面就算成功了。"
    ],
    [
      "h2",
      "引入 antd"
    ],
    [
      "p",
      "这是 create-react-app 生成的默认目录结构。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "├── README<span class=\"token punctuation\">.</span>md\n├── package<span class=\"token punctuation\">.</span>json\n├── public\n│   ├── favicon<span class=\"token punctuation\">.</span>ico\n│   └── index<span class=\"token punctuation\">.</span>html\n├── src\n│   ├── App<span class=\"token punctuation\">.</span>css\n│   ├── App<span class=\"token punctuation\">.</span>js\n│   ├── App<span class=\"token punctuation\">.</span>test<span class=\"token punctuation\">.</span>js\n│   ├── index<span class=\"token punctuation\">.</span>css\n│   ├── index<span class=\"token punctuation\">.</span>js\n│   └── logo<span class=\"token punctuation\">.</span>svg\n└── yarn<span class=\"token punctuation\">.</span>lock"
      },
      [
        "code",
        "├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"
      ]
    ],
    [
      "p",
      "现在从 yarn 或 npm 安装并引入 antd。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add antd"
      },
      [
        "code",
        "$ yarn add antd"
      ]
    ],
    [
      "p",
      "修改 ",
      [
        "code",
        "src/App.js"
      ],
      "，引入 antd 的按钮组件。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> Component <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./App.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>App<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> App<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import React, { Component } from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"
      ]
    ],
    [
      "p",
      "修改 ",
      [
        "code",
        "src/App.css"
      ],
      "，在文件顶部引入 ",
      [
        "code",
        "antd/dist/antd.css"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">'~antd/dist/antd.css'</span><span class=\"token punctuation\">;</span></span>\n\n<span class=\"token selector\"><span class=\"token class\">.App</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token number\">...</span>"
      },
      [
        "code",
        "@import '~antd/dist/antd.css';\n\n.App {\n  text-align: center;\n}\n\n..."
      ]
    ],
    [
      "p",
      "好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"
        },
        "官方文档"
      ],
      "。"
    ],
    [
      "h2",
      "高级配置"
    ],
    [
      "p",
      "我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。"
    ],
    [
      "p",
      "此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/timarney/react-app-rewired"
        },
        "react-app-rewired"
      ],
      " （一个对 create-react-app 进行自定义配置的社区解决方案）。"
    ],
    [
      "p",
      "引入 react-app-rewired 并修改 package.json 里的启动配置。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "$ yarn add react<span class=\"token operator\">-</span>app<span class=\"token operator\">-</span>rewired"
      },
      [
        "code",
        "$ yarn add react-app-rewired"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "/* package.json */\n\"scripts\": {\n<span class=\"token deleted\">-   \"start\": \"react-scripts start\",</span>\n<span class=\"token inserted\">+   \"start\": \"react-app-rewired start\",</span>\n<span class=\"token deleted\">-   \"build\": \"react-scripts build\",</span>\n<span class=\"token inserted\">+   \"build\": \"react-app-rewired build\",</span>\n<span class=\"token deleted\">-   \"test\": \"react-scripts test\",</span>\n<span class=\"token inserted\">+   \"test\": \"react-app-rewired test\",</span>\n}"
      },
      [
        "code",
        "/* package.json */\n\"scripts\": {\n-   \"start\": \"react-scripts start\",\n+   \"start\": \"react-app-rewired start\",\n-   \"build\": \"react-scripts build\",\n+   \"build\": \"react-app-rewired build\",\n-   \"test\": \"react-scripts test\",\n+   \"test\": \"react-app-rewired test\",\n}"
      ]
    ],
    [
      "p",
      "然后在项目根目录创建一个 ",
      [
        "code",
        "config-overrides.js"
      ],
      " 用于修改默认配置。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token function\">override</span><span class=\"token punctuation\">(</span>config<span class=\"token punctuation\">,</span> env<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// do stuff with the webpack config...</span>\n  <span class=\"token keyword\">return</span> config<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"
      ]
    ],
    [
      "h3",
      "使用 babel-plugin-import"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/babel-plugin-import"
        },
        "babel-plugin-import"
      ],
      " 是一个用于按需加载组件代码和样式的 babel 插件（",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/getting-started#按需加载"
        },
        "原理"
      ],
      "），现在我们尝试安装它并修改 ",
      [
        "code",
        "config-overrides.js"
      ],
      " 文件。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add babel-plugin-import"
      },
      [
        "code",
        "$ yarn add babel-plugin-import"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(</span>\n<span class=\"token inserted\">+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],</span>\n<span class=\"token inserted\">+     config,</span>\n<span class=\"token inserted\">+   );</span>\n    return config;\n  };"
      },
      [
        "code",
        "+ const { injectBabelPlugin } = require('react-app-rewired');\n\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(\n+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],\n+     config,\n+   );\n    return config;\n  };"
      ]
    ],
    [
      "p",
      "然后移除前面在 ",
      [
        "code",
        "src/App.css"
      ],
      " 里全量添加的 ",
      [
        "code",
        "@import '~antd/dist/antd.css';"
      ],
      " 样式代码，并且按下面的格式引入模块。"
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "  // src/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'antd/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'antd';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"
      },
      [
        "code",
        "  // src/App.js\n  import React, { Component } from 'react';\n- import Button from 'antd/lib/button';\n+ import { Button } from 'antd';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"
      ]
    ],
    [
      "p",
      "最后重启 ",
      [
        "code",
        "yarn start"
      ],
      " 访问页面，antd 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的",
      [
        "a",
        {
          "title": null,
          "href": "https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"
        },
        "警告信息"
      ],
      "。关于按需加载的原理和其他方式可以阅读",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/getting-started#按需加载"
        },
        "这里"
      ],
      "。"
    ],
    [
      "h3",
      "自定义主题"
    ],
    [
      "p",
      "按照 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/customize-theme"
        },
        "配置主题"
      ],
      " 的要求，自定义主题需要用到 less 变量覆盖功能。我们可以引入 react-app-rewire 的 less 插件 ",
      [
        "a",
        {
          "title": null,
          "href": "http://npmjs.com/react-app-rewire-less"
        },
        "react-app-rewire-less"
      ],
      " 来帮助加载 less 样式，同时修改 ",
      [
        "code",
        "config-overrides.js"
      ],
      " 文件。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn add react-app-rewire-less"
      },
      [
        "code",
        "$ yarn add react-app-rewire-less"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "  const { injectBabelPlugin } = require('react-app-rewired');\n<span class=\"token inserted\">+ const rewireLess = require('react-app-rewire-less');</span>\n\n  module.exports = function override(config, env) {\n    config = injectBabelPlugin(\n<span class=\"token deleted\">-     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],</span>\n<span class=\"token inserted\">+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less</span>\n      config,\n    );\n<span class=\"token inserted\">+   config = rewireLess.withLoaderOptions({</span>\n<span class=\"token inserted\">+     modifyVars: { \"@primary-color\": \"#1DA57A\" },</span>\n<span class=\"token inserted\">+     javascriptEnabled: true,</span>\n<span class=\"token inserted\">+   })(config, env);</span>\n    return config;\n  };"
      },
      [
        "code",
        "  const { injectBabelPlugin } = require('react-app-rewired');\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config, env) {\n    config = injectBabelPlugin(\n-     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],\n+     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less\n      config,\n    );\n+   config = rewireLess.withLoaderOptions({\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+     javascriptEnabled: true,\n+   })(config, env);\n    return config;\n  };"
      ]
    ],
    [
      "p",
      "这里利用了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/webpack/less-loader#less-options"
        },
        "less-loader"
      ],
      " 的 ",
      [
        "code",
        "modifyVars"
      ],
      " 来进行主题配置，\n变量和其他配置方式可以参考 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/customize-theme"
        },
        "配置主题"
      ],
      " 文档。"
    ],
    [
      "p",
      "修改后重启 ",
      [
        "code",
        "yarn start"
      ],
      "，如果看到一个绿色的按钮就说明配置成功了。"
    ],
    [
      "h2",
      "eject"
    ],
    [
      "p",
      "你也可以使用 create-react-app 提供的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup"
        },
        "yarn run eject"
      ],
      " 命令将所有内建的配置暴露出来。不过这种配置方式需要你自行探索，不在本文讨论范围内。"
    ],
    [
      "h2",
      "源码和其他脚手架"
    ],
    [
      "p",
      "以上是在 create-react-app 中使用 antd 的相关实践，你也可以借鉴此文的做法在自己的 webpack 工作流中使用 antd，更多 webpack 配置可参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"
        },
        "atool-build"
      ],
      "。（例如加入 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L90"
        },
        "moment noParse"
      ],
      " 避免加载所有语言文件）"
    ],
    [
      "p",
      "React 生态圈中还有很多优秀的脚手架，使用它们并引入 antd 时，你可能会遇到一些问题，下面是一些著名脚手架使用 antd 的范例，包括本文的 create-react-app。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/react-boilerplate"
            },
            "react-boilerplate/react-boilerplate"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/react-starter-kit"
            },
            "kriasoft/react-starter-kit"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/create-react-app-antd"
            },
            "create-react-app-antd"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/comerc/cra-ts-antd"
            },
            "cra-ts-antd"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/zeit/next.js/tree/master/examples/with-ant-design"
            },
            "next.js"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/insin/nwb-examples/tree/master/react-app-antd"
            },
            "nwb"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 3,
    "title": "在 create-react-app 中使用",
    "filename": "docs/react/use-with-create-react-app.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app"
        },
        "create-react-app"
      ],
      " 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#安装和初始化",
          "title": "安装和初始化"
        },
        "安装和初始化"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#引入-antd",
          "title": "引入 antd"
        },
        "引入 antd"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#高级配置",
          "title": "高级配置"
        },
        "高级配置"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#eject",
          "title": "eject"
        },
        "eject"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#源码和其他脚手架",
          "title": "源码和其他脚手架"
        },
        "源码和其他脚手架"
      ]
    ]
  ]
};

/***/ })

});