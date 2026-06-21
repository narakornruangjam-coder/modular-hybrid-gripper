# Modular Hybrid Gripper — AI Image Generation Prompts (v2)

**Project:** ENG-203 Modular Hybrid Gripper System
**Generator:** Nano Banana (Gemini)
**Goal:** A varied, professional image set — not 14 near-identical renders. Every prompt is built from a rich text description plus a swappable **Camera Block**, so you can change angle, zoom, lens, and lighting per generation.

---

## How to use this file

1. **Reference image is OPTIONAL and LOOSE.** You only have a sample model render. Do **not** ask the AI to copy it exactly — that's what made everything look the same. Either:
   - attach nothing and let the **written description** drive the image, or
   - attach your sample render with the line *"use only as loose design inspiration for the general shape — do not copy it; follow the written description and camera direction."*
2. **Each prompt = Description + Camera Block + Negative.** To get a different look, **only change the Camera Block** (angle / distance / lens / lighting). Keep the Description identical so the gripper stays recognizable across shots.
3. **Generate 3–4 variants per slot** using the "Try these" camera options, then pick the best. Mixing angles and zoom across the 14 images is what makes the set look professionally shot rather than batch-rendered.
4. **No baked-in text.** AI text comes out garbled. Keep every image text-free; the website supplies all labels and captions.

---

## Master Description (the gripper — paste the relevant parts into prompts)

> A compact two-finger industrial robotic gripper. Symmetric four-bar linkage fingers made of glossy black carbon-fiber (CFRP) with a visible twill weave, joined by polished stainless-steel shoulder-bolt pivot pins. Matte white textured PA12 nylon V-groove grip pads at the fingertips. A polished anodized-aluminum cylindrical actuator body with a central vertical push-rod, a bolted circular mounting flange, and an L-shaped bracket base with bolt holes. Precision-machined, clean industrial design language.

---

## 🎥 Camera & Variant Control Library

Swap any of these into a prompt's **Camera Block** to re-shoot the same object differently.

**ANGLE**
- `front orthographic` — straight-on elevation (technical, flat)
- `hero 3/4` — front-right, slightly above eye level (most flattering product angle)
- `low hero` — camera below, looking up (dramatic, makes it look powerful)
- `top-down` — plan view from directly above
- `rear 3/4` — back-right view (shows actuator + flange)
- `macro detail` — tight on one feature (fingertip pad, pivot pin, weave)

**DISTANCE / ZOOM**
- `extreme close-up` — fills frame with one detail, heavy background blur
- `close-up` — a single finger or the actuator head
- `medium` — whole gripper fills ~80% of frame (default product shot)
- `wide` — gripper small in frame with environment/context around it
- `establishing` — full scene (rig, bench, lab) with the gripper as focal point

**LENS / DEPTH**
- `100mm macro, f/2.8` — compressed, dreamy shallow depth of field (detail shots)
- `85mm, f/4` — portrait compression, subject crisp, background soft (hero shots)
- `50mm, f/8` — natural perspective, mostly sharp (catalog/technical)
- `35mm, f/5.6` — mild environmental, a little context, slight wideness
- `24mm, f/11` — wide, everything sharp, slight dramatic perspective (establishing)

**LIGHTING / MOOD**
- `soft studio` — large softbox, even, shadow-light, clean catalog feel
- `dramatic key+rim` — one hard key light + a rim/edge light on a dark set (premium hero)
- `bright daylight` — natural window light, realistic, neutral (documentary/lab)
- `low-key technical` — dark background, focused accent light (scientific / FEA)
- `top diffuse` — soft overhead, minimal shadow (blueprint/exploded clarity)

---

# THE 14 IMAGES

Each slot below gives the **recommended** camera setup plus **"Try these"** alternates so you can vary angle and zoom.

---

## 0. Hero Gripper Render — `gripper-assembly.png` · 3:4 portrait · Photoreal

