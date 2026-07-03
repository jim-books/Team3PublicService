#!/usr/bin/env python3
"""Generate SEED poster variant C — programmatic layout at 800×2000 (1:10 scale of 80×200 cm)."""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 800, 2000
NAVY = (27, 58, 107)
GREEN = (45, 106, 79)
GOLD = (201, 162, 39)
DARK = (26, 26, 46)
GREY = (90, 98, 112)
LIGHT_GREY = (122, 132, 148)
BG = (247, 248, 250)
WHITE = (255, 255, 255)

OUT = Path(__file__).parent / "variant-c-programmatic.png"
LOGO = Path(__file__).parent.parent.parent / "assets" / "seed-logo.png"


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def wrap_text(draw, text, font, max_width):
    words = text.split()
    lines, current = [], []
    for word in words:
        test = " ".join(current + [word])
        if draw.textlength(test, font=font) <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_bullet_list(draw, x, y, items, font, max_width, color=DARK, spacing=36):
    for item in items:
        draw.ellipse((x, y + 8, x + 10, y + 18), fill=GREEN)
        for i, line in enumerate(wrap_text(draw, item, font, max_width - 24)):
            draw.text((x + 22, y + i * 26), line, fill=color, font=font)
        y += spacing + (len(wrap_text(draw, item, font, max_width - 24)) - 1) * 26
    return y


