import { FC } from 'react'

type TemperatureTextProps = {
    content: number
}

const TemperatureText: FC<TemperatureTextProps> = ({ content }) => {
    return (
        <span className="text-lg lg:text-xl font-bold">
            {content}
            <span className="font-mono">°</span>C
        </span>
    )
}

export default TemperatureText