> This is the site's hero shot **and** the loose design reference for every other prompt — so it deserves the richest treatment. The current `gripper-assembly.png` is already generated; the variants below are **re-shoot options** if you want a stronger hero. Keep the Description + Style identical and swap only the **Camera Block** to compare looks, then keep your favorite.

**Base prompt (paste, then drop in one Camera Block from below):**
```
A compact two-finger industrial robotic gripper [paste Master Description].

Style: premium studio product photograph, KeyShot / SolidWorks Visualize quality, seamless graphite-to-light-gray gradient backdrop, crisp reflections on the polished aluminum and glossy carbon-fiber twill weave, realistic soft contact shadow, fine surface micro-detail (machined edges, anodized sheen, weave texture, brushed pivot pins). Hyper-detailed, tack-sharp focus, high-end industrial design catalog look.

CAMERA BLOCK: << insert one option below >>

Negative: no text, no logos, no watermark, no annotations, no people, not cartoon, no plastic-toy look, no warped geometry.
Aspect ratio 3:4, portrait.
```

**Camera Block variants — generate all four, pick the best hero:**
- **0-A · Signature hero (recommended):** `hero 3/4, slightly above eye level · medium · 85mm, f/4 · dramatic key+rim lighting on a dark-to-light set` — the classic flattering product angle.
- **0-B · Powerful low hero:** `low hero, camera below looking up · medium · 50mm, f/5.6 · single hard key + soft fill, deep contact shadow` — makes it look strong and premium.
- **0-C · Detail / texture:** `macro detail on the fingertip pad + nearest pivot · extreme close-up · 100mm macro, f/2.8 · soft studio with a grazing edge light` — shows the carbon weave and V-groove pad texture; great as a secondary accent image.
- **0-D · Clean catalog:** `hero 3/4 · medium · 50mm, f/8 · soft studio, even` — neutral, well-lit, no drama (use if 0-A feels too moody).

**Tip:** for a cohesive site, match the hero's lighting mood to the FEA shots (low-key) or keep it brighter than the rest so it pops — your call.

---

## 1. Design Spec Diagram — `design-spec.png` · 3:4 portrait · Blueprint

```
An engineering BLUEPRINT technical drawing of a two-finger robotic gripper [paste Master Description, but render as line-art only].

Style: precise orthographic front elevation, thin crisp white line-art on a deep navy-blue background (#0a1a3a) with a faint fine drafting grid. CAD drawing-sheet aesthetic. Show the carbon-fiber four-bar linkage, the nylon V-groove pads, the cylindrical actuator with central push-rod, and the bolted L-bracket — all as clean outlined linework with pivot-joint center marks, bolt-hole circles, thin leader lines, and two small section-detail circles as a drafting motif.

CAMERA BLOCK: front orthographic · medium · flat technical projection (no perspective) · top diffuse even lighting.

Negative: ABSOLUTELY no text, numbers, dimensions, title block, or watermark — pure linework only. No color fills.
Aspect ratio 3:4, portrait.
```
**Try these:** add a faint ghosted second view (side elevation) in the corner for a real drawing-sheet feel · `top-down` for a plan-view variant.

---

## 2. Isometric Product View — `cad-isometric.png` · 4:3 landscape · Photoreal

```
A photorealistic 3/4 product render of a two-finger industrial robotic gripper [paste Master Description].

Style: high-end studio CAD render (KeyShot quality), seamless light-gray studio background (#e9e9e9), soft diffuse lighting, subtle realistic contact shadow, gentle reflections on polished aluminum and glossy carbon-fiber twill. Sharp focus, clean industrial product photography.

CAMERA BLOCK: hero 3/4 (elevated, showing linkage depth) · medium · 50mm, f/8 · soft studio lighting.

Negative: no text, no logos, no annotations, no people.
Aspect ratio 4:3, landscape.
```
**Try these:** `rear 3/4` to feature the actuator + flange · `low hero · wide · 35mm` for a more dynamic, spacious composition.

