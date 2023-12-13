// Packages

// Utils

// Constants

// Types

// Assets
import { WagmiContext } from "@/contexts/WagmiContext";

// Components

const RootLayout = ({ children }) => {
  return (
    <WagmiContext>
      <html>
        <body className="default-transition bg-bg2-light [transition-property:background-color] dark:bg-bg2-dark">
          {children}
        </body>
      </html>
    </WagmiContext>
  );
};

export default RootLayout;
