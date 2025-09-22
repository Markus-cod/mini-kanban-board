import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

export const config = defineConfig({
    theme: {
        // 1) Breakpoints: base (<600), sm (>=600), md (>=960)
        breakpoints: {
            sm: "600px",
            md: "960px",
        },

        // 2) Minimal tokens: brand + the exact colors you listed
        tokens: {
            colors: {
                brand: {
                    500: { value: "#4F46E5" }, // primary brand
                },

                // Neutrals / accents you supplied
                slate: {

                    50: { value: "#F8FAFC" },
                    200: { value: "#E2E8F0" },
                    300: { value: "#CBD5E1" },
                    400: { value: "#94A3B8" },
                    600: { value: "#475569" },
                    800: { value: "#1E293B" },
                },
                indigo: {
                    50: { value: "#EEF2FF" },
                },
                amber: {
                    50: { value: "#FFFBEB" },
                    500: { value: "#F59E0B" },
                },
                rose: {
                    50: { value: "#FFF1F2" },
                    500: { value: "#F43F5E" },
                },
                green: {
                    500: { value: "#22C55E" },
                },
            },

            // Typography: Plus Jakarta Sans as app default
            fonts: {
                body: { value: "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'" },
                heading: { value: "'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" },
                mono: { value: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" },
            },
        },
    },
})

// Export the system
export const system = createSystem(defaultConfig, config)