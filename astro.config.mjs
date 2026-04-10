import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    output: "static",
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        svgo: {
            plugins: [
                {
                    name: "addAttributesToSVGElement",
                    params: {
                        attributes: [
                            {
                                "aria-hidden": "true",
                            },
                            {
                                focusable: "false",
                            },
                        ],
                    },
                },
            ],
        },
    },
});
