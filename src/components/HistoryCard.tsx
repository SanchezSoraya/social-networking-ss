import { Avatar, Card, Image } from 'antd'
import { Meta } from 'antd/es/list/Item'
import { type FC } from 'react'
import { type IHistory } from '../interfaces/History'

// interface HistoryCardProps {
//  username: string
// }

export const HistoryCard: FC<IHistory> = ({ username, title, description, imageURL }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300 }}>
      <Image width={200} src={imageURL} />
      <Meta avatar={<Avatar src="https://joesch.moe/api/v1/random" />} title={username} description={description} />
    </Card>
  )
}
