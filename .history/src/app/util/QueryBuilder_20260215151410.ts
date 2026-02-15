
import { IQueryConfig, IQueryParams, PrismaCountArgs, PrismaFindManyArgs, PrismaModelDelegate, PrismaStringFilter, PrismaWhereConditions } from "../interfaces/query.interface"

export class QueryBuilder<
    T,
    TWhereInput = Record<string, unknown>,
    TInclude = Record<string, unknown>
    > {
    private query: PrismaFindManyArgs;
    private CountQuery: PrismaCountArgs;
    private page:number =1;
    private limit : number = 10;
    private skip: number = 0;
    private sortBy: string = 'createdAt';
    private sortOrder: 'asc' | 'desc' = 'desc';
    private selectFields: Record<string, boolean | undefined>;

    constructor(
        private model: PrismaModelDelegate,
        private queryParams: IQueryParams,
        private config:IQueryConfig
    ) {
        this.query = {
            where:{},
            include: {},
            orderBy: {},
            skip: 0,
            take: 10,
            
        };
        this.CountQuery = {
            where : {},
        }
    }
     search() : this {
        const {searchTerm} = this.queryParams;
        const { searchableFields} = this.config;
        // doctorSearchableFields = ['user.name', 'user.email', 'specialties.specialty.title' , 'specialties.specialty.description']
        if(searchTerm && searchableFields && searchableFields.length > 0){
            const searchConditions : Record<string, unknown>[] = searchableFields.map((field) => {
                if(field.includes(".")){
                    const parts = field.split(".");

                    if(parts.length === 2){
                        const [relation, nestedField] = parts;

                        const stringFilter : PrismaStringFilter = {
                            contains : searchTerm,
                            mode : 'insensitive' as const,
                        }

                        return {
                            [relation] : {
                                [nestedField] : stringFilter
                            }
                        }
                    }else if(parts.length === 3){
                        const [relation, nestedRelation, nestedField] = parts;

                        const stringFilter : PrismaStringFilter = {
                            contains : searchTerm,
                            mode : 'insensitive' as const,
                        }

                        return {
                            [relation] : {
                                some :{
                                    [nestedRelation]: {
                                        [nestedField]: stringFilter
                                    }
                                }
                            }
                        }
                    }
                    
                }
                // direct field
                const stringFilter: PrismaStringFilter = {
                    contains: searchTerm,
                    mode: 'insensitive' as const,
                }

                return {
                    [field]: stringFilter
                }
            }
        )

        const whereConditions = this.query.where as PrismaWhereConditions

        whereConditions.OR = searchConditions;

        const countWhereConditions = this.CountQuery.where as PrismaWhereConditions;
        countWhereConditions.OR = searchConditions;
        }

        return this;
    }
    filter(): this{
        const { filterableFields } = this.config;
        const excludedField = ['searchTerm', 'page', 'limit', 'sortBy', 'sortOrder', 'fields', 'include'];
        const filterParams: Record<string, unknown> = {};
         Object.keys(this.queryParams).forEach((key) => {
            if(!excludedField.includes(key)){
                filterParams[key] = this.queryParams[key];
            }
         })
        const queryWhere = this.query.where as Record<string, unknown>;
        const countQueryWhere = this.CountQuery.where as Record<string, unknown>;
        Object.keys(filterParams).forEach((key) => {
            const value = filterParams[key];
            if(value === undefined || value === ""){
                return;
            }
             const isAllowedField = !filterableFields || filterableFields.length === 0 || filterableFields.includes(key);
             
        })
        return this
    }
  
    
     }