import React from 'react'

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='chat-livre' selected />
      <ChannelButton channelName='warzone' />
      <ChannelButton channelName='estudos' />
      <ChannelButton channelName='fifa20' />
      
      
    </Container>
  )
}

export default ChannelList