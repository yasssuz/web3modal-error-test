// Packages
import { jest } from "@jest/globals";
import "@testing-library/jest-dom";

// Utils

// Constants

// Types

// Assets

// Components

// Create empty window.ethereum property on window
Object.defineProperty(window, "ethereum", {
  value: {},
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