---

## 3. Exploded Assembly View — `cad-exploded.png` · 4:3 landscape · Photoreal

```
A photorealistic EXPLODED ASSEMBLY render of a two-finger robotic gripper [paste Master Description].

Separate the components along their assembly axes with even spacing, professional exploded-view style: the two white PA12 V-groove pads, the carbon-fiber link plates, the stainless shoulder-bolt pivot pins, the central push-rod, the cylindrical aluminum actuator body, the bolted flange, and the L-bracket base — each floating apart in correct stacking order along thin faint assembly guide lines.

CAMERA BLOCK: hero 3/4 · wide (so all floating parts fit with breathing room) · 50mm, f/8 · top diffuse + soft fill (even light on every part).

Negative: no text, no part numbers, no annotations, no clutter.
Aspect ratio 4:3, landscape.
```
**Try these:** `front orthographic · wide` for a cleaner technical explosion · vertical explosion axis vs diagonal for a different rhythm.

---

## 4. Cross-section — `cad-crosssection.png` · 4:3 landscape · Blueprint

```
A BLUEPRINT CROSS-SECTION (cutaway) technical drawing of a two-finger robotic gripper [paste Master Description as line-art].

Style: precise orthographic section view, thin crisp white line-art on deep navy-blue (#0a1a3a) with a faint drafting grid. Slice through the vertical center plane to reveal the internal push-rod, the actuator bore, the linkage pivot pins, and bolt holes. Standard 45° section hatching on all cut solid faces, thin center lines through shafts.

CAMERA BLOCK: front orthographic section · medium · flat technical projection · top diffuse.

Negative: ABSOLUTELY no text, numbers, dimensions, or title block — pure linework and hatching only.
Aspect ratio 4:3, landscape.
```
**Try these:** `macro detail` section zoomed on the actuator bore + push-rod for a focused cutaway · half-section (one half solid, one half cut) for variety.

---

## FEA SET (5–10) — make each one DISTINCT

> ⚠️ These were the copy-paste offenders. Fix: give **each material a different camera angle + zoom + a different stress story + a different deformation amount.** That's what makes a real simulation gallery — engineers screenshot from different views.

**Shared FEA style (paste into each):**
```
Finite element analysis (FEA) von Mises stress simulation of a carbon-fiber robotic gripper finger and four-bar linkage. Smooth rainbow jet stress contour mapped onto the surface (deep blue = low stress → cyan → green → yellow → orange → red = peak stress). Fine triangular FEA mesh wireframe visible across the surface. Realistic ANSYS / SolidWorks Simulation aesthetic, dark charcoal background (#1a1a22), soft low-key technical lighting, subtle ambient occlusion in the recesses for depth.
Negative: no text, no numbers, no readable legend, no UI panels, no watermark.
```

### 5. Main FEA Stress (Home hero) — `fea-stress.png` · 3:4 portrait
```
[Shared FEA style.] Whole finger + linkage assembly under grip load. Stress concentrations glow yellow-orange-red sharply at the pivot pin holes and the lug root; the rest cools to green and blue. Very slight exaggerated elastic bend in the finger to show it is loaded.
CAMERA BLOCK: hero 3/4 · medium · 85mm, f/4 · low-key technical with a soft rim on the contour.
Aspect ratio 3:4, portrait.
```
**Try these:** `macro detail on the red pivot hotspot · extreme close-up · 100mm` for a dramatic stress-concentration shot.

### 6. Von Mises — Al 6061 (large) — `fea-al6061.png` · 3:4 portrait
```
[Shared FEA style.] Aluminum 6061-T6 part: MODERATE stress — mostly green-to-yellow body with small focused red hotspots only at the pivot bolt holes. Stiff, minimal deformation (almost no visible bend).
CAMERA BLOCK: front orthographic-ish 3/4 · medium · 50mm, f/8 · low-key technical, even.
Aspect ratio 3:4, portrait.
```
**Try these:** `low hero` looking up the finger for a different framing than #5.

