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
      x: 0.8, y: 0.38, w: 8.4, h: 0.22,
      fontSize: 8, bold: true, color: kickerColor || COLOR_KICKER,
      charSpacing: 1.8, fontFace: 'Helvetica'
    });
  }

  if (headlineText) {
    slide.addText(headlineText, {
      x: 0.8, y: 0.62, w: 8.4, h: 0.55,
      fontSize: 17, bold: true, color: COLOR_TEXT_HEAD,
      fontFace: 'Georgia'
    });
  }

  slide.addText('JourneyOn AI · Unified Direct Revenue Proposal (V2 Sharp) · Ketapang Indah Hotel Banyuwangi', {
    x: 0.8, y: 5.2, w: 7.0, h: 0.2,
    fontSize: 7.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
  });

  if (slideNum) {
    slide.addText(typeof slideNum === 'number' ? `Slide ${slideNum}` : slideNum, {
      x: 7.5, y: 5.2, w: 1.7, h: 0.2,
      fontSize: 7.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica', align: 'right'
    });
  }
}

async function buildV2Deck() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Unified Direct Revenue Engine V2 (Sharp Edition) - Ketapang Indah Hotel';

  // =========================================================================
  // SLIDE 1: COVER
  // =========================================================================
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };
    slide.addShape(pres.ShapeType.ellipse, { x: 6.4, y: 0.4, w: 3.2, h: 3.2, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addShape(pres.ShapeType.ellipse, { x: 7.7, y: 3.0, w: 1.8, h: 1.8, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    
    slide.addText('JOURNEYON AI · STRATEGIC DIRECT REVENUE DECK (V2)', { x: 0.8, y: 0.7, w: 6.5, h: 0.3, fontSize: 8.5, bold: true, color: COLOR_HIGHLIGHT, charSpacing: 2, fontFace: 'Helvetica' });
    slide.addText('Turning Inquiries into\nDirect Revenue', { x: 0.8, y: 1.2, w: 7.5, h: 1.7, fontSize: 28, bold: true, color: 'FFFFFF', fontFace: 'Georgia', lineSpacingMultiple: 1.15 });
    slide.addText('Next-Gen Web & GEO Engine · 24/7 AI Booking Assistance (Web & WhatsApp) · Direct Booking Sync', { x: 0.8, y: 3.2, w: 7.2, h: 0.6, fontSize: 11.5, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('Prepared for Board of Directors & General Manager · Ketapang Indah Hotel Banyuwangi · November 2026', { x: 0.8, y: 4.75, w: 7.5, h: 0.3, fontSize: 8.5, color: '94A3B8', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 2: TECHNICAL AUDIT FINDINGS & REVENUE LEAKAGE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'TECHNICAL AUDIT & REVENUE BOTTLENECKS', 'Why Ketapang Indah loses direct bookings to OTAs today (Audit Grade: D+)', 2);

    // Left: Audit Deficits
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 1.35, w: 4.1, h: 0.06, fill: { color: COLOR_CRITICAL } });
    slide.addText('LIVE TECHNICAL AUDIT DEFICITS (GRADE: D+)', { x: 1.0, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Code & Infrastructure Vulnerabilities', { x: 1.0, y: 1.72, w: 3.7, h: 0.35, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });

    const auditBullets = [
      '0 Schema.org Entities: Zero structured data for 152 rooms or Ballroom (700 pax). Bot crawlers cannot parse room sqm or bed types.',
      '/llms.txt Returns HTTP 404: Missing AI protocol feeds, blocking ChatGPT & Perplexity from reading verified facts.',
      '23 Bloated JavaScript Files: Two conflicting jQuery libraries (2016 version 1.12.4 & 3.3.1), broken sitemap, and duplicate page titles.',
      'Co-Located Server Risk: Website and hotel operational mail servers share the same host, creating critical downtime and security exposure.'
    ];
    const auditObj = auditBullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.6, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.25 } }));
    slide.addText(auditObj, { x: 1.0, y: 2.15, w: 3.7, h: 1.8, fontFace: 'Helvetica' });

    // Right: Revenue Leaks
    slide.addShape(pres.ShapeType.roundRect, { x: 5.1, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 5.1, y: 1.35, w: 4.1, h: 0.06, fill: { color: COLOR_CRITICAL } });
    slide.addText('IMMEDIATE FINANCIAL IMPACT', { x: 5.3, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('3 Direct Revenue Leaks', { x: 5.3, y: 1.72, w: 3.7, h: 0.35, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });

    const leakBullets = [
      'Invisible to AI Search: 40%+ of modern travelers use AI to find resorts. Because AI cannot verify data, it recommends OTAs instead of direct booking.',
      '27% Off-Hours Inquiries Lost: International transit guests (Singapore, Europe) message between 20.00–06.00 WIB. Unanswered chats defect straight to Agoda.',
      '18%–22% OTA Margin Drain: Every room surrendered to OTAs bleeds hundreds of millions of Rupiah per year in commissions that should belong to hotel profit.'
    ];
    const leakObj = leakBullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.6, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.25 } }));
    slide.addText(leakObj, { x: 5.3, y: 2.15, w: 3.7, h: 1.4, fontFace: 'Helvetica' });
    slide.addText('Ketapang Indah is leaking bookings before arrival (AI Search), during inquiries (off-hours), and at checkout (OTA diversion).', { x: 5.3, y: 3.62, w: 3.7, h: 0.35, fontSize: 7.2, color: '991B1B', bold: true, fontFace: 'Helvetica' });

    // Bottom Banner
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Comprehensive technical audit documented in ' }, { text: 'AUD-KIH-2026-001', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '. JourneyOn fixes code deficits and plugs revenue leakage immediately.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 3: UNIFIED ECOSYSTEM ARCHITECTURE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE COMPLETE SOLUTION · 1 UNIFIED ECOSYSTEM', 'Two core JourneyOn pillars + seamless booking engine integration', 3);

    const pillars = [
      { tag: 'PILLAR 1 · THE FOUNDATION', title: 'Modern Web & GEO Engine', color: BRAND_DARK, desc1: 'Next.js 14 Headless Web: Sub-second speed (<0.8s), Core Web Vitals 96+, photo-centric tropical layout, and isolated cloud server security.', desc2: 'Generative Engine Optimization: SSR Schema.org @graph (152 keys, ballroom 700 pax) + domain /llms.txt so AI engines cite Ketapang Indah #1.' },
      { tag: 'PILLAR 2 · ACTIVE CONVERTER', title: '24/7 AI Booking Assistance', color: COLOR_OPTIMAL, desc1: 'Omnichannel Revenue Assistant: Operates 24/7 on Web Chat Drawer & Official WhatsApp. Answers in <3s in 132+ languages, pulling live rates directly.', desc2: 'Closes & Upsells: Defuses OTA price hesitation, qualifies 700-pax MICE leads, and pauses automatically when staff types (Zero-Clash).' },
      { tag: 'PARTNER INTEGRATION', title: 'Direct Booking Engine Sync', color: COLOR_KICKER, desc1: 'Connected to Recommended IBE (OMNI): JourneyOn AI connects natively to OMNI Hotelier (~Rp 2M/mo subscribed directly by hotel) for real-time rates.', desc2: 'Frictionless Direct Booking: Mobile-first direct booking drawer and locked checkout links delivered directly inside Web Chat & WhatsApp.' }
    ];

    pillars.forEach((p, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 2.65, h: 0.06, fill: { color: p.color } });
      slide.addText(p.tag, { x: xPos + 0.18, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: p.color, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(p.title, { x: xPos + 0.18, y: 1.72, w: 2.3, h: 0.45, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(p.desc1, { x: xPos + 0.18, y: 2.22, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
      slide.addText(p.desc2, { x: xPos + 0.18, y: 3.12, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Ecosystem Synergy: The ' }, { text: 'Website & GEO', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' capture high-intent demand, ' }, { text: 'AI Booking Assistance', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' converts conversations, and ' }, { text: 'Direct IBE', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' locks transactions 24/7.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 4: PILLAR 1 - WITH VS WITHOUT GEO
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 1 · AI SEARCH RETRIEVAL SIMULATION', 'What travelers see when asking ChatGPT & Perplexity about Ketapang Indah', 4);

    // Left: Without GEO
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: 'FFF5F5' }, line: { color: 'FED7D7', width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 1.35, w: 4.1, h: 0.06, fill: { color: COLOR_CRITICAL } });
    slide.addText('🔴 CURRENT STATE (WITHOUT GEO / OCTOBER CMS)', { x: 1.0, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Vague Answers & Surrendering to OTAs', { x: 1.0, y: 1.72, w: 3.7, h: 0.35, fontSize: 11, bold: true, color: '991B1B', fontFace: 'Georgia' });

    slide.addShape(pres.ShapeType.roundRect, { x: 1.0, y: 2.1, w: 3.7, h: 0.75, r: 0.05, fill: { color: BG_WHITE }, line: { color: 'FECACA', width: 0.5 } });
    slide.addText('"Ketapang Indah Hotel is a 3 to 4 star resort in Banyuwangi. Room dimensions are unverified on the official site. For accurate pricing and availability, please check Agoda or Booking.com."', { x: 1.1, y: 2.15, w: 3.5, h: 0.65, fontSize: 7.2, italic: true, color: COLOR_TEXT_BODY, fontFace: 'Georgia', lineSpacingMultiple: 1.15 });

    const redBullets = [
      'Room Specs: AI hallucinates or fails to state Cottage (32 sqm) vs Suite (75 sqm).',
      'Ijen Logistics: AI tells travelers to book third-party tour agencies.',
      'Booking Destination: Diverts guest to OTAs — 18%–22% commission lost.'
    ];
    const redObj = redBullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.5, color: '7F1D1D', lineSpacingMultiple: 1.2 } }));
    slide.addText(redObj, { x: 1.0, y: 2.92, w: 3.7, h: 1.0, fontFace: 'Helvetica' });

    // Right: With GEO
    slide.addShape(pres.ShapeType.roundRect, { x: 5.1, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: 'F0FDF4' }, line: { color: 'DCFCE7', width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 5.1, y: 1.35, w: 4.1, h: 0.06, fill: { color: COLOR_OPTIMAL } });
    slide.addText('🟢 WITH JOURNEYON WEB & GEO ENGINE', { x: 5.3, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Precise Property Specs & Direct Booking Lock', { x: 5.3, y: 1.72, w: 3.7, h: 0.35, fontSize: 11, bold: true, color: '166534', fontFace: 'Georgia' });

    slide.addShape(pres.ShapeType.roundRect, { x: 5.3, y: 2.1, w: 3.7, h: 0.75, r: 0.05, fill: { color: BG_WHITE }, line: { color: 'BBF7D0', width: 0.5 } });
    slide.addText('"Ketapang Indah Hotel is Banyuwangi\'s premier coastal resort (6 ha coconut grove). Features 152 keys including Cottage Garden View (32 sqm) and Ocean Suite (75 sqm). Direct guests receive best rates and midnight Ijen breakfast boxes."', { x: 5.4, y: 2.15, w: 3.5, h: 0.65, fontSize: 7.2, italic: true, color: '14532D', fontFace: 'Georgia', lineSpacingMultiple: 1.15 });

    const greenBullets = [
      'Room Specs: All 152 units verified via Schema.org SSR @graph.',
      'Ijen Logistics: Cites hotel\'s direct midnight shuttle & breakfast box.',
      'Direct CTA: AI points directly to official booking engine — saving 8%–12% margin.'
    ];
    const greenObj = greenBullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.5, color: '14532D', lineSpacingMultiple: 1.2 } }));
    slide.addText(greenObj, { x: 5.3, y: 2.92, w: 3.7, h: 1.0, fontFace: 'Helvetica' });

    // Bottom Banner
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Permanent Digital Asset: Unlike PPC ads that vanish when budget ends, ' }, { text: 'GEO builds permanent AI search authority', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' bringing organic bookings 24/7.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 5: PILLAR 2 - 24/7 AI BOOKING ASSISTANCE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 2 · 24/7 AUTONOMOUS REVENUE CONCIERGE', 'Turning every guest conversation into a confirmed direct booking across Web & WhatsApp', 5);

    const cards = [
      { tag: '24/7 INSTANT SPEED', title: '<3s Response Time', desc: 'Catches the 27% of high-value booking inquiries arriving off-hours (20.00–06.00 WIB) when front desk is away, preventing drop-offs to OTAs.' },
      { tag: 'OMNICHANNEL AI', title: 'Web Chat & WhatsApp', desc: 'Seamlessly deployed on website chat drawer and official WhatsApp. Converses natively in 132+ languages for Mount Ijen transit guests.' },
      { tag: 'PRICE NEGOTIATION', title: 'Active Rate-Match', desc: 'Detects price hesitation when guests cite OTA rates. Applies secret direct promo codes and highlights perks (sunrise breakfast, Ijen box).' },
      { tag: 'HUMAN-AI SYNERGY', title: 'Zero-Clash Takeover', desc: 'AI automatically pauses the moment hotel staff types a reply. No awkward message collisions or overlapping responses.' }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 1.95, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 1.95, h: 0.06, fill: { color: idx === 2 ? COLOR_OPTIMAL : (idx === 1 ? COLOR_KICKER : BRAND_DARK) } });
      slide.addText(c.tag, { x: xPos + 0.15, y: 1.48, w: 1.65, h: 0.2, fontSize: 6.8, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(c.title, { x: xPos + 0.15, y: 1.72, w: 1.65, h: 0.45, fontSize: 10, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.15, y: 2.22, w: 1.65, h: 1.7, fontSize: 7.7, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Not a rigid button chatbot. JourneyOn AI is built on ' }, { text: 'state-of-the-art Large Language Models (LLMs)', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' fine-tuned for luxury hospitality conversations.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 6: PILLAR 2 - IN-CHAT CLOSING SIMULATION & ROUTING
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 2 · LIVE CLOSING SIMULATION & ROUTING', 'Closing reservations in under 2 minutes & routing MICE leads across Web & WhatsApp', 6);

    // Left: Chat Preview
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: 'E5DDD5' }, line: { color: 'CBD5E1', width: 1 } });
    slide.addText('Ketapang Indah Hotel · AI Booking Assistance (Web & WhatsApp)', { x: 1.0, y: 1.45, w: 3.7, h: 0.22, fontSize: 7.2, bold: true, color: '0F172A', fontFace: 'Helvetica' });

    // Guest Bubble 1
    slide.addShape(pres.ShapeType.roundRect, { x: 1.8, y: 1.72, w: 2.9, h: 0.45, r: 0.05, fill: { color: 'E7FFDB' }, line: { color: 'C7ECC5', width: 0.5 } });
    slide.addText('Hi! Looking for Cottage Garden View for 4 pax, 14–17 Dec (3 nights)? Agoda Rp 4.2M total. Any direct promo?', { x: 1.88, y: 1.75, w: 2.75, h: 0.38, fontSize: 6.8, color: '1E293B', fontFace: 'Helvetica' });

    // AI Bubble 1
    slide.addShape(pres.ShapeType.roundRect, { x: 1.0, y: 2.22, w: 3.65, h: 0.95, r: 0.05, fill: { color: BG_WHITE }, line: { color: 'E2E8F0', width: 0.5 } });
    slide.addText('Hello! Warm greetings from Ketapang Indah 🌴\nYes! Cottage Garden View (32 sqm veranda) is available! We match Agoda at IDR 4.100.000 nett — plus direct perks:\n• Free daily buffet breakfast for 4 pax & Ijen midnight boxes\n• 10% dining voucher at Marlin Beach Club! Hold this for you?', { x: 1.08, y: 2.25, w: 3.5, h: 0.88, fontSize: 6.7, color: '1E293B', fontFace: 'Helvetica', lineSpacingMultiple: 1.15 });

    // Guest Bubble 2
    slide.addShape(pres.ShapeType.roundRect, { x: 2.2, y: 3.22, w: 2.5, h: 0.3, r: 0.05, fill: { color: 'E7FFDB' }, line: { color: 'C7ECC5', width: 0.5 } });
    slide.addText('Yes please, that\'s much better than Agoda! Let\'s book.', { x: 2.28, y: 3.25, w: 2.35, h: 0.24, fontSize: 6.8, color: '1E293B', fontFace: 'Helvetica' });

    // AI Bubble 2
    slide.addShape(pres.ShapeType.roundRect, { x: 1.0, y: 3.56, w: 3.65, h: 0.42, r: 0.05, fill: { color: BG_WHITE }, line: { color: 'E2E8F0', width: 0.5 } });
    slide.addText('Wonderful! Held for 15 mins. Tap below to secure direct:\n👉 [Official Direct Checkout: reserveonline.id/ketapang/cottage]', { x: 1.08, y: 3.59, w: 3.5, h: 0.35, fontSize: 6.7, color: '0284C7', bold: true, fontFace: 'Helvetica' });

    // Right: Multi-Department Router
    slide.addShape(pres.ShapeType.roundRect, { x: 5.1, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addText('BEYOND ROOMS · TOTAL SPEND MAXIMIZATION', { x: 5.3, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Multi-Department Sales Router', { x: 5.3, y: 1.7, w: 3.7, h: 0.3, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });

    const routerPoints = [
      'Blambangan Ballroom (700 Pax) & MICE: Auto-qualifies dates, attendee count, seating layout, and dispatches RFP directly to Sales Manager PIC.',
      'Marlin Restaurant & Beach Club: Books beachfront tables, Betutu Selat Bali, and sunset BBQ for in-house and outside visitors.',
      'Mount Ijen Tours & Transfers: Sells guided Blue Flame excursions, gas masks, and Pelabuhan Ketapang (6 km) / BWX airport shuttles.'
    ];
    const routerObj = routerPoints.map(p => ({ text: p, options: { fontSize: 7.5, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.25 } }));
    slide.addText(routerObj, { x: 5.3, y: 2.05, w: 3.7, h: 1.5, fontFace: 'Helvetica' });
    slide.addText('✓ Zero-Clash Takeover: AI pauses automatically the instant hotel staff types. No double messages!', { x: 5.3, y: 3.65, w: 3.7, h: 0.3, fontSize: 7.2, color: COLOR_OPTIMAL, bold: true, fontFace: 'Helvetica' });

    // Bottom Banner
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Direct conversion jumps by up to ' }, { text: '+35%', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' when hesitation is resolved immediately in chat with rate-matching and direct perks.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 7: RAPID 14-DAY ROADMAP
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'RAPID IMPLEMENTATION · 14-DAY TIMELINE', 'Fast 14-day turnaround with zero operational disruption to hotel operations', 7);

    const steps = [
      { step: 'PHASE 1 · DAYS 1–4', title: 'Cloud Isolation & Web', desc: 'Deploy Next.js 14 on isolated cloud VPS. Setup WAF, SSL, and DNS remapping with zero interference to hotel mail servers.' },
      { step: 'PHASE 2 · DAYS 5–8', title: 'Booking Engine Sync', desc: 'Assist OMNI Hotelier setup & verify 2-way Channel Manager to Booking.com, Agoda, Traveloka, and Tiket.com. Test payment gateway.' },
      { step: 'PHASE 3 · DAYS 9–11', title: 'AI Knowledge Ingestion', desc: 'Ingest 152 rooms, ballroom specs, and Marlin menus into AI Concierge. Connect Web Chat Drawer & Official WhatsApp.' },
      { step: 'PHASE 4 · DAYS 12–14', title: 'QA & Official Launch', desc: 'Execute live booking test, zero-clash human takeover verification, front office training, and official go-live!' }
    ];

    steps.forEach((s, idx) => {
      const xPos = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 1.95, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 1.95, h: 0.06, fill: { color: COLOR_KICKER } });
      slide.addText(s.step, { x: xPos + 0.15, y: 1.48, w: 1.65, h: 0.2, fontSize: 6.8, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(s.title, { x: xPos + 0.15, y: 1.72, w: 1.65, h: 0.45, fontSize: 9.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(s.desc, { x: xPos + 0.15, y: 2.22, w: 1.65, h: 1.7, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Ready to Deploy Ketapang Indah\'s Unified Direct Revenue Engine? ' }, { text: '14-Day Rapid Deployment Guaranteed.', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' Contact: partnership@journeyon.id' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 8: THANK YOU & DISCUSSION
  // =========================================================================
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };
    slide.addShape(pres.ShapeType.ellipse, { x: 6.4, y: 0.4, w: 3.2, h: 3.2, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addShape(pres.ShapeType.ellipse, { x: 7.7, y: 3.0, w: 1.8, h: 1.8, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });

    slide.addText('JOURNEYON AI · NEXT STEPS & Q&A', { x: 0.8, y: 0.8, w: 8.4, h: 0.3, fontSize: 8.5, bold: true, color: COLOR_HIGHLIGHT, charSpacing: 2, fontFace: 'Helvetica', align: 'center' });
    slide.addText('Thank You', { x: 0.8, y: 1.3, w: 8.4, h: 1.2, fontSize: 36, bold: true, color: 'FFFFFF', fontFace: 'Georgia', align: 'center' });
    slide.addText('Let\'s transform Ketapang Indah Hotel into Banyuwangi\'s premier direct revenue powerhouse.', { x: 1.2, y: 2.5, w: 7.6, h: 0.5, fontSize: 11, color: 'E2E8F0', fontFace: 'Helvetica', align: 'center' });

    // Contact Box
    slide.addShape(pres.ShapeType.roundRect, { x: 1.5, y: 3.3, w: 7.0, h: 0.9, r: 0.08, fill: { color: '234B49' }, line: { color: '2D5E5C', width: 1 } });
    slide.addText('DIRECT CONTACT\npartnership@journeyon.id', { x: 1.7, y: 3.45, w: 2.1, h: 0.6, fontSize: 8, color: 'FFFFFF', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('TECHNICAL LEAD\nEngineering & AI Solutions', { x: 3.9, y: 3.45, w: 2.1, h: 0.6, fontSize: 8, color: 'FFFFFF', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('LIVE MOCKUP PREVIEW\nketapangweb.vercel.app', { x: 6.1, y: 3.45, w: 2.2, h: 0.6, fontSize: 8, color: COLOR_HIGHLIGHT, bold: true, fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });

    slide.addText('Ketapang Indah Hotel Banyuwangi × JourneyOn AI · Strategic Direct Revenue Partnership · November 2026', { x: 0.8, y: 4.75, w: 8.4, h: 0.3, fontSize: 8.5, color: '94A3B8', fontFace: 'Helvetica', align: 'center' });
  }

  // =========================================================================
  // SLIDE 9: PRICING 1 · WEBSITE REVAMP & AI BOOKING ASSISTANCE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL FRAMEWORK (1/3) · CORE INVESTMENT MODEL', 'Transparent pricing designed to pay for itself in Month 1', 'Slide 9 (Pricing 1/3)');

    const cards = [
      {
        tag: 'PILLAR 1 · ONE-TIME SETUP',
        val: 'IDR 30.000.000',
        label: 'Website Revamp & GEO Engine',
        color: BRAND_DARK,
        bullets: [
          'Published Market Rate: IDR 50.000.000',
          'Exclusive Loyalty Discount: -IDR 20.000.000 (Nett)',
          'Full Next.js 14 rebuild, server cloud isolation, Schema.org @graph 152 keys, /llms.txt, conversion tracking & 1st year maintenance.'
        ]
      },
      {
        tag: 'PILLAR 2 · AI BOOKING ASSISTANCE',
        val: 'IDR 2.500.000 Setup',
        label: '+ IDR 3.000.000 / Month',
        color: COLOR_KICKER,
        bullets: [
          'Setup & Knowledge Ingestion: IDR 2.500.000 (One-Time)',
          'Monthly Subscription: IDR 5.000.000/mo -> IDR 3.000.000 / month (Exclusive Ketapang Discount).',
          'Omnichannel 24/7: Deployed on Web Chat Drawer & Official WhatsApp (+62 877-5678-0745), 132+ languages, live rate sync & Zero-Clash takeover.'
        ]
      },
      {
        tag: 'ROOM PERFORMANCE MODEL',
        val: '10% Commission',
        label: 'Direct Booking Fee',
        color: COLOR_OPTIMAL,
        bullets: [
          'Performance-only: charged strictly on successful direct web & AI reservations.',
          'Cuts OTA fees by half: Saves 8%–12% net margin vs 18%–22% OTA commissions.',
          '100% Guest Data Ownership retained by hotel.',
          'Note: Recommended IBE OMNI (~IDR 2M/mo) subscribed directly by hotel.'
        ]
      }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 2.65, h: 0.06, fill: { color: c.color } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: c.color, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(c.val, { x: xPos + 0.18, y: 1.72, w: 2.3, h: 0.35, fontSize: 13, bold: true, color: c.color, fontFace: 'Georgia', align: 'center' });
      slide.addText(c.label, { x: xPos + 0.18, y: 2.08, w: 2.3, h: 0.22, fontSize: 7.2, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', align: 'center', textTransform: 'uppercase' });
      
      const bObj = c.bullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.2, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.2 } }));
      slide.addText(bObj, { x: xPos + 0.18, y: 2.35, w: 2.3, h: 1.6, fontFace: 'Helvetica' });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Break-Even Calculation: Shifting just ' }, { text: '15–20 room nights per month', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' from OTAs to direct booking ' }, { text: 'fully recovers the setup cost in month 1', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 10: PRICING 2 · FEATURE: AI BOOKING ASSISTANCE MICE PREMIUM
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL FRAMEWORK (2/3) · MICE & BANQUET REVENUE ENGINE', 'MICE Premium: 24/7 Corporate & Event RFP Qualification on 10% Revenue Share', 'Slide 10 (Pricing 2/3)');

    // Card 1
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 0.8, y: 1.35, w: 2.65, h: 0.06, fill: { color: BRAND_DARK } });
    slide.addText('THE MICE OPPORTUNITY', { x: 0.98, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: BRAND_DARK, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Blambangan Ballroom (700 Pax)', { x: 0.98, y: 1.72, w: 2.3, h: 0.45, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
    slide.addText('High-Ticket Event Demand: Corporate gatherings, government conventions, and beachfront weddings represent Ketapang Indah\'s highest-margin revenue stream.', { x: 0.98, y: 2.22, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    slide.addText('The Bottleneck: Organizers inquire off-hours or expect instant proposals. Slow manual email response causes organizers to book competing hotels.', { x: 0.98, y: 3.12, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });

    // Card 2
    slide.addShape(pres.ShapeType.roundRect, { x: 3.7, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 3.7, y: 1.35, w: 2.65, h: 0.06, fill: { color: COLOR_OPTIMAL } });
    slide.addText('AI MICE QUALIFICATION', { x: 3.88, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: COLOR_OPTIMAL, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('Automated RFP Intake & Dispatch', { x: 3.88, y: 1.72, w: 2.3, h: 0.45, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
    slide.addText('Structured Lead Intake: Ingests event dates, attendee count, layout (theater, classroom, roundtable), catering tiers, and estimated budget via Web Chat & WhatsApp.', { x: 3.88, y: 2.22, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    slide.addText('Instant Sales Alert: Delivers pre-qualified lead briefs straight to the Director of Sales / MICE PIC with automated client follow-ups & PDF brochure holds.', { x: 3.88, y: 3.12, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });

    // Card 3
    slide.addShape(pres.ShapeType.roundRect, { x: 6.6, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addShape(pres.ShapeType.rect, { x: 6.6, y: 1.35, w: 2.65, h: 0.06, fill: { color: COLOR_HIGHLIGHT } });
    slide.addText('MICE COMMERCIAL MODEL', { x: 6.78, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: 'B45309', fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('10% Rev Share', { x: 6.78, y: 1.72, w: 2.3, h: 0.35, fontSize: 13, bold: true, color: 'B45309', fontFace: 'Georgia', align: 'center' });
    slide.addText('Confirmed MICE Production', { x: 6.78, y: 2.08, w: 2.3, h: 0.22, fontSize: 7.2, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', align: 'center', textTransform: 'uppercase' });

    const miceBullets = [
      'Zero Fixed Retainer: No additional monthly subscription fee for MICE.',
      '10% Revenue Sharing: Charged strictly on confirmed, completed direct MICE & wedding bookings closed via the AI system.',
      'Zero Risk: JourneyOn only earns when Ketapang Indah successfully books banquet revenue!'
    ];
    const miceObj = miceBullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.2, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.2 } }));
    slide.addText(miceObj, { x: 6.78, y: 2.35, w: 2.3, h: 1.6, fontFace: 'Helvetica' });

    // Bottom Banner
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Zero-Risk Alignment: Transform high-ticket MICE inquiries into guaranteed banquet revenue with ' }, { text: 'zero operational overhead and zero upfront financial risk', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 11: PRICING 3 / APPENDIX · RECOMMENDED IBE: OMNI HOTELIER
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL FRAMEWORK (3/3) · RECOMMENDED THIRD-PARTY BOOKING ENGINE', 'OMNI Hotelier (~Rp 2M/mo): High-converting booking engine & 2-way OTA distribution', 'Slide 11 (Pricing 3/3 · Appendix)', 'B45309');

    const cards = [
      {
        tag: '2-WAY CHANNEL MANAGER',
        title: 'Automated OTA Sync',
        desc1: 'Single Inventory Pool: Real-time 2-way synchronization to Booking.com, Agoda, Traveloka, Tiket.com, and Expedia.',
        desc2: 'Zero Double-Bookings: Automatically updates room allotment across all OTAs the moment a direct or OTA reservation occurs. Eliminates manual morning updates.'
      },
      {
        tag: 'DIRECT BOOKING ENGINE (IBE)',
        title: 'Mobile Direct Checkout',
        desc1: 'Official Hotel White-Label: Fast booking engine on hotel domain with real-time room photo switcher, rate plans, and secret promo codes.',
        desc2: 'Instant Indonesian Payments: QRIS (0.7% MDR), Virtual Account, Credit Card (3D Secure), and E-Wallets. Uang langsung masuk ke rekening hotel.'
      },
      {
        tag: 'COST & NATIVE AI SYNERGY',
        title: 'Save 50% vs Legacy Systems',
        desc1: 'High ROI: At ~IDR 2.000.000/month, OMNI saves hotel ±IDR 12.000.000/year compared to expensive foreign engines (ROIBack ±IDR 2M+/mo).',
        desc2: 'Native API to JourneyOn AI: Connects directly with our AI Booking Assistance, allowing real-time rate queries and instant locked booking links in chat.'
      }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 2.65, h: 0.06, fill: { color: idx === 1 ? COLOR_KICKER : (idx === 2 ? COLOR_OPTIMAL : BRAND_DARK) } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.72, w: 2.3, h: 0.45, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc1, { x: xPos + 0.18, y: 2.22, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
      slide.addText(c.desc2, { x: xPos + 0.18, y: 3.12, w: 2.3, h: 0.85, fontSize: 7.6, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Direct Vendor Subscription: ~IDR 2.000.000 / month ' }, { text: 'directly billed by OMNI Hotelier with zero markup from JourneyOn', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '. Proven reliability across Bali & East Java.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  const outPptx = 'PITCH_DECK_KETAPANG_INDAH_V2.pptx';
  await pres.writeFile({ fileName: outPptx });
  console.log(`Successfully generated ${outPptx}`);
}

buildV2Deck().catch(err => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