def main():
    img = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(img)

    # Top accent bar
    draw.rectangle((0, 0, W, 8), fill=NAVY)

    y = 40

    # Logo
    if LOGO.exists():
        logo = Image.open(LOGO).convert("RGBA")
        ratio = 120 / logo.height
        logo = logo.resize((int(logo.width * ratio), 120), Image.Resampling.LANCZOS)
        img.paste(logo, ((W - logo.width) // 2, y), logo)
        y += 130

    # Headline
    title_font = load_font(72, bold=True)
    sub_font = load_font(18)
    tag_font = load_font(20)
    hook_font = load_font(26, bold=True)
    label_font = load_font(13, bold=True)
    section_font = load_font(28, bold=True)
    body_font = load_font(19)
    small_font = load_font(16)

    tw = draw.textlength("SEED", font=title_font)
    draw.text(((W - tw) / 2, y), "SEED", fill=DARK, font=title_font)
    y += 78

    sub = "School Education Evaluation and Development"
    sw = draw.textlength(sub, font=sub_font)
    draw.text(((W - sw) / 2, y), sub, fill=GREY, font=sub_font)
    y += 28

    tag = "Planting the future of education."
    tg = draw.textlength(tag, font=tag_font)
    draw.text(((W - tg) / 2, y), tag, fill=LIGHT_GREY, font=tag_font)
    y += 36

    draw.rectangle(((W - 64) // 2, y, (W + 64) // 2, y + 4), fill=GREEN)
    y += 24

    hook = "Where does school support go — and where is it needed most?"
    for i, line in enumerate(wrap_text(draw, hook, hook_font, W - 96)):
        lw = draw.textlength(line, font=hook_font)
        draw.text(((W - lw) / 2, y + i * 34), line, fill=NAVY, font=hook_font)
    y += 90

    margin = 48
    content_w = W - 2 * margin

    def section_label(text):
        nonlocal y
        draw.text((margin, y), text.upper(), fill=GREEN, font=label_font)
        y += 28

    def section_title(text):
        nonlocal y
        draw.text((margin, y), text, fill=NAVY, font=section_font)
        y += 40

    # Problem
    section_label("The Problem")
    y = draw_bullet_list(draw, margin, y, [
        "Resources follow broad formulas, not real school conditions",
        "Reporting is fragmented and slow for schools and governments",
        "Decision-makers lack timely, actionable evidence",
    ], body_font, content_w)
    y += 20

    # Users
    section_label("Who It Serves")
    chips = ["Governments & NGOs", "Schools", "Researchers", "Partners"]
    cx = margin
    cy = y
    chip_font = load_font(16, bold=True)
    for chip in chips:
        cw = draw.textlength(chip, font=chip_font) + 36
        if cx + cw > W - margin:
            cx = margin
            cy += 44
        draw.rounded_rectangle((cx, cy, cx + cw, cy + 36), radius=18, fill=(232, 240, 235), outline=(197, 217, 204))
        draw.text((cx + 18, cy + 8), chip, fill=NAVY, font=chip_font)
        cx += cw + 10
    y = cy + 56

    # Features
    section_label("How SEED Works")
    features = [
        ("1. Decision Dashboard", "Natural-language queries for allocation priorities", NAVY),
        ("2. AI Reporting Toolkits", "School profiles, classroom observations, funding briefs", GREEN),
        ("3. Research Dataset API", "Equity analytics for policy and intervention research", GOLD),
    ]
    card_font = load_font(21, bold=True)
    for title, desc, accent in features:
        draw.rounded_rectangle((margin, y, W - margin, y + 88), radius=12, fill=WHITE, outline=(216, 226, 240), width=2)
        draw.rectangle((margin, y, margin + 6, y + 88), fill=accent)
        draw.text((margin + 20, y + 14), title, fill=NAVY, font=card_font)
        draw.text((margin + 20, y + 46), desc, fill=GREY, font=body_font)
        y += 100

    y += 8

    # Flow
    section_label("Data Flow")
    steps = ["Collect", "Diagnose", "Allocate"]
    step_w = (content_w - 60) // 3
    sx = margin
    for i, step in enumerate(steps):
        draw.rounded_rectangle((sx, y, sx + step_w, y + 48), radius=10, fill=(240, 244, 248), outline=NAVY, width=2)
        stw = draw.textlength(step, font=chip_font)
        draw.text((sx + (step_w - stw) / 2, y + 14), step, fill=NAVY, font=chip_font)
        if i < 2:
            draw.text((sx + step_w + 8, y + 10), "→", fill=GREEN, font=load_font(24, bold=True))
        sx += step_w + 30
    y += 68

    # AI line
    ai_text = "AI reduces reporting friction and turns complex school data into decisions people can act on."
    draw.rounded_rectangle((margin, y, W - margin, y + 90), radius=12, fill=NAVY)
    for i, line in enumerate(wrap_text(draw, ai_text, body_font, content_w - 40)):
        draw.text((margin + 20, y + 18 + i * 28), line, fill=WHITE, font=body_font)
    y += 110

    # Demo placeholder
    draw.rounded_rectangle((margin, y, W - margin, y + 160), radius=16, fill=(35, 58, 107))
    dt = "Live Demo Screenshot"
    dtw = draw.textlength(dt, font=section_font)
    draw.text(((W - dtw) / 2, y + 56), dt, fill=WHITE, font=section_font)
    ds = "Replace with Enter.pro capture"
    dsw = draw.textlength(ds, font=small_font)
    draw.text(((W - dsw) / 2, y + 96), ds, fill=(200, 210, 230), font=small_font)
    y += 180

    # Impact
    section_label("Why It Matters")
    impacts = [
        "Fairer funding for high-need schools",
        "Less admin burden on educators",
        "Evidence-based public-service decisions",
        "Education equity infrastructure",
    ]
    ix, iy = margin, y
    cell_w = (content_w - 12) // 2
    for i, impact in enumerate(impacts):
        col = i % 2
        row = i // 2
        x0 = ix + col * (cell_w + 12)
        y0 = iy + row * 72
        draw.rounded_rectangle((x0, y0, x0 + cell_w, y0 + 60), radius=10, fill=WHITE, outline=(226, 232, 240))
        lines = wrap_text(draw, impact, small_font, cell_w - 20)
        for j, line in enumerate(lines):
            lw = draw.textlength(line, font=small_font)
            draw.text((x0 + (cell_w - lw) / 2, y0 + 14 + j * 22), line, fill=NAVY, font=small_font)
    y += 160

    # QR + CTA
    qr_size = 140
    qx = (W - qr_size) // 2
    draw.rounded_rectangle((qx, y, qx + qr_size, y + qr_size), radius=12, fill=WHITE, outline=NAVY, width=3)
    qr_label = "QR CODE"
    qlw = draw.textlength(qr_label, font=small_font)
    draw.text((qx + (qr_size - qlw) / 2, y + 58), qr_label, font=small_font, fill=GREY)
    y += qr_size + 20

    cta = "Try the Live Demo"
    ctw = draw.textlength(cta, font=load_font(28, bold=True))
    draw.text(((W - ctw) / 2, y), cta, fill=NAVY, font=load_font(28, bold=True))
    y += 40

    url = "37f7ba50441f48ff808dfbcadd92d0be.prod.enterapp.pro"
    uw = draw.textlength(url, font=load_font(12))
    draw.text(((W - uw) / 2, y), url, fill=LIGHT_GREY, font=load_font(12))
    y += 32

    footer = "Team 3 · AI Collision Lab · Jimmy · Sim · Ken · Janis"
    fw = draw.textlength(footer, font=small_font)
    draw.text(((W - fw) / 2, y), footer, fill=GREY, font=small_font)
    y += 26

    sdg = "SDG 4 · SDG 16 · #ATOX #Tsinghua #TGYD"
    sw2 = draw.textlength(sdg, font=load_font(13, bold=True))
    draw.text(((W - sw2) / 2, y), sdg, fill=GREEN, font=load_font(13, bold=True))

    img.save(OUT, "PNG", dpi=(150, 150))
    print(f"Saved {OUT}")


if __name__ == "__main__":
    main()