### 7. Stress Plot — Aluminum — `fea-stress-al.png` · 4:3 landscape
```
[Shared FEA style.] Single isolated gripper finger, Aluminum 6061: mostly blue-green, low overall stress, only a few tiny hotspots. Rigid — no visible deflection.
CAMERA BLOCK: side profile (finger horizontal) · close-up · 85mm, f/4 · low-key technical.
Aspect ratio 4:3, landscape.
```

### 8. Stress Plot — CFRP — `fea-stress-cfrp.png` · 4:3 landscape
```
[Shared FEA style.] Single isolated gripper finger, CFRP: almost entirely deep blue, the lowest stress of all three, minimal hotspots — clearly the best performer. Essentially zero deflection (very stiff).
CAMERA BLOCK: hero 3/4 (slightly different angle than the Al shot) · close-up · 85mm, f/4 · low-key technical with a faint cool rim.
Aspect ratio 4:3, landscape.
```

### 9. Stress Plot — PA12 Nylon — `fea-stress-pa12.png` · 4:3 landscape
```
[Shared FEA style.] Single isolated gripper finger, PA12 nylon: large orange-red high-stress zones spreading from the joints and lug root — clearly the worst performer. Show a noticeably EXAGGERATED bend/deflection in the finger (it flexes a lot under load) to tell the failure story visually.
CAMERA BLOCK: low hero (emphasize the bend) · close-up · 50mm, f/5.6 · low-key technical.
Aspect ratio 4:3, landscape.
```

### 10. FEA — All Three Materials — `fea-all-materials.png` · 16:9 landscape
```
[Shared FEA style.] THREE identical gripper fingers in one frame, left-to-right comparison: LEFT mostly green-yellow with small bend (Aluminum), CENTER almost fully deep blue and perfectly straight (CFRP, best), RIGHT heavy orange-red with an exaggerated bend (PA12, worst). Even spacing, identical camera on each, consistent lighting so only the stress colors and deflection differ.
CAMERA BLOCK: front orthographic (flat, so the three compare fairly) · wide · 50mm, f/11 (all sharp) · low-key technical.
Aspect ratio 16:9, landscape.
```

---

## LAB / TEST PHOTOS — two variants each (pick per slot)

> You asked for both **candid-real** and **clean-studio**. Generate both, choose whichever sells the "we actually built and tested it" story best for that page.

### 11. Load Test Setup (Development) — `load-test.png` · 3:4 portrait · Lab photo

**Variant A — candid real lab:**
```
A real engineering university LAB PHOTO: a two-finger carbon-fiber robotic gripper [paste Master Description] mounted vertically in a benchtop universal load-testing frame, its V-groove pads gripping a small machined metal test cylinder, a load cell and thin steel fixtures above it. Authentic student materials-lab setting — slightly cluttered workbench, a caliper and hex keys nearby, cable runs, neutral institutional lighting. Shot on a phone/DSLR, mild realistic imperfections, believable not staged.
CAMERA BLOCK: hero 3/4 at bench eye-level · medium · 35mm, f/2.8 (shallow, gripper sharp, background soft) · bright daylight from a window.
Negative: no text, no readouts, no logos, not over-polished, no rendered/CGI look.
Aspect ratio 3:4, portrait.
```
**Variant B — clean studio:**
```
A polished studio PRODUCT photo of the same gripper mounted in a benchtop load-testing rig gripping a metal test cylinder, load-cell fixtures above. Clean dark seamless background, professional three-point lighting, crisp reflections, magazine-quality.
CAMERA BLOCK: hero 3/4 · medium · 85mm, f/4 · dramatic key+rim.
Negative: no text, no readouts, no logos, no people.
Aspect ratio 3:4, portrait.
```
**Try these:** `macro detail · extreme close-up · 100mm` on the pads gripping the cylinder (works great for both variants).

