
export class CorporateActionModel {
    public APIRCodes : string[] = [];

    constructor(
        public DueDate : Date,
        public DateAdded : Date,
        public IssuerCode: string,
        public IssuerName: string,
        public EventType: string,
        public Subject: string
    ){        
    }
} 