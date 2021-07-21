export class ZipCodeQuery {
    constructor(
        public int?: number,
        public zipCode?: string,
        public temp?: number,
        public cityName?: string,
        public timeZoneName?: string,
        public requested?: string
        ) { }
}