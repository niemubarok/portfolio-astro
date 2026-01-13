# Implementation Plan - Realistic Draggable ID Card

I will implement a high-fidelity physics interaction model for the ID card, making it draggable and giving it a realistic "swinging" effect when released, simulating a physical object hanging on a lanyard.

## User Review Required

> [!IMPORTANT]
> This change will replace the existing `vanilla-tilt` library with a custom physics engine for this specific component. The tilt effect will now be driven by physical forces (velocity/drag) rather than just mouse position, offering a more "weighty" feel.

## Proposed Changes

### `src/components/HolographicID.astro`

#### [MODIFY] `src/components/HolographicID.astro`

1.  **DOM Structure Updates**:
    -   Add reference IDs to the "string" element to allow dynamic transformations (rotation/stretching).
    -   Ensure the card wrapper has `touch-action: none` to prevent scrolling while dragging on mobile.

2.  **Script Logic Replacement**:
    -   Remove `vanilla-tilt` initialization.
    -   Implement a `PhysicsCard` class/function that handles:
        -   **State**: `position {x,y}`, `velocity {x,y}`, `rotation {x,y}`, `isDragging`.
        -   **Input Handling**: `mousedown`/`touchstart` to grab, `mousemove`/`touchmove` to drag, `mouseup`/`touchend` to release.
        -   **Physics Loop (`requestAnimationFrame`)**:
            -   **Dragging**: Card follows cursor (with slight lag/spring for "weight"). Calculate instantaneous velocity.
            -   **Released**: Apply spring force towards center (anchor point). Apply damping (friction) to gradually stop swinging.
            -   **Rotation**: Calculate 3D rotation based on velocity (swinging forward/back) and displacement.
        -   **Visual Updates**:
            -   Update `transform: translate3d(...) rotateX(...) rotateY(...)`.
            -   Update Lanyard `transform: rotate(...) height(...)` to connect anchor to card top center.

## Verification Plan

### Manual Verification
1.  **Drag Test**:
    -   Open page.
    -   Click and hold the ID card.
    -   Move mouse rapidly. Verify card follows.
    -   Check that the lanyard string visually connects the top of the screen to the card.
2.  **Release & Swing Test**:
    -   Release the mouse while the card is in motion.
    -   Verify the card "swings" past the center point and oscillates before coming to rest (Pendulum effect).
    -   Verify the rotation matches the swing direction.
3.  **Mobile Test**:
    -   Use device simulation.
    -   Touch and drag. Verify page scroll is disabled while dragging the card.
