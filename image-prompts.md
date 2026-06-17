# Modular Hybrid Gripper — AI Image Generation Prompts

**Project:** ENG-203 Modular Hybrid Gripper System
**Generator:** Nano Banana (Gemini)
**Usage:** Attach the reference render `gripper-assembly.png` with every prompt to keep geometry consistent. No baked-in text in any image.
**Style key:** Photoreal = light-gray studio CAD render · Blueprint = white line-art on navy grid · FEA = rainbow jet stress contour on charcoal · Lab photo = realistic test-rig photography.

---

## Reference Object (the design language all prompts must match)

Two-finger robotic gripper with a symmetric 4-bar carbon-fiber (CFRP) linkage (glossy black twill weave, stainless steel shoulder-bolt pivot pins), white textured PA12 nylon grip pads at the fingertips, a polished aluminum cylindrical actuator body with a central vertical push-rod, a bolted circular flange, and an L-shaped bracket base with bolt holes. Seamless light-gray studio background, soft diffuse lighting, subtle contact shadow.

---

## 1. Design Spec Diagram — `design-spec.png` · 3:4 portrait · Blueprint

```
Using the robotic gripper in the attached image as the exact reference object, render it as a clean ENGINEERING BLUEPRINT technical drawing.

Style: precise orthographic front elevation, thin crisp white line-art on a deep navy-blue background (#0a1a3a) with a faint fine technical grid. Mechanical drafting / CAD drawing-sheet aesthetic. Show the two-finger carbon-fiber 4-bar linkage, the white nylon grip pads, the cylindrical aluminum actuator body with central push-rod, and the bolted L-bracket base — all as outlined linework with visible pivot-joint center marks and bolt-hole circles. Add faint thin leader lines and section detail circles as a drafting motif.

Composition: centered, generous margins, symmetric.
ABSOLUTELY NO text, numbers, dimension labels, title block, or watermarks — pure linework only.
Aspect ratio 3:4, portrait.
```

## 2. Isometric View — `cad-isometric.png` · 4:3 landscape · Photoreal

```
Using the robotic gripper in the attached image as the exact reference object (same carbon-fiber linkage arms, same white textured PA12 grip pads, same polished aluminum base and bolted flange), render a photorealistic 3/4 ISOMETRIC product view.

Style: high-end studio CAD render (KeyShot / SolidWorks Visualize quality), seamless light-gray studio background (#e9e9e9), soft diffuse lighting, subtle realistic contact shadow, gentle reflections on the polished aluminum and glossy carbon-fiber twill weave. Sharp focus, clean industrial product photography look.

Camera: elevated three-quarter isometric angle showing depth of the linkage mechanism. Centered.
No text, no logos, no annotations.
Aspect ratio 4:3, landscape.
```

## 3. Exploded View — `cad-exploded.png` · 4:3 landscape · Photoreal

```
Using the robotic gripper in the attached image as the exact reference object, render a photorealistic EXPLODED ASSEMBLY VIEW.

Separate the components vertically and along their assembly axes with even spacing, as in a professional exploded technical render: the two white PA12 nylon grip pads, the carbon-fiber linkage link plates, the stainless steel shoulder-bolt pivot pins, the central push-rod shaft, the cylindrical aluminum actuator body, the bolted flange, and the L-bracket base — each floating apart in correct stacking order along thin faint assembly guide lines.

Style: high-end studio CAD render (KeyShot quality), seamless light-gray studio background (#e9e9e9), soft diffuse lighting, soft shadows, glossy carbon-fiber twill and polished aluminum reflections. Sharp focus.
No text, no part numbers, no annotations.
Aspect ratio 4:3, landscape.
```

## 4. Cross-section — `cad-crosssection.png` · 4:3 landscape · Blueprint

```
Using the robotic gripper in the attached image as the exact reference object, render a BLUEPRINT CROSS-SECTION (cutaway) technical drawing.

Style: precise orthographic section view, thin crisp white line-art on a deep navy-blue background (#0a1a3a) with a faint fine technical grid. Slice the gripper through its vertical center plane to reveal the internal push-rod, the actuator body bore, the linkage pivot pins, and the bolt holes. Use standard 45-degree section hatching on all cut solid faces. Mechanical drafting aesthetic with thin center lines.

Composition: centered, symmetric, generous margins.
ABSOLUTELY NO text, numbers, dimension labels, or title block — pure linework and hatching only.
Aspect ratio 4:3, landscape.
```

## 5. Main FEA Stress — `fea-stress.png` · 3:4 portrait · FEA

```
Using the robotic gripper in the attached image as the exact reference geometry, render a FINITE ELEMENT ANALYSIS (FEA) von Mises stress simulation result.

Show the carbon-fiber gripper finger/linkage with a smooth rainbow stress contour color map applied to its surface (deep blue = low stress, cyan/green = medium, yellow/orange/red = high stress concentrations at the pivot joints and load points). Visible fine triangular FEA mesh wireframe overlay on the surface. Dark charcoal background (#1a1a22), subtle soft lighting, scientific simulation-software aesthetic (ANSYS / SolidWorks Simulation look).

No text, no numbers, no color legend bar, no annotations.
Aspect ratio 3:4, portrait.
```

## 6. Von Mises — Al 6061 (large) — `fea-al6061.png` · 3:4 portrait · FEA

```
FEA von Mises stress contour render of the gripper from the attached reference, rainbow jet colormap on the meshed surface, charcoal background (#1a1a22), scientific simulation look. Show MODERATE stress levels (mostly green-to-yellow, small red hotspots only at pivot bolt holes) representing a stiff aluminum part.
No text, no legend, no annotations. Aspect ratio 3:4, portrait.
```

