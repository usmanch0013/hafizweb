export const AU_STATES = [
  { code: 'NSW', name: 'New South Wales', href: '/tools/stamp-duty' },
  { code: 'VIC', name: 'Victoria', href: '/tools/stamp-duty' },
  { code: 'QLD', name: 'Queensland', href: '/tools/stamp-duty' },
  { code: 'WA', name: 'Western Australia', href: '/tools/stamp-duty' },
  { code: 'SA', name: 'South Australia', href: '/tools/stamp-duty' },
  { code: 'TAS', name: 'Tasmania', href: '/tools/stamp-duty' },
  { code: 'ACT', name: 'Australian Capital Territory', href: '/tools/stamp-duty' },
  { code: 'NT', name: 'Northern Territory', href: '/tools/stamp-duty' },
] as const;

export const HOME_STATS = [
  { value: '8+', label: 'Free Calculators', icon: 'calc' },
  { value: '100%', label: 'Browser Private', icon: 'lock' },
  { value: 'ATO', label: 'Updated Rates', icon: 'check' },
  { value: '24/7', label: 'Always Available', icon: 'clock' },
] as const;

export const WHY_CHOOSE = [
  {
    title: 'Accurate ATO Rates',
    desc: 'Calculators use current Australian tax brackets and rules for reliable estimates.',
    icon: 'chart',
  },
  {
    title: 'Completely Free',
    desc: 'No sign-up, no paywall, no hidden fees — every tool is free forever.',
    icon: 'gift',
  },
  {
    title: 'Privacy First',
    desc: 'All calculations run in your browser. Your financial data never leaves your device.',
    icon: 'shield',
  },
  {
    title: 'Expert Guides',
    desc: 'In-depth written guides explain the rules behind every calculator result.',
    icon: 'book',
  },
  {
    title: 'Mobile Friendly',
    desc: 'Use any calculator on phone, tablet or desktop with a responsive layout.',
    icon: 'mobile',
  },
  {
    title: 'Regularly Updated',
    desc: 'We update rates and guides each financial year so you stay current.',
    icon: 'refresh',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Choose Your Calculator',
    desc: 'Pick CGT, income tax, stamp duty or any of our 8 free Australian finance tools.',
  },
  {
    step: '2',
    title: 'Enter Your Details',
    desc: 'Fill in purchase price, income, property value or other relevant figures.',
  },
  {
    step: '3',
    title: 'Get Instant Results',
    desc: 'See your estimate immediately — adjust inputs to compare different scenarios.',
  },
] as const;

export const HOME_FAQ = [
  {
    q: 'Is the CGT calculator free to use?',
    a: 'Yes. All AusCGT calculators are completely free with no sign-up required. You can run unlimited estimates anytime.',
  },
  {
    q: 'Are the results official ATO figures?',
    a: 'Our calculators provide estimates based on published ATO rates and rules. They are for planning purposes only — always confirm with a registered tax agent for your actual return.',
  },
  {
    q: 'Does the 50% CGT discount apply to me?',
    a: 'Individual Australian residents who hold an asset for more than 12 months before selling may be eligible for the 50% CGT discount on the capital gain. Our calculator applies this automatically when you select the longer ownership period.',
  },
  {
    q: 'Is my data stored or shared?',
    a: 'No. Every calculation runs entirely in your browser. We do not collect, store or transmit your financial inputs.',
  },
  {
    q: 'Which financial year do the rates cover?',
    a: 'Calculators are updated for the current Australian financial year (July to June). The badge on each tool shows the active rate year.',
  },
] as const;
