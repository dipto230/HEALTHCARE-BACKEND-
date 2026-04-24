import { EmbeddingService } from "./embedding.service";

export class IndexingService{
    private embeddingService: EmbeddingService;
    constructor(){
        this.embeddingService = new EmbeddingService()
    }
    async indexDoctorsData() {
        try{
            console.log()

        }catch(error){
            console.log(error)
        }
    }
}