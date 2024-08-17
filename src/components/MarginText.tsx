import { FC } from 'react'

type MarginTextProps = {
    content: string
}

const MarginText: FC<MarginTextProps> = ({ content }) => {
    return <div className="text-sm lg:text-base flex m-auto">{content}</div>
}

export default MarginText
