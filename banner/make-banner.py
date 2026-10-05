#!/usr/bin/env python3
"""Branded featured-image banner generator for cgthub.au articles.

Usage:
  make-banner.py --title "Capital Gains Tax on Property" --category "PROPERTY" \
    --subtitle "Australian CGT Guide 2026-27" \
    --points "50% discount rule,Main residence exemption,6-year rule" \
    --output banner.png

Renders a 1200x628 banner in the CGT Hub brand (deep teal + white), code-rendered
so text is always crisp. Verify visually before upload.
"""
import argparse
import textwrap
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 628
TEAL_DARK = (13, 61, 62)
TEAL = (13, 148, 136)
TEAL_LIGHT = (45, 212, 191)
WHITE = (255, 255, 255)
SLATE_100 = (241, 245, 249)
SLATE_300 = (203, 213, 225)

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def font(size, bold=False):
    return ImageFont.truetype(FONT_BOLD if bold else FONT, size)


def simple_bg():
    img = Image.new("RGB", (W, H), TEAL_DARK)
    d = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        r = int(TEAL_DARK[0] * (1 - t) + 8 * t)
        g = int(TEAL_DARK[1] * (1 - t) + 78 * t)
        b = int(TEAL_DARK[2] * (1 - t) + 70 * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))
    # decorative circles
    for cx, cy, cr in [(1080, 90, 150), (1150, 560, 190), (80, 560, 120)]:
        d.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], outline=(255, 255, 255, 40), width=2)
    # faint watermark text (top-right, clear of content)
    wf = font(110, bold=True)
    d.text((W - 330, 120), "CGT", font=wf, fill=(255, 255, 255, 12))
    return img


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--title", required=True)
    ap.add_argument("--category", required=True)
    ap.add_argument("--subtitle", default="")
    ap.add_argument("--points", default="")
    ap.add_argument("--output", required=True)
    a = ap.parse_args()

    img = simple_bg()
    d = ImageDraw.Draw(img, "RGBA")

    # Top brand bar
    d.rounded_rectangle([48, 40, 132, 104], radius=16, fill=TEAL)
    d.text((90, 72), "CGT", font=font(34, bold=True), fill=WHITE, anchor="mm")
    d.text((152, 52), "CGT HUB", font=font(30, bold=True), fill=WHITE)
    d.text((152, 86), "AUSTRALIAN TAX GUIDES", font=font(17), fill=TEAL_LIGHT)

    # Category pill
    pill_text = a.category.upper()
    pf = font(20, bold=True)
    bbox = d.textbbox((0, 0), pill_text, font=pf)
    pw = bbox[2] - bbox[0] + 44
    d.rounded_rectangle([48, 150, 48 + pw, 196], radius=23, fill=(255, 255, 255, 26),
                        outline=TEAL_LIGHT, width=2)
    d.text((48 + 22, 173), pill_text, font=pf, fill=WHITE, anchor="lm")

    # Headline (wrapped, up to 3 lines)
    y = 225
    for line in textwrap.wrap(a.title, width=26)[:3]:
        d.text((48, y), line, font=font(58, bold=True), fill=WHITE)
        y += 70

    if a.subtitle:
        d.text((48, y + 8), a.subtitle, font=font(26), fill=SLATE_300)

    # Bottom points strip (separator: | preferred, comma also works)
    sep = "|" if "|" in a.points else ","
    points = [p.strip() for p in a.points.split(sep) if p.strip()][:3]
    if points:
        strip_y = H - 120
        d.rectangle([0, strip_y, W, H], fill=(255, 255, 255))
        # reserve right side for domain label
        domain_label = "cgthub.au"
        df = font(20, bold=True)
        d.text((W - 48, strip_y + 60), domain_label, font=df,
               fill=(100, 116, 139), anchor="rm")
        usable_w = W - 96 - 190
        x = 48
        col_w = usable_w // max(len(points), 1)
        for p in points:
            # check circle
            d.ellipse([x, strip_y + 38, x + 44, strip_y + 82], fill=TEAL)
            d.text((x + 22, strip_y + 60), "✓", font=font(26, bold=True), fill=WHITE, anchor="mm")
            # fit point text: shrink font first, then word-boundary truncate with ellipsis
            max_w = col_w - 70
            size = 20
            pf = font(size, bold=True)
            while d.textlength(p, font=pf) > max_w and size > 14:
                size -= 1
                pf = font(size, bold=True)
            if d.textlength(p, font=pf) > max_w:
                words = p.split()
                p = ""
                for w in words:
                    trial = (p + " " + w).strip()
                    if d.textlength(trial + "…", font=pf) > max_w:
                        break
                    p = trial
                p = (p + "…") if p else "…"
            d.text((x + 58, strip_y + 60), p, font=pf, fill=TEAL_DARK, anchor="lm")
            x += col_w

    img.save(a.output)
    print(f"saved {a.output}")


if __name__ == "__main__":
    main()
