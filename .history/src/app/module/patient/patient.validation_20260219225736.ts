import z from "z"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({
        name:z.string
    }).optional(),
    patientHealthData: z.object({}).optional(),
    medicalReports: z.array(z.object({})).optional()
})