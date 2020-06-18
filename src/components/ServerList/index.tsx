import React from 'react'

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome/>
      <Separator />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={6}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton />
    </Container>
  )
}

export default ServerList