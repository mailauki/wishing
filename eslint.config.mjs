import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPlugin from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier/flat";
import prettierConfig from "eslint-plugin-prettier/recommended";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...eslintPlugin.configs.recommended,
    plugins: {
      reactPlugin,
      reactHooksPlugin,
      jsxA11yPlugin,
      nextPlugin,
      prettierConfig,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...reactHooksPlugin.configs["recommended-latest"].rules,
      ...jsxA11yPlugin.configs.strict.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          jsxSingleQuote: true,
          printWidth: 80,
          endOfLine: "auto",
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"],
        },
        {
          usePrettierrc: false,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unknown-property": "off",
      "react/jsx-no-target-blank": "off",
      "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
      "jsx-a11y/media-has-caption": "warn",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "no-undef": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "error", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
      quotes: ["error", "single"],
      "jsx-quotes": ["error", "prefer-single"],
      indent: ["error", 2],
    },
  },
  prettier,
  prettierConfig,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
