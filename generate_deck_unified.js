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

  slide.addText('JourneyOn AI · Unified Direct Revenue Proposal for Ketapang Indah Hotel Banyuwangi', {
    x: 0.8, y: 5.2, w: 7.0, h: 0.2,
    fontSize: 7.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica'
  });

  if (slideNum) {
    slide.addText(`Slide ${slideNum}`, {
      x: 8.0, y: 5.2, w: 1.2, h: 0.2,
      fontSize: 7.5, color: COLOR_TEXT_MUTED, fontFace: 'Helvetica', align: 'right'
    });
  }
}

async function buildUnifiedDeck() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Unified Direct Revenue Engine - Ketapang Indah Hotel Banyuwangi';

  // =========================================================================
  // SLIDE 1: COVER
  // =========================================================================
  {
    const slide = pres.addSlide();
    slide.background = { color: BRAND_DARK };
    slide.addShape(pres.ShapeType.ellipse, { x: 6.4, y: 0.4, w: 3.2, h: 3.2, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    slide.addShape(pres.ShapeType.ellipse, { x: 7.7, y: 3.0, w: 1.8, h: 1.8, fill: { color: BRAND_CIRCLE }, line: { color: BRAND_CIRCLE } });
    
    slide.addText('JOURNEYON AI · UNIFIED DIRECT REVENUE PROPOSAL', { x: 0.8, y: 0.7, w: 6.5, h: 0.3, fontSize: 8.5, bold: true, color: COLOR_HIGHLIGHT, charSpacing: 2, fontFace: 'Helvetica' });
    slide.addText('Unified Direct Revenue Engine &\nDigital Transformation', { x: 0.8, y: 1.2, w: 7.5, h: 1.7, fontSize: 26, bold: true, color: 'FFFFFF', fontFace: 'Georgia', lineSpacingMultiple: 1.15 });
    slide.addText('Next-Gen Web & GEO Architecture + OMNI Hotelier (IBE & Channel Manager) + 24/7 Autonomous AI Booking Concierge on WhatsApp & Web', { x: 0.8, y: 3.2, w: 7.2, h: 0.7, fontSize: 11, color: 'E2E8F0', fontFace: 'Helvetica', lineSpacingMultiple: 1.2 });
    slide.addText('Prepared for Board of Directors & General Manager · Ketapang Indah Hotel Banyuwangi · November 2026', { x: 0.8, y: 4.75, w: 7.5, h: 0.3, fontSize: 8.5, color: '94A3B8', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 2: CURRENT REVENUE LEAKAGE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE PROBLEM · DIRECT REVENUE LEAKAGE', 'Why coastal resorts lose direct bookings to OTAs in 2026', 2);
    
    const cards = [
      { tag: 'DEFICIT 1 · AI SEARCH INVISIBILITY', title: 'Invisible to Modern AI Search', desc: 'Over 40% of luxury & international travelers now ask ChatGPT, Perplexity, and Gemini to recommend Banyuwangi resorts. Without Schema.org and /llms.txt, AI models cannot verify room specs or rates — citing OTAs instead.' },
      { tag: 'DEFICIT 2 · OFF-HOURS INQUIRIES', title: '27% Inquiries Land Off-Hours', desc: 'International guests from Singapore, Australia, and Europe message between 20.00–06.00 WIB. With the reservation desk offline, inquiries go unanswered for hours — driving guests straight to Agoda or Booking.com.' },
      { tag: 'DEFICIT 3 · HIGH OTA COMMISSIONS', title: '18% to 22% Margin Drain', desc: 'Every booking surrendered to OTAs incurs high commission fees (Rp 150.000–Rp 400.000+ per night). Without instant price-matching and direct stay perks, guests default to third-party portals.' }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 2.65, h: 0.06, fill: { color: COLOR_CRITICAL } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: COLOR_CRITICAL, fontFace: 'Helvetica', charSpacing: 1 });
      slide.addText(c.title, { x: xPos + 0.18, y: 1.75, w: 2.3, h: 0.45, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      slide.addText(c.desc, { x: xPos + 0.18, y: 2.28, w: 2.3, h: 1.6, fontSize: 8, color: COLOR_TEXT_BODY, fontFace: 'Helvetica', lineSpacingMultiple: 1.25 });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Ketapang Indah has 152 keys, cottages, and beachfront. A fragmented web & slow response quietly drain ' }, { text: 'hundreds of millions in OTA commissions', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' yearly.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 3: UNIFIED 3-PILLAR ECOSYSTEM
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'THE SOLUTION · UNIFIED ECOSYSTEM ARCHITECTURE', 'Three interconnected layers engineered to maximize direct bookings & net margin', 3);

    const pillars = [
      { tag: 'PILLAR 1 · THE FOUNDATION', title: 'Modern Web & GEO Engine', color: BRAND_DARK, desc1: 'High-Speed Jamstack (Next.js 14): Sub-second load (<0.8s), 96+ Google Lighthouse score, mobile-first resort layout, and clean DNS isolation from mail servers.', desc2: 'Generative Engine Optimization: Server-side Schema.org @graph (152 keys, Marlin Resto, Ballroom) + /llms.txt so AI search engines cite Ketapang Indah #1.' },
      { tag: 'PILLAR 2 · TRANSACTION ENGINE', title: 'OMNI Hotelier (IBE & CM)', color: COLOR_KICKER, desc1: 'Recommended Partner (~IDR 2M/mo): Centralized 2-way Channel Manager syncing inventory & rates automatically across Agoda, Booking.com, Traveloka, Tiket.com, Expedia.', desc2: 'White-Label Booking Engine: Mobile-first direct booking widget with multi-payment gateway (QRIS 0.7%, VA, Card) on the hotel\'s own official domain.' },
      { tag: 'PILLAR 3 · ACTIVE CONVERTER', title: '24/7 AI Booking Concierge', color: COLOR_OPTIMAL, desc1: 'Always-On Revenue Assistant: Operates 24/7 on WhatsApp & Web Drawer. Responds in <3s in 132+ languages, pulling live rates directly from OMNI Hotelier.', desc2: 'Closes & Upsells: Defuses price hesitation with direct perks, routes 700-pax MICE ballroom leads, and pauses automatically when staff replies (Zero-Clash).' }
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
    slide.addText([{ text: 'Synergy: The ' }, { text: 'Website & GEO', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' capture high-intent demand, ' }, { text: 'OMNI Hotelier', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' syncs inventory, and ' }, { text: 'AI Concierge', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' closes paid bookings 24/7.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 4: PILLAR 1 - WEBSITE & GEO
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 1 · MODERN WEB REVAMP & GEO DATA ENGINE', 'Eliminating legacy bottlenecks and establishing permanent AI search authority', 4);

    const cols = [
      {
        tag: 'MODERN HEADLESS FRONTEND',
        title: 'Next.js 14 Headless Resort Web',
        bullets: [
          'Sub-Second Loading (<0.8s): Eliminates 23 bloated legacy scripts and outdated October CMS, achieving 96+ Core Web Vitals.',
          'Server Security Isolation: Decouples the public website to an isolated cloud environment with WAF & DDoS defense, protecting hotel mail servers.',
          'Photo-Centric Tropical Aesthetic: Asymmetric editorial showcase highlighting the 6-hectare coconut grove, oceanfront sunrise, and 5 room tiers.',
          'Direct Frictionless Booking Bar: Sticky mobile booking drawer and instant date search connected directly to OMNI Hotelier.'
        ]
      },
      {
        tag: 'MACHINE-READABLE SEARCH PROTOCOL',
        title: 'Generative Engine Optimization (GEO)',
        bullets: [
          'Deep Schema.org @graph (SSR): Structured entity metadata for all 152 rooms (Cottage 32 sqm, Suite 75 sqm), Blambangan Ballroom (700 pax), & Marlin.',
          'Standardized /llms.txt AI Feeds: Machine-readable markdown feeding ChatGPT, Claude, and Perplexity with verified property facts & direct perks.',
          'Instant IndexNow Push API: Direct price updates and seasonal stay promotions indexed by search crawlers in minutes.',
          'Owned Digital Equity: Unlike recurring PPC ads that vanish when budget ends, GEO builds permanent organic authority.'
        ]
      }
    ];

    cols.forEach((c, idx) => {
      const xPos = 0.8 + idx * 4.3;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 4.1, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addText(c.tag, { x: xPos + 0.2, y: 1.48, w: 3.7, h: 0.2, fontSize: 7, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(c.title, { x: xPos + 0.2, y: 1.72, w: 3.7, h: 0.35, fontSize: 11, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
      
      const bulletObj = c.bullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.7, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.25 } }));
      slide.addText(bulletObj, { x: xPos + 0.2, y: 2.15, w: 3.7, h: 1.8, fontFace: 'Helvetica' });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Live Mockup Ready: ' }, { text: 'Mockup 1 (Modern Luxury)', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' & ' }, { text: 'Mockup 2 (Tropical Exclusive)', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' are live at ketapangweb.vercel.app.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 5: PILLAR 2 - OMNI HOTELIER IBE & CM
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 2 · RECOMMENDED IBE & CHANNEL MANAGER', 'OMNI Hotelier (~IDR 2M/mo): Seamless 2-way distribution & high-converting booking engine', 5);

    const cards = [
      {
        tag: '2-WAY CHANNEL MANAGER',
        title: 'Allotment & Rate Sync',
        desc1: 'Single Source of Truth: Real-time 2-way synchronization across Booking.com, Agoda, Traveloka, Tiket.com, and Expedia.',
        desc2: 'Anti Double-Booking: Automatically adjusts allotment across all OTAs the second a direct or OTA reservation is made. Eliminates manual morning updates.'
      },
      {
        tag: 'DIRECT BOOKING ENGINE (IBE)',
        title: 'Frictionless Mobile Checkout',
        desc1: 'Official Hotel White-Label: Fast booking engine hosted on hotel domain with real-time room photo switcher, rate plans, and secret promo codes.',
        desc2: 'Domestic & Global Payments: Pre-integrated with QRIS (0.7% MDR), Virtual Account, Credit Card (3D Secure), and E-Wallets. Funds go directly to hotel bank.'
      },
      {
        tag: 'COST & NATIVE AI SYNERGY',
        title: 'Save 50% vs Legacy Systems',
        desc1: 'Economic Efficiency: At ~IDR 2.000.000/month, OMNI saves hotel ±IDR 12.000.000 annually compared to costly foreign engines (ROIBack ±IDR 2M+ / month).',
        desc2: 'Native API to JourneyOn AI: Connects directly with our AI Concierge, allowing real-time rate queries and instant locked booking links in WhatsApp chats.'
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
    slide.addText([{ text: 'OMNI Hotelier is the preferred hospitality tech across Bali & East Java, providing ' }, { text: 'enterprise-grade channel reliability at a flat ~IDR 2M/mo fee', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 6: PILLAR 3 - AI BOOKING CONCIERGE
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 3 · 24/7 AUTONOMOUS REVENUE CONCIERGE', 'Turning every guest conversation into a confirmed direct booking around the clock', 6);

    const cards = [
      { tag: '24/7 INSTANT SPEED', title: '<3s Response Time', desc: 'Catches the 27% of high-value booking inquiries arriving off-hours (20.00–06.00 WIB) when front desk is away, preventing drop-offs to OTAs.' },
      { tag: 'MULTILINGUAL AI', title: '132+ Languages', desc: 'Natively converses in English, Indonesian, Mandarin, Russian, French, and German. Critical for international Mount Ijen transit travelers.' },
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
  // SLIDE 7: IN-CHAT BOOKING FLOW & SIMULATION
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 3 · IN-CHAT INTERACTION SIMULATION', 'A complete direct reservation closed in under 2 minutes — directly inside WhatsApp', 7);

    // Left: Logic
    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 1.35, w: 4.0, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
    slide.addText('CONVERSION INTELLIGENCE', { x: 1.0, y: 1.48, w: 3.6, h: 0.2, fontSize: 7, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', charSpacing: 0.8 });
    slide.addText('How JourneyOn AI Closes Direct Bookings', { x: 1.0, y: 1.7, w: 3.6, h: 0.3, fontSize: 10.5, bold: true, color: COLOR_TEXT_HEAD, fontFace: 'Georgia' });
    
    const steps = [
      '1. Intent & Date Extraction: Identifies dates, guest count (family/couple), cottage preference, and price sensitivity.',
      '2. Live Omni Rate Query: Reads real-time inventory from OMNI Hotelier in seconds.',
      '3. Price-Match & Value Perks: Defuses OTA comparison with matched pricing and direct-exclusive benefits.',
      '4. Locked Direct Checkout: Delivers pre-filled checkout link for instant payment.'
    ];
    const stepObj = steps.map(s => ({ text: s, options: { fontSize: 7.5, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.2 } }));
    slide.addText(stepObj, { x: 1.0, y: 2.05, w: 3.6, h: 1.5, fontFace: 'Helvetica' });
    slide.addText('✓ Direct conversion jumps up to +35% when price queries are resolved instantly with perks.', { x: 1.0, y: 3.65, w: 3.6, h: 0.3, fontSize: 7.2, color: COLOR_OPTIMAL, bold: true, fontFace: 'Helvetica' });

    // Right: WhatsApp Chat
    slide.addShape(pres.ShapeType.roundRect, { x: 5.0, y: 1.35, w: 4.2, h: 2.7, r: 0.08, fill: { color: 'E5DDD5' }, line: { color: 'CBD5E1', width: 1 } });
    slide.addText('Ketapang Indah Hotel · WhatsApp Official (● Online 24/7 AI)', { x: 5.2, y: 1.45, w: 3.8, h: 0.22, fontSize: 7.5, bold: true, color: '0F172A', fontFace: 'Helvetica' });

    // Guest Bubble 1
    slide.addShape(pres.ShapeType.roundRect, { x: 6.0, y: 1.72, w: 3.0, h: 0.45, r: 0.05, fill: { color: 'E7FFDB' }, line: { color: 'C7ECC5', width: 0.5 } });
    slide.addText('Hi! Cottage Garden View for 4 pax, 14–17 Dec (3 nights)? Agoda Rp 4.2M total. Any direct promo?', { x: 6.08, y: 1.75, w: 2.85, h: 0.38, fontSize: 6.8, color: '1E293B', fontFace: 'Helvetica' });

    // AI Bubble 1
    slide.addShape(pres.ShapeType.roundRect, { x: 5.2, y: 2.22, w: 3.6, h: 0.95, r: 0.05, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 0.5 } });
    slide.addText('Hello! Warm greetings from Ketapang Indah 🌴\nYes! Cottage Garden View (32 sqm veranda) is available! We match Agoda at IDR 4.100.000 nett — plus direct perks:\n• Free daily buffet breakfast for 4 pax & Ijen midnight boxes\n• 10% dining voucher at Marlin Beach Club! Hold this for you?', { x: 5.28, y: 2.25, w: 3.45, h: 0.88, fontSize: 6.7, color: '1E293B', fontFace: 'Helvetica', lineSpacingMultiple: 1.15 });

    // Guest Bubble 2
    slide.addShape(pres.ShapeType.roundRect, { x: 6.5, y: 3.22, w: 2.5, h: 0.3, r: 0.05, fill: { color: 'E7FFDB' }, line: { color: 'C7ECC5', width: 0.5 } });
    slide.addText('Yes please, that\'s much better than Agoda! Let\'s book.', { x: 6.58, y: 3.25, w: 2.35, h: 0.24, fontSize: 6.8, color: '1E293B', fontFace: 'Helvetica' });

    // AI Bubble 2
    slide.addShape(pres.ShapeType.roundRect, { x: 5.2, y: 3.56, w: 3.6, h: 0.42, r: 0.05, fill: { color: 'FFFFFF' }, line: { color: 'E2E8F0', width: 0.5 } });
    slide.addText('Wonderful! Held for 15 mins. Tap below to secure direct:\n👉 [Official Direct Checkout: reserveonline.id/ketapang/cottage]', { x: 5.28, y: 3.59, w: 3.45, h: 0.35, fontSize: 6.7, color: '0284C7', bold: true, fontFace: 'Helvetica' });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Zero OTA leakage: Guest booked direct, gained superior perks, and ' }, { text: 'Ketapang Indah saved 8%–12% net margin', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' while owning guest data.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 8: PILLAR 3 - MICE, BALLROOM & RESTO ROUTER
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'PILLAR 3 · MULTI-DEPARTMENT REVENUE ROUTING', 'Maximizing total guest spend across Blambangan Ballroom, Marlin & Ijen Tours', 8);

    const cards = [
      {
        tag: 'MICE & WEDDINGS',
        title: 'Blambangan Ballroom (700 Pax)',
        desc1: '24/7 Corporate RFP Capture: Qualifies large meeting inquiries, gala dinners, and beachfront lawn weddings.',
        desc2: 'Smart Lead Dispatch: Auto-collects event dates, expected pax, theater/roundtable layout, and catering needs, then instantly alerts the Director of Sales / MICE PIC via WhatsApp.'
      },
      {
        tag: 'F&B RESERVATIONS',
        title: 'Marlin Restaurant & Beach Club',
        desc1: 'Table Reservations: Promotes signature oceanfront dining, Betutu Selat Bali, and sunset seafood BBQ to in-house and outside guests.',
        desc2: 'Instant Table Holds: Handles dietary inquiries, seating requests, and books tables directly without burdening F&B service staff.'
      },
      {
        tag: 'REGIONAL EXCURSIONS',
        title: 'Mount Ijen & Transport Hub',
        desc1: 'High-Margin Tour Upselling: Sells certified Blue Flame trekking packages, gas mask rentals, and Paltuding shuttles.',
        desc2: 'Transit Transfers: Books chauffeured transfers to Ketapang Ferry Port (6 km), Banyuwangi Train Station, and BWX Airport directly in the chat.'
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
    slide.addText([{ text: 'One unified concierge transforms WhatsApp from a cost center into a ' }, { text: '24/7 multi-department sales engine', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' generating rooms, banquet, F&B, and tour revenue.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 9: COMMERCIAL & INVESTMENT FRAMEWORK
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'FINANCIAL FRAMEWORK · INVESTMENT & DISTRIBUTION MODEL', 'Transparent, performance-aligned investment designed for rapid payback & margin recapture', 9);

    const cards = [
      {
        tag: 'PILLAR 1 · ONE-TIME SETUP',
        val: 'IDR 25.000.000',
        label: 'Website Revamp & GEO Engine',
        color: BRAND_DARK,
        bullets: [
          'Published Market Rate: IDR 45.000.000',
          'Loyalty Partner Discount: -IDR 20.000.000',
          'Full Next.js 14 rebuild, server cloud isolation, Schema.org @graph 152 keys, /llms.txt, conversion tracking & 1st year maintenance.'
        ]
      },
      {
        tag: 'PILLAR 2 · MONTHLY TOOL',
        val: '~IDR 2.000.000',
        label: 'OMNI Hotelier (IBE & CM)',
        color: COLOR_KICKER,
        bullets: [
          'Monthly subscription directly to OMNI Hotelier.',
          'Full 2-way Channel Manager to Agoda, Booking.com, Traveloka, Tiket.com, Expedia.',
          'White-label booking engine with multi-payment gateway. Replaces expensive legacy engines.'
        ]
      },
      {
        tag: 'PILLAR 3 · PERFORMANCE MODEL',
        val: '10% Commission',
        label: 'JourneyOn Direct Booking Fee',
        color: COLOR_OPTIMAL,
        bullets: [
          'Performance-only: charged strictly on successful direct web & AI reservations.',
          'Cuts OTA fees by half: Saves 8%–12% net margin vs 18%–22% OTA commissions.',
          '100% Guest Data Ownership retained by hotel.'
        ]
      }
    ];

    cards.forEach((c, idx) => {
      const xPos = 0.8 + idx * 2.9;
      slide.addShape(pres.ShapeType.roundRect, { x: xPos, y: 1.35, w: 2.65, h: 2.7, r: 0.08, fill: { color: BG_WHITE }, line: { color: CARD_BORDER, width: 1 } });
      slide.addShape(pres.ShapeType.rect, { x: xPos, y: 1.35, w: 2.65, h: 0.06, fill: { color: c.color } });
      slide.addText(c.tag, { x: xPos + 0.18, y: 1.48, w: 2.3, h: 0.2, fontSize: 7, bold: true, color: c.color, fontFace: 'Helvetica', charSpacing: 0.8 });
      slide.addText(c.val, { x: xPos + 0.18, y: 1.72, w: 2.3, h: 0.35, fontSize: 14, bold: true, color: c.color, fontFace: 'Georgia', align: 'center' });
      slide.addText(c.label, { x: xPos + 0.18, y: 2.08, w: 2.3, h: 0.22, fontSize: 7.5, bold: true, color: COLOR_KICKER, fontFace: 'Helvetica', align: 'center', textTransform: 'uppercase' });
      
      const bObj = c.bullets.map(b => ({ text: b, options: { bullet: true, fontSize: 7.2, color: COLOR_TEXT_BODY, lineSpacingMultiple: 1.2 } }));
      slide.addText(bObj, { x: xPos + 0.18, y: 2.35, w: 2.3, h: 1.6, fontFace: 'Helvetica' });
    });

    slide.addShape(pres.ShapeType.roundRect, { x: 0.8, y: 4.25, w: 8.4, h: 0.55, r: 0.06, fill: { color: BRAND_DARK } });
    slide.addText([{ text: 'Break-Even Calculation: Shifting just ' }, { text: '15–20 room nights per month', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: ' from OTAs to direct booking ' }, { text: 'fully recovers the setup cost in month 1', options: { bold: true, color: COLOR_HIGHLIGHT } }, { text: '.' }], { x: 0.95, y: 4.35, w: 8.1, h: 0.35, fontSize: 8.5, color: 'FFFFFF', fontFace: 'Helvetica' });
  }

  // =========================================================================
  // SLIDE 10: RAPID 14-DAY ROADMAP
  // =========================================================================
  {
    const slide = pres.addSlide();
    applyContentSlide(slide, 'RAPID IMPLEMENTATION · 14-DAY TIMELINE', 'Fast 14-day turnaround with zero operational disruption to hotel operations', 10);

    const steps = [
      { step: 'PHASE 1 · DAYS 1–4', title: 'Cloud Isolation & Web', desc: 'Deploy Next.js 14 on isolated cloud VPS. Setup WAF, SSL, and DNS remapping with zero interference to hotel mail servers.' },
      { step: 'PHASE 2 · DAYS 5–8', title: 'OMNI Setup & OTA Sync', desc: 'Configure OMNI Hotelier IBE and connect 2-way Channel Manager to Booking.com, Agoda, Traveloka, and Tiket.com. Test payment gateway.' },
      { step: 'PHASE 3 · DAYS 9–11', title: 'AI Knowledge Ingestion', desc: 'Ingest 152 rooms, ballroom specs, and Marlin menus into AI Concierge. Connect official hotel WhatsApp & Web Drawer.' },
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

  const outPptx = 'PITCH_DECK_KETAPANG_INDAH_UNIFIED.pptx';
  await pres.writeFile({ fileName: outPptx });
  console.log(`Successfully generated ${outPptx}`);
}

buildUnifiedDeck().catch(err => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
