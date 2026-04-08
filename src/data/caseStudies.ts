export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  role?: string;
  timeline?: string;
  tools?: string;
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
    content: `## Research Question
How might we redesign A&W's self-service and waste station to make it cleaner, easier, and more intuitive for customers to use without disrupting existing store operations?

## Positives Observed
Warm lighting, wood textures, open seating. Consistent brand aesthetic. 'Good Food Makes Good Food' wall messaging connects values to the dining space.

## Detractors Found
Unsanitary ketchup station with hygiene issues. Blocked trash openings from overfilling. Waste return station where cups are placed in wrong slots (evidence of user confusion). Google Reviews confirming hygiene concerns across multiple locations.

## Target Demographics
- **Families**: Need simplicity, unclear stations add stress
- **Health-conscious customers**: Visible mess reduces trust
- **Remote workers**: Want speed and clarity

## Business Implications
Revenue loss from slow cleanup reducing table turnover. Brand trust damage from visible dirt lowering repeat intent. Brand differentiation undermined when unhygienic condiment areas contradict A&W's quality promise.

## Design Principles Proposed
1. **Clarity at a Glance**: Every action obvious.
2. **Hygiene as Brand Expression**: Clean looks like care.
3. **Feedback Builds Trust**: Visual cues like emptied bins or thank-you signs.

## Next Steps
Prototype low-cost interventions in a single location to measure flow, cleanliness perception, and dwell time.`
  },
  {
    id: 'roku-tv-remote',
    title: 'Rethinking Roku TV\'s Remote',
    category: 'Product Design',
    year: '2025',
    description: 'A deep dive into the ergonomics and empathy of physical interfaces, starting with the elusive volume button.',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800',
    content: `## Problem
Volume controls hidden on the side edge of the Roku remote. Pressed every face button before discovering them. Users online report the same frustration: confusing, non-intuitive, inconsistent with most TV brands.

## Redesign
Moved volume to the face of the remote where the thumb naturally rests. Consolidated streaming shortcuts into a 2x2 grid. Added clearer menu icon. Six iterations sketched before arriving at the final layout.

## Principle
When you can't find the volume, you're not watching anymore. You're fighting the interface.

## Next Steps
Test with users to see if they find volume without instructions. Validate empathy-driven design.`
  },
  {
    id: 'bsw-beauty-loyalty',
    title: 'Improving Loyalty at BSW',
    category: 'Service Design',
    year: '2025',
    description: 'Redesigning the loyalty points journey. It’s not just about points; it’s about showing customers: "We see you. We respect your time."',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    content: `## The Problem
Bought hair products at BSW Jane & Finch. Cashier mentioned points. Scanned QR code but it required a full app download. No time at checkout. Left with no points.

## UX Principles Violated
Error Prevention, User Control & Freedom, Match Between System & Real World.

## Proposed Solutions
1. **Phone number/email entry at checkout**: Fast, familiar, reduces drop-off.
2. **'Text me a link' option**: Register later.
3. **Fallback flow**: 'Keep your receipt. 48 hours to claim points online, no app required.'

## Business Impact
Missed points = missed loyalty and repeat purchases. Friction = fewer users in loyalty program = less data, fewer retargeting opportunities. Marketing spend on loyalty doesn't convert when app adoption stays low.`
  },
  {
    id: 'tpl-accessibility',
    title: 'Accessibility at TPL',
    category: 'Accessibility',
    year: '2025',
    description: 'Design isn’t just digital: Improving table socket access and affordance at the Toronto Public Library.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800',
    content: `## Problem
Table socket at York Woods TPL branch. No visible affordance to indicate it's a socket or how to open it. Took multiple tries.

## Who Gets Left Behind
Older adults, children, people with limited strength/mobility/arthritis, newcomers or first-time visitors.

## Proposal
Add universal device-charging icon on closed lid. Subtle 'PUSH' label with directional arrow indicating angle of elevation. Aligns with common iconography from airports, cafes, hotels.

## Design Principle
**Discoverability & Feedback**. Systems should signal how they work.

## Impact
Stronger community reputation. AODA compliance. Improved patron satisfaction and trust.`
  },
  {
    id: 'smart-waste-bin',
    title: 'Reducing Cognitive Load',
    category: 'Service Design',
    year: '2025',
    description: 'How might service design interventions like automated sorting bins enhance usability and sustainability?',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?auto=format&fit=crop&q=80&w=800',
    content: `## Observation
Sorting bins at Humber College and malls are designed to promote proper waste sorting (Recycle, Compost, Landfill). In reality: users hesitate, guess, give up, throw items in the wrong bin.

## UX Insight
Cognitive overload, directly related to Hick's Law and Miller's Law. More choices = more thinking. The Netflix movie-picking problem applied to trash.

## Design Opportunity
Smart waste bin using camera/sensor to scan items, identify material via image recognition, and automatically route waste to correct compartment.`
  },
  {
    id: 'transit-app-redesign',
    title: 'Transit App Redesign',
    category: 'Product Design',
    year: '2024',
    role: 'Design Researcher, Team Lead',
    timeline: '12 weeks',
    tools: 'Figma, Figjam',
    description: 'Improving Transportation Access in Canada by minimizing the impact of service disruptions on daily commuters.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
    content: `## Challenge
Minimize the impact of service disruptions on daily commuters and increase satisfaction with Transit App (used by 20%+ of all transit riders in U.S. and Canada).

## Research
Desk research, observational site visits, user interviews, heuristic evaluation, usability testing. Three sub-groups: 
- Discovery (market/competitive)
- Fieldwork (observations/interviews)
- Analysis (synthesis/reporting)

## Solutions
1. **Manually Manage Schedule Trips**: view, edit, cancel scheduled trips.
2. **AI Assistant 'Trippy'**: learns daily travel habits, helps plan ahead.
3. **Trip Notifications**: real-time updates on delays, route changes, cancellations.

## Testing Changes
Users found 'Leave at' / 'Arrive by' confusing. Wanted visual map cues. Iterated based on feedback.

## Impact
Greater control and flexibility. Time-saving convenience. Data-driven improvements for Transit and transit authorities.`
  },
  {
    id: 'sayve-financial-literacy',
    title: 'Sayve: Financial Literacy',
    category: 'Product Design',
    year: '2024',
    role: 'UX Researcher, UI/UX Designer',
    timeline: '2 weeks',
    description: 'Financial Literacy for Young Nigerians. Designing a mobile app with courses, challenges, and a savings feature.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800',
    content: `## Problem
Less than 50% of Nigerian adults have fundamental financial knowledge. Only 40% access banking services. Target: young adults 16-28.

## Research
22 survey respondents + 2 face-to-face interviews. Most common goals: saving and budgeting. Primary learning method: word of mouth. Biggest challenge: lack of motivation.

## Solution
Mobile app with courses (audio options), challenges (goal-oriented tasks), achievements/leaderboard, and a savings feature. Gamified learning with points for completing courses and maintaining saving habits.

## Reflection
Not every project allows time for sketches. Eliminating personal bias is crucial. Research data revealed users wanted different things than assumed.`
  },
  {
    id: 'jonsal-ai',
    title: 'JONSAL AI',
    category: 'Product Design',
    year: '2024',
    role: 'Visual Design, Data Visualization',
    timeline: '2 months',
    description: 'AI-powered sales assistant for auto dealerships. Admin dashboard, lead tracking, appointment management.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800',
    content: `## Project Overview
Imagine a scenario where every customer call to a dealership is met with an immediate, expert response. JonSal, the AI-powered sales assistant, is uniquely equipped to handle any question or objection with the skill of a top-tier salesperson.

## What we did
As this was my first Artificial Intelligence (AI) project, the process was very much of me absorbing and synthesizing existing & new knowledge. 

Working with the requirement from the stakeholders, I did some digging on AI as a whole, and streamlined to conversational AI solution globally and how businesses are leveraging it in their processes, it's limitations and draw backs. This helped to understand the users’ needs, while drawing sketches to align with client specifications before converting to Hi-Fi prototypes.

## Grabbing pen and paper
Given the complexity of the project, I sketched my ideas out on paper first, which allowed me to explore different concepts quickly and get feedback without the constraint of a software. This process allowed me to communicate my ideas more effectively with the development team.`
  }
];

export const categories = [
  'All',
  'Service Design',
  'Product Design',
  'Accessibility'
];

export const years = ['All', '2025', '2024'];
