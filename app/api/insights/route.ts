import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    topProducts: [
      { name: 'Product A', value: 45230 },
      { name: 'Product B', value: 32180 }
    ],
    dropOffWeeks: [
      { week: 'Week 1', value: 1200 },
      { week: 'Week 2', value: 880 },
      { week: 'Week 3', value: 540 },
      { week: 'Week 4', value: 310 }
    ],
    regionalPerformance: [
      { region: 'North America', value: '$243,000', trend: 'up' },
      { region: 'Europe', value: '$186,700', trend: 'down' },
      { region: 'APAC', value: '$210,300', trend: 'up' }
    ],
    conversionFunnel: {
      visitors: 12000,
      productViews: 7200,
      addToCart: 2900,
      purchases: 950
    }
  });
}
