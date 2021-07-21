export class ZipCodeQuery {
    constructor(
        public id?: number,
        public zipCode?: string,
        public temp?: number,
        public cityName?: string,
        public timeZoneName?: string,
        public requested?: string
        ) { }
}