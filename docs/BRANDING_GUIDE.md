# Branding Guide

This guide ensures that any website created using this framework maintains a cohesive, premium design rhythm.

## Visual Design Philosophy

### 1. Generous Spatial Breathing Room
Never crowd elements. Use uniform section margins (`py-16 md:py-24`) to frame content. Allow headers and copy blocks to sit comfortably without touching borders.

### 2. High-Contrast Typography
Keep titles large, bold, and clean. Highlight text in deep neutral colors (like charcoal or slate) against soft off-white borders and background frames. Use pure black sparingly.

### 3. Smooth Micro-Animations
Avoid sharp or instant transitions. All interactive states, hover triggers, card offsets, and button clicks must utilize transitions (`transition-all duration-300`) or ease-out curves.

### 4. Image Treatment
- Use high-resolution, high-contrast imagery.
- All product assets must feature uniform aspect ratios (1:1 square for catalog items, 16:10 for solution headers).
- Catalog images should have transparent or light gray backgrounds to blend seamlessly into card structures.

### 5. Keyboard and Accessibility Compliance
All custom components must feature high-visibility outlines on focus states (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`). Do not suppress outline focus behaviors without providing custom active ring states.\n