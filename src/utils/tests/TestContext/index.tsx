// Packages
import { render } from '@testing-library/react';

// Utils

// Constants

// Types
import type { PropsWithChildren, ReactElement } from 'react';
import type { RenderOptions } from '@testing-library/react';

// Components
import { WagmiContext } from '@/contexts/WagmiContext';

const TestContext = ({ children }: PropsWithChildren) => (
  <WagmiContext>{children}</WagmiContext>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: TestContext, ...options });

export * from '@testing-library/react';
export { customRender as render };
