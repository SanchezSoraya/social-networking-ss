import { type FC } from 'react'
import { type IHistory } from '../interfaces/History'
import { HistoryCard } from './HistoryCard'

interface HistoryCardProps {
  histories: IHistory[]
}

export const HistoriesCard: FC<HistoryCardProps> = ({ histories }) => {
  return (
    <div>
      {histories.map((history, index) => {
        return (
          <HistoryCard
            key={index}
            description={history.description}
            title={history.title}
            username={history.username}
            imageURL={history.imageURL}
          />
        )
      })}
    </div>
  )
}
