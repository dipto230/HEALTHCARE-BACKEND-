import z from "z"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({
        name:z.string("Name must be a string").min(1, "Name cannot be empty").max()
    }).optional(),
    patientHealthData: z.object({}).optional(),
    medicalReports: z.array(z.object({})).optional()
})