### 12. Load Test Setup (Report, wide) — `load-test-setup.png` · 16:9 landscape · Lab photo

**Variant A — candid real lab:**
```
Wide real LAB PHOTO of the gripper [paste Master Description] mounted in a benchtop load frame gripping a metal test object, load-cell fixtures, in an authentic university materials-testing lab — workbench, test equipment, a laptop showing a graph (screen blurred/unreadable), institutional lighting. Documentary, believable, shot on DSLR.
CAMERA BLOCK: establishing eye-level · wide · 24mm, f/5.6 (context sharp) · bright daylight.
Negative: no readable text/screens, no logos, no CGI look.
Aspect ratio 16:9, landscape.
```
**Variant B — clean studio:**
```
Wide clean studio shot of the full load-test setup — gripper in the load frame gripping a test object, fixtures and load cell — on a seamless dark backdrop, professional even lighting, premium engineering-catalog look.
CAMERA BLOCK: establishing 3/4 · wide · 35mm, f/8 · soft studio + rim.
Negative: no text, no readouts, no people.
Aspect ratio 16:9, landscape.
```

---

## 14. Microstructure — Aluminum 6061-T6 — `microstructure-al.png` · 4:3 landscape · Scientific

> **Generator: DALL-E (ChatGPT)**
> Individual microstructure image for the Al 6061-T6 card in the Microstructure Analysis section.

```
A close-up optical micrograph of Aluminum 6061-T6 alloy microstructure on a near-black background (#0a0a0f). Equiaxed aluminium grains as polygonal cells with slightly varying silver-grey tones, fine dark Mg₂Si precipitate particles scattered uniformly inside the grains, grain boundaries as thin dark lines. Monochromatic silver-grey palette, sharp and high-contrast scientific microscopy look. Subtle electric-blue (#2997FF) ambient edge glow. Dark-science aesthetic, dramatic low-key technical lighting, photorealistic high detail.

Negative: no text, no labels, no scale bars, no measurement markings, no watermarks, no white background.
Aspect ratio 4:3, landscape.
```

**Save as:** `images/microstructure-al.png` — commit with `git add -f images/microstructure-al.png`

---

## 15. Microstructure — CFRP — `microstructure-cfrp.png` · 4:3 landscape · Scientific

> **Generator: DALL-E (ChatGPT)**
> Individual microstructure image for the CFRP card.

```
A scanning electron micrograph (SEM) cross-section of carbon fibre reinforced polymer (CFRP) on a near-black background (#0a0a0f). Dense array of circular carbon fibre cross-sections — small dark circles with bright-rimmed edges — embedded in a smooth dark epoxy polymer matrix, arranged in a tight near-hexagonal pattern at approximately 60% fibre volume fraction. High contrast: bright fibre edges against dark matrix. Subtle electric-blue (#2997FF) ambient edge glow. Dark-science aesthetic, dramatic low-key technical lighting, photorealistic SEM microscopy detail.

Negative: no text, no labels, no scale bars, no measurement markings, no watermarks, no white background.
Aspect ratio 4:3, landscape.
```

**Save as:** `images/microstructure-cfrp.png` — commit with `git add -f images/microstructure-cfrp.png`

---

## 16. Microstructure — PA12 Nylon (SLS) — `microstructure-pa12.png` · 4:3 landscape · Scientific

> **Generator: DALL-E (ChatGPT)**
> Individual microstructure image for the PA12 Nylon card.

```
A scanning electron micrograph (SEM) of SLS-sintered PA12 nylon microstructure on a near-black background (#0a0a0f). Irregular rounded polymer particles fused together with visible inter-particle gaps and porosity, partially-melted particle boundaries, rough heterogeneous surface texture. Dark warm-grey tones emphasising the porous sintered structure. Subtle electric-blue (#2997FF) ambient edge glow. Dark-science aesthetic, dramatic low-key technical lighting, photorealistic SEM microscopy detail.

Negative: no text, no labels, no scale bars, no measurement markings, no watermarks, no white background.
Aspect ratio 4:3, landscape.
```

