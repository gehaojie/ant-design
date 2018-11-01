webpackJsonp([107],{

/***/ 1923:
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
      "请确保电脑上已经安装了最新版的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://yarnpkg.com"
        },
        "yarn"
      ],
      " 或者 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/"
        },
        "npm"
      ],
      "。"
    ],
    [
      "p",
      "使用 yarn 创建项目。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn create react-app antd-demo-ts --scripts-version<span class=\"token operator\">=</span>react-scripts-ts"
      },
      [
        "code",
        "$ yarn create react-app antd-demo-ts --scripts-version=react-scripts-ts"
      ]
    ],
    [
      "p",
      "如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version<span class=\"token operator\">=</span>react-scripts-ts"
      },
      [
        "code",
        "$ npm install -g create-react-app\n$ create-react-app antd-demo-ts --scripts-version=react-scripts-ts"
      ]
    ],
    [
      "p",
      "然后我们进入项目并启动。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">cd</span> antd-demo-ts\n$ yarn start"
      },
      [
        "code",
        "$ cd antd-demo-ts\n$ yarn start"
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
        "src/App.tsx"
      ],
      "，引入 antd 的按钮组件。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token operator\">*</span> <span class=\"token keyword\">as</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/button'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./App.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>App<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> App<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import * as React from 'react';\nimport Button from 'antd/lib/button';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"
      ]
    ],
    [
      "p",
      "修改 ",
      [
        "code",
        "src/App.css"
      ],
      " 引入 antd 的样式。"
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
      "重新启动 ",
      [
        "code",
        "yarn start"
      ],
      "，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的",
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
        "highlighted": "$ yarn add react<span class=\"token operator\">-</span>app<span class=\"token operator\">-</span>rewired <span class=\"token operator\">-</span><span class=\"token operator\">-</span>dev"
      },
      [
        "code",
        "$ yarn add react-app-rewired --dev"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "/* package.json */\n\"scripts\": {\n<span class=\"token deleted\">-   \"start\": \"react-scripts-ts start\",</span>\n<span class=\"token inserted\">+   \"start\": \"react-app-rewired start --scripts-version react-scripts-ts\",</span>\n<span class=\"token deleted\">-   \"build\": \"react-scripts-ts build\",</span>\n<span class=\"token inserted\">+   \"build\": \"react-app-rewired build --scripts-version react-scripts-ts\",</span>\n<span class=\"token deleted\">-   \"test\": \"react-scripts-ts test --env=jsdom\",</span>\n<span class=\"token inserted\">+   \"test\": \"react-app-rewired test --env=jsdom --scripts-version react-scripts-ts\",</span>\n}"
      },
      [
        "code",
        "/* package.json */\n\"scripts\": {\n-   \"start\": \"react-scripts-ts start\",\n+   \"start\": \"react-app-rewired start --scripts-version react-scripts-ts\",\n-   \"build\": \"react-scripts-ts build\",\n+   \"build\": \"react-app-rewired build --scripts-version react-scripts-ts\",\n-   \"test\": \"react-scripts-ts test --env=jsdom\",\n+   \"test\": \"react-app-rewired test --env=jsdom --scripts-version react-scripts-ts\",\n}"
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
      "使用 ts-import-plugin"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/Brooooooklyn/ts-import-plugin"
        },
        "ts-import-plugin"
      ],
      " 是一个用于按需加载组件代码和样式的 TypeScript 插件（",
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
        "highlighted": "$ yarn add ts-import-plugin --dev"
      },
      [
        "code",
        "$ yarn add ts-import-plugin --dev"
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">/* config-overrides.js */</span>\n<span class=\"token keyword\">const</span> tsImportPluginFactory <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'ts-import-plugin'</span><span class=\"token punctuation\">)</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getLoader <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"react-app-rewired\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token function\">override</span><span class=\"token punctuation\">(</span>config<span class=\"token punctuation\">,</span> env<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> tsLoader <span class=\"token operator\">=</span> <span class=\"token function\">getLoader</span><span class=\"token punctuation\">(</span>\n    config<span class=\"token punctuation\">.</span>module<span class=\"token punctuation\">.</span>rules<span class=\"token punctuation\">,</span>\n    rule <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n      rule<span class=\"token punctuation\">.</span>loader <span class=\"token operator\">&amp;&amp;</span>\n      <span class=\"token keyword\">typeof</span> rule<span class=\"token punctuation\">.</span>loader <span class=\"token operator\">===</span> <span class=\"token string\">'string'</span> <span class=\"token operator\">&amp;&amp;</span>\n      rule<span class=\"token punctuation\">.</span>loader<span class=\"token punctuation\">.</span><span class=\"token function\">includes</span><span class=\"token punctuation\">(</span><span class=\"token string\">'ts-loader'</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  tsLoader<span class=\"token punctuation\">.</span>options <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    getCustomTransformers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      before<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token function\">tsImportPluginFactory</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        libraryDirectory<span class=\"token punctuation\">:</span> <span class=\"token string\">'es'</span><span class=\"token punctuation\">,</span>\n        libraryName<span class=\"token punctuation\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span>\n        style<span class=\"token punctuation\">:</span> <span class=\"token string\">'css'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">return</span> config<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "/* config-overrides.js */\nconst tsImportPluginFactory = require('ts-import-plugin')\nconst { getLoader } = require(\"react-app-rewired\");\n\nmodule.exports = function override(config, env) {\n  const tsLoader = getLoader(\n    config.module.rules,\n    rule =>\n      rule.loader &&\n      typeof rule.loader === 'string' &&\n      rule.loader.includes('ts-loader')\n  );\n\n  tsLoader.options = {\n    getCustomTransformers: () => ({\n      before: [ tsImportPluginFactory({\n        libraryDirectory: 'es',\n        libraryName: 'antd',\n        style: 'css',\n      }) ]\n    })\n  };\n\n  return config;\n}"
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
        "highlighted": "import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      &lt;div className=\"App\">\n        &lt;Button type=\"primary\">Button&lt;/Button>\n      &lt;/div>\n    );\n  }\n}\n\nexport default App;"
      },
      [
        "code",
        "import * as React from 'react';\nimport { Button } from 'antd';\nimport './App.css';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"
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
        "highlighted": "$ yarn add react-app-rewire-less --dev"
      },
      [
        "code",
        "$ yarn add react-app-rewire-less --dev"
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "  const tsImportPluginFactory = require('ts-import-plugin')\n  const { getLoader } = require(\"react-app-rewired\");\n<span class=\"token inserted\">+ const rewireLess = require('react-app-rewire-less');</span>\n\n  module.exports = function override(config, env) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &amp;&amp;\n        typeof rule.loader === 'string' &amp;&amp;\n        rule.loader.includes('ts-loader')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n<span class=\"token deleted\">-         style: 'css',</span>\n<span class=\"token inserted\">+         style: true,</span>\n        }) ]\n      })\n    };\n\n<span class=\"token inserted\">+   config = rewireLess.withLoaderOptions({</span>\n<span class=\"token inserted\">+     javascriptEnabled: true,</span>\n<span class=\"token inserted\">+     modifyVars: { \"@primary-color\": \"#1DA57A\" },</span>\n<span class=\"token inserted\">+   })(config, env);</span>\n\n    return config;\n  }"
      },
      [
        "code",
        "  const tsImportPluginFactory = require('ts-import-plugin')\n  const { getLoader } = require(\"react-app-rewired\");\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config, env) {\n    const tsLoader = getLoader(\n      config.module.rules,\n      rule =>\n        rule.loader &&\n        typeof rule.loader === 'string' &&\n        rule.loader.includes('ts-loader')\n    );\n\n    tsLoader.options = {\n      getCustomTransformers: () => ({\n        before: [ tsImportPluginFactory({\n          libraryName: 'antd',\n          libraryDirectory: 'es',\n-         style: 'css',\n+         style: true,\n        }) ]\n      })\n    };\n\n+   config = rewireLess.withLoaderOptions({\n+     javascriptEnabled: true,\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+   })(config, env);\n\n    return config;\n  }"
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
      "其他方案"
    ],
    [
      "p",
      "你也可以根据 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/use-with-create-react-app.zh-CN.md"
        },
        "在 create-react-app 中使用"
      ],
      " 的介绍使用 ",
      [
        "span",
        "react-app-rewire-typescript"
      ],
      " 自己来配置 TypeScript 的开发环境。"
    ],
    [
      "p",
      "此外，还可以选择 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/react-scripts-ts-antd"
        },
        "react-scripts-ts-antd"
      ],
      "，其中已经配置好了 ts-import-plugin、react-app-rewired、scss、less 等常用功能。只需一条命令即可生成一个免配置的 TypeScript 项目."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ create-react-app my-project --scripts-version<span class=\"token operator\">=</span>react-scripts-ts-antd"
      },
      [
        "code",
        "$ create-react-app my-project --scripts-version=react-scripts-ts-antd"
      ]
    ],
    [
      "h2",
      "常见问题"
    ],
    [
      "h3",
      "error TS2605: JSX element type Xxx is not a constructor function for JSX elements."
    ],
    [
      "p",
      "antd 3 以前的版本需要在 tsconfig.json 的 ",
      [
        "code",
        "compilerOptions"
      ],
      " 中配置 ",
      [
        "code",
        "\"allowSyntheticDefaultImports\": true"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 4,
    "title": "在 TypeScript 中使用",
    "filename": "docs/react/use-in-typescript.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "使用 ",
      [
        "code",
        "create-react-app"
      ],
      " 一步步地创建一个 TypeScript 项目，并引入 antd。"
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
          "href": "#其他方案",
          "title": "其他方案"
        },
        "其他方案"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#常见问题",
          "title": "常见问题"
        },
        "常见问题"
      ]
    ]
  ]
};

/***/ })

});