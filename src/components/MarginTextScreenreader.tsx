import { FC } from 'react'

type MarginTextScreenreaderProps = {
    time: string
}

const MarginTextScreenreader: FC<MarginTextScreenreaderProps> = ({ time }) => {
    const [year, month, date] = time.split(' ')[0].split('-')
    const [hour, min] = time.split(' ')[1].split(':')
    const dateObj = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(date),
        parseInt(hour),
        parseInt(min)
    )
    const spokenDate = new Intl.DateTimeFormat('en', {
        dateStyle: 'full',
        timeStyle: 'short',
    }).format(dateObj)

    return (
        <p
            className="sr-only text-sm lg:text-base flex m-auto"
            aria-label={spokenDate}
        >
            {time}
        </p>
    )
}

export default MarginTextScreenreader
