import type { ReactNode } from 'react';

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-orange-200 min-h-screen m-auto">
      <div className="max-w-sm mx-auto p-4 space-y-4">{children}</div>
    </div>
  );
}

export default Container;
