export class TrackerPageView {
    id: number;
    idTrackerSession: number;
    pageUrl: string; // Changed from `url` to match Sequelize model field
    referrer?: string;
    referrerUrl?: string; // Optional field
    userAgent?: string; // Optional field
    ipAddress?: string; // Optional field
    timestamp: Date;
    title?: string; // Optional field
    duration?: number; // Optional field (duration in seconds)

    constructor(
        id: number,
        idTrackerSession: number,
        pageUrl: string,
        timestamp: Date,
        title?: string,
        referrer?: string,
        referrerUrl?: string,
        duration?: number,
        userAgent?: string,
        ipAddress?: string
    ) {
        this.id = id;
        this.idTrackerSession = idTrackerSession;
        this.pageUrl = pageUrl;
        this.timestamp = timestamp;
        this.title = title || document.title; // Page title
        this.referrer = referrer;
        this.referrerUrl = referrerUrl; 
        this.duration = duration; 
        this.userAgent = userAgent;
        this.ipAddress = ipAddress;
    }
}
