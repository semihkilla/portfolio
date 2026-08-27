import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the current portfolio sections", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /hallo, ich bin semih/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /erfahrung & bildung/i })).toBeInTheDocument();
  expect(screen.getByText("TaskMaster")).toBeInTheDocument();
  expect(screen.getByText("B.Sc. Wirtschaftsinformatik")).toBeInTheDocument();
});

test("renders the legal notice from the footer link", () => {
  window.history.pushState({}, "", "/?page=impressum");
  render(<App />);

  expect(screen.getByRole("heading", { name: "Impressum" })).toBeInTheDocument();
  expect(screen.getByText(/Peter-von-Koblenz Straße 6/i)).toBeInTheDocument();
});

test("renders the privacy information", () => {
  window.history.pushState({}, "", "/?page=datenschutz");
  render(<App />);

  expect(screen.getByRole("heading", { name: "Datenschutz" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Hosting über GitHub Pages/i })).toBeInTheDocument();
});
