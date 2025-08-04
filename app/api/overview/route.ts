import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    kpis: [
      { label: 'Total Sales', value: '$24,000', change: '+12%', icon: 'TrendingUp' },
      { label: 'Active Customers', value: '1,240', change: '-5%', icon: 'Users' },
      { label: 'Inventory Status', value: '5,600', change: '+2%', icon: 'Gift' }
    ],
    activities: [
      { status: 'New customer sign-up', description: 'Enterprise client from Germany', timestamp: '2 hours ago' },
      { status: 'Order #38492 completed', description: '$4,320.00 - 8 items', timestamp: '5 hours ago' },
      { status: 'Low inventory alert', description: 'Product SKU-8829 below threshold', timestamp: '1 day ago' }
    ],
    monthlyPerformance: {
      revenue: '$42,900',
      percentChange: 14
    }
  });
}
