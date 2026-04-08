export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'aw-self-service',
    title: 'Beyond the Counter: A&W',
    category: 'Service Design',
    year: '2025',
    description: 'Rethinking the A&W Self-Service & Waste Station Experience to design confidence in everyday service moments.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    content: `How might we redesign A&W's self-service and waste station to make it cleaner, easier, and more intuitive for customers to use—without disrupting existing store operations? This case study explores low-cost interventions to improve hygiene perception, reduce cognitive load, and build trust through clear feedback.`
  },
  {
    id: 'roku-tv-remote',
    title: 'Rethinking Roku TV\'s Remote',
    category: 'UX Design',
    year: '2025',
    description: 'A deep dive into the ergonomics and empathy of physical interfaces, starting with the elusive volume button.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800',
    content: `Where's the volume??? I tried to lower the volume... and I couldn't find it. I pressed every button. Turns out... the controls are on the side. It's a tiny design detail... but it breaks the experience. When it feels natural, it stops being technology - and starts being part of you.`
  },
  {
    id: 'food-wastage-kitchen',
    title: 'Food Wastage Field Notes',
    category: 'Design Research',
    year: '2025',
    description: 'Observation & F2F Study with a \'Small Chops\' chef in Toronto to rethink the kitchen\'s role in food waste.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    content: `Do we need to redesign how the kitchen works? Is it less of a storage issue, and more of a design issue? Using the 'Stop Light Method' to organize findings and field notes from observing a local chef in Toronto.`
  },
  {
    id: 'bsw-beauty-loyalty',
    title: 'Improving Loyalty at BSW',
    category: 'Service Design',
    year: '2025',
    description: 'Redesigning the loyalty points journey. It’s not just about points; it’s about showing customers: "We see you. We respect your time."',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    content: `Bought hair products at BSW Jane & Finch. Cashier told me I could earn points. Scanned QR code to earn points - then hit a wall! I had to download the app. Was in a hurry, didn't download — left with no points. If it takes more than 30 seconds, users drop off.`
  },
  {
    id: 'tpl-accessibility',
    title: 'Accessibility at TPL',
    category: 'Accessibility',
    year: '2025',
    description: 'Design isn’t just digital: Improving table socket access and affordance at the Toronto Public Library.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800',
    content: `No visible affordance to indicate it’s a socket or how to open it. If we struggled, what about someone with arthritis or limited hand strength? Small design decisions like adding an ICON + PUSH Cue lead to big access gains.`
  },
  {
    id: 'sherway-visual-cues',
    title: 'Visual Cues at Sherway',
    category: 'UX Design',
    year: '2025',
    description: 'Show > Tell. How physical UX and clear visual cues helped me find a restroom fast in a 215-store mall.',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800',
    content: `Needed to use the restroom in a 215-store shopping mall. Panic set in! Spotted a visual cue. Crisis averted! Simple signs with icons and arrows gave direction. No confusion, no wasted time. Just good UX in the physical world.`
  },
  {
    id: 'instagram-copywriting',
    title: 'Copywriting is UX',
    category: 'UX Writing',
    year: '2025',
    description: 'How one line of great copy turned a passive scroll into real engagement on Instagram.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    content: `I was just scrolling... and then I stopped. I checked the comments... and actually left one. "Start the conversation..." These one liners made me feel invited. It was warm, open, human. Not: 'Comment below'.`
  },
  {
    id: 'smart-waste-bin',
    title: 'Reducing Cognitive Load',
    category: 'Service Design',
    year: '2025',
    description: 'How might service design interventions like automated sorting bins enhance usability and sustainability?',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?auto=format&fit=crop&q=80&w=800',
    content: `A trash bin turned out to be a perfect case of cognitive overload. 'Wait... where does this go?' 'Is this recyclable?' Imagine a smart waste bin that takes the thinking out of throwing away. Scans the item, identifies the material, and sorts it automatically.`
  }
];

export const categories = [
  'All',
  'Service Design',
  'UX Design',
  'Design Research',
  'Accessibility',
  'UX Writing'
];

export const years = ['All', '2025'];