**Save as:** `images/microstructure-pa12.png` — commit with `git add -f images/microstructure-pa12.png`

---

## 13. CAD Assembly — Section View (Report) — `cad-section-view.png` · 16:9 landscape · Blueprint

```
A BLUEPRINT half-section assembly drawing of a two-finger robotic gripper [paste Master Description as line-art], landscape.

Style: thin crisp white line-art on deep navy-blue (#0a1a3a) with a faint drafting grid. Front elevation with the RIGHT HALF cut away to reveal the internal push-rod, actuator bore, and pivot pins; 45° section hatching on cut faces; thin center lines through shafts and bolt holes. Mechanical drafting aesthetic.

CAMERA BLOCK: front orthographic half-section · wide · flat technical projection · top diffuse.

Negative: ABSOLUTELY no text, numbers, dimensions, or title block — pure linework and hatching.
Aspect ratio 16:9, landscape.
```
**Try these:** `hero 3/4 section` (sectioned isometric) for a more three-dimensional cutaway feel.

---

## Filename + Slot Reference Table

| # | Filename | Page slot | Type | Aspect | Recommended camera |
|---|----------|-----------|------|--------|--------------------|
| 0 | gripper-assembly.png | index.html — hero render | Photoreal | 3:4 | hero 3/4 · 85mm |
| 1 | design-spec.png | development.html — design spec | Blueprint | 3:4 | front ortho |
| 2 | cad-isometric.png | development.html — isometric | Photoreal | 4:3 | hero 3/4 · 50mm |
| 3 | cad-exploded.png | development.html — exploded | Photoreal | 4:3 | hero 3/4 wide |
| 4 | cad-crosssection.png | development.html — cross-section | Blueprint | 4:3 | front ortho section |
| 5 | fea-stress.png | index.html — FEA stress | FEA | 3:4 | hero 3/4 · 85mm |
| 6 | fea-al6061.png | development.html — Von Mises Al | FEA | 3:4 | 3/4 · 50mm |
| 7 | fea-stress-al.png | development.html — stress plot Al | FEA | 4:3 | side profile close |
| 8 | fea-stress-cfrp.png | development.html — stress plot CFRP | FEA | 4:3 | hero 3/4 close |
| 9 | fea-stress-pa12.png | development.html — stress plot PA12 | FEA | 4:3 | low hero close |
| 10 | fea-all-materials.png | technical-report.html — FEA all three | FEA | 16:9 | front ortho wide |
| 11 | load-test.png | development.html — load test photo | Lab photo | 3:4 | hero 3/4 · 35mm (A/B) |
| 12 | load-test-setup.png | technical-report.html — load test wide | Lab photo | 16:9 | establishing · 24mm (A/B) |
| 13 | cad-section-view.png | technical-report.html — section view | Blueprint | 16:9 | front ortho half-section |
| 14 | microstructure-al.png | development.html — microstructure card (Al) | Scientific | 4:3 | optical micrograph dark-science |
| 15 | microstructure-cfrp.png | development.html — microstructure card (CFRP) | Scientific | 4:3 | SEM cross-section dark-science |
| 16 | microstructure-pa12.png | development.html — microstructure card (PA12) | Scientific | 4:3 | SEM sintered dark-science |

---

## Quick workflow

1. Pick a slot → copy its prompt → paste the Master Description where marked.
2. Generate. If it looks generic, **change only the Camera Block** using the Library and the "Try these" hints, then regenerate.
3. Aim for a mix across the final 14: some hero 3/4, some macro close-ups, some wide establishing shots — variety reads as "professionally photographed."
4. Save with the exact filename from the table into `images/`. (Reminder: `*.png` is git-ignored — these need `git add -f images/<name>.png` when committing.)
