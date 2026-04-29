import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@uiw/react-codemirror",
    "@uiw/codemirror-theme-vscode",
    "@uiw/codemirror-themes",
    "@codemirror/state",
    "@codemirror/view",
    "@codemirror/language",
    "@codemirror/commands",
    "@codemirror/search",
    "@codemirror/autocomplete",
    "@codemirror/lint",
  ],
};

export default nextConfig;
