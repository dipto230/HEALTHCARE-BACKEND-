import { EmbeddingService } from "./embedding.service";

export class IndexingService{
    private embeddingService: EmbeddingService;
    constructor(){
        this.embeddingService = new EmbeddingService()
    }
    async indexDoctorsData() {
        try{
            console.log("Fetching doctor data ")

        }catch(error){
            console.log(error)
        }
    }
}