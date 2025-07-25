import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const cameras = await prisma.camera.findMany();
        return NextResponse.json(cameras);
    } catch (error) {
        console.log(`Error while fetching cameras ${error}`);
        return NextResponse.json(
            { error: 'Failed to fetch cameras' },
            { status: 500 }
        )
    }
}
