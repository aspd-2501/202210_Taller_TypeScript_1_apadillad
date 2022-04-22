export class Serie {
    num: number;
    name: String;
    channel: String;
    seasons: number;

    constructor(num: number, name: String, channel: String, seasons: number) {
        this.num = num;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}