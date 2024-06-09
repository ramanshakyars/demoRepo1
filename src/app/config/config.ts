import { environment } from "src/envirements/envirement";


export class Config{
    public static get API_ENDPOINT(): string { return environment.API_URL; }
    public static GETALL_USER = `${Config.API_ENDPOINT}/getall-users`;
}