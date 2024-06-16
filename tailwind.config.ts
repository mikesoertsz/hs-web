import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: "var(--font-body)",
        title: ["var(--font-title)", "serif"],
        title2: ["var(--font-title2)", "serif"],
      },
      colors: {
        brand: {
          p0: "#7096D1",
          p1: "#334EAC",
          p2: "#081F5C",
          p3: "#ABF7E4",
          p4: "#EDF1F6",
          s0: "#F7F2EB",
          s1: "#FFF9F0",
          s2: "#F2FODE",
          s3: "#BAD6EB",
          r1: "#F42A2A",
          g1: "#00C7A3",
          n0: "#FFFFFF",
          n1: "#E6E6E6",
          n2: "#B2B2B2",
          n3: "#424242",
          n4: "#22262A",
          n5: "#000000",
        },
        brand2: {
          b1: "#364B9C",
          b2: "#5D6FAF",
          b3: "#8793C3",
          b4: "#AEB7D6",
          g1: "#BFB182",
          g2: "#CDC19B",
          g3: "#D9D0B3",
          g4: "#E5E0CD",
          base1: "#091A38",
          base2: "#3A4862",
          base3: "#6C7680",
          base4: "#8C92A0",
          n1: "#1A1A1A",
          n2: "#484848",
          n3: "#767674",
          n4: "#929292",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config