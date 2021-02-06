/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom";
import "mutationobserver-shim";
import { HashRouter } from "react-router-dom";
import React from "react";
// eslint-disable-next-line func-names
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
  // eslint-disable-next-line prettier/prettier
}());

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

export const customRender = (children) => <HashRouter>{children}</HashRouter>;

jest.mock("i18next", () => ({
  t: (key, params) => (params ? `${key} ${JSON.stringify(params)}` : key),
}));
