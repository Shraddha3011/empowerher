import { NextResponse } from 'next/server';

// In a real app, this would be in a database
let savedProducts: { userId: string; productId: number }[] = [];

export async function POST(request: Request) {
  try {
    const { userId, productId } = await request.json();
    
    // Check if product is already saved
    const isAlreadySaved = savedProducts.some(
      item => item.userId === userId && item.productId === productId
    );

    if (isAlreadySaved) {
      // Remove from saved products
      savedProducts = savedProducts.filter(
        item => !(item.userId === userId && item.productId === productId)
      );
      return NextResponse.json({ message: 'Product removed from saved items' });
    }

    // Add to saved products
    savedProducts.push({ userId, productId });
    return NextResponse.json({ message: 'Product saved successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save product' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const userSavedProducts = savedProducts.filter(item => item.userId === userId);
    return NextResponse.json({ savedProducts: userSavedProducts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch saved products' },
      { status: 500 }
    );
  }
} 