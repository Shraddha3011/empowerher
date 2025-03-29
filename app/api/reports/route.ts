import { NextResponse } from 'next/server';

// In a real app, this would be in a database
let reports: {
  id: string;
  productId: number;
  userId: string;
  reason: string;
  description: string;
  status: 'pending' | 'reviewed' | 'resolved';
  createdAt: string;
}[] = [];

export async function POST(request: Request) {
  try {
    const { productId, userId, reason, description } = await request.json();
    
    const report = {
      id: Math.random().toString(36).substr(2, 9),
      productId,
      userId,
      reason,
      description,
      status: 'pending' as const,
      createdAt: new Date().toISOString(),
    };

    reports.push(report);
    return NextResponse.json({ message: 'Report submitted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit report' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    let filteredReports = reports;

    if (userId) {
      filteredReports = filteredReports.filter(report => report.userId === userId);
    }

    if (status) {
      filteredReports = filteredReports.filter(report => report.status === status);
    }

    return NextResponse.json({ reports: filteredReports });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    );
  }
} 