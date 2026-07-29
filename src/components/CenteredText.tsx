import { FC } from 'react'

type CenteredTextProps = {
    content: number
    text: string
    unit: string
}

const CenteredText: FC<CenteredTextProps> = ({ content, text, unit }) => {
    return (
        <p
            className="text-sm min-[320px]:text-base lg:text-lg text-center"
            aria-label={`${text} ${content} ${unit === 'km/h' ? 'kilometres per hour' : 'percent'}`}
        >
            {text} {content} <span aria-hidden="true">{unit}</span>
        </p>
    )
}

export default CenteredText
