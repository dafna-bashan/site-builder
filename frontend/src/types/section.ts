import { Cmp } from "./cmp";

export interface Section {
    id : string,
    url? : string,
    category: string,
    info : {
        style : {
            backgroundImage? : string,
            backgroundColor? : string,
            minWidth? : string,
            minHeight? : string,
            paddingInline? : string,
            paddingBlock? : string,
            flexDirection? : string,
            alignItems? : string,
            justifyContent? : string,
            alignContent? : string,
        }
    },
    cmps: Cmp[]
}