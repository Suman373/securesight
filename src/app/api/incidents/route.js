import { NextResponse } from 'next/server';
import {prisma} from '../../../lib/prisma';


export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const resolved = searchParams.get("resolved");

        const incidents = await prisma.incident.findMany({
            where: resolved === null ? {} : { resolved: resolved === "true" },
            orderBy: { tsStart: 'desc' }, // newest first
        });
        return NextResponse.json(incidents);
    } catch (error) {
        console.log(`Error while fetching incidents ${error}`);
        return NextResponse.json(
            { error: 'Failed to incidents' },
            { status: 500 })
    }
}