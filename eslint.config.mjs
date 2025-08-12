/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import { rules as prettierConfigRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export const projectRoot = path.resolve('.');
export const gitignorePath = path.resolve(projectRoot, '.gitignore');

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
];

const reactConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Airbnb React Recommended Config
  ...configs.react.recommended,
];

const typescriptConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: 'prettier/plugin/config',
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: 'prettier/config',
    rules: {
      ...prettierConfigRules,
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          singleQuote: true,
          printWidth: 80,
          semi: true,
          bracketSpacing: true,
          objectWrap: 'preserve',
          bracketSameLine: false,
          arrowParens: 'always',
        },
      ],
    },
  },
];

const myCustomConfig = [
  {
    name: 'my-custom-config',
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'function-expression',
        },
      ],
    },
  },
  {
    name: 'import-plugin',
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  // 컴포넌트 파일들 - default export 강제
  {
    name: 'component-files-config',
    files: [
      '**/components/**/*.{js,jsx,ts,tsx}',
      '**/pages/**/*.{js,jsx,ts,tsx}',
      '**/*Component.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'error',
      'import-x/prefer-default-export': 'error',
    },
  },
  // 커스텀 훅 파일들 - named export 허용
  {
    name: 'custom-hooks-config',
    files: [
      '**/hooks/**/*.{js,jsx,ts,tsx}',
      '**/use*.{js,jsx,ts,tsx}',
      '**/*Hook.{js,jsx,ts,tsx}',
      '**/*Hooks.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
      // 훅 관련 규칙들도 추가로 적용
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // 유틸리티 함수들 - named export 허용
  {
    name: 'utility-files-config',
    files: [
      '**/utils/**/*.{js,jsx,ts,tsx}',
      '**/helpers/**/*.{js,jsx,ts,tsx}',
      '**/lib/**/*.{js,jsx,ts,tsx}', // 기존 설정과 통합
      '**/*Utils.{js,jsx,ts,tsx}',
      '**/*Helper.{js,jsx,ts,tsx}',
      '**/*Util.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
    },
  },
  // 상수 및 설정 파일들 - named export 허용
  {
    name: 'constants-config-files',
    files: [
      '**/constants/**/*.{js,jsx,ts,tsx}',
      '**/config/**/*.{js,jsx,ts,tsx}',
      '**/*Constants.{js,jsx,ts,tsx}',
      '**/*Config.{js,jsx,ts,tsx}',
      '**/*Settings.{js,jsx,ts,tsx}',
      '**/env.{js,ts}',
      '**/environment.{js,ts}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
    },
  },
  // 타입 정의 파일들 - named export 허용 (TypeScript)
  {
    name: 'type-definition-files',
    files: [
      '**/types/**/*.{ts,tsx}',
      '**/*Types.{ts,tsx}',
      '**/*Type.{ts,tsx}',
      '**/*.d.ts',
      '**/interfaces/**/*.{ts,tsx}',
      '**/*Interface.{ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
    },
  },
  // API 관련 파일들 - named export 허용
  {
    name: 'api-files-config',
    files: [
      '**/api/**/*.{js,jsx,ts,tsx}',
      '**/services/**/*.{js,jsx,ts,tsx}',
      '**/*Service.{js,jsx,ts,tsx}',
      '**/*Api.{js,jsx,ts,tsx}',
      '**/graphql/**/*.{js,jsx,ts,tsx}',
      '**/queries/**/*.{js,jsx,ts,tsx}',
      '**/mutations/**/*.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
    },
  },
  // 스토어/상태 관리 파일들 - named export 허용
  {
    name: 'store-files-config',
    files: [
      '**/store/**/*.{js,jsx,ts,tsx}',
      '**/stores/**/*.{js,jsx,ts,tsx}',
      '**/redux/**/*.{js,jsx,ts,tsx}',
      '**/zustand/**/*.{js,jsx,ts,tsx}',
      '**/context/**/*.{js,jsx,ts,tsx}',
      '**/*Store.{js,jsx,ts,tsx}',
      '**/*Context.{js,jsx,ts,tsx}',
      '**/*Slice.{js,jsx,ts,tsx}',
      '**/*Reducer.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/prefer-default-export': 'off',
      'import-x/prefer-default-export': 'off',
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Prettier Config
  ...prettierConfig,
  // My Custom Config
  ...myCustomConfig,
];
