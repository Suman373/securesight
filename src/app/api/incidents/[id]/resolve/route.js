import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';

export async function PATCH(_, { params }) {
    try {
        const id = parseInt(await params.id);
        const incidentExists = await prisma.incident.findUnique({where: {id}});
        if(!incidentExists){
            return NextResponse.json({error: "Incident not found"}, {status: 404});
        }
        // resolving the incident
        const updatedIncident = await prisma.incident.update({
            where: {id},
            data: {resolved: !incidentExists.resolved}
        });
        return NextResponse.json(updatedIncident);
    } catch (error) {
        console.log(`Error while resolving incident ${error}`);
        return NextResponse.json(
            { error: "Failed to resolve incident" },
            { status: 500 }
        )
    }
}