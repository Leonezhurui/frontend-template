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
        "plugin:@typescript-eslint/recommended",
        "./.eslintrc-auto-import.json"
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
        'semi':['error','always'],
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
    }
}
