import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
// TODO:
// import viteGD from 'vite-plugin-gd';

export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    // viteGD({
    //   owner: '',
    //   repo: '',
    //   domain: '',
    //   theme: '',
    //   rss: {
    //     title: '',
    //     description: '',
    //   }
    // })
  ],
});