## 7. Stress Plot — Aluminum — `fea-stress-al.png` · 4:3 landscape · FEA

```
Using the attached gripper as reference geometry, render a single FEA von Mises stress contour plot of one gripper finger. Rainbow jet colormap on a fine triangular mesh, dark charcoal background (#1a1a22), centered, scientific simulation aesthetic. No text, no legend, no annotations. Aspect ratio 4:3, landscape.
Stress level: Aluminum 6061 → mostly blue-green, low stress, very few small hotspots.
```

## 8. Stress Plot — CFRP — `fea-stress-cfrp.png` · 4:3 landscape · FEA

```
Using the attached gripper as reference geometry, render a single FEA von Mises stress contour plot of one gripper finger. Rainbow jet colormap on a fine triangular mesh, dark charcoal background (#1a1a22), centered, scientific simulation aesthetic. No text, no legend, no annotations. Aspect ratio 4:3, landscape.
Stress level: CFRP → almost entirely deep blue, lowest stress, minimal hotspots (best performer).
```

## 9. Stress Plot — PA12 Nylon — `fea-stress-pa12.png` · 4:3 landscape · FEA

```
Using the attached gripper as reference geometry, render a single FEA von Mises stress contour plot of one gripper finger. Rainbow jet colormap on a fine triangular mesh, dark charcoal background (#1a1a22), centered, scientific simulation aesthetic. No text, no legend, no annotations. Aspect ratio 4:3, landscape.
Stress level: PA12 Nylon → lots of orange-red, high stress, large hot zones near joints (worst performer).
```

## 10. FEA — All Three Materials — `fea-all-materials.png` · 16:9 landscape · FEA

```
Using the attached gripper as reference geometry, render THREE identical gripper fingers side by side in one frame, each with a von Mises FEA stress contour (rainbow jet colormap on meshed surface). Left finger mostly blue-green (low stress), center finger almost fully deep blue (lowest stress), right finger orange-red (high stress) — a clear left-to-right comparison. Dark charcoal background (#1a1a22), even spacing, scientific simulation aesthetic.
No text, no labels, no legend. Aspect ratio 16:9, landscape.
```

## 11. Load Test Setup (large) — `load-test.png` · 3:4 portrait · Lab photo

```
Using the robotic gripper in the attached image as the exact reference object, render a photorealistic engineering LAB TEST PHOTO: the gripper mounted vertically in a benchtop universal testing rig / load frame, its two fingers gripping a small metal test cylinder, thin steel test fixtures and a load cell above it. Realistic mechanical-engineering laboratory setting, neutral workbench, soft daylight, shallow depth of field, sharp focus on the gripper. Industrial product photography quality.
No text, no logos, no readouts. Aspect ratio 3:4, portrait.
```

## 12. Load Test Setup (report) — `load-test-setup.png` · 16:9 landscape · Lab photo

```
Photorealistic lab test photo of the gripper from the attached reference mounted in a benchtop load-testing rig, gripping a metal test object, with load-cell fixtures. Realistic engineering lab, soft lighting, shallow depth of field. Wider framing showing the full test setup.
No text, no readouts. Aspect ratio 16:9, landscape.
```

## 13. CAD Assembly — Section View — `cad-section-view.png` · 16:9 landscape · Blueprint

```
Using the robotic gripper in the attached image as the exact reference object, render a BLUEPRINT half-section assembly drawing in landscape. Thin crisp white line-art on deep navy-blue background (#0a1a3a) with a faint technical grid. Front elevation with the right half cut away to reveal the internal push-rod, actuator bore, and pivot pins; 45-degree section hatching on all cut faces; thin center lines through the shafts and bolt holes. Mechanical drafting aesthetic.
ABSOLUTELY NO text, numbers, dimensions, or title block — pure linework and hatching. Aspect ratio 16:9, landscape.
```

---

## Filename + Slot Reference Table

| # | Filename | Page slot | Type | Aspect |
|---|----------|-----------|------|--------|
| 0 | gripper-assembly.png | index.html — Gripper Assembly Render | Photoreal | 3:4 |
| 1 | design-spec.png | development.html — Design Spec Diagram | Blueprint | 3:4 |
| 2 | cad-isometric.png | development.html — Isometric View | Photoreal | 4:3 |
| 3 | cad-exploded.png | development.html — Exploded View | Photoreal | 4:3 |
| 4 | cad-crosssection.png | development.html — Cross-section | Blueprint | 4:3 |
| 5 | fea-stress.png | index.html — FEA Stress Distribution | FEA | 3:4 |
| 6 | fea-al6061.png | development.html — Von Mises Stress (Al 6061-T6) | FEA | 3:4 |
| 7 | fea-stress-al.png | development.html — Stress Plot (Al 6061-T6) | FEA | 4:3 |
| 8 | fea-stress-cfrp.png | development.html — Stress Plot (CFRP) | FEA | 4:3 |
| 9 | fea-stress-pa12.png | development.html — Stress Plot (PA12 Nylon) | FEA | 4:3 |
| 10 | fea-all-materials.png | technical-report.html — FEA Results (All Three) | FEA | 16:9 |
| 11 | load-test.png | development.html — Load Test Setup Photo | Lab photo | 3:4 |
| 12 | load-test-setup.png | technical-report.html — Load Test Setup Photo | Lab photo | 16:9 |
| 13 | cad-section-view.png | technical-report.html — CAD Assembly Section View | Blueprint | 16:9 |
