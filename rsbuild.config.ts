import {defineConfig} from '@rsbuild/core';
import {pluginVue} from '@rsbuild/plugin-vue';

export default defineConfig({
    plugins: [pluginVue()],
    source: {
        alias: () => {
            return {
                "@/app": "./src/app",
                "@/pages": "./src/pages",
                "@/widgets": "./src/widgets",
                "@/features": "./src/features",
                "@/entities": "./src/entities",
                "@/shared": "./src/shared",
            }
        },
    }
});
