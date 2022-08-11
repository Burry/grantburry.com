export type ListData = Array<
  Array<{
    text: string
    link?: string
    target?: string
    icon: {
      type: IconProp
      colors: {
        primary: string
        secondary?: string
      }
    }
  }>
>
