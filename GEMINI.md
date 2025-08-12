# Receipto 프로젝트 문서

이 문서는 Receipto 프로젝트의 기술적 세부 사항, 구조, 코딩 컨벤션을 설명합니다.

## 1. 기술 스택 (Tech Stack)

- **Framework**: React (v19)
- **Language**: TypeScript (v5.8)
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**:
  - Tailwind CSS v4
  - shadcn/ui (Radix UI, lucide-react 기반)
  - `clsx` & `tailwind-merge` for class name management
- **Form Management**: React Hook Form with Zod for schema validation
- **Linting & Formatting**:
  - ESLint (Airbnb Style Guide 기반)
  - Prettier

## 2. 프로젝트 구조 (Project Structure)

```
/
├── public/              # 정적 에셋
├── src/
│   ├── assets/          # 이미지, 폰트 등 리소스
│   ├── components/      # 재사용 가능한 리액트 컴포넌트
│   │   └── ui/          # shadcn/ui 기반 기본 UI 컴포넌트
│   ├── hooks/           # 커스텀 React 훅
│   ├── lib/             # 유틸리티 함수 (shadcn/ui의 utils.ts 포함)
│   ├── services/        # API 연동, 비즈니스 로직
│   ├── types/           # TypeScript 타입 정의
│   └── utils/           # 범용 유틸리티 함수
├── .eslintrc.mjs        # ESLint 설정
├── .prettierrc          # Prettier 설정
├── vite.config.ts       # Vite 설정
├── tsconfig.json        # TypeScript 설정
└── package.json         # 프로젝트 의존성 및 스크립트
```

- **`src/components`**: 기능 단위의 컴포넌트가 위치합니다. (예: `Header.tsx`, `ReceiptResult.tsx`)
- **`src/components/ui`**: 버튼, 인풋 등 shadcn/ui를 통해 생성된 범용 UI 컴포넌트가 위치합니다.
- **`src/hooks`**: 상태 관리 로직이나 재사용 가능한 훅을 정의합니다. (예: `useReceipt.ts`)
- **`src/services`**: 외부 API 연동이나 핵심 비즈니스 로직을 담당합니다.
- **`src/types`**: 프로젝트 전반에서 사용되는 TypeScript 타입을 정의합니다.
- **`src/utils`**: 텍스트 포맷팅 등과 같은 순수 함수 유틸리티를 포함합니다.

## 3. 코딩 컨벤션 (Coding Conventions)

### ESLint & Prettier

- **Prettier**: 코드 포맷팅은 `.prettierrc` 설정에 따라 자동으로 관리됩니다.
  - **들여쓰기**: 2칸
  - **따옴표**: 작은따옴표 (`singleQuote: true`)
  - **줄 길이**: 80자
  - **세미콜론**: 필수 (`semi: true`)
- **ESLint**: Airbnb JavaScript 스타일 가이드를 기반으로 하며, 몇 가지 커스텀 규칙이 추가되었습니다. (`eslint.config.mjs` 참조)

### Import/Export 규칙

- **Default Export**: 다음 디렉토리의 파일들은 `export default`를 사용해야 합니다.
  - `src/components/**/*.tsx`
  - `src/pages/**/*.tsx` (현재는 없지만 추후 생성 시)
- **Named Export**: 그 외의 파일들은 `export` (named export)를 사용합니다.
  - `src/hooks/`
  - `src/utils/`, `src/lib/`
  - `src/services/`
  - `src/types/`
  - `src/constants/`, `src/config/`

### 컴포넌트 작성 규칙

- **함수 컴포넌트**: 이름 있는 컴포넌트는 함수 선언문(Function Declaration)으로 작성합니다.
  ```tsx
  // Good
  function MyComponent() {
    return <div>Hello</div>;
  }

  // Bad
  const MyComponent = () => {
    return <div>Hello</div>;
  };
  ```

## 4. 중요 설정 (Important Configurations)

### Vite (`vite.config.ts`)

- React 플러그인 (`@vitejs/plugin-react`)을 사용합니다.
- Tailwind CSS 플러그인 (`@tailwindcss/vite`)이 통합되어 있습니다.
- **Path Alias**: `@{/*}`는 `src/*`를 가리키는 경로 별칭으로 설정되어 있습니다.
  ```ts
  // 예시
  import { Button } from '@/components/ui/button';
  ```

### TypeScript (`tsconfig.json`)

- Vite 설정과 동일하게 `@{/*}` 경로 별칭이 설정되어 있어 타입스크립트가 해당 경로를 인식할 수 있습니다.

### `package.json` 스크립트

- `bun run dev`: 개발 서버를 실행합니다.
- `bun run build`: 프로덕션용으로 프로젝트를 빌드합니다.
- `bun run lint`: ESLint를 사용하여 코드 문제를 검사합니다.
- `bun run format:check`: Prettier로 포맷팅이 올바른지 확인합니다.
- `bun run preview`: 빌드된 결과물을 미리 봅니다.
