import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, InputIcon, Input } from './styles'
import Message, { Mention } from '../Message'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current
    console.log(div)

    if (div) {
      div.scrollTop = div.scrollHeight
    }

  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(item => (
          <Message key={item} author={{name: 'Marcos Cesar', avatar: 'http://api.adorable.io/avatars/50/12@adorable.png'}} date='18/06/2020' content='React é demais!' />
          ))}
        <Message author={{name: 'Diego Fernandes', avatar: 'http://api.adorable.io/avatars/50/15@adorable.png'}} date='18/06/2020' content={<><Mention>@Marcos Cesar</Mention>, tudo bem?</>} hasMention isBot />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>

    </Container>
  )
}

export default ChannelData