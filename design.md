# Design spec: Al Sayde visual redesign (navy and gold)

Status: spec only. Nothing in this document has been implemented to match it yet.
Reference mockup: `image.png` at the project root (1122 × 1402 px, navy and gold version).
Content source: https://www.alsayde.org/, fetched 14 November 2026.
This version replaces the earlier green-and-ivory spec. The local `index.html`, `redesign.css`, and `redesign.js` were built from that earlier version and must be redone against this one.

---

## 0. How to read this spec

There are two sources, and each one controls different things.

| The mockup (`image.png`) controls | The live site controls |
| --- | --- |
| Layout, section order, proportions, spacing | Every photograph and image file |
| Colors, gradients, borders, shadows | Every heading, paragraph, name, date, time, address, phone number |
| Typefaces, sizes, weights, letter-spacing | Every link destination and URL |
| Card shapes (arched cards, date badges, round arrows) | Which organizations and events exist |
| Icon style and placement | French and Arabic wording |
| Interface labels: button text, small section labels, “View all” links | Copyright and credit lines |

The pictures inside the mockup are placeholders. None of them is used. Each picture slot in the mockup gets an existing site image, listed in section 6.

Interface labels versus content:

- **Interface labels** are short pieces of text that guide the visitor, such as “Plan Your Visit”, “Explore Our Church”, “Our Story”, “View All Events”, and the small gold labels above headings (“Our Church”, “Our Community”, “Upcoming Events”, “Gallery”). These follow the mockup.
- **Content** is anything that makes a statement about the parish, such as headlines, descriptions, dates, times, the address, and event blurbs. This must already be published on the site.

The mockup’s large headlines (“A Place of Faith”, “Rooted in Faith Together Since 1992”, “A Vibrant Parish Family”, “Life at Saint Mary’s”) and its event blurbs are content that the site does not publish. Section 13 lists each one. The default is the published text, kept in the mockup’s typographic treatment. A mockup headline is used only if the parish approves it.

---

## 1. Goal

Rebuild the look of the Al Sayde homepage and the shared page frame (header, footer, inner-page banner) so it matches `image.png` as closely as possible:

- a dark navy, cathedral-like atmosphere with warm gold accents
- serif display headings in all caps and italic gold
- a full-bleed hero photo with the text on the left
- a service-times bar under the hero
- a navy “Our Church” band with the photo on the left and text on the right
- a row of arched organization cards with gold outlines
- a cream “Upcoming Events” band with three photo cards and date badges
- a navy gallery band with a row of photos

The parish, its words, its photos, its links, and its three languages stay the same.

---

## 2. Hard constraints

1. **Same images.** Use only the files listed in section 6. Do not crop the mockup, generate pictures, use stock photos, or trace the mockup’s artwork. The mockup’s Christ Pantocrator dome, church exterior at dusk, candle close-ups, festival tents, purple Lenten vestment, and icon of the Virgin are all placeholders.
2. **Same content.** Headlines, paragraphs, names, dates, times, the address, and phone numbers come from the live site. Section 4 has the verbatim inventory.
3. **Same URLs.** Every link points to a URL that exists today. Keep slugs exactly as they are, including the misspelled `/event/festivhal_2023/`.
4. **Same languages.** English at `/`, French at `/fr/`, Arabic at `/ar/`. French and Arabic text comes from the published translations. Arabic is right to left.
5. **Same functions.** Search submits `GET /?s=`. The newsletter form, contact form, donation, authorized payment, and registration stay on their current endpoints and field names.
6. **Same platform.** The WordPress theme `alsayde` stays the delivery target. The static local copy is only for previewing the design.
7. **No new photographs or raster icon files.** Icons are inline SVG line icons, specified in section 7, or existing icon-font glyphs. Decorative crosses and ornaments are inline SVG or CSS, not image files.

What this version deliberately changes from the earlier spec:

- **Palette:** navy and gold replace green and ivory.
- **Typefaces:** two serif display families are added because the mockup’s look depends on them (section 5.2). Open Sans stays for body text.

---

## 3. Page anatomy (homepage, desktop)

Measurements are taken from `image.png`. The mockup is 819 design units wide, and the build target is a 1440 px desktop viewport (1 unit ≈ 1.76 px). Values below are already converted to 1440 px and rounded. Use them as targets, not pixel-locked rules.

| # | Band | Mockup y-range (units) | Desktop height target | Background |
| --- | --- | --- | --- | --- |
| A | Header (overlays the hero) | 0–45 | 80 px | Transparent over the hero, then solid navy when scrolled |
| B | Hero | 0–265 | 600–680 px (min 560 px) | Photo plus navy gradient |
| C | Service bar | 268–312 | 84 px | Navy 900 |
| D | Our Church (story) | 312–500 | ~400 px | Navy 850 with a faint gold cross |
| E | Our Community (organizations) | 500–700 | ~360 px | Navy 800 gradient |
| F | Upcoming Events | 700–905 | ~380 px | Cream 100 |
| G | Gallery | 905–1024+ | ~300 px | Navy 950 with a curved top edge |
| H | Newsletter (not in the mockup) | — | ~200 px | Navy 900 |
| I | Footer (not in the mockup) | — | ~320 px | Navy 950 |

Content width is 1200 px max, centered, with 48 px side gutters on desktop. The hero, service bar, and all bands are full bleed. Their content sits inside the 1200 px container.

---

## 4. Content inventory (verbatim from the live site)

### 4.1 Homepage copy

- **H1:** Saint Mary's Antiochian Orthodox Church, Montreal
- **Line under the H1** (links to `http://www.antiochian.org/`, new tab): Antiochian Orthodox Christian Archdiocese of North America
- **Opening paragraph:**

  > St Mary’s Antiochian Orthodox Church in Montreal is a parish of the Antiochian Orthodox Christian Archdiocese of North America. We started as a small church in 1992 because of the growing number of parishioners with Middle Eastern origins in St. George and St. Nicholas churches. Mr. Fawaz, Chief of St. George's Choir at that time, and Father Crow of St. George joined forces to bring together twenty-four believers to form a founding committee for the new parish according to the Constitution of the Archdiocese.

- **Services line:** Matins every Sunday at 10:00 AM. Divine Liturgy every Sunday at 11:00 AM.
- **Section headings as published:** About Us; Get to know our organizations; Upcoming Events; Latest Events; Services
- **Existing button text:** Read More; Know More

### 4.2 Organizations (homepage order)

