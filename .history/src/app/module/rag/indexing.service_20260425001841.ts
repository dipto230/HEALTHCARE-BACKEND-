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
                where:{isDeleted:false},
                include: {
                    specialty:true,
                }
            })

        }catch(error){
            console.log(error)
        }
    }
}