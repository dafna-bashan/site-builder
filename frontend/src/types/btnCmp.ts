export interface BtnCmp {
    id: string,
    info: {
        txt: string,
        action?: {
            link?: string
        },
        style: {
            fontSize?: string,
            textAlign?: string,
            textDecoration?: string,
            fontWeight?: string,
            fontStyle?: string,
            color?: string,
            backgroundColor?: string,
            minWidth?: string,
            minHeight?: string,
            fontFamily?: string,
            textShadow?: string,
            paddingInline?: string,
            paddingBlock?: string,
            letterSpacing?: string,
            borderWidth?: string,
            borderColor?: string,
            borderRadius?: string
        }
    }
}