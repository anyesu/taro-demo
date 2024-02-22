const tsRules = {
  '@typescript-eslint/ban-types': 0,
  '@typescript-eslint/consistent-type-imports': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/method-signature-style': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-empty-function': 0,
  '@typescript-eslint/no-empty-interface': 0,
  '@typescript-eslint/no-namespace': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-this-alias': [
    2,
    {
      allowDestructuring: true,
      allowedNames: ['vm', 'that', 'self'],
    },
  ],
};

const reactRules = {
  'react/jsx-uses-react': 0,
  'react/react-in-jsx-scope': 0,
};

const vueRules = {
  // 组件属性遵从小程序规范（全小写，kebab-case）
  'vue/attribute-hyphenation': [2, 'always'],
  'vue/prop-name-casing': [2, 'camelCase'],
  'vue/attributes-order': [
    2,
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: true, // 强制执行属性顺序
    },
  ],
  // 禁止使用其他 lang
  'vue/block-lang': [
    2,
    {
      script: {
        lang: ['ts', 'tsx'],
      },
      style: {
        lang: 'scss',
      },
    },
  ],
  // 顶层标签的顺序
  'vue/block-order': [
    2,
    {
      order: ['template', 'script[setup]', 'script', 'style:not([scoped])', 'style[scoped]'],
    },
  ],
  // 组件名遵从小程序规范（全小写，kebab-case）
  'vue/component-definition-name-casing': [2, 'kebab-case'],
  'vue/component-name-in-template-casing': [
    2,
    'kebab-case',
    {
      registeredComponentsOnly: false,
    },
  ],
  // 强制编译器宏顺序
  'vue/define-macros-order': [
    2,
    {
      order: ['defineOptions', 'defineProps', 'defineModel', 'defineEmits', 'defineSlots'],
      defineExposeLast: true,
    },
  ],
  // defineProps 强制执行基于类型的声明
  'vue/define-props-declaration': [2, 'type-based'],
  'vue/multiline-html-element-content-newline': 0,
  'vue/multi-word-component-names': 0,
  'vue/no-restricted-html-elements': [
    1,
    {
      element: 'div',
      message: 'Use <view /> instead. ',
    },
    {
      element: 'span',
      message: 'Use <text /> instead. ',
    },
  ],
  'vue/prefer-true-attribute-shorthand': [2, 'never'], // 按照 Taro 规范 - Boolean 值的组件属性需要显式绑定为 true，不支持简写
  'vue/padding-line-between-blocks': [2, 'always'],
  // 固定宏变量名称
  'vue/require-macro-variable-name': 2,
  // 在单行元素的内容之前和之后需要换行符
  'vue/singleline-html-element-content-newline': 0,
  // 校验 defineOptions 用法
  'vue/valid-define-options': 2,
  'vue/v-bind-style': [
    2,
    'shorthand',
    {
      // vue3.4 新特性 v-bind 同名简写
      sameNameShorthand: 'always',
    },
  ],
};

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    // Make sure to put prettier last, so it gets the chance to override other configs.
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['config/**'],
      rules: {
        'unicorn/prefer-module': 0,
      },
    },
    {
      files: ['**/__tests__/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
    },
    {
      files: ['**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended', '@vue/prettier'],
      rules: tsRules,
    },
    {
      files: ['js', 'jsx', 'ts', 'tsx'].map((s) => `**/*react*/**/*.${s}`),
      extends: ['taro/react', '@vue/typescript/recommended', '@vue/prettier'],
      rules: {
        ...tsRules,
        ...reactRules,
      },
    },
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/vue3-recommended', '@vue/typescript/recommended', '@vue/prettier'],
      rules: {
        ...tsRules,
        ...vueRules,
      },
    },
  ],
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'prefer-const': [
      2,
      {
        destructuring: 'all',
      },
    ],
    'n/no-missing-import': 0,
    'unicorn/catch-error-name': 0,
    'unicorn/consistent-destructuring': 0,
    'unicorn/filename-case': 0,
    'unicorn/prefer-object-from-entries': 0,
    'unicorn/prefer-query-selector': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/no-array-callback-reference': 0,
    'unicorn/no-array-reduce': 0,
    'unicorn/no-null': 0,
    'regexp/no-super-linear-backtracking': 0,
    'regexp/no-useless-non-capturing-group': 0,
  },
  // ref: https://eslint.org/docs/user-guide/migrating-to-7.0.0#default-ignore-patterns-have-changed
  ignorePatterns: ['.eslintrc.*'],
  root: true,
};
