import { Specialty } from '../../../generated/prisma/client';
import { prisma } from '../../lib/prisma';

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
    return payload;

    const specialty = await prisma.specialty.create({
        data:payload
    })

    return specialty
}

export const Spe