export interface ImgCmp {
    id: string,
    info: {
        src: string,
        style: {
            width?: string,
            backgroundColor?: string,
            minWidth?: string,
            minHeight?: string,
            paddingInline?: string,
            paddingBlock?: string,
            borderRadius?: string
        }
    }
}