import { EmbeddingService } from "./embedding.service";
import { IndexingService } from "./indexing.service";

export class RAGService {
    private embeddingService: EmbeddingService;
    //private llmService: LLMService;
    private indexingService: IndexingService

    constructor() {
        this.embeddingService = new EmbeddingService()
        this.indexingService = new IndexingService()

    }

    async ingestDoctorsData() {
        return this.indexingService.indexDoctorsData();
    }


    async generateAnswer(
    query: string,
    limit: number = 5,
    sourceType?: string,
    asJson: boolean = false,
  ) {
    try {
      const relevantDocs = await this.retieveRelevantDocuments(
        query,
        limit,
        sourceType,
      );

      // extract content from documents for context
      const context = (relevantDocs as any)
        .filter((doc: any) => doc.content)
        .map((doc: any) => doc.content);

      let answer = await this.llmService.generateResponse(
        query,
        context,
        asJson,
      );

      let parsedAnswer: any = answer;
      if (asJson) {
        try {
          // If the model wrapped the JSON in markdown blocks, clean it up
          if (answer.startsWith("```json")) {
            answer = answer
              .replace(/```json\n?/, "")
              .replace(/```$/, "")
              .trim();
          } else if (answer.startsWith("```")) {
            answer = answer
              .replace(/```\n?/, "")
              .replace(/```$/, "")
              .trim();
          }
          parsedAnswer = JSON.parse(answer);
        } catch (e) {
          console.error("Failed to parse LLM JSON response:", e);
          throw e;
        }
      }

      return {
        answer: parsedAnswer,
        sources: (relevantDocs as any).map((doc: any) => ({
          id: doc.id,
          chunkKey: doc.chunkKey,
          sourceType: doc.sourceType,
          sourceId: doc.sourceId,
          sourceLabel: doc.sourceLabel,
          content: doc.content,
          similarity: doc.similarity,
        })),
        contextUsed: context.length > 0,
      };
    } catch (error) {
      console.log(error);
    }
  }



}