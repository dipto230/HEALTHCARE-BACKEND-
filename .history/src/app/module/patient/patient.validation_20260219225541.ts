import z from "z"
const updatePatientProfileZodSchema = z.object({
    patientInfo: z.object({}).optional(),
    patientHealthData: z.object({}).optional()
})