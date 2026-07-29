import { FC } from 'react'

type TemperatureTextProps = {
    content: number
}

const TemperatureText: FC<TemperatureTextProps> = ({ content }) => {
    return (
        <p
            className="text-lg lg:text-2xl font-bold"
            aria-label={`${content}° Celsius`}
        >
            {content}
            <span className="font-mono">°</span>C
        </p>
    )
}

export default TemperatureText
