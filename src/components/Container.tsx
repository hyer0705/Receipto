import type { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-50 min-h-screen m-auto">
      <div className="max-w-sm mx-auto p-4 gap-6 space-y-4">{children}</div>
    </div>
  );
}

export default Container;
