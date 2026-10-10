import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [
        sveltekit({
            adapter: adapter(),
            preprocess: vitePreprocess(),
            alias: {
                '$lib': 'src/lib'
            }
        })
    ]
});