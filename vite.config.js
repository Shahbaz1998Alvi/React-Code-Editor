import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base:"/ResultSummary-Component/",
  plugins: [reactRefresh()],
  base: "/React-Code-Editor/"
});
