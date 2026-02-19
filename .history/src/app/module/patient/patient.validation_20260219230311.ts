import z from "z"
import { BloodGroup, Gender } from "../../../generated/prisma/enums"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({
        name: z.string("Name must be a string").min(1, "Name cannot be empty").max(100, "Name must be less than 100 characters").optional(),
        profilePhoto: z.url("Profile photo must be a valid string").optional(),
        contactNumber : z.string("Contact number must be a string").min(1, "Contact number cannot be empty").max(20, "Contact number must be less than 20 characters").optional(),
        address : z.string("Address must be a string").min(1, "Address cannot be empty").max(200, "Address must be less than 200 characters").optional(),
        
    }).optional(),
    patientHealthData: z.object({
         gender: z.enum([Gender.FEMALE, Gender.MALE]).optional(),
        dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format",
        }).optional(),
        bloodGroup: z.enum([BloodGroup.A_POSITIVE, BloodGroup.A_NEGATIVE, BloodGroup.B_POSITIVE, BloodGroup.B_NEGATIVE, BloodGroup.AB_POSITIVE, BloodGroup.AB_NEGATIVE, BloodGroup.O_POSITIVE, BloodGroup.O_NEGATIVE]).optional(),
        hasAllergies: z.boolean().optional(),
        hasDiabetes: z.boolean().optional(),
        height: z.string().optional(),
        weight: z.string().optional(),
        smokingStatus: z.boolean().optional(),
        dietaryPreferences: z.string().optional(),
        pregnancyStatus: z.boolean().optional(),
        mentalHealthHistory: z.string().optional(),
        immunizationStatus: z.string().optional(),
        hasPastSurgeries: z.boolean().optional(),
        recentAnxiety: z.boolean().optional(),
        recentDepression: z.boolean().optional(),
        maritalStatus: z.string().optional(),
    }).optional(),
    medicalReports: z.array(z.object({})).optional()
})