import { NextResponse } from 'next/server';

// In a real app, this would be in a database
let follows: { userId: string; sellerId: number }[] = [];

export async function POST(request: Request) {
  try {
    const { userId, sellerId } = await request.json();
    
    // Check if already following
    const isAlreadyFollowing = follows.some(
      item => item.userId === userId && item.sellerId === sellerId
    );

    if (isAlreadyFollowing) {
      // Unfollow
      follows = follows.filter(
        item => !(item.userId === userId && item.sellerId === sellerId)
      );
      return NextResponse.json({ message: 'Unfollowed successfully' });
    }

    // Follow
    follows.push({ userId, sellerId });
    return NextResponse.json({ message: 'Followed successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update follow status' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const sellerId = searchParams.get('sellerId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    let userFollows = follows.filter(item => item.userId === userId);

    if (sellerId) {
      userFollows = userFollows.filter(item => item.sellerId === parseInt(sellerId));
    }

    return NextResponse.json({ follows: userFollows });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch follows' },
      { status: 500 }
    );
  }
} 