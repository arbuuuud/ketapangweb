const pptxgen = require('/Users/alami/Documents/1.work/Rekayasa/GIT/JourneyOnALL/menarapeninsula/node_modules/pptxgenjs');

// Brand Design Constants
const BG_PALE = 'F4F6F2';          // Off-white / light cream sage
const BG_WHITE = 'FFFFFF';         // Card pure white
const BRAND_DARK = '1A3A38';       // Forest Deep Teal (Primary brand color)
const BRAND_CIRCLE = '234B49';     // Geometric overlay circle in dark slides

const COLOR_KICKER = '9E8A55';     // Ochre / Gold kicker uppercase tag
const COLOR_TEXT_HEAD = '1A3A38';  // Forest dark teal for headlines
const COLOR_TEXT_BODY = '475569';  // Slate grey for body text
const COLOR_TEXT_MUTED = '64748B'; // Muted grey for metadata & notes
const COLOR_HIGHLIGHT = 'E5B044';  // Warm yellow/gold for callout highlights
const CARD_BORDER = 'E2E8F0';      // Very soft border for cards
const COLOR_CRITICAL = 'DC2626';   // Red for audit deficits
const COLOR_OPTIMAL = '059669';    // Green for targets & direct answers

function applyContentSlide(slide, kickerText, headlineText, slideNum, kickerColor) {
  slide.background = { color: BG_PALE };

  if (kickerText) {
    slide.addText(kickerText.toUpperCase(), {
      x: 0.8, y: 0.42, w: 8.4, h: 0.22,
      fontSize: 8.5, bold: true, color: kickerColor || COLOR_KICKER,
      charSpacing: 2, fontFace: 'Helvetica'
    });
  }

  if (headlineText) {
    slide.addText(headlineText, {
      x: 0.8, y: 0.68, w: 8.4, h: 0.55,
      fontSize: 18, bold: true, color: COLOR_TEXT_HEAD,
      fontFace: 'Georgia'
    });
  }

  slide.addText('JourneyOn AI · Web & GEO Engine Proposal for Ketapang Indah Hotel Banyuwangi', {
    x: 0.8, y: 5.18, w: 7.0, h: 0.22,
    fontSize: 8, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
  });

  if (slideNum) {
    slide.addText(`Slide ${slideNum}`, {
      x: 8.0, y: 5.18, w: 1.2, h: 0.22,
      fontSize: 8, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica', align: 'right'
    });
  }
}

