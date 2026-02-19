import z from "z"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({
        name:z.string("Name must be a string").min(1, "Name cannot be empty").max(100, "Name must be less than 100 characters").optional
    }).optional(),
    patientHealthData: z.object({}).optional(),
    medicalReports: z.array(z.object({})).optional()
})