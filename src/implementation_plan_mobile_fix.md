# Implementation Plan - Mobile Layout Fixes

The goal is to fix the mobile layout issues reported by the user, specifically focusing on the Hero section where the ID card overlaps content, and ensuring correct stacking and spacing across all sections.

## User Review Required
> [!IMPORTANT]
> I will be changing the Hero section layout on mobile to stack Text FIRST, then ID Card SECOND. This is standard for readability. The ID card will also be scaled down on mobile to fit better.

## Proposed Changes

### Components

#### [MODIFY] [HolographicID.astro](file:///c:/Users/husni.mubarok/DEVS/portfolio/portfolio-astro/src/components/HolographicID.astro)
- Change fixed `w-[340px] h-[540px]` to `w-full max-w-[340px] aspect-[34/54] h-auto`.
- Ensure inner content scales or fits within the fluid container.

#### [MODIFY] [CareerTimeline.astro](file:///c:/Users/husni.mubarok/DEVS/portfolio/portfolio-astro/src/components/CareerTimeline.astro)
- Ensure the timeline line and cards stack correctly on mobile.
- Use `pl-8` or `pl-12` on mobile for cards and place the line to the left, instead of alternating center.

### Pages

#### [MODIFY] [index.astro](file:///c:/Users/husni.mubarok/DEVS/portfolio/portfolio-astro/src/pages/index.astro)
- **Hero Section**:
    - Change `h-screen` to `min-h-screen lg:h-screen`.
    - Change mobile order: Text `order-1`, ID `order-2`.
    - Reduce `py-` margins on mobile.
    - Scale down the ID card wrapper on mobile (e.g., `scale-75` or `w-3/4`).
- **Projects Section**:
    - Reduce `py-32` to `py-20` on mobile.
    - Ensure `grid-cols-1` is effective.
- **Skills Section**:
    - Reduce `gap-6` to `gap-4` on mobile.
- **Career Section**:
    - Adjust container padding.

## Verification Plan

### Automated Tests
- None available for UI layout.

### Manual Verification
- **Browser Tool**: Use the browser tool to take screenshots at mobile viewport width (375px and 414px).
- **Visual Check**:
    - Check Hero: Text should be readable at the top. ID card should be below, fully visible, not overlapping navigation.
    - Check Projects: Cards stacked 1 column, appropriate spacing.
    - Check Navbar: Bottom navbar should be accessible and not cover critical content (it has z-50 so it should be fine, but content needs padding-bottom).
