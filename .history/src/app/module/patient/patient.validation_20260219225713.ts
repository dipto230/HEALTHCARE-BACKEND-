import z from "z"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({
        name:
    }).optional(),
    patientHealthData: z.object({}).optional(),
    medicalReports: z.array(z.object({})).optional()
})