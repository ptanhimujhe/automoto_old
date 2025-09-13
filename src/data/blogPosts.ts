import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Car Care',
    slug: 'car-care',
    description: 'Essential tips for maintaining your vehicle in UAE conditions',
    postCount: 12
  },
  {
    id: '2',
    name: 'Garage Guides',
    slug: 'garage-guides',
    description: 'How to choose the right garage and service provider',
    postCount: 8
  },
  {
    id: '3',
    name: 'Auto Deals',
    slug: 'auto-deals',
    description: 'Best deals and offers on auto services in the UAE',
    postCount: 6
  },
  {
    id: '4',
    name: 'Driving in UAE',
    slug: 'driving-uae',
    description: 'Tips and insights for driving in the United Arab Emirates',
    postCount: 10
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'essential-car-maintenance-uae-summer',
    title: 'Essential Car Maintenance Tips for UAE Summer',
    excerpt: 'Learn how to protect your vehicle from extreme heat and maintain optimal performance during the harsh UAE summer months.',
    content: `# Essential Car Maintenance Tips for UAE Summer

The UAE's extreme summer temperatures can be tough on vehicles. Here are practical tips to keep your car running smoothly during the hottest months.

## Check Your Cooling System

Your car's cooling system works overtime in UAE heat. Regular checks can prevent costly breakdowns:

- Monitor coolant levels weekly
- Inspect hoses for cracks or leaks
- Clean the radiator of dust and debris
- Replace coolant according to manufacturer schedule

## Tire Care in Hot Weather

High temperatures affect tire pressure and wear:

- Check tire pressure when tires are cool (early morning)
- Inspect for signs of excessive wear or damage
- Rotate tires regularly for even wear
- Keep a spare tire in good condition

## Air Conditioning Maintenance

A working AC system is essential for comfort and safety:

- Replace cabin air filter regularly
- Check refrigerant levels
- Clean AC vents and ducts
- Service the system annually

## Battery Protection

Heat can reduce battery life significantly:

- Keep battery terminals clean
- Check electrolyte levels if applicable
- Park in shade when possible
- Consider battery replacement every 2-3 years

## Oil and Fluid Checks

Regular fluid maintenance is crucial:

- Check oil level and quality monthly
- Monitor brake fluid levels
- Inspect windshield washer fluid
- Top up power steering fluid as needed

Following these simple maintenance tips can help prevent breakdowns and extend your vehicle's life in UAE conditions.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-15',
    category: 'Car Care',
    tags: ['maintenance', 'summer', 'UAE', 'cooling system', 'tires'],
    readTime: 5
  },
  {
    id: '2',
    slug: 'choosing-right-garage-uae',
    title: 'How to Choose the Right Garage in the UAE',
    excerpt: 'A comprehensive guide to selecting a trustworthy garage for your vehicle maintenance and repair needs in the UAE.',
    content: `# How to Choose the Right Garage in the UAE

Finding a reliable garage is crucial for maintaining your vehicle. Here's how to make the right choice.

## Research and Reviews

Start with thorough research:

- Read online reviews and ratings
- Ask friends and colleagues for recommendations
- Check social media for customer feedback
- Look for consistent positive experiences

## Certifications and Qualifications

Verify the garage's credentials:

- Check for proper licensing
- Look for manufacturer certifications
- Verify technician qualifications
- Ensure insurance coverage

## Services Offered

Consider your needs:

- General maintenance services
- Specialized repairs for your car brand
- Emergency services availability
- Parts availability and quality

## Pricing Transparency

Look for fair and transparent pricing:

- Request detailed estimates
- Compare prices for similar services
- Understand warranty terms
- Avoid unusually low or high quotes

## Location and Convenience

Consider practical factors:

- Proximity to home or work
- Operating hours that suit your schedule
- Parking availability
- Public transport access

## Communication and Customer Service

Good communication is essential:

- Clear explanation of issues and solutions
- Regular updates on repair progress
- Professional and courteous staff
- Multilingual support if needed

Taking time to research and evaluate garages will help you find a reliable partner for your vehicle's maintenance needs.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-12',
    category: 'Garage Guides',
    tags: ['garage selection', 'UAE', 'maintenance', 'tips'],
    readTime: 4
  },
  {
    id: '3',
    slug: 'uae-driving-license-renewal-guide',
    title: 'UAE Driving License Renewal: Complete Guide',
    excerpt: 'Everything you need to know about renewing your UAE driving license, including requirements, fees, and the renewal process.',
    content: `# UAE Driving License Renewal: Complete Guide

Renewing your UAE driving license is a straightforward process when you know the requirements and steps involved.

## When to Renew

Plan ahead for license renewal:

- UAE licenses are valid for 2-10 years depending on type
- Check expiry date on your license
- Start renewal process 30 days before expiry
- Avoid driving with an expired license

## Required Documents

Gather these documents before visiting:

- Original driving license
- Emirates ID
- Passport copy with UAE visa
- Eye test certificate (if required)
- No objection certificate (for some cases)

## Renewal Process

Follow these steps:

1. Visit RTA customer service center or use online services
2. Submit required documents
3. Pay renewal fees
4. Complete eye test if required
5. Receive new license

## Fees and Payment

Understand the costs involved:

- License renewal fees vary by emirate
- Additional fees for eye test
- Payment accepted by cash or card
- Keep receipt for your records

## Online Renewal Options

Many emirates offer online services:

- Check RTA website for eligibility
- Upload required documents
- Pay fees online
- Receive license by mail or collect in person

## Special Considerations

Be aware of these factors:

- Traffic fines must be cleared before renewal
- Medical fitness certificate may be required for older drivers
- International license holders may have different requirements

Planning ahead and having all documents ready will make your license renewal quick and hassle-free.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-10',
    category: 'Driving in UAE',
    tags: ['license renewal', 'UAE', 'RTA', 'documentation'],
    readTime: 6
  },
  {
    id: '4',
    slug: 'best-car-service-deals-dubai',
    title: 'Best Car Service Deals in Dubai This Month',
    excerpt: 'Discover the top car service deals and offers available in Dubai, helping you save money on vehicle maintenance.',
    content: `# Best Car Service Deals in Dubai This Month

Save money on car maintenance with these current deals and offers from trusted service providers in Dubai.

## Oil Change Specials

Keep your engine running smoothly:

- Full synthetic oil change packages starting from AED 150
- Multi-point inspection included
- Filter replacement deals
- Loyalty program discounts available

## AC Service Offers

Beat the heat with AC maintenance deals:

- Complete AC system check and service
- Refrigerant top-up specials
- Filter replacement packages
- Seasonal maintenance bundles

## Tire Service Promotions

Ensure safe driving with tire deals:

- Buy 3 tires, get 1 free offers
- Wheel alignment and balancing packages
- Tire rotation service discounts
- Premium brand tire promotions

## Comprehensive Service Packages

Complete vehicle care bundles:

- Major service packages with multiple checks
- Brake system inspection and service
- Battery testing and replacement deals
- Fluid top-up and replacement offers

## How to Find the Best Deals

Tips for finding great service offers:

- Check garage websites and social media
- Sign up for newsletters and alerts
- Compare prices from multiple providers
- Look for seasonal promotions
- Ask about loyalty programs

## Using Service Bundles Wisely

Maximize value from service deals:

- Read terms and conditions carefully
- Understand what's included and excluded
- Check warranty coverage
- Verify service provider credentials
- Book appointments in advance

Taking advantage of these deals can help you maintain your vehicle while staying within budget.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-08',
    category: 'Auto Deals',
    tags: ['deals', 'Dubai', 'car service', 'savings', 'maintenance'],
    readTime: 4
  },
  {
    id: '5',
    slug: 'winter-car-care-uae',
    title: 'Winter Car Care Tips for UAE Drivers',
    excerpt: 'Essential maintenance tips to keep your car in perfect condition during the UAE\'s cooler winter months.',
    content: `# Winter Car Care Tips for UAE Drivers

While UAE winters are mild compared to other regions, your car still needs special attention during the cooler months.

## Battery Maintenance

Cooler temperatures can affect battery performance:

- Test battery voltage regularly
- Clean terminals and connections
- Check for corrosion or damage
- Consider replacement if battery is over 3 years old

## Tire Pressure Monitoring

Temperature changes affect tire pressure:

- Check pressure weekly during temperature fluctuations
- Adjust pressure according to manufacturer specifications
- Inspect for uneven wear patterns
- Rotate tires for even wear

## Fluid Level Checks

Maintain proper fluid levels:

- Check engine oil consistency and level
- Monitor coolant levels and concentration
- Inspect brake fluid for contamination
- Top up windshield washer fluid

## Lighting System Inspection

Ensure visibility during shorter days:

- Test all exterior lights regularly
- Replace burnt bulbs promptly
- Clean headlight lenses for better visibility
- Check alignment of headlights

## Interior Comfort

Maintain cabin comfort:

- Test heating system operation
- Replace cabin air filter if needed
- Check seat heaters if equipped
- Ensure defrosting system works properly

## Preventive Maintenance

Use winter as an opportunity for maintenance:

- Schedule comprehensive vehicle inspection
- Address any pending repairs
- Update maintenance records
- Plan for upcoming service needs

Winter is an ideal time to address maintenance items and prepare your vehicle for the year ahead.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-05',
    category: 'Car Care',
    tags: ['winter care', 'UAE', 'maintenance', 'battery', 'tires'],
    readTime: 5
  },
  {
    id: '6',
    slug: 'understanding-car-warranty-uae',
    title: 'Understanding Car Warranty in the UAE',
    excerpt: 'A complete guide to car warranties in the UAE, including what\'s covered, how to claim, and tips for maintaining coverage.',
    content: `# Understanding Car Warranty in the UAE

Car warranties provide important protection for your vehicle investment. Here's what UAE car owners need to know.

## Types of Warranties

Different warranty types offer varying coverage:

- Manufacturer warranty (new cars)
- Extended warranty options
- Powertrain warranty coverage
- Certified pre-owned warranties

## What's Typically Covered

Standard warranty coverage includes:

- Engine and transmission components
- Electrical system defects
- Air conditioning system
- Suspension components
- Manufacturing defects

## What's Usually Excluded

Common warranty exclusions:

- Wear and tear items (tires, brake pads)
- Damage from accidents or misuse
- Modifications or aftermarket parts
- Lack of proper maintenance
- Environmental damage

## Maintaining Warranty Coverage

Keep your warranty valid:

- Follow manufacturer service schedules
- Use authorized service centers
- Keep detailed maintenance records
- Use recommended parts and fluids
- Report issues promptly

## Making Warranty Claims

Steps for successful claims:

- Contact authorized dealer immediately
- Provide maintenance records
- Allow proper diagnosis
- Understand claim process timeline
- Keep copies of all documentation

## Extended Warranty Considerations

Evaluate extended warranty options:

- Compare coverage terms carefully
- Understand deductibles and limits
- Check provider reputation
- Consider cost versus potential benefits
- Read terms and conditions thoroughly

Understanding your warranty helps protect your investment and ensures proper vehicle care throughout the coverage period.`,
    featuredImage: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Automoto Team',
    publishDate: '2025-01-03',
    category: 'Garage Guides',
    tags: ['warranty', 'UAE', 'coverage', 'claims', 'maintenance'],
    readTime: 6
  }
];