import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home Page link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/หน้าหลัก/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders BAAC name (th) in Footer", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders BAAC name (en) in Footer", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /Bank for Agriculture and Agricultural Cooperatives/i
  );
  expect(linkElement).toBeInTheDocument();
});

test("renders BAAC address in Footer", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/เลขที่ 2346 ถนนพหลโยธิน แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10900/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders BAAC call center in Footer", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/02-555-0555/i);
  expect(linkElement).toBeInTheDocument();
});