// ---------------------------------------------------------------------
// BUILD 8-SLIDE DECK
// ---------------------------------------------------------------------
async function build8SlideDeck() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'JourneyOn Web & GEO Engine (8-Slide Version) - Ketapang Indah Hotel';

  // S1: Cover
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };
    slide.addShape(pres.ShapeType.ellipse, { x: 6.4, y: 0.4, w: 3.2, h: 3.2, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addShape(pres.ShapeType.ellipse, { x: 7.7, y: 3.0, w: 1.8, h: 1.8, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addText('JOURNEYON AI · STRATEGIC PROPOSAL', { x: 0.8, y: 0.7, w: 6.0, h: 0.3, fontSize: 9, bold: true, color: COLOR_HIGHLIGHT, charSpacing: 2.5, fontFace: 'Helvetica' });
    slide.addText('Next-Gen Website Revamp &\nGEO Internal Data Engine', { x: 0.8, y: 1.3, w: 7.0, h: 1.8, fontSize: 28, bold: true, color: 'FFFFFF', fontFace: 'Georgia', lineSpacingMultiple: 1.15 });
    slide.addText('Positioning Ketapang Indah Hotel as Banyuwangi\'s #1 AI-Recommended Coastal Resort & Capturing High-Margin Direct Bookings', { x: 0.8, y: 3.4, w: 7.0, h: 0.6, fontSize: 11.5, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('Prepared for Board of Directors & General Manager · Ketapang Indah Hotel Banyuwangi · November 2026', { x: 0.8, y: 4.75, w: 7.5, h: 0.3, fontSize: 9, color: '94A3B8', fontFace: 'Helvetica' });
  }

  // S2: Paradigm Shift
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE PARADIGM SHIFT', 'How modern travelers & event planners choose coastal resorts in 2026', 2);
    const cards = [
      { title: 'High OTA Commissions (18% - 22%)', desc: 'When travelers search for Banyuwangi & Mount Ijen stays, OTAs dominate clicks, charging 18% to 22% in commissions. Direct booking with JourneyOn halves this cost via a 10% performance fee, saving 8% to 12% in net margin.' },
      { title: 'Bookers Move to AI Search', desc: 'Over 40% of international, luxury, and corporate bookers now ask conversational AI engines (ChatGPT, Perplexity, Gemini):\n\n"Find a 4-star beachfront resort in Banyuwangi with Bali Strait sunrise views, private cottages, and meeting facilities."' },
      { title: 'Legacy Sites Stay Invisible', desc: 'Traditional monolithic websites cannot be parsed by AI crawlers. Without machine-readable internal data, AI engines cannot verify room sqm or ballroom capacities — citing competitor hotels instead.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.6, w: 2.3, h: 0.45, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.18, y: 2.15, w: 2.3, h: 1.65, fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Generative AI search is now the ' }, { text: '#1 high-intent discovery channel', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' for premium leisure travelers, Bali transit guests, and corporate MICE planners.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S3: Audit Findings
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'TECHNICAL AUDIT · KETAPANGINDAHHOTEL.COM', 'Live diagnostic results: Why the current website loses guests & AI citations', 3);
    const cards = [
      { tag: 'ZERO AI READINESS & CRAWLER 404', title: '0 Schema.org Entities & /llms.txt 404', text1: 'Our live code inspection of ketapangindahhotel.com revealed zero Schema.org structured data across room, dining, and MICE pages. Bot crawlers cannot parse room sqm, bed types, or Grand Ballroom capacity.', text2: 'Furthermore, requesting /llms.txt returns HTTP 404 Not Found, blocking AI models from accessing verified property facts.' },
      { tag: 'HEAVY ASSET BLOAT (GRADE: D+)', title: '23 Scripts & Competing jQuery Libraries', text1: 'The homepage loads 23 JavaScript files, including two conflicting jQuery versions (jquery-1.12.4.js from 2016 and 3.3.1), broken widgets (instawidget.net), and 5 separate icon fonts.', text2: 'The official robots.txt points to a broken sitemap (HTTP 404), and all subpages share the exact same unoptimized title tag.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 4.3;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 4.1, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.tag, { x: xPos + 0.2, y: 1.6, w: 3.7, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(c.title, { x: xPos + 0.2, y: 1.85, w: 3.7, h: 0.35, fontSize: 11.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.text1, { x: xPos + 0.2, y: 2.25, w: 3.7, h: 0.8, fontSize: 8.2, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
      slide.addText(c.text2, { x: xPos + 0.2, y: 3.1, w: 3.7, h: 0.75, fontSize: 8.2, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Overall Technical Health Grade: ' }, { text: 'D+ (Critical Deficits)', options: { bold: true, color: 'F87171' } }, { text: ' — Comprehensive findings documented in Technical Audit Report AUD-KIH-2026-001.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S4: Benchmark Scorecard
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'BENCHMARK SCORECARD', 'How Ketapang Indah compares against modern hospitality standards', 4);
    const rows = [
      [
        { text: 'Technical Audit Category', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'Current Ketapang Score', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: '4-Star Industry Standard', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'JourneyOn GEO Benchmark', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } }
      ],
      [{ text: 'Generative AI Readiness (GEO Engine)', options: { bold: true } }, { text: '0 / 100 (Invisible)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '65 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Schema.org Machine Structured Data', options: { bold: true } }, { text: '0 / 100 (Missing)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '70 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Page Speed & Core Web Vitals', options: { bold: true } }, { text: '45 / 100 (High Latency)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '80 / 100' }, { text: '96+ / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Technical On-Page SEO & Titles', options: { bold: true } }, { text: '40 / 100 (Duplicate)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '85 / 100' }, { text: '98 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'HTTP Security Headers', options: { bold: true } }, { text: '10 / 100 (High Risk)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '80 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Direct Booking UX & Speed', options: { bold: true } }, { text: '55 / 100 (Friction)', options: { bold: true, color: 'B45309' } }, { text: '85 / 100' }, { text: '96 / 100', options: { bold: true, color: COLOR_OPTIMAL } }]
    ];
    slide.addTable(rows, { x: 0.8, y: 1.45, w: 8.4, h: 2.5, fontSize: 8, fontFace: 'Helvetica', border: { pt: 0.5, color: CARD_BORDER }, fill: { color: BG_WHITE } });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Shifting ' }, { text: '100 room nights per month', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' from OTAs (18%–22%) to JourneyOn direct booking (10%) ' }, { text: 'cuts commission expense in half', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ', returning tens of millions into hotel profit.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S5: Core Solution
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE CORE SOLUTION', 'Next-Gen Headless Web Revamp with Built-In GEO Internal Data Engine', 5);
    const cards = [
      { tag: 'PILLAR 1 · MODERN FRONTEND', title: 'Next.js 14 Headless Web', desc: 'Sub-second page loads (<0.8s), mobile-first layout, and 96+ Google Lighthouse score. Eliminates all 23 bloated legacy scripts and establishes clean modern code with zero downtime.' },
      { tag: 'PILLAR 2 · MACHINE DATA', title: 'Schema.org @graph Engine', desc: 'Server-Side Rendered (SSR) structured data defining all 152 rooms (Ocean Suite 75 sqm, Cottages 32 sqm, Superior 25 sqm), Marlin Beach Club, and Grand Ballroom (700 pax).' },
      { tag: 'PILLAR 3 · AI PROTOCOL', title: '/llms.txt Fact Feeds', desc: 'Published at domain root: machine-readable markdown feeding ChatGPT, Claude, and Perplexity with verified facts: exact room sizes, distances (Ferry 6 km, Ijen 38 km), and direct booking links.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.6, w: 2.3, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.85, w: 2.3, h: 0.45, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.18, y: 2.35, w: 2.3, h: 1.5, fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Unlike recurring PPC ad spend that stops when your budget ends, ' }, { text: 'GEO builds permanent owned search equity', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' operating 24/7/365.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S6 (8-Slide version): Side-by-Side Facing AI
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FACING AI · SIDE-BY-SIDE COMPARISON', 'Why current AI misleads guests vs how JourneyOn GEO locks in direct bookings', 6);

    // Left Col: Deficits
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.45, w: 4.1, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 1.45, w: 4.1, h: 0.06, fill: { color: COLOR_CRITICAL }, line: { color: COLOR_CRITICAL } });
    slide.addText('🔴 FACING AI TODAY (WITHOUT GEO)', { x: 0.95, y: 1.6, w: 3.8, h: 0.25, fontSize: 8.5, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica' });
    slide.addText([
      { text: '1. Room Sizes & Families: ', options: { bold: true, color: '991B1B' } },
      { text: 'AI estimates 20-30 sqm, cannot confirm extra bed, tells guests to check Agoda.\n' },
      { text: '2. Ijen Midnight Excursion: ', options: { bold: true, color: '991B1B' } },
      { text: 'AI unaware of 38 km distance & takeaway breakfast box, refers to local tour agents.\n' },
      { text: '3. Direct Booking vs OTA: ', options: { bold: true, color: '991B1B' } },
      { text: 'AI actively recommends Traveloka/Agoda for rewards, costing hotel 18%-22% commission!' }
    ], { x: 0.95, y: 1.9, w: 3.8, h: 1.95, fontSize: 7.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });

    // Right Col: Solutions
    slide.addShape(pres.ShapeType.roundRect, { x: 5.1, y: 1.45, w: 4.1, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 5.1, y: 1.45, w: 4.1, h: 0.06, fill: { color: COLOR_OPTIMAL }, line: { color: COLOR_OPTIMAL } });
    slide.addText('🟢 WITH JOURNEYON GEO INTERNAL ENGINE', { x: 5.25, y: 1.6, w: 3.8, h: 0.25, fontSize: 8.5, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica' });
    slide.addText([
      { text: '1. Verified Room & Venue Specs: ', options: { bold: true, color: '065F46' } },
      { text: 'Cottage is 32 sqm bungalow with veranda; Suite 75 sqm; Grand Ballroom 700 pax.\n' },
      { text: '2. Official Excursion Certainty: ', options: { bold: true, color: '065F46' } },
      { text: 'Exact 38 km (60-75 mins) to Paltuding, midnight tour shuttle & takeaway breakfast.\n' },
      { text: '3. Direct Booking Lock-In: ', options: { bold: true, color: '065F46' } },
      { text: 'AI quotes ketapangindahhotel.com with Best Rate Guarantee & free breakfast at 10% fee.' }
    ], { x: 5.25, y: 1.9, w: 3.8, h: 1.95, fontSize: 7.8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([
      { text: 'Without GEO, AI search engines actively function as ' },
      { text: 'free marketing agents for OTAs', options: { bold: true, color: 'F87171' } },
      { text: '. With GEO, AI becomes your ' },
      { text: '24/7 direct sales channel', options: { bold: true, color: COLOR_HIGHLIGHT } },
      { text: '.' }
    ], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.8, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S7: Commercial Model
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL VALUE CREATION', 'Halving distribution costs: 10% performance model vs 18%–22% OTA drain', 7);
    const metrics = [
      { val: '10%', label: 'JourneyOn Direct Commission', desc: 'Fair performance fee charged only on successful bookings, halving the 18%–22% OTA commission drain.' },
      { val: '+8% to +12%', label: 'Net Margin Recaptured', desc: 'Direct profit margin addition retained by Ketapang Indah on every room night shifted from OTAs.' },
      { val: '100% Owned', label: 'Direct Guest Data & Equity', desc: 'Hotel owns guest contact info and booking history for lifetime repeat stays, corporate accounts, and MICE.' }
    ];
    metrics.forEach((m, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.45, w: 2.65, h: 0.06, fill: { color: BRAND_DARK }, line: { color: BRAND_DARK } });
      slide.addText(m.val, { x: xPos, y: 1.7, w: 2.65, h: 0.5, fontSize: 22, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia', align: 'center' });
      slide.addText(m.label, { x: xPos, y: 2.25, w: 2.65, h: 0.25, fontSize: 8, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', align: 'center', charSpacing: 0.8 });
      slide.addText(m.desc, { x: xPos + 0.15, y: 2.55, w: 2.35, h: 1.25, fontSize: 8.2, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica', align: 'center', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Performance-aligned partnership: ' }, { text: 'JourneyOn earns 10% only when bookings succeed', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ', cutting OTA commission costs by half while Ketapang Indah retains high profit margins.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S8: Roadmap
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'EXECUTION TIMELINE', 'Fast 4-week rollout with zero disruption to daily hotel operations', 8);
    const steps = [
      { step: 'WEEK 1', title: 'Architecture & Design', desc: 'Deploy Next.js 14 Jamstack foundation, photo-centric tropical resort layout, and clean asset pipelines.' },
      { step: 'WEEK 2', title: 'GEO Engine Setup', desc: 'Implement Server-Side Schema.org @graph for all 152 rooms, Marlin Beach Club, and Grand Ballroom.' },
      { step: 'WEEK 3', title: 'Direct Booking & llms.txt', desc: 'Connect BackHotelite direct bar, publish /llms.txt feeds, and deploy automated dynamic XML sitemap.' },
      { step: 'WEEK 4', title: 'Launch & Go-Live', desc: 'Security hardening (HSTS, CSP), 96+ Lighthouse optimization, and official public production launch.' }
    ];
    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.0, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.45, w: 2.0, h: 0.06, fill: { color: COLOR_KICKER }, line: { color: COLOR_KICKER } });
      slide.addText(s.step, { x: xPos + 0.15, y: 1.65, w: 1.7, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(s.title, { x: xPos + 0.15, y: 1.9, w: 1.7, h: 0.45, fontSize: 10, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(s.desc, { x: xPos + 0.15, y: 2.4, w: 1.7, h: 1.45, fontSize: 8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Ready to Transform Ketapang Indah\'s Digital Future? ' }, { text: 'partnership@journeyon.id · fajar@inotel.co', options: { bold: true, color: COLOR_HIGHLIGHT } }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  const out8 = 'PITCH_DECK_KETAPANG_INDAH_GEO_8SLIDES.pptx';
  await pres.writeFile({ fileName: out8 });
  console.log(`Generated: ${out8}`);
}

// ---------------------------------------------------------------------
// BUILD 9-SLIDE DECK
// ---------------------------------------------------------------------
async function build9SlideDeck() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'JourneyOn Web & GEO Engine (9-Slide Version) - Ketapang Indah Hotel';

  // S1: Cover
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };
    slide.addShape(pres.ShapeType.ellipse, { x: 6.4, y: 0.4, w: 3.2, h: 3.2, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addShape(pres.ShapeType.ellipse, { x: 7.7, y: 3.0, w: 1.8, h: 1.8, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addText('JOURNEYON AI · STRATEGIC PROPOSAL', { x: 0.8, y: 0.7, w: 6.0, h: 0.3, fontSize: 9, bold: true, color: COLOR_HIGHLIGHT, charSpacing: 2.5, fontFace: 'Helvetica' });
    slide.addText('Next-Gen Website Revamp &\nGEO Internal Data Engine', { x: 0.8, y: 1.3, w: 7.0, h: 1.8, fontSize: 28, bold: true, color: 'FFFFFF', fontFace: 'Georgia', lineSpacingMultiple: 1.15 });
    slide.addText('Positioning Ketapang Indah Hotel as Banyuwangi\'s #1 AI-Recommended Coastal Resort & Capturing High-Margin Direct Bookings', { x: 0.8, y: 3.4, w: 7.0, h: 0.6, fontSize: 11.5, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('Prepared for Board of Directors & General Manager · Ketapang Indah Hotel Banyuwangi · November 2026', { x: 0.8, y: 4.75, w: 7.5, h: 0.3, fontSize: 9, color: '94A3B8', fontFace: 'Helvetica' });
  }

  // S2: Paradigm Shift
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE PARADIGM SHIFT', 'How modern travelers & event planners choose coastal resorts in 2026', 2);
    const cards = [
      { title: 'High OTA Commissions (18% - 22%)', desc: 'When travelers search for Banyuwangi & Mount Ijen stays, OTAs dominate clicks, charging 18% to 22% in commissions. Direct booking with JourneyOn halves this cost via a 10% performance fee, saving 8% to 12% in net margin.' },
      { title: 'Bookers Move to AI Search', desc: 'Over 40% of international, luxury, and corporate bookers now ask conversational AI engines (ChatGPT, Perplexity, Gemini):\n\n"Find a 4-star beachfront resort in Banyuwangi with Bali Strait sunrise views, private cottages, and meeting facilities."' },
      { title: 'Legacy Sites Stay Invisible', desc: 'Traditional monolithic websites cannot be parsed by AI crawlers. Without machine-readable internal data, AI engines cannot verify room sqm or ballroom capacities — citing competitor hotels instead.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.6, w: 2.3, h: 0.45, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.18, y: 2.15, w: 2.3, h: 1.65, fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Generative AI search is now the ' }, { text: '#1 high-intent discovery channel', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' for premium leisure travelers, Bali transit guests, and corporate MICE planners.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S3: Audit Findings
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'TECHNICAL AUDIT · KETAPANGINDAHHOTEL.COM', 'Live diagnostic results: Why the current website loses guests & AI citations', 3);
    const cards = [
      { tag: 'ZERO AI READINESS & CRAWLER 404', title: '0 Schema.org Entities & /llms.txt 404', text1: 'Our live code inspection of ketapangindahhotel.com revealed zero Schema.org structured data across room, dining, and MICE pages. Bot crawlers cannot parse room sqm, bed types, or Grand Ballroom capacity.', text2: 'Furthermore, requesting /llms.txt returns HTTP 404 Not Found, blocking AI models from accessing verified property facts.' },
      { tag: 'HEAVY ASSET BLOAT (GRADE: D+)', title: '23 Scripts & Competing jQuery Libraries', text1: 'The homepage loads 23 JavaScript files, including two conflicting jQuery versions (jquery-1.12.4.js from 2016 and 3.3.1), broken widgets (instawidget.net), and 5 separate icon fonts.', text2: 'The official robots.txt points to a broken sitemap (HTTP 404), and all subpages share the exact same unoptimized title tag.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 4.3;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 4.1, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.tag, { x: xPos + 0.2, y: 1.6, w: 3.7, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(c.title, { x: xPos + 0.2, y: 1.85, w: 3.7, h: 0.35, fontSize: 11.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.text1, { x: xPos + 0.2, y: 2.25, w: 3.7, h: 0.8, fontSize: 8.2, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
      slide.addText(c.text2, { x: xPos + 0.2, y: 3.1, w: 3.7, h: 0.75, fontSize: 8.2, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Overall Technical Health Grade: ' }, { text: 'D+ (Critical Deficits)', options: { bold: true, color: 'F87171' } }, { text: ' — Comprehensive findings documented in Technical Audit Report AUD-KIH-2026-001.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S4: Benchmark Scorecard
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'BENCHMARK SCORECARD', 'How Ketapang Indah compares against modern hospitality standards', 4);
    const rows = [
      [
        { text: 'Technical Audit Category', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'Current Ketapang Score', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: '4-Star Industry Standard', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } },
        { text: 'JourneyOn GEO Benchmark', options: { bold: true, color: 'FFFFFF', fill: { color: BRAND_DARK } } }
      ],
      [{ text: 'Generative AI Readiness (GEO Engine)', options: { bold: true } }, { text: '0 / 100 (Invisible)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '65 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Schema.org Machine Structured Data', options: { bold: true } }, { text: '0 / 100 (Missing)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '70 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Page Speed & Core Web Vitals', options: { bold: true } }, { text: '45 / 100 (High Latency)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '80 / 100' }, { text: '96+ / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Technical On-Page SEO & Titles', options: { bold: true } }, { text: '40 / 100 (Duplicate)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '85 / 100' }, { text: '98 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'HTTP Security Headers', options: { bold: true } }, { text: '10 / 100 (High Risk)', options: { bold: true, color: COLOR_CRITICAL } }, { text: '80 / 100' }, { text: '100 / 100', options: { bold: true, color: COLOR_OPTIMAL } }],
      [{ text: 'Direct Booking UX & Speed', options: { bold: true } }, { text: '55 / 100 (Friction)', options: { bold: true, color: 'B45309' } }, { text: '85 / 100' }, { text: '96 / 100', options: { bold: true, color: COLOR_OPTIMAL } }]
    ];
    slide.addTable(rows, { x: 0.8, y: 1.45, w: 8.4, h: 2.5, fontSize: 8, fontFace: 'Helvetica', border: { pt: 0.5, color: CARD_BORDER }, fill: { color: BG_WHITE } });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Shifting ' }, { text: '100 room nights per month', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' from OTAs (18%–22%) to JourneyOn direct booking (10%) ' }, { text: 'cuts commission expense in half', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ', returning tens of millions into hotel profit.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S5: Core Solution
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE CORE SOLUTION', 'Next-Gen Headless Web Revamp with Built-In GEO Internal Data Engine', 5);
    const cards = [
      { tag: 'PILLAR 1 · MODERN FRONTEND', title: 'Next.js 14 Headless Web', desc: 'Sub-second page loads (<0.8s), mobile-first layout, and 96+ Google Lighthouse score. Eliminates all 23 bloated legacy scripts and establishes clean modern code with zero downtime.' },
      { tag: 'PILLAR 2 · MACHINE DATA', title: 'Schema.org @graph Engine', desc: 'Server-Side Rendered (SSR) structured data defining all 152 rooms (Ocean Suite 75 sqm, Cottages 32 sqm, Superior 25 sqm), Marlin Beach Club, and Grand Ballroom (700 pax).' },
      { tag: 'PILLAR 3 · AI PROTOCOL', title: '/llms.txt Fact Feeds', desc: 'Published at domain root: machine-readable markdown feeding ChatGPT, Claude, and Perplexity with verified facts: exact room sizes, distances (Ferry 6 km, Ijen 38 km), and direct booking links.' }
    ];
    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.6, w: 2.3, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.85, w: 2.3, h: 0.45, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.18, y: 2.35, w: 2.3, h: 1.5, fontSize: 8.5, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Unlike recurring PPC ad spend that stops when your budget ends, ' }, { text: 'GEO builds permanent owned search equity', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' operating 24/7/365.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S6 (9-Slide version): Dedicated AI Blindspot
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'AI SEARCH REALITY TODAY · GUEST QUERIES', 'How conversational AI currently misleads guests & promotes OTAs', 6, COLOR_CRITICAL);
    const flawed = [
      { case: 'CASE 1 · ROOM SIZES & FAMILIES', prompt: '"Difference between Cottage & Superior room, sqm, beds, and best choice for family?"', out: 'AI Response: "Rooms are estimated around 20–30 sqm. For exact cottage specs or extra bed, please check on Agoda or Booking.com."', seq: '✘ Deficit: Zero Schema.org HotelRoom entities. AI defaults to sending guests to OTA aggregators.' },
      { case: 'CASE 2 · IJEN CRATER EXCURSION', prompt: '"Midnight Blue Fire tour: distance to Paltuding, shuttle options, and breakfast box?"', out: 'AI Response: "Drive is 1 to 2 hours. Inquire with local travel agents for tours and check breakfast policy at reception."', seq: '✘ Deficit: AI lacks verified 38 km distance & takeaway breakfast box data. Guest buys tour elsewhere.' },
      { case: 'CASE 3 · DIRECT BOOKING VS OTA', prompt: '"Should I book via Traveloka/Agoda or directly on ketapangindahhotel.com?"', out: 'AI Response: "OTAs offer more competitive pricing, points, and verified reviews. Booking via Traveloka is recommended."', seq: '✘ Deficit: AI acts as an active sales agent for OTAs, draining 18%–22% commission from Ketapang Indah!' }
    ];
    flawed.forEach((f, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.45, w: 0.06, h: 2.55, fill: { color: COLOR_CRITICAL }, line: { color: COLOR_CRITICAL } });
      slide.addText(f.case, { x: xPos + 0.15, y: 1.55, w: 2.35, h: 0.2, fontSize: 7, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica' });
      slide.addText(f.prompt, { x: xPos + 0.15, y: 1.8, w: 2.35, h: 0.55, fontSize: 7.8, italic: true, color: '1E293B', fontFace: 'Georgia' });
      slide.addText(f.out, { x: xPos + 0.15, y: 2.4, w: 2.35, h: 0.8, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
      slide.addText(f.seq, { x: xPos + 0.15, y: 3.3, w: 2.35, h: 0.6, fontSize: 7.2, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica' });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Without GEO, conversational AI engines actively function as ' }, { text: 'free marketing agents for OTAs', options: { bold: true, color: 'F87171' } }, { text: ', diverting high-margin direct guests away.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S7 (9-Slide version): Dedicated Authorized GEO Resolution
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE AUTHORIZED GEO RESOLUTION', 'How JourneyOn GEO transforms AI into a 24/7 direct sales engine', 7, COLOR_OPTIMAL);

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.45, w: 8.4, h: 0.95, r: 0.06, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 1.45, w: 0.08, h: 0.95, fill: { color: COLOR_KICKER }, line: { color: COLOR_KICKER } });
    slide.addText('EXECUTIVE USER PROMPT (CHATGPT SEARCH / PERPLEXITY / GEMINI)', { x: 1.0, y: 1.55, w: 8.0, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 1 });
    slide.addText('"Recommend the best 4-star beachfront resort in Banyuwangi near the ferry port with sunrise views over the Bali Strait, private garden cottages, and ballroom facilities."', { x: 1.0, y: 1.8, w: 8.0, h: 0.5, fontSize: 9.5, italic: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 2.55, w: 8.4, h: 1.5, r: 0.06, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 2.55, w: 0.08, h: 1.5, fill: { color: COLOR_OPTIMAL }, line: { color: COLOR_OPTIMAL } });
    slide.addText('VERIFIED AI SYNTHESIS WITH JOURNEYON GEO INTERNAL ENGINE', { x: 1.0, y: 2.65, w: 8.0, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica', charSpacing: 1 });
    slide.addText([
      { text: 'Ketapang Indah Hotel ', options: { bold: true } },
      { text: '(Jl. Gatot Subroto Km 6, Banyuwangi) is the premier 4-star coastal resort facing the Bali Strait. Set within a 6-hectare coconut grove just 6 km from Ketapang Ferry Port and 38 km from Mount Ijen basecamp, it offers 152 accommodations including Cottage Garden View (32 sqm standalone bungalow with private veranda) and Ocean View Suites (75 sqm). Facilities include Marlin Restaurant & Beach Club, a resort lagoon pool, The Omah Spa, and the 700-capacity Grand Ballroom.\n\n' },
      { text: '✓ Direct Official Citation: https://www.ketapangindahhotel.com/ (Best Rate Guaranteed via BackHotelite + Free Breakfast)', options: { bold: true, color: COLOR_OPTIMAL } }
    ], { x: 1.0, y: 2.9, w: 8.0, h: 1.1, fontSize: 8.5, color: '1E293B', fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'With internal GEO, AI engines quote ' }, { text: '100% verified property facts', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' and deliver high-intent guests straight to your direct booking bar.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S8: Commercial Model
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL VALUE CREATION', 'Halving distribution costs: 10% performance model vs 18%–22% OTA drain', 8);
    const metrics = [
      { val: '10%', label: 'JourneyOn Direct Commission', desc: 'Fair performance fee charged only on successful bookings, halving the 18%–22% OTA commission drain.' },
      { val: '+8% to +12%', label: 'Net Margin Recaptured', desc: 'Direct profit margin addition retained by Ketapang Indah on every room night shifted from OTAs.' },
      { val: '100% Owned', label: 'Direct Guest Data & Equity', desc: 'Hotel owns guest contact info and booking history for lifetime repeat stays, corporate accounts, and MICE.' }
    ];
    metrics.forEach((m, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.65, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.45, w: 2.65, h: 0.06, fill: { color: BRAND_DARK }, line: { color: BRAND_DARK } });
      slide.addText(m.val, { x: xPos, y: 1.7, w: 2.65, h: 0.5, fontSize: 22, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia', align: 'center' });
      slide.addText(m.label, { x: xPos, y: 2.25, w: 2.65, h: 0.25, fontSize: 8, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', align: 'center', charSpacing: 0.8 });
      slide.addText(m.desc, { x: xPos + 0.15, y: 2.55, w: 2.35, h: 1.25, fontSize: 8.2, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica', align: 'center', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Performance-aligned partnership: ' }, { text: 'JourneyOn earns 10% only when bookings succeed', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ', cutting OTA commission costs by half while Ketapang Indah retains high profit margins.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // S9: Roadmap
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'EXECUTION TIMELINE', 'Fast 4-week rollout with zero disruption to daily hotel operations', 9);
    const steps = [
      { step: 'WEEK 1', title: 'Architecture & Design', desc: 'Deploy Next.js 14 Jamstack foundation, photo-centric tropical resort layout, and clean asset pipelines.' },
      { step: 'WEEK 2', title: 'GEO Engine Setup', desc: 'Implement Server-Side Schema.org @graph for all 152 rooms, Marlin Beach Club, and Grand Ballroom.' },
      { step: 'WEEK 3', title: 'Direct Booking & llms.txt', desc: 'Connect BackHotelite direct bar, publish /llms.txt feeds, and deploy automated dynamic XML sitemap.' },
      { step: 'WEEK 4', title: 'Launch & Go-Live', desc: 'Security hardening (HSTS, CSP), 96+ Lighthouse optimization, and official public production launch.' }
    ];
    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.45, w: 2.0, h: 2.55, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.45, w: 2.0, h: 0.06, fill: { color: COLOR_KICKER }, line: { color: COLOR_KICKER } });
      slide.addText(s.step, { x: xPos + 0.15, y: 1.65, w: 1.7, h: 0.2, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(s.title, { x: xPos + 0.15, y: 1.9, w: 1.7, h: 0.45, fontSize: 10, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(s.desc, { x: xPos + 0.15, y: 2.4, w: 1.7, h: 1.45, fontSize: 8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Ready to Transform Ketapang Indah\'s Digital Future? ' }, { text: 'partnership@journeyon.id · fajar@inotel.co', options: { bold: true, color: COLOR_HIGHLIGHT } }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 9, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  const out9 = 'PITCH_DECK_KETAPANG_INDAH_GEO_9SLIDES.pptx';
  await pres.writeFile({ fileName: out9 });
  console.log(`Generated: ${out9}`);
}

async function main() {
  await build8SlideDeck();
  await build9SlideDeck();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
