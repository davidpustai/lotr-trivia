import eslintPluginAstro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default [
    {
        ignores: [".astro", "dist"],
    },
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx"],
    })),
    ...tseslint.configs.stylisticTypeChecked.map((config) => ({
        ...config,
        files: ["**/*.ts", "**/*.tsx"],
    })),
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            import: importPlugin,
        },
        rules: {
            "@typescript-eslint/array-type": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                { prefer: "type-imports", fixStyle: "inline-type-imports" },
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_" },
            ],
            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/no-misused-promises": [
                "error",
                { checksVoidReturn: { attributes: false } },
            ],
            "import/no-default-export": "error",
        },
    },
    {
        files: ["!**/*.astro"],
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
    },
];
