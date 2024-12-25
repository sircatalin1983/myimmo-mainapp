export class TrackerSession {
    id: number;
    idUser: string;
    startTime: Date;
    endTime?: Date; // Optional, as the session may still be active
    ipAddress?: string; // Optional field
    ipData?: string; // Optional field
    userAgent?: string; // Optional field

    constructor(
        id: number,
        idUser: string,
        startTime: Date,
        endTime?: Date,
        ipAddress?: string,
        ipData?: string,
        userAgent?: string
    ) {
        this.id = id;
        this.idUser = idUser;
        this.startTime = startTime;
        this.endTime = endTime;
        this.ipAddress = ipAddress;
        this.ipData = ipData;
        this.userAgent = userAgent;
    }
}
