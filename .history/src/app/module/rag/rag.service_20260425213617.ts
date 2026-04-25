import { EmbeddingService } from "./embedding.service";

export class RAGService {
    private embeddingService: EmbeddingService;
    //private llmService: LLMService;
    private indexingService: IndexingService

    constructor() {
        this.embeddingService = new EmbeddingService()
        this.indexingService = new Indexing
    }


}