| # | Name as published | Excerpt as published (truncation kept) | URL |
| --- | --- | --- | --- |
| 1 | Antiochian Women | We are a group of ladies of all ages, of many nationalities bound | `/our_organization/antiochian-ladies/` |
| 2 | Arabic School | Arabic Language School affiliated to the Church of the Virgin Mar | `/our_organization/arabic-school/` |
| 3 | Choir | The Heavens and the earth will declare the glory of the Lord! | `/our_organization/choir/` |
| 4 | Scouts | Join us every Friday from 7pm to 9pm & discover the experience of | `/our_organization/scouts/` |
| 5 | Social Committee | The Social Committee is responsible for all church related events | `/our_organization/social-committee/` |
| 6 | Sunday School | The childhood family (Toufoula) at the Orthodox Church of the Vir | `/our_organization/sunday-school/` |
| 7 | Teen Soyo | Teen SOYO (Youth Movement of the Archdiocese of Antioch of North | `/our_organization/teen-soyo/` |
| 8 | YAM | "I no longer live, but Christ lives in me" Youth of the St. Ma | `/our_organization/yam/` |

The mockup shows six of these and writes “Teen SOYO”. The build shows all eight and uses the published spelling, “Teen Soyo”.

### 4.3 Events (homepage “Latest Events”)

| # | Title | Date | URL |
| --- | --- | --- | --- |
| 1 | Christmas Dinner 2023 | December 12, 2023 | `/event/dinner_2023/` |
| 2 | Sunday School Activity | February 24, 2024 | `/event/sunday_school_0224/` |
| 3 | Teen Soyo Party 2023 | December 28, 2023 | `/event/teen_soyo_2023/` |
| 4 | Theophany 2024 | January 6, 2024 | `/event/theophany_2024/` |
| 5 | Festival 2023 | August 14, 2023 | `/event/festivhal_2023/` |
| 6 | Sunday School 2023 | December 29, 2023 | `/event/sunday_school_2023/` |

The homepage publishes no description for these events (the `<p>` is empty).

### 4.4 Contact facts

- Mailing address: 120 Gouin E, Montreal, Quebec H3L 1A7, Canada
- Phone: (514) 858-7004
- Fax: (514) 507-7004
- Fr. Ferzli cell: (514) 809-9992
- Emails: alsayde@alsayde.org; frelias@alsayde.org (Fr. Ferzli); frseraphim@alsayde.org (Fr. Seraphim)
- Clergy: Archimandrite Seraphim Daoud; Rev. Fr. Elias Ferzli, Pastor; Archpriest Fr. Michel Fawaz, Pastor Emeritus
- Social: https://www.facebook.com/alsaydemontreal, https://www.instagram.com/al.sayde/
- Copyright: © 2021 Alsayde All rights reserved. Powered by iWebContact (links to https://iwebcontact.ca/)

### 4.5 Existing menu (all destinations must stay reachable)

Home `/` · About Us `/about-us/` · Organizations `/organizations/` · Gallery `/gallery/` · Events `/events-page/` (Hall Rental `/hall-rental/`, Alsayde Festival `/events-page/alsayde-festival/`) · Resources (Weekly Bulletin `/weekly-bulletin/`, Byzantine chants `/resources/chants/`, Prayers `/prayers/`, Services of the Great Lent `/resources/lent_services/`, Professional services `/professional-services/`) · Donations `/donation/` (Authorized Payment Application `/payment/`) · News `/news/` · Contact Us `/contact-us/` · Privacy Policy `/contact-us/privacy-policy/` (footer)

---

## 5. Visual system

### 5.1 Color tokens

The values below were sampled from `image.png` and rounded into a usable palette. Use the token names in the CSS.

**Navy (backgrounds)**

| Token | Hex | Sampled from | Used for |
| --- | --- | --- | --- |
| `--navy-950` | `#04132e` | Header strip, top of the hero | Deepest navy: scrolled header, gallery band, footer |
| `--navy-900` | `#081c3e` | Service bar fill | Service bar, newsletter band, dropdown menus |
| `--navy-850` | `#082146` | Story band | “Our Church” band |
| `--navy-800` | `#0b2b57` | Community band | Organization band (top of its gradient) |
| `--navy-750` | `#0f3566` | Lighter glow behind cards | Radial highlight in the community band |
| `--navy-ink` | `#021d42` | Lower part of the organization cards | Card fade-to-navy at the bottom of arched cards |

**Gold (accents)**

| Token | Hex | Sampled from | Used for |
| --- | --- | --- | --- |
| `--gold-300` | `#ecc77f` | Highlight of the “Plan Your Visit” button | Top of the button gradient, hover glow |
| `--gold-400` | `#e0b46b` | “Plan Your Visit” fill, “FAITH” glyph | Primary button, italic gold headline words |
| `--gold-500` | `#d6a457` | Lower part of the button | Button gradient bottom, date-badge rule, icons |
| `--gold-600` | `#c29440` | “Our Story” link text | Text links on navy, “View All” links, active nav underline |
| `--gold-line` | `rgba(214, 164, 87, 0.45)` | Arched card outlines, service-bar dividers | 1 px outlines and dividers on navy |
| `--gold-on-cream` | `#8c5e22` | “Upcoming Events” label (darkened for contrast) | Small gold text on cream (meets 4.5:1) |

**Cream (light band)**

| Token | Hex | Sampled from | Used for |
| --- | --- | --- | --- |
| `--cream-100` | `#f3ece3` | Events band background | Events band |
| `--cream-200` | `#ede2d7` | Events band behind the cards | Gradient bottom of the events band |
| `--card` | `#fbf8f3` | Event card body | Event card body, date badge face |
| `--card-line` | `#e4d7c4` | Event card edges | Card borders, date-badge border |

**Text**

| Token | Hex | Used for |
| --- | --- | --- |
| `--text-on-navy` | `#f5efe4` | Headings and the wordmark on navy |
| `--text-on-navy-muted` | `#c6cfdd` | Paragraphs on navy (about 80% strength) |
| `--ink` | `#1f1a14` | Headings on cream |
| `--ink-muted` | `#5f5447` | Paragraphs and dates on cream |

**Gradients and overlays**

- **Hero overlay:** `linear-gradient(90deg, rgba(4,19,46,0.92) 0%, rgba(4,19,46,0.70) 38%, rgba(4,19,46,0.15) 70%, rgba(4,19,46,0) 100%)`, plus a bottom fade `linear-gradient(180deg, rgba(4,19,46,0) 60%, rgba(4,19,46,0.95) 100%)` so the hero melts into the service bar.
- **Header (over the hero):** `linear-gradient(180deg, rgba(4,19,46,0.85) 0%, rgba(4,19,46,0) 100%)`. Once the page scrolls past 80 px, solid `--navy-950` with a `--gold-line` bottom border.
- **Community band:** `radial-gradient(ellipse at 50% 0%, var(--navy-750) 0%, var(--navy-800) 45%, var(--navy-850) 100%)`.
- **Arched organization card:** photo on top, then `linear-gradient(180deg, rgba(2,29,66,0) 35%, rgba(2,29,66,0.85) 70%, var(--navy-ink) 100%)` over the lower half.
- **Primary button:** `linear-gradient(180deg, var(--gold-300) 0%, var(--gold-400) 45%, var(--gold-500) 100%)`.
- **Events band:** `linear-gradient(180deg, var(--cream-100) 0%, var(--cream-200) 100%)` with a very faint paper grain (CSS noise at about 3% opacity, optional).

Contrast rules:

- Gold `--gold-400` on `--navy-950` passes for large text and icons. Body-size gold text on navy uses `--gold-600` or larger type.
- Small gold labels on cream use `--gold-on-cream`, not `--gold-400`.
- Navy text on the gold button (`--navy-950` on `--gold-400`) passes.

### 5.2 Typography

The mockup uses three type voices.

| Voice | Mockup examples | Family | Notes |
| --- | --- | --- | --- |
| Display caps | “A PLACE OF”, “SAINT MARY’S” wordmark | **Cinzel** (Google Fonts), 500–600 | Roman inscription caps, letter-spacing 0.04em |
| Display serif, italic accent | “FAITH”, “Rooted in Faith Together”, “Since 1992”, “A Vibrant Parish Family”, “Life at Saint Mary’s”, card titles | **Cormorant Garamond** (Google Fonts), 500–600, italic 500–600 | Gold italic for accent words |
| UI and body sans | Nav, labels, buttons, paragraphs, dates | **Open Sans** (already loaded), 400/600/700 | Labels in caps with wide tracking |

Arabic pages use **Noto Naskh Arabic** for display and **Noto Sans Arabic** for body, because Cinzel and Cormorant have no Arabic glyphs.

Type scale at 1440 px desktop (mobile values in parentheses):

| Role | Family | Size / line height | Weight | Case and tracking | Color |
| --- | --- | --- | --- | --- | --- |
| Wordmark line 1 | Cinzel | 22 / 24 (18) | 600 | Caps, 0.04em | `--text-on-navy` |
| Wordmark lines 2–3 | Open Sans | 10.5 / 14 (9.5) | 600 | Caps, 0.14em | `--text-on-navy-muted` |
| Hero label | Open Sans | 12 / 16 | 600 | Caps, 0.22em | `--text-on-navy` |
| Hero headline, caps line | Cinzel | 64 / 68 (38 / 42) | 500 | Caps, 0.02em | `--text-on-navy` |
| Hero headline, italic gold line | Cormorant Garamond italic | 76 / 76 (46 / 48) | 600 | Caps as in the mockup (“FAITH”), 0.02em | `--gold-400` |
| Hero paragraph | Open Sans | 18 / 28 (16 / 25) | 400 | — | `--text-on-navy` at 90% |
| Section label | Open Sans | 12 / 16 | 600 | Caps, 0.24em | `--gold-600` on navy, `--gold-on-cream` on cream |
| Section heading | Cormorant Garamond | 44 / 50 (32 / 36) | 500 | Title case | `--text-on-navy` or `--ink` |
| Section heading accent | Cormorant Garamond italic | Same as the heading | 600 | — | `--gold-400` |
| Body | Open Sans | 15.5 / 25 | 400 | — | `--text-on-navy-muted` or `--ink-muted` |
| Nav item | Open Sans | 13.5 / 20 | 600 | Title case | `--text-on-navy` |
| Button | Open Sans | 13 / 16 | 700 | Caps, 0.12em | See 5.4 |
| Service bar title | Open Sans | 15 / 20 | 600 | — | `--text-on-navy` |
| Service bar detail | Open Sans | 13 / 18 | 400 | — | `--text-on-navy-muted` |
| Organization card name | Cormorant Garamond | 22 / 24 | 600 | Title case, may wrap to 2 lines | `--text-on-navy` |
| Event card title | Cormorant Garamond | 24 / 28 | 600 | — | `--ink` |
| Event card text | Open Sans | 13.5 / 20 | 400 | — | `--ink-muted` |
| Date badge month | Open Sans | 11 / 12 | 700 | Caps, 0.12em | `--ink` |
| Date badge day | Cormorant Garamond | 34 / 34 | 600 | — | `--ink` |

Load `Cinzel:wght@500;600` and `Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600` from Google Fonts with `display=swap`, beside the existing Open Sans link.

### 5.3 Spacing, radius, and depth

- **Spacing scale (px):** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96.
- **Band padding:** 80 px top and bottom on desktop, 56 px on tablet, 48 px on mobile. The service bar uses 0 vertical padding; its content is 84 px tall.
- **Radius:**
  - Buttons: 6 px (the mockup buttons are softly rounded rectangles, not pills)
  - Story photo: 10 px
  - Event cards: 12 px
  - Date badge: 6 px
  - Gallery photos: 10 px
  - Arched organization cards: `border-radius: 999px 999px 16px 16px` (a full round arch on top, gentle corners at the bottom)
  - Round arrow buttons: 50%
- **Shadows:**
  - Event cards on cream: `0 10px 30px rgba(31, 26, 20, 0.10)`
  - Arched cards on navy: `0 18px 40px rgba(0, 0, 0, 0.35)` plus the 1 px `--gold-line` outline
  - Story photo: `0 20px 50px rgba(0, 0, 0, 0.45)`
  - Gold button hover: `0 0 0 4px rgba(224, 180, 107, 0.18)`

### 5.4 Buttons and links

| Kind | Mockup example | Fill | Border | Text | Size | Icon |
| --- | --- | --- | --- | --- | --- | --- |
| Primary | PLAN YOUR VISIT → | Gold gradient (5.1) | None | `--navy-950`, caps, 0.12em | 48 px tall, 26 px side padding | Right arrow after the text, 16 px |
| Outline | EXPLORE OUR CHURCH | Transparent | 1.5 px `rgba(245,239,228,0.85)` | `--text-on-navy`, caps | 48 px tall, 26 px side padding | None |
| Text link with rule | OUR STORY → | None | 1 px `--gold-600` underline, 8 px below the text | `--gold-600`, caps, 0.18em | — | Right arrow |
| “View all” link | VIEW ALL EVENTS → | None | 1 px `--gold-on-cream` underline on cream | `--gold-on-cream`, caps | — | Right arrow |
| Round arrow | ← → beside “A Vibrant Parish Family” | Transparent | 1.5 px `--text-on-navy` at 70% | `--text-on-navy` | 40 px circle | Chevron |
| Round arrow (card) | Circle arrow on each event card | Transparent | 1.5 px `--ink` at 35% | `--ink` | 28 px circle | Right chevron |

States:

- **Hover:** primary buttons brighten (gradient shifts up by one step) and gain the glow ring. Outline buttons fill with `rgba(245,239,228,0.10)`. Text links slide the arrow 4 px right.
- **Focus:** 2 px `--gold-400` outline with a 3 px offset on everything interactive.
- **Pressed:** translate down 1 px.
- **Transitions:** 160 ms ease-out.

---

## 6. Image binding: mockup slot to existing file

Each slot uses exactly one existing file. `timthumb.php?src=` URLs are resize wrappers. The file named in `src` is the source.

| Mockup slot | What the mockup shows (placeholder) | Existing file to use | Crop and treatment |
| --- | --- | --- | --- |
| Header logo medallion | Round icon of the Virgin in a gold ring | `wp-content/themes/alsayde/img/logo.png` (157 × 157) | 52 px circle on desktop (40 px mobile), 1.5 px `--gold-500` ring, 2 px gap |
| Hero background, slide 1 | Dome with Christ Pantocrator | `wp-content/uploads/2018/06/Banner7.jpg` | `object-fit: cover`, focus right of center, overlay from 5.1 |
| Hero background, slide 2 | (same slot, rotation) | `wp-content/uploads/2018/06/Banner6.jpg` | Same |
| Hero background, slide 3 | (same slot, rotation) | `wp-content/uploads/2018/06/h1.jpg` | Same |
| Story photo | Church exterior at dusk | `wp-content/uploads/2018/06/about.jpg` | 16:10 box, 10 px radius, cover, shadow from 5.3 |
| Organization card: Antiochian Women | Candles | `wp-content/uploads/2018/06/rsz_img_1589.jpg` | Arched card, cover, focus on faces or the center |
| Organization card: Arabic School | Boy reading | `wp-content/uploads/2018/06/rsz_arabic_school.jpg` | Same |
| Organization card: Choir | Women singing | `wp-content/uploads/2018/06/choir_resize.jpg` | Same |
| Organization card: Scouts | Scouts in uniform | `wp-content/uploads/2018/06/scoutas.jpg` | Same |
| Organization card: Social Committee | (not shown in the mockup) | `wp-content/uploads/2018/06/IMG_2645.jpg` | Same |
| Organization card: Sunday School | (not shown in the mockup) | `wp-content/uploads/2018/06/sunday.jpg` | Same |
| Organization card: Teen Soyo | Young people | `wp-content/uploads/2018/06/organizations_img2.png` | Same (PNG; check that transparency sits on navy) |
| Organization card: YAM | Young adults | `wp-content/uploads/2018/06/yam2.jpg` | Same |
| Event card 1 | Festival tents | `wp-content/uploads/2019/03/31.jpg` (Christmas Dinner 2023) | 16:9 top of card, cover |
| Event card 2 | Parish luncheon hall | `wp-content/uploads/2019/02/2-1.jpg` (Sunday School Activity) | Same |
| Event card 3 | Purple vestment with a gold cross | `wp-content/uploads/2019/01/21.jpg` (Teen Soyo Party 2023) | Same |
| Event cards 4–6 (scrolled into view) | — | `2019/01/53.jpg`, `2018/12/41.jpg`, `2018/10/13.jpg` | Same |
| Gallery photo 1 (taller) | Icon of the Virgin | `wp-content/uploads/photo-gallery/Lantier/thumb/IMG_2821.jpg` | Tall frame (3:4), 10 px radius |
| Gallery photo 2 | Candles | `wp-content/uploads/photo-gallery/Cabane_a_sucre/thumb/1.jpg` | 4:3 frame |
| Gallery photo 3 | Church interior with chandelier | `wp-content/uploads/photo-gallery/Diner_Charite/thumb/IMG_1920.jpg` | 4:3 frame |
| Gallery photo 4 (cut off at the right) | Clergy and parishioners | `wp-content/uploads/photo-gallery/winter_festival/thumb/2.jpg` | 4:3 frame, cut off by the viewport edge as in the mockup |
| Gallery photos 5–6 (scroll) | — | `photo-gallery/Sunday_school_camp/thumb/CDRX0175.jpg`, `photo-gallery/Sunday_School_Christmas/thumb/F123C50D-E78C-42ED-81E7-EE571849D9DD.jpeg` | 4:3 frame |
| Inner page banner | — | `wp-content/themes/alsayde/img/innerbanner.jpg` | Same navy overlay as the hero, 320 px tall |
| Favicon | — | `wp-content/themes/alsayde/img/favicon.ico` and `wp-content/uploads/2019/03/cropped-FAZZ1509-*.jpg` | Unchanged |
| Footer social icons | — | `img/footer_fb.png`, `img/footer_ig.png`, `img/footer_email.png` | Shown at 20 px; may be replaced by matching inline SVG line icons for visual consistency, same links |

Because the real photos are brighter and less moody than the placeholders, use these treatments to reach the mockup’s look without changing the files:

- **Hero:** the navy gradient overlay from 5.1, plus `filter: saturate(0.9) contrast(1.05)` on the photo.
- **Organization cards:** the bottom-half navy fade from 5.1, so the icon and name sit on dark navy like in the mockup.
- **Event and story photos:** no filter. Show them as they are.
- **Gallery:** no filter. A 1 px `rgba(214,164,87,0.25)` inner outline.

If a photo has a different aspect ratio than its frame, it is cropped with `object-fit: cover` and an `object-position` chosen per image. Never stretch.

---

## 7. Icons

The mockup uses thin gold line icons (about 1.5 px stroke). Build them as inline SVG on a 24 × 24 grid with `stroke="currentColor"`, `stroke-width="1.5"`, `fill="none"`, round caps and joins. They are colored `--gold-500` unless noted otherwise.

| Where | Mockup icon | Icon to draw |
| --- | --- | --- |
| Service bar: Sunday Matins | Calendar | Calendar with two rings and a grid |
| Service bar: Divine Liturgy | Chalice | Chalice (cup, stem, base) |
| Service bar: Location | Map pin | Map pin with a dot |
| Service bar: Location arrow | → | Right arrow, `--text-on-navy` |
| Organization: Antiochian Women | Two-person group | Group of people |
| Organization: Arabic School | Open book | Open book |
| Organization: Choir | Music note | Music note |
| Organization: Scouts | Fleur-de-lis | Fleur-de-lis |
| Organization: Social Committee | (not shown) | Two hands, or a heart in hands |
| Organization: Sunday School | (not shown) | Small cross over an open book |
| Organization: Teen Soyo | Pin or flame | Flame |
| Organization: YAM | Group | Group of people (larger) |
| Header search | Magnifier | Magnifier, `--text-on-navy` |
| Menu chevrons | ⌄ | Small down chevron, 10 px |
| Arrows | → ← | Arrow and chevron set |
| Decorative cross (story band) | Large ornate gold cross at the right edge | Antiochian-style cross outline, 260 px tall, `--gold-500` at 18% opacity, partly cut off by the right edge |

Organization icons sit in a 40 px circle with a 1 px `--gold-line` border, centered above the name, overlapping the photo fade.

---

## 8. Section-by-section specification

### 8.A Header

**Layout (desktop):** 80 px tall, full width, content inside the 1200 px container. Left: medallion logo and three-line wordmark. Center-right: navigation. Far right: language switch, then the search icon.

**Wordmark** (built from the published H1, split across three lines like the mockup):

- Line 1, Cinzel caps: SAINT MARY'S
- Line 2, small caps sans: ANTIOCHIAN ORTHODOX CHURCH
- Line 3, small caps sans: MONTREAL (the published spelling, with no accent, on English pages; French pages use their published spelling)

The wordmark and logo are one link to `/` (or `/fr/`, `/ar/`). The accessible name is “Saint Mary's Antiochian Orthodox Church, Montreal”.

**Navigation**, in the mockup’s order and labels. Every published destination stays reachable.

| Top item | Opens | Children (existing URLs) |
| --- | --- | --- |
| Home | `/` | — |
| Our Church ⌄ | Dropdown, and the label links to `/about-us/` | About Us, News, Contact Us, Privacy Policy |
| Worship ⌄ | Dropdown only | Weekly Bulletin, Byzantine chants, Prayers, Services of the Great Lent, Professional services |
| Community ⌄ | Dropdown, and the label links to `/organizations/` | Organizations, plus the eight organization pages |
| Events | `/events-page/` (dropdown for its children) | Hall Rental, Alsayde Festival |
| Gallery | `/gallery/` | — |
| Give | `/donation/` (dropdown for its child) | Authorized Payment Application |

The mockup shows Events and Give without chevrons. Add a 10 px chevron to both, so the children are discoverable.

- **Active item:** `--gold-400` text with a 2 px `--gold-400` underline 6 px below, 24 px wide, centered. The mockup shows this under “Home”.
- **Dropdowns:** `--navy-900` panel, 1 px `--gold-line` border, 8 px radius, 8 px padding, items 40 px tall, hover row `rgba(255,255,255,0.06)`, and a 160 ms fade and slide down from 6 px above. They open on hover and on focus. Click or tap toggles them. Escape closes them.

**Language switch:** “EN FR AR” in 12 px caps, 0.12em tracking, 12 px apart. The current language is `--gold-400` with the same underline as the active nav item. The links are the `hreflang` URLs WPML already outputs for that page.

**Search:** a magnifier icon button. On click it expands into a 260 px field inside the header (navy-900 fill, gold-line border, 6 px radius) and submits `GET /?s=`. Escape collapses it.

**Social and “Visit Us”:** the mockup header has neither. Facebook, Instagram, and email move to the footer. The “Plan Your Visit” hero button covers the visit link.

**Scroll behavior:** the header overlays the hero with the gradient from 5.1. After 80 px of scroll it becomes sticky, solid `--navy-950`, with a gold-line bottom border, 68 px tall.

**Mobile (≤ 980 px):**

- Logo and wordmark, plus a hamburger button (44 px tap target).
- The menu opens as a full-height `--navy-950` panel from the right with accordion submenus.
- The language switch and search sit at the top of the panel.
- Body scroll locks while the menu is open. Focus is trapped in the panel, and Escape closes it.

### 8.B Hero

**Layout:**

- Full-bleed photo slides (section 6) behind the overlay from 5.1.
- The text block sits on the left inside the 1200 px container, 600 px max width.
- The text block is vertically centered in the upper 80% of the hero (in the mockup it starts about 75 units below the top).

**Content, top to bottom (mockup treatment, published words):**

1. **Label:** ANTIOCHIAN ORTHODOX CHRISTIAN ARCHDIOCESE OF NORTH AMERICA, in 12 px caps with 0.22em tracking. It links to `http://www.antiochian.org/` in a new tab. The mockup reads “ANTIOCHIAN ORTHODOX CHURCH · MONTRÉAL”; the published line is used instead.
2. **Headline** (the H1, published words in the mockup’s two-voice treatment):
   - Caps line, Cinzel, `--text-on-navy`: SAINT MARY'S ANTIOCHIAN ORTHODOX CHURCH,
   - Italic gold line, Cormorant Garamond italic, `--gold-400`: Montreal
   - This keeps the exact H1 text, “Saint Mary's Antiochian Orthodox Church, Montreal”. Because the caps line is longer than “A PLACE OF”, it wraps to two lines at 64 px. Up to three lines total is acceptable on desktop.
3. **Paragraph:** the first sentence of the published opening paragraph: “St Mary’s Antiochian Orthodox Church in Montreal is a parish of the Antiochian Orthodox Christian Archdiocese of North America.” The full paragraph appears in section 8.D.
4. **Buttons**, 16 px apart, 32 px below the paragraph:
   - Primary: PLAN YOUR VISIT → links to `/contact-us/`
   - Outline: EXPLORE OUR CHURCH links to `/about-us/`

**Slides:**

- Crossfade between the three banners every 7 s with a 1.2 s fade.
- They pause on hover, on focus within the hero, and when `prefers-reduced-motion: reduce` is set (in that case only Banner7.jpg shows).
- No arrows and no dots, matching the mockup. The slides are decorative (`alt=""`) because the H1 carries the meaning.

**Bottom edge:** the overlay fades into `--navy-900` so the service bar continues seamlessly.

### 8.C Service bar

**Layout:**

- Full-bleed `--navy-900` strip, 84 px tall, with 1 px `--gold-line` borders top and bottom.
- Inside the container: three equal columns separated by 1 px × 36 px vertical `--gold-line` dividers.
- Each column centers an icon (24 px, gold) beside two lines of text.

**Content (published facts, mockup layout):**

| Column | Icon | Line 1 | Line 2 | Link |
| --- | --- | --- | --- | --- |
| 1 | Calendar | Sunday Matins | 10:00 AM | — |
| 2 | Chalice | Divine Liturgy | 11:00 AM | — |
| 3 | Map pin | Montreal, Quebec | 120 Gouin E | Whole column links to `/contact-us/`, with a → at the right |

The mockup writes “Montréal, QC / 120 Boulevard Gouin Est”. The published spelling is used instead.

The full published sentence, “Matins every Sunday at 10:00 AM. Divine Liturgy every Sunday at 11:00 AM.”, is included as visually hidden text so screen readers get the original wording.

**Mobile:** the columns stack, each one 64 px tall with a horizontal gold-line divider. The bar keeps full width.

### 8.D Our Church (story)

**Layout:**

- `--navy-850` band, 80 px vertical padding.
- Two columns: the photo on the left (about 55% width) and the text on the right (about 45%), 48 px gap, vertically centered.
- The decorative SVG cross (section 7) sits at the right edge, vertically centered on the text, partly cut off by the viewport edge, behind the text.

**Photo:** `about.jpg`, 16:10, 10 px radius, with a heavy shadow.

**Text column:**

1. **Label:** OUR CHURCH (section-label style, `--gold-600`)
2. **Heading:** About Us, the published section heading, in Cormorant Garamond 44 px `--text-on-navy`. A gold italic accent line follows, “Since 1992”, which is allowed because it restates the published fact “We started as a small church in 1992”. If the parish prefers no new phrasing, use “About Us” alone. See section 13.
3. **Body:** the full published opening paragraph (section 4.1), 15.5 / 25, `--text-on-navy-muted`, max width 52 characters per line. The link to the archdiocese stays inline.
4. **Link:** OUR STORY →, a text link with a gold rule, linking to `/about-us/`.

**Mobile:** the photo goes on top, then the text. The cross moves behind the photo’s top right at 10% opacity.

### 8.E Our Community (organizations)

**Layout:**

- Navy gradient band (5.1), 80 px vertical padding.
- Header row: the label and heading on the left; two round arrow buttons (← →) on the right, aligned to the heading baseline.
- Below: a horizontal track of arched cards, 6 visible on desktop, with 16 px gaps. The track scrolls by one card per arrow click, with scroll-snap, and also scrolls by swipe or trackpad.

**Header content:**

- Label: OUR COMMUNITY
- Heading: Get to know our organizations, the published heading, with “organizations” set in gold italic to match the mockup’s two-voice heading. See section 13 for the mockup headline “A Vibrant Parish Family”.

**Arched card (× 8, order from section 4.2):**

- Size: 180 × 230 px on desktop (the mockup ratio is about 0.78). Arch top `999px 999px 16px 16px`, 1 px `--gold-line` outline, shadow from 5.3.
- The photo fills the whole card. The lower 55% fades into `--navy-ink` (5.1).
- Bottom area, centered: the icon in a 40 px gold-line circle, then the name in Cormorant Garamond 22 px `--text-on-navy`. The name may wrap to two lines (“Antiochian / Women”, “Arabic / School”, “Social / Committee”, “Sunday / School”, “Teen / Soyo”), as the mockup wraps “Antiochian Women”.
- The whole card links to the organization URL. The accessible name is the organization name. The published excerpt is the link’s description.
- **Hover and focus:** the card lifts 4 px, the outline becomes `--gold-400`, the photo zooms to 1.04 over 300 ms, and the published excerpt (section 4.2, truncation kept) fades in over the fade area. On touch devices the excerpt is not shown, so the tap goes straight to the page.

**Arrows:**

- 40 px circles, outline style.
- They are disabled (35% opacity) at the start and end of the track.
- Keyboard: Tab reaches the arrows and then each card.
- The track is a list (`role="list"`, with list items).

**After the track:** a right-aligned VIEW ALL ORGANIZATIONS → text link to `/organizations/`. The mockup has no such link; it is added so the index page stays reachable from the homepage. It is styled like VIEW ALL EVENTS.

**Tablet:** 3.5 cards visible, swipeable. **Mobile:** 1.6 cards visible, swipeable, with the arrows hidden.

### 8.F Upcoming Events

**Layout:**

- Cream band (5.1), 72 px vertical padding.
- Header row: the label UPCOMING EVENTS, followed by a 40 px gold rule as in the mockup, on the left. VIEW ALL EVENTS → on the right, linking to `/events-page/`.
- Below it: a 3-column card grid on desktop, 24 px gaps.

**Cards (6 total, from section 4.3).** Desktop shows the first three. The rest are reached either through a second row revealed by a “Show more events” button, or by horizontal scroll. Choose one and keep it consistent. The recommended option is a second row, which keeps all six visible without hidden scrolling.

**Card anatomy, matching the mockup:**

- 12 px radius, `--card` fill, 1 px `--card-line` border, shadow from 5.3.
- Top: the event photo, 16:9, cover.
- Bottom area, 20 px padding, in a row:
  - **Date badge** (left): 56 × 60 px, `--card` face, 1 px `--card-line` border, 6 px radius. The month is in 11 px caps (DEC, FEB, JAN, AUG), then a 1 px gold rule, then the day in Cormorant Garamond 34 px. The badge overlaps the photo’s bottom edge by 16 px, as in the mockup.
  - **Text** (middle): the title in Cormorant Garamond 24 px `--ink`, then one line in `--ink-muted` 13.5 px.
  - **Round arrow** (right): 28 px, bottom aligned.
- The whole card links to the event URL.

**The text line under the title:**

- The mockup shows a one-sentence description such as “Our annual parish festival, bringing together food, culture, and community.”
- The site publishes none for these events, so the line shows the full published date (for example, “December 12, 2023”).
- If an event page has its own published body text, its first sentence (cut at 90 characters with an ellipsis) may be used instead.
- Never write new descriptions.

**Event data:**

- The six published events are the default.
- If the site’s event calendar (spider-event-calendar or ECWD) returns future events, those may lead the grid, using that event’s own image, title, date, and URL.
- The mockup samples (“Alsayde Festival / Jun 15”, “Parish Luncheon / Mar 2”, “Great Lent Begins / Mar 3”) appear only if the site itself returns those exact events.

**Tablet:** 2 columns. **Mobile:** 1 column, with the badge still overlapping the photo.

### 8.G Gallery

**Layout:**

- `--navy-950` band. The top edge is a soft convex curve rising into the cream band, as in the mockup: an SVG wave about 40 px tall, `--navy-950` fill, over `--cream-200`.
- Two areas:
  - **Left (about 30%):** the label GALLERY and the heading.
  - **Right (about 70%):** a horizontal row of photos that runs off the right edge of the viewport.

**Header content:**

- Label: GALLERY
- Heading: Gallery is the published page title. To avoid repeating the label, set the label to FROM OUR PARISH, with the heading “Gallery” in Cormorant Garamond 44 px `--text-on-navy`. See section 13 for the mockup headline “Life at Saint Mary’s”.
- Below the heading: a text link VIEW THE GALLERY → to `/gallery/`.

**Photo row:**

- The first photo is taller (3:4, 230 px tall). The rest are 4:3 at 190 px tall, bottom aligned as in the mockup.
- 16 px gaps, 10 px radius, thin gold inner outline.
- Every photo links to `/gallery/`.
- The row scrolls horizontally with snap. The last visible photo is cut off by the viewport edge to signal that there is more.
- The order is the order in which `/gallery/` lists its albums (section 6).

**Mobile:** the heading goes on top, then the row (2.2 photos visible).

### 8.H Newsletter (not in the mockup, kept from the live site)

**Layout:**

- `--navy-900` band, 64 px padding.
- Left: the label STAY CONNECTED and the heading “Subscribe to our newsletter” (the published submit-button text, used as the heading).
- Right: the form.

**Form:** keep the existing Mailchimp for WP form exactly. That means:

- form id `mc4wp-form-1`, `data-id="22146"`
- fields `FNAME` (First Name), `LNAME` (Last Name), `MMERGE5` (Phone Number), `EMAIL` (Email address), all required
- the honeypot field and the hidden `_mc4wp_*` fields
- the submit value “Subscribe to our newsletter”

**Style:**

- Inputs: 48 px tall, `rgba(255,255,255,0.06)` fill, 1 px `--gold-line` border, 6 px radius, `--text-on-navy` text, placeholder at 60% opacity.
- Submit: the primary gold button.
- Desktop: 4 inputs and the button in one row. Tablet: 2 × 2 plus the button. Mobile: stacked.

Each input gets a visible label or a visually hidden label (placeholders are not labels).

### 8.I Footer (not in the mockup; styled to match it)

**Layout:**

- `--navy-950`, 64 px top padding.
- Top row, 5 columns:
  1. Brand: medallion logo and wordmark (as in the header), then the address “120 Gouin E, Montreal / Quebec H3L 1A7, Canada”, the phone link (514) 858-7004, and the email link alsayde@alsayde.org.
  2. Our Church: About Us, News, Contact Us, Privacy Policy
  3. Worship: Weekly Bulletin, Byzantine chants, Prayers, Services of the Great Lent, Professional services
  4. Community: Organizations, plus the eight organization links
  5. Events and Giving: Events, Hall Rental, Alsayde Festival, Gallery, Donations, Authorized Payment Application
- Column headings: section-label style in `--gold-600`. Links: 14 px `--text-on-navy-muted`, hover `--text-on-navy`.
- Social row: Facebook, Instagram, and email icons (20 px gold line icons, or the existing footer PNGs), with the same URLs.
- Bottom bar: a 1 px `--gold-line` divider, then the verbatim copyright line from 4.4 on the left and the language switch on the right.

**Mobile:** columns become accordions, except the brand column, which stays open.

---

## 9. Inner pages

These pages get the new header and footer and an inner banner. Their body content is not touched: About, Organizations, each organization, Gallery, Events, each event, Hall Rental, Alsayde Festival, Weekly Bulletin, each bulletin month, Byzantine chants, Prayers, Great Lent services, Professional services, Donations, Authorized Payment, News, Contact, Privacy, Sacraments, Sunday School registration, and every French and Arabic version.

**Inner banner:**

- 320 px tall, `innerbanner.jpg` with the hero’s navy overlay.
- Inside: breadcrumb (Home / Section) in 12 px caps `--gold-600`, then the page title (the published H1 or H2) in Cormorant Garamond 52 px `--text-on-navy`.

**Body area:**

- Cream (`--cream-100`) background, 880 px max reading width for text pages, 1200 px for grids.
- Existing headings inside the body get Cormorant Garamond.
- Links get `--gold-on-cream` with an underline.
- Tables and forms get the field styling from 8.H, adapted to cream: white fill, `--card-line` border.

**Specific pages:**

- **Contact:** keep every block, word for word: Email, Phone, and Fax; Mailing Address; Office Hours; Church Location; Contacts; Services; Social Media; Family Registration at church; Newsletter subscription. The blocks become cards in a 2-column grid, with the contact form on the right. Captcha and form fields are unchanged.
- **Organizations index:** the eight arched cards in a 4-column grid (no carousel), with the excerpts visible under each card on cream.
- **Gallery:** the existing Photo Gallery plugin output inside the cream body. Only the album-title typography and the hover outline are restyled.
- **Events and event pages:** the existing calendar output inside the cream body. Event headings get Cormorant. Dates get the date-badge style where the markup allows.
- **Weekly Bulletin and bulletin months:** the existing PDF lists become a clean list with a gold PDF line icon per row. The links are unchanged.
- **Donations and payment:** the existing forms (Ninja Forms or WooCommerce) are restyled with the field styles only. No change to fields, steps, or providers.

---

## 10. Languages and right-to-left

- **French:** same layout and the published French strings. Interface labels need French equivalents: PLANIFIER VOTRE VISITE, EXPLORER NOTRE ÉGLISE, NOTRE ÉGLISE, NOTRE COMMUNAUTÉ, ÉVÉNEMENTS À VENIR, VOIR TOUS LES ÉVÉNEMENTS, GALERIE, NOTRE HISTOIRE. The parish must confirm these, because they are new interface strings.
- **Arabic:**
  - `dir="rtl"` on `<html>`. Everything mirrors: logo on the right, nav order reversed, the hero text block on the right with the gradient reversed (dark on the right), arrows reversed, carousels starting from the right.
  - Fonts: Noto Naskh Arabic for display, Noto Sans Arabic for body.
  - Remove letter-spacing in Arabic.
  - Interface labels need Arabic equivalents, confirmed by the parish.
- The language switch on every page links to that page’s own translation (WPML `hreflang` URLs). It does not jump to the homepage.
- Photos are the same files in all three languages.

---

## 11. Responsive behavior

| Breakpoint | Width | Changes |
| --- | --- | --- |
| Desktop L | ≥ 1280 px | As specified |
| Desktop | 1024–1279 px | Container 100% minus 2 × 40 px; hero headline 56 px; 5 organization cards visible |
| Tablet | 768–1023 px | Hamburger nav; hero 560 px tall, headline 46 px; service bar in 3 tight columns; story stacks; 3.5 organization cards; events 2 columns; gallery row 3.2 photos |
| Mobile | ≤ 767 px | Hero 88vh, headline 38 / 46 px, buttons stacked full width; service bar stacked; organizations 1.6 cards, swipe, no arrows; events 1 column; gallery 2.2 photos; footer accordions |

Tap targets are at least 44 × 44 px. No horizontal page scroll; only the carousels and the gallery row scroll sideways.

---

## 12. Motion and accessibility

**Motion:**

- Hero crossfade 1.2 s every 7 s.
- On first view, cards and section headings fade up 12 px over 400 ms, staggered by 60 ms.
- Hover lifts take 200 ms.
- With `prefers-reduced-motion: reduce`, all of these are off and the hero shows one still image.

**Landmarks:** `header`, `nav` (labelled “Primary”), `main`, `footer`, plus `nav` labelled “Languages”.

**Headings:** one `h1` (the hero). Each band heading is an `h2`. Card titles are `h3`.

**Contrast:** every text and background pair meets WCAG AA (4.5:1 for body, 3:1 for large text and icons). Check gold on navy and gold on cream with the tokens in 5.1.

**Keyboard:**

- Skip link “Skip to content” is the first element.
- Dropdowns, the search toggle, the carousel arrows, and the mobile menu all work by keyboard.
- Escape closes menus and search.
- The focus ring is always visible.

**Images:**

- The hero slides and decorative crosses use `alt=""`.
- The story photo uses alt text describing the church, or `alt=""` if the parish provides no description.
- Organization and event photos use `alt=""`, because the card title names the link.
- Gallery photos use the album name as alt text.

**Forms:** every field has a label. Errors are announced. Required fields are marked in text, not by color alone.

---

## 13. Mockup-only text: needs parish approval

These lines exist only in the mockup. The build uses the default until the parish approves an alternative.

| Location | Mockup text | Default in the build (published) | Status |
| --- | --- | --- | --- |
| Hero label | ANTIOCHIAN ORTHODOX CHURCH · MONTRÉAL | ANTIOCHIAN ORTHODOX CHRISTIAN ARCHDIOCESE OF NORTH AMERICA | Default used |
| Hero headline | A PLACE OF *FAITH* | SAINT MARY'S ANTIOCHIAN ORTHODOX CHURCH, *Montreal* | Needs approval to change |
| Hero paragraph | Worship, fellowship, and service in the Orthodox Christian tradition since 1992. | First sentence of the published paragraph | Needs approval to change |
| Service bar location | Montréal, QC · 120 Boulevard Gouin Est | Montreal, Quebec · 120 Gouin E | Default used |
| Story heading | Rooted in Faith Together *Since 1992* | About Us *Since 1992* (or “About Us” alone) | Needs approval for either |
| Story paragraph | A parish of the Antiochian Orthodox Christian Archdiocese of North America, serving the Montréal community through worship, education, fellowship, and service. | Full published paragraph | Default used |
| Community heading | A Vibrant Parish Family | Get to know our *organizations* | Needs approval to change |
| Event blurbs | Our annual parish festival… / A time of fellowship… / A season of prayer… | Published date line | Default used |
| Event samples | Alsayde Festival Jun 15, Parish Luncheon Mar 2, Great Lent Begins Mar 3 | The six published events | Default used |
| Gallery heading | Life at Saint Mary’s | Gallery | Needs approval to change |

Interface labels (PLAN YOUR VISIT, EXPLORE OUR CHURCH, OUR CHURCH, OUR STORY, OUR COMMUNITY, UPCOMING EVENTS, VIEW ALL EVENTS, GALLERY, FROM OUR PARISH, STAY CONNECTED, VIEW ALL ORGANIZATIONS, VIEW THE GALLERY) are allowed under the rule in section 0.

---

## 14. Out of scope

- New photos, illustrations, logos, or raster icons
- Rewriting or adding parish content, history, clergy, hours, or events
- New translations of content (only the new interface labels need French and Arabic strings)
- Replacing WordPress, the theme’s delivery, plugins, or providers (Mailchimp, payment, forms, calendar, gallery)
- Editing bulletin PDFs
- New analytics, cookies, or tracking

---

## 15. Build plan (spec-driven slices)

Each slice is finished only when its checks pass. Later slices reuse the tokens and components from earlier ones.

1. **Tokens and type**
   - Build: CSS custom properties from 5.1; font loading from 5.2; the type scale; spacing; radius; shadows; buttons and links from 5.4; the SVG icon set from section 7.
   - Check: a style sample page shows every token, button state, and icon, and the contrast pairs pass.
2. **Header and mobile menu**
   - Build: section 8.A.
   - Check: every URL in 4.5 is reachable by mouse, keyboard, and the mobile panel; the active state shows; search submits `/?s=`; the language links are correct.
3. **Hero and service bar**
   - Build: sections 8.B and 8.C.
   - Check: only Banner7.jpg, Banner6.jpg, and h1.jpg appear; the H1 text matches exactly; the times read 10:00 AM and 11:00 AM; the address reads 120 Gouin E; reduced motion stops the slides.
4. **Our Church**
   - Build: section 8.D.
   - Check: the photo is `about.jpg`; the paragraph matches 4.1; the cross is SVG at 18% opacity; OUR STORY links to `/about-us/`.
5. **Our Community**
   - Build: section 8.E.
   - Check: eight arched cards, in order, with the correct files, URLs, and published names; the arrows scroll and disable at the ends; the excerpt appears on hover and focus.
6. **Upcoming Events**
   - Build: section 8.F.
   - Check: the six published events with the correct files, dates, and URLs; the badges show DEC 12, FEB 24, DEC 28, JAN 6, AUG 14, DEC 29; no mockup sample text appears.
7. **Gallery, newsletter, and footer**
   - Build: sections 8.G, 8.H, and 8.I.
   - Check: the gallery thumbs come from `/gallery/` in order; the form fields and IDs are unchanged; the footer has every link from 4.5 and the verbatim copyright.
8. **Inner page frame**
   - Build: section 9.
   - Check: About, Contact, Organizations, Gallery, Events, and Weekly Bulletin show the new frame with unchanged body content.
9. **French and Arabic**
   - Build: section 10.
   - Check: `/fr/` and `/ar/` use the layout and their published text; Arabic is fully mirrored and uses Arabic fonts.
10. **Responsive and accessibility pass**
    - Build: sections 11 and 12.
    - Check: no horizontal page scroll at 360, 768, 1024, and 1440 px; keyboard-only run-through works; contrast passes.

---

## 16. Acceptance checklist

**Look**

- [ ] Placed side by side with `image.png` at 1440 px, the homepage has the same band order, proportions, colors, typefaces, card shapes, and icon style.
- [ ] Every background color comes from the tokens in 5.1. There is no green or ivory left from the earlier spec.
- [ ] The headings use Cinzel and Cormorant Garamond; the body uses Open Sans; the gold italic accents appear where 8.B, 8.D, and 8.E specify.

**Images**

- [ ] Every photo request on the homepage is a file listed in section 6.
- [ ] No image from `image.png` (and no crop of it) is used anywhere.

**Content**

- [ ] The H1 reads exactly “Saint Mary's Antiochian Orthodox Church, Montreal”.
- [ ] The full opening paragraph appears unchanged in the Our Church band.
- [ ] The service bar shows 10:00 AM, 11:00 AM, and 120 Gouin E.
- [ ] All eight organizations appear with their published names and URLs.
- [ ] All six published events appear with their published titles, dates, and URLs.
- [ ] Searching the rendered homepage for “A Place of Faith”, “Parish Luncheon”, “Great Lent Begins”, “Jun 15”, “Rooted in Faith Together”, “A Vibrant Parish Family”, and “Life at Saint Mary’s” finds nothing, unless the parish has approved it in section 13.

**Links and functions**

- [ ] Every link in 4.5 is reachable from the header or the footer.
- [ ] Search, newsletter, contact, donation, and payment submit to their current endpoints with their current field names.

**Languages**

- [ ] `/fr/` and `/ar/` render in the new design with their published text; Arabic is right to left.

**Quality**

- [ ] Keyboard-only navigation reaches everything, with a visible focus ring.
- [ ] Reduced motion stops all animation.
- [ ] Contrast passes AA for every text and background pair.
