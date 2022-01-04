import { Cmp } from "./cmp";
// import { Section } from "./section";
import { User } from "./user";

export interface Wap {
    _id: string,
	name: string,
	imgUrl?: string,
	createdBy: User,
	cmps: Cmp[]
}