const plugin = require("tailwindcss/plugin");

function normalizeRangeValue(value) {
  if (/^-?\d+(\.\d+)?$/.test(value)) {
    return `${value}%`;
  }

  return value;
}

function normalizeDurationValue(value) {
  if (/^\d+(\.\d+)?$/.test(value)) {
    return `${value}ms`;
  }

  return value;
}

function normalizeDistanceValue(value) {
  if (/^-?\d+(\.\d+)?$/.test(value)) {
    return `${value}px`;
  }

  return value;
}

const numeric_values = Object.fromEntries(
  Array.from({ length: 1001 }, (_, i) => [String(i), String(i)]),
);

const duration_values = Object.fromEntries(
  Array.from({ length: 5001 }, (_, i) => [String(i), String(i)]),
);

module.exports = plugin(function viewportAnimationsPlugin({
  addUtilities,
  matchUtilities,
  addBase,
}) {
  matchUtilities(
    {
      "va-start": (value) => ({
        "--va-start": normalizeRangeValue(value),
      }),
    },
    {
      values: numeric_values,
      type: "any",
    },
  );

  matchUtilities(
    {
      "va-end": (value) => ({
        "--va-end": normalizeRangeValue(value),
      }),
    },
    {
      values: numeric_values,
      type: "any",
    },
  );

  matchUtilities(
    {
      "va-duration": (value) => ({
        "animation-duration": normalizeDurationValue(value),
      }),
    },
    {
      values: duration_values,
      type: "any",
    },
  );

  matchUtilities(
    {
      "va-distance": (value) => ({
        "--va-distance": normalizeDistanceValue(value),
      }),
    },
    {
      values: numeric_values,
      type: "any",
    },
  );

  matchUtilities(
    {
      "va-ease": (value) => ({
        "animation-timing-function": value,
      }),
    },
    {
      type: "any",
    },
  );

  addUtilities({
    ".va": {
      "--va-start": "0%",
      "--va-end": "25%",
      "--va-anim": "va-fade",
      "--va-distance": "clamp(120px, 12vw, 200px)",
      "--va-blur": "12px",
      "--va-rotate": "-6deg",
      "animation-duration": "1ms",
      "animation-timing-function": "linear",
      "animation-fill-mode": "both",
      "animation-timeline": "view(block)",
      "animation-name": "var(--va-anim)",
      "animation-range": "entry var(--va-start) contain var(--va-end)",
    },
    ".va-once": {
      "animation-iteration-count": "1",
    },
    ".va-repeat": {
      "animation-iteration-count": "infinite",
    },
    ".va-ease-linear": {
      "animation-timing-function": "linear",
    },
    ".va-ease-in": {
      "animation-timing-function": "ease-in",
    },
    ".va-ease-out": {
      "animation-timing-function": "ease-out",
    },
    ".va-ease-in-out": {
      "animation-timing-function": "ease-in-out",
    },
    ".va-ease-smooth": {
      "animation-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    ".va-ease-snap": {
      "animation-timing-function": "cubic-bezier(0.2, 0.9, 0.2, 1)",
    },
    ".va-fade": {
      "--va-anim": "va-fade",
    },
    ".va-zoom": {
      "--va-anim": "va-zoom",
    },
    ".va-slide-left": {
      "--va-anim": "va-slide-left",
    },
    ".va-slide-right": {
      "--va-anim": "va-slide-right",
    },
    ".va-slide-up": {
      "--va-anim": "va-slide-up",
    },
    ".va-slide-down": {
      "--va-anim": "va-slide-down",
    },
    ".va-blur-in": {
      "--va-anim": "va-blur-in",
    },
    ".va-rotate-in": {
      "--va-anim": "va-rotate-in",
    },
    ".va-pop": {
      "--va-anim": "va-pop",
    },
    ".va-reveal-up": {
      "--va-anim": "va-reveal-up",
    },
    ".va-flip-y": {
      "--va-anim": "va-flip-y",
      "backface-visibility": "hidden",
      "transform-style": "preserve-3d",
    },
  });

  addBase({
    "@media (prefers-reduced-motion: reduce)": {
      ".va": {
        animation: "none !important",
        opacity: "1 !important",
        transform: "none !important",
        filter: "none !important",
        "clip-path": "none !important",
      },
    },
    "@keyframes va-fade": {
      from: {
        opacity: "0",
      },
      to: {
        opacity: "1",
      },
    },
    "@keyframes va-zoom": {
      from: {
        opacity: "0",
        transform: "scale(0.9)",
      },
      to: {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    "@keyframes va-slide-left": {
      from: {
        opacity: "0",
        transform: "translateX(calc(var(--va-distance) * -1))",
        "pointer-events": "none",
      },
      to: {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
    "@keyframes va-slide-right": {
      from: {
        opacity: "0",
        transform: "translateX(var(--va-distance))",
        "pointer-events": "none",
      },
      to: {
        opacity: "1",
        transform: "translateX(0)",
      },
    },
    "@keyframes va-slide-up": {
      from: {
        opacity: "0",
        transform: "translateY(var(--va-distance))",
        "pointer-events": "none",
      },
      to: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "@keyframes va-slide-down": {
      from: {
        opacity: "0",
        transform: "translateY(calc(var(--va-distance) * -1))",
        "pointer-events": "none",
      },
      to: {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    "@keyframes va-blur-in": {
      from: {
        opacity: "0",
        filter: "blur(var(--va-blur))",
      },
      to: {
        opacity: "1",
        filter: "blur(0)",
      },
    },
    "@keyframes va-rotate-in": {
      from: {
        opacity: "0",
        transform: "rotate(var(--va-rotate)) scale(0.98)",
      },
      to: {
        opacity: "1",
        transform: "rotate(0deg) scale(1)",
      },
    },
    "@keyframes va-pop": {
      "0%": {
        opacity: "0",
        transform: "scale(0.92)",
      },
      "60%": {
        opacity: "1",
        transform: "scale(1.04)",
      },
      "100%": {
        opacity: "1",
        transform: "scale(1)",
      },
    },
    "@keyframes va-reveal-up": {
      from: {
        opacity: "0",
        "clip-path": "inset(100% 0 0 0)",
        transform: "translateY(calc(var(--va-distance) * 0.35))",
      },
      to: {
        opacity: "1",
        "clip-path": "inset(0 0 0 0)",
        transform: "translateY(0)",
      },
    },
    "@keyframes va-flip-y": {
      from: {
        opacity: "0",
        transform:
          "perspective(900px) rotateY(-40deg) translateY(calc(var(--va-distance) * 0.2))",
      },
      to: {
        opacity: "1",
        transform: "perspective(900px) rotateY(0deg) translateY(0)",
      },
    },
  });
});
