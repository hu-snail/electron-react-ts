// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Typography } from '@douyinfe/semi-ui'
const Home = () => {
  const { Title } = Typography
  return (
    <div className="container">
      <Title style={{ margin: '8px 0' }}>早上好！Hu-snail</Title>
    </div>
  )
}

export default React.memo(Home)
