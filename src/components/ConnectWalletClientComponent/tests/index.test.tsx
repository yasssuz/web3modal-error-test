// Packages
import { render } from "@/utils/tests/TestContext";
import { userEvent } from "@testing-library/user-event";

// Utils

// Constants

// Types

// Assets

// Components

describe("ConnectWalletClientComponent", () => {
  it('Displays "No wallet connected" if no wallet is connected', async () => {
    const ConnectWalletClientComponent = await import("..").then(
      (mod) => mod.ConnectWalletClientComponent
    );
    const { getByText } = render(<ConnectWalletClientComponent />);

    expect(getByText(/no wallet connected/i)).toBeTruthy();
  });

  it("Can connect wallet", async () => {
    const ConnectWalletClientComponent = await import("..").then(
      (mod) => mod.ConnectWalletClientComponent
    );
    const { getByText } = render(<ConnectWalletClientComponent />);
    const user = userEvent.setup();

    await user.click(getByText(/no wallet connected/i));

    expect(
      getByText(/0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266/i)
    ).toBeTruthy();
  });
});
