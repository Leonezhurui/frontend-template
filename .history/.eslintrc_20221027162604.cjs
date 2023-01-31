module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        'vue/setup-compiler-macros': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser":"@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        // --以下是Best Practices 最佳实践
        'default-case': 'error', // 强制switch要有default分支
        'dot-location': ['error', 'property'], // 要求对象的点要跟属性同一行
        'eqeqeq': 'error', // 要求使用 === 和 !==
        'no-else-return': 'error', // 禁止在else前有return，return和else不能同时存在
        'no-empty-function': 'error', // 禁止出现空函数，有意而为之的可以在函数内部加条注释
        'no-multi-spaces': 'error', // 禁止出现多个空格，如===前后可以有一个空格，但是不能有多个空格
        'no-multi-str': 'error', // 禁止出现多行字符串，可以使用模板字符串换行
        'no-self-compare': 'error', // 禁止自身比较
        'no-unmodified-loop-condition': 'error', // 禁止一成不变的循环条件，如while条件，防止死循环
        'no-useless-concat': 'error', // 禁止没有必要的字符串拼接，如'a'+'b'应该写成'ab'
        'require-await': 'error', // 禁止使用不带await的async表达式
        
        // --以下是ECMAScript 6 ES6相关的
        'arrow-body-style': 'error', // 当前头函数体的花括号可以省略时，不允许出现花括号
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，不允许写圆括号
        'arrow-spacing': 'error', // 要求箭头函数的=>前后有空格
        'no-confusing-arrow': 'error', // 禁止在可能与比较操作符混淆的地方使用箭头函数
        'no-duplicate-imports': 'error', // 禁止重复导入
        'no-useless-computed-key': 'error', // 禁止不必要的计算属性，如obj3={['a']: 1},其中['a']是不必要的，直接写'a'
        'no-var': 'error', // 要求使用let或const，而不是var
        'object-shorthand': 'error', // 要求对象字面量使用简写
        'prefer-const': 'error', // 要求使用const声明不会被修改的变量
        'prefer-destructuring': ['error', {
        'array': false,
        'object': true
        }, { 'enforceForRenamedProperties': true }], // 要求优先使用结构赋值,enforceForRenamedProperties为true将规则应用于重命名的变量
        'prefer-template': 'error', // 使用模板字符串，而不是字符串拼接
        'rest-spread-spacing': 'error', // 扩展运算符...和表达式之间不允许有空格，如... re1错误，应该是...re1
        'template-curly-spacing': 'error', // 禁止模板字符串${}内前后有空格
    }
}
