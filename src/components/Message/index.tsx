import React from 'react'

import { Container, Avatar, MessageData, Header, Content } from './styles'
export { Mention } from './styles'

export interface Props {
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const Message: React.FC<Props> = ({ author, date, content, hasMention, isBot }) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} src={author.avatar} />
      <MessageData>
        <Header>
          <strong>{author.name}</strong>
          { isBot && <span>bot</span> }
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </MessageData>
    </Container>
  )
}

export default Message