import { PrismaCountArgs, PrismaFindManyArgs } from "../interfaces/query.interface"

export class QueryBuilder<
    T,
    TWhereInput = Record<string, unknown>,
    TInclude = Record<string, unknown>
    > {
    private query: PrismaFindManyArgs;
    private CountQuery: PrismaCountArgs;
    private page:number =1;
    private limit
    
     }