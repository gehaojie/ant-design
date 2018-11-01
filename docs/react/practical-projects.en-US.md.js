webpackJsonp([112],{

/***/ 1918:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "In real project development, you might need a data flow solution like Redux or MobX. Ant Design React is a UI library that can be used with any data flow solution and application framework within the React ecosystem. We have launched dva based on Redux, as well as a pluggable enterprise application framework umi, which is recommended for use in your projects."
    ],
    [
      "p",
      "Dva is a lightweight data flow solution based on Redux. The concept comes from elm. It supports side effects, hot module replacement, dynamic loading, react-native, SSR, etc. It has been widely used in production."
    ],
    [
      "p",
      "And ",
      [
        "a",
        {
          "title": null,
          "href": "http://umijs.org/"
        },
        "umi"
      ],
      " is a routing-based framework that supports ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html"
        },
        "next.js-like conventional routing"
      ],
      " and various advanced routing functions, such as ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/en/plugin/umi-plugin-react.html#dynamicimport"
        },
        "routing-level on-demand loading"
      ],
      ". With a complete ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/plugin/"
        },
        "plugin system"
      ],
      " that covers every life cycle from source code to build product, umi is able to support various functional extensions and business needs."
    ],
    [
      "blockquote",
      [
        "p",
        "You may also be interested in ",
        [
          "a",
          {
            "title": null,
            "href": "https://pro.ant.design/"
          },
          "Ant Design Pro"
        ],
        ", an Out-of-box UI solution for enterprise applications based on umi, dva and ant design."
      ]
    ],
    [
      "p",
      "This article will guide you to create a simple application from zero using umi, dva and antd."
    ],
    [
      "h2",
      "Create New App"
    ],
    [
      "p",
      "First create an empty directory,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">mkdir</span> myapp\n$ <span class=\"token function\">cd</span> myapp"
      },
      [
        "code",
        "$ mkdir myapp\n$ cd myapp"
      ]
    ],
    [
      "p",
      "It is recommended to use yarn to create an application and execute the following command."
    ],
    [
      "blockquote",
      [
        "p",
        "If you insist on using npm, execute ",
        [
          "code",
          "npm install -g create-umi && create-umi"
        ],
        " and the effect will be the same."
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn create umi\n\nyarn create v1.12.0\n<span class=\"token punctuation\">[</span>1/4<span class=\"token punctuation\">]</span> 🔍  Resolving packages<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>2/4<span class=\"token punctuation\">]</span> 🚚  Fetching packages<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>3/4<span class=\"token punctuation\">]</span> 🔗  Linking dependencies<span class=\"token punctuation\">..</span>.\n<span class=\"token punctuation\">[</span>4/4<span class=\"token punctuation\">]</span> 📃  Building fresh packages<span class=\"token punctuation\">..</span>.\n\nsuccess Installed <span class=\"token string\">\"create-umi@0.3.1\"</span> with binaries:\n      - create-umi\n\n? What functionality <span class=\"token keyword\">do</span> you want to enable? <span class=\"token punctuation\">(</span>Press <span class=\"token operator\">&lt;</span>space<span class=\"token operator\">></span> to select, <span class=\"token operator\">&lt;</span>a<span class=\"token operator\">></span> to toggle all, <span class=\"token operator\">&lt;</span>i\n<span class=\"token operator\">></span> to invert selection<span class=\"token punctuation\">)</span>\n❯◯ antd\n ◯ dva\n ◯ code splitting\n ◯ pwa\n ◯ dll\n ◯ hard <span class=\"token function\">source</span>"
      },
      [
        "code",
        "$ yarn create umi\n\nyarn create v1.12.0\n[1/4] 🔍  Resolving packages...\n[2/4] 🚚  Fetching packages...\n[3/4] 🔗  Linking dependencies...\n[4/4] 📃  Building fresh packages...\n\nsuccess Installed \"create-umi@0.3.1\" with binaries:\n      - create-umi\n\n? What functionality do you want to enable? (Press <space> to select, <a> to toggle all, <i\n> to invert selection)\n❯◯ antd\n ◯ dva\n ◯ code splitting\n ◯ pwa\n ◯ dll\n ◯ hard source"
      ]
    ],
    [
      "p",
      "Yarn will install the latest version of ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/create-umi"
        },
        "create-umi"
      ],
      " and then create the app with interactive ui."
    ],
    [
      "p",
      "Select ",
      [
        "code",
        "antd"
      ],
      " and ",
      [
        "code",
        "dva"
      ],
      " and press Enter to confirm."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "   create package.json\n   create mock/.gitkeep\n   create src/assets/yay.jpg\n   create src/layouts/index.css\n   create src/layouts/index.js\n   create src/pages/index.css\n   create src/pages/index.js\n   create src/global.css\n   create .gitignore\n   create .editorconfig\n   create .env\n   create .umirc.js\n   create .eslintrc\n   create .prettierrc\n   create .prettierignore\n   create src/models/.gitkeep\n   create src/dva.js\n✨  File Generate Done\n✨  Done <span class=\"token keyword\">in</span> 966.73s."
      },
      [
        "code",
        "   create package.json\n   create mock/.gitkeep\n   create src/assets/yay.jpg\n   create src/layouts/index.css\n   create src/layouts/index.js\n   create src/pages/index.css\n   create src/pages/index.js\n   create src/global.css\n   create .gitignore\n   create .editorconfig\n   create .env\n   create .umirc.js\n   create .eslintrc\n   create .prettierrc\n   create .prettierignore\n   create src/models/.gitkeep\n   create src/dva.js\n✨  File Generate Done\n✨  Done in 966.73s."
      ]
    ],
    [
      "p",
      "Then install dependencies,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn"
      },
      [
        "code",
        "$ yarn"
      ]
    ],
    [
      "p",
      "Then start the app,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn start"
      },
      [
        "code",
        "$ yarn start"
      ]
    ],
    [
      "p",
      "After a few seconds, you will see the following output,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": " DONE  Compiled successfully <span class=\"token keyword\">in</span> 212ms\n\n  App running at:\n  - Local:   http://localhost:8000/\n  - Network: http://<span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> YourIP <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>:8000/"
      },
      [
        "code",
        " DONE  Compiled successfully in 212ms\n\n  App running at:\n  - Local:   http://localhost:8000/\n  - Network: http://{{ YourIP }}:8000/"
      ]
    ],
    [
      "p",
      "Open ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000"
        },
        "http://localhost:8000"
      ],
      " in your browser, you will see the welcome page of umi."
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/lewbQdlEHzuNDpaxykUP.png",
          "width": "718"
        }
      ]
    ],
    [
      "h2",
      "Integrate antd"
    ],
    [
      "p",
      "After selecting ",
      [
        "code",
        "antd"
      ],
      " earlier, antd's dependencies are automatically handled and loaded on demand. You can check the configuration in ",
      [
        "code",
        ".umirc.js"
      ],
      " to make sure antd is turned on."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// ref: https://umijs.org/config/</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  plugins<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ref: https://umijs.org/plugin/umi-plugin-react.html</span>\n    <span class=\"token punctuation\">[</span><span class=\"token string\">'umi-plugin-react'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      antd<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      dva<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// ref: https://umijs.org/config/\nexport default {\n  plugins: [\n    // ref: https://umijs.org/plugin/umi-plugin-react.html\n    ['umi-plugin-react', {\n      antd: true,\n      dva: true,\n    }],\n  ],\n}"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "And if you want to use a fixed version of antd, you can install additional antd dependency in your project, and the antd dependencies declared in package.json will be used first."
      ]
    ],
    [
      "h2",
      "Create Routes"
    ],
    [
      "p",
      "We need to write an application displaying the list of products. The first step is to create a route."
    ],
    [
      "p",
      "If you don't have npx, you need to install it first to execute the commands under node_modules."
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ yarn global add npx"
      },
      [
        "code",
        "$ yarn global add npx"
      ]
    ],
    [
      "p",
      "Then create a ",
      [
        "code",
        "/products"
      ],
      " route,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      },
      [
        "code",
        "$ npx umi g page products\n\n   create src/pages/products.js\n   create src/pages/products.css\n✔  success"
      ]
    ],
    [
      "p",
      "Then open ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000/products"
        },
        "http://localhost:8000/products"
      ],
      " in your browser and you should see the corresponding page."
    ],
    [
      "h2",
      "Write UI Components"
    ],
    [
      "p",
      "As your application grows and you notice you are sharing UI elements between multiple pages (or using them multiple times on the same page), in umi it's called reusable components."
    ],
    [
      "p",
      "Let's create a ",
      [
        "code",
        "ProductList"
      ],
      " component that we can use in multiple places to show a list of products."
    ],
    [
      "p",
      "Create ",
      [
        "code",
        "src/components/ProductList.js"
      ],
      " by typing:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Table<span class=\"token punctuation\">,</span> Popconfirm<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ProductList <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onDelete<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Name'</span><span class=\"token punctuation\">,</span>\n    dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Actions'</span><span class=\"token punctuation\">,</span>\n    render<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>text<span class=\"token punctuation\">,</span> record<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token operator\">&lt;</span>Popconfirm title<span class=\"token operator\">=</span><span class=\"token string\">\"Delete?\"</span> onConfirm<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onDelete</span><span class=\"token punctuation\">(</span>record<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>Delete<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Popconfirm<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Table\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span>\n      columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> ProductList<span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Table, Popconfirm, Button } from 'antd';\n\nconst ProductList = ({ onDelete, products }) => {\n  const columns = [{\n    title: 'Name',\n    dataIndex: 'name',\n  }, {\n    title: 'Actions',\n    render: (text, record) => {\n      return (\n        <Popconfirm title=\"Delete?\" onConfirm={() => onDelete(record.id)}>\n    <Button>Delete</Button>\n      </Popconfirm>\n    );\n    },\n  }];\n  return (\n    <Table\n      dataSource={products}\n      columns={columns}\n    />\n  );\n};\n\nexport default ProductList;"
      ]
    ],
    [
      "h2",
      "Define dva Model"
    ],
    [
      "p",
      "After completing the UI, we will begin processing the data and logic."
    ],
    [
      "p",
      "dva manages the domain model with ",
      [
        "code",
        "model"
      ],
      ", with reducers for synchronous state updates, effects for async logic, and subscriptions for data source subscribe."
    ],
    [
      "p",
      "Let's create a model ",
      [
        "code",
        "src/models/products.js"
      ],
      " by typing,"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'products'</span><span class=\"token punctuation\">,</span>\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'delete'</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload<span class=\"token punctuation\">:</span> id <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> state<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> item<span class=\"token punctuation\">.</span>id <span class=\"token operator\">!==</span> id<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  namespace: 'products',\n  state: [],\n  reducers: {\n    'delete'(state, { payload: id }) {\n      return state.filter(item => item.id !== id);\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "In this model:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "namespace"
          ],
          " represents the key on global state"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "state"
          ],
          " is the initial value, here it is an empty array"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "reducers"
          ],
          " is equivalent to a reducer in redux, accepting an action, and update state simultaneously"
        ]
      ]
    ],
    [
      "p",
      "In umi, the model files under ",
      [
        "code",
        "src/models"
      ],
      " will be automatically injected, you don't need to inject manually."
    ],
    [
      "h2",
      "Connect"
    ],
    [
      "p",
      "So far, we have completed a separate model and component. How do we connect them together?"
    ],
    [
      "p",
      "dva provides a ",
      [
        "code",
        "connect"
      ],
      " method. If you are familiar with redux, this connect is from react-redux."
    ],
    [
      "p",
      "Edit ",
      [
        "code",
        "src/pages/products.js"
      ],
      " and replact it with the following,"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> connect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ProductList <span class=\"token keyword\">from</span> <span class=\"token string\">'../components/ProductList'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Products <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> dispatch<span class=\"token punctuation\">,</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">function</span> <span class=\"token function\">handleDelete</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'products/delete'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> id<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h2<span class=\"token operator\">></span>List <span class=\"token keyword\">of</span> Products<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h2<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>ProductList onDelete<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>handleDelete<span class=\"token punctuation\">}</span> products<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>products<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> products <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  products<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Products<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { connect } from 'dva';\nimport ProductList from '../components/ProductList';\n\nconst Products = ({ dispatch, products }) => {\n  function handleDelete(id) {\n    dispatch({\n      type: 'products/delete',\n      payload: id,\n    });\n  }\n  return (\n    <div>\n      <h2>List of Products</h2>\n      <ProductList onDelete={handleDelete} products={products} />\n    </div>\n  );\n};\n\nexport default connect(({ products }) => ({\n  products,\n}))(Products);"
      ]
    ],
    [
      "p",
      "Finally, we need some initial data to make the application run together. Edit ",
      [
        "code",
        "src/app.js"
      ],
      ","
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> dva <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">onError</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      err<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>err<span class=\"token punctuation\">.</span>message<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    initialState<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      products<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dva'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">,</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export const dva = {\n  config: {\n    onError(err) {\n      err.preventDefault();\n      console.error(err.message);\n    },\n    initialState: {\n      products: [\n        { name: 'dva', id: 1 },\n        { name: 'antd', id: 2 },\n      ],\n    },\n  },\n};"
      ]
    ],
    [
      "p",
      "Refresh your browser, you should see the following result:"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif"
        }
      ]
    ],
    [
      "h2",
      "Build"
    ],
    [
      "p",
      "Now that we've written our application and verified that it works in development, it's time to get it ready for deployment to our users. To do so, run the following command,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run build"
      },
      [
        "code",
        "$ npm run build"
      ]
    ],
    [
      "p",
      "After a few seconds, the output should be as follows,"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "<span class=\"token operator\">></span> @ build /private/tmp/sorrycc-V0lLrF\n<span class=\"token operator\">></span> umi build\n\n<span class=\"token punctuation\">[</span>5:01:58 PM<span class=\"token punctuation\">]</span> webpack compiled <span class=\"token keyword\">in</span> 11s 615ms\n\n\n DONE  Compiled successfully <span class=\"token keyword\">in</span> 11622ms                                           5:01:58 PM\n\nFile sizes after gzip:\n\n  340.44 KB  dist/umi.js\n  17.82 KB   dist/umi.css"
      },
      [
        "code",
        "> @ build /private/tmp/sorrycc-V0lLrF\n> umi build\n\n[5:01:58 PM] webpack compiled in 11s 615ms\n\n\n DONE  Compiled successfully in 11622ms                                           5:01:58 PM\n\nFile sizes after gzip:\n\n  340.44 KB  dist/umi.js\n  17.82 KB   dist/umi.css"
      ]
    ],
    [
      "p",
      "The ",
      [
        "code",
        "build"
      ],
      " command packages up all of the assets that make up your application —— JavaScript, templates, CSS, web fonts, images, and more. Then you can find these files in the ",
      [
        "code",
        "dist/"
      ],
      " directory."
    ],
    [
      "h2",
      "What's Next"
    ],
    [
      "p",
      "We have completed a simple application, but you may still have lots of questions, such as:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "How to handle onError globally and locally?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to handle routes?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to mock data?"
        ]
      ],
      [
        "li",
        [
          "p",
          "How to deploy?"
        ]
      ],
      [
        "li",
        [
          "p",
          "ant so on..."
        ]
      ]
    ],
    [
      "p",
      "You can:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Visit ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/"
            },
            "umi offcial website"
          ],
          " and ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/"
            },
            "dva offcial website"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Know ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/router.html"
            },
            "the umi routes"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Know ",
          [
            "a",
            {
              "title": null,
              "href": "https://umijs.org/zh/guide/deploy.html"
            },
            "how to deploy umi application"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Checkout ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/knowledgemap/"
            },
            "dva knowledge"
          ],
          ", including all the basic knowledge with ES6, React, dva"
        ]
      ],
      [
        "li",
        [
          "p",
          "Be familiar with the ",
          [
            "a",
            {
              "title": null,
              "href": "https://dvajs.com/guide/concepts.html"
            },
            "8 Concepts of dva"
          ],
          ", and understand how they are connected together"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 2,
    "title": "Real project with umi and dva",
    "filename": "docs/react/practical-projects.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Create-New-App",
          "title": "Create New App"
        },
        "Create New App"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Integrate-antd",
          "title": "Integrate antd"
        },
        "Integrate antd"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Create-Routes",
          "title": "Create Routes"
        },
        "Create Routes"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Write-UI-Components",
          "title": "Write UI Components"
        },
        "Write UI Components"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Define-dva-Model",
          "title": "Define dva Model"
        },
        "Define dva Model"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Connect",
          "title": "Connect"
        },
        "Connect"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Build",
          "title": "Build"
        },
        "Build"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#What's-Next",
          "title": "What's Next"
        },
        "What's Next"
      ]
    ]
  ]
};

/***/ })

});