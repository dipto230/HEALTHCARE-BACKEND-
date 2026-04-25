import { prisma } from "../../lib/prisma";
import { EmbeddingService } from "./embedding.service";

export class IndexingService{
    private embeddingService: EmbeddingService;
    constructor(){
        this.embeddingService = new EmbeddingService()
    }
    async indexDoctorsData() {
        try{
            console.log("Fetching doctor data for indexing..............")
            const doctors = await prisma.doctor.findMany({
                where: { isDeleted: false },
                include: {
                    specialties: {
                        include: {
                            specialty: true,
                        },
                    },
                    reviews: true,
                },
            
            });
            let indexedCount = 0;
            for(const doctor of doctors){
                const specialtiesList = doctor.specialties.map((ds) => ds.specialty.title).join("\n");

                const reviewsText = doctor.reviews.map((r)=>`- Rating: ${r.rating}/5. Comment: ${r.comment} || "No Comment"`)
                const content = `Doctor Name: ${}`
                
            }

        }catch(error){
            console.log(error)
        }
    }
}