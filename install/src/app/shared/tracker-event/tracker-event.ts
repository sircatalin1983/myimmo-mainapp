export class TrackerEvent {
    id: number;
    idTrackerSession: number;
    eventType: string;
    eventData?: any; // Using `any` to support different types of event data
    timestamp: Date;
    ipAddress?: string; // Optional field
    userAgent?: string; // Optional field

    constructor(
        id: number,
        idTrackerSession: number,
        eventType: string,
        timestamp: Date,
        eventData?: any,
        ipAddress?: string,
        userAgent?: string
    ) {
        this.id = id;
        this.idTrackerSession = idTrackerSession;
        this.eventType = eventType;
        this.timestamp = timestamp;
        this.eventData = eventData;
        this.ipAddress = ipAddress;
        this.userAgent = userAgent;
    }
}
