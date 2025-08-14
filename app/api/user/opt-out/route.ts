import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import OptOutLog from '@/models/OptOutLog';

export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json({ message: 'User ID is required.' }, { status: 400 });
        }

        await dbConnect();

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        }

        await new OptOutLog({
            userId: deletedUser._id,
            screenName: deletedUser.screenName,
        }).save();
        
        return NextResponse.json({ message: 'User has successfully opted out.' }, { status: 200 });

    } catch (error) {
        console.error('Error during opt-out:', error);
        return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
    }
}