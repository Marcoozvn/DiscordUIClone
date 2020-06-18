import React from 'react'

import { Container, Status, User, Avatar } from './styles'

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      { isBot && <span>BOT</span>}
    </User>
  )
}

const users = ['Usuário 1', 'Usuário 2', 'Usuário 3', 'Usuário 4', 'Usuário 5', 'Usuário 6', 'Usuário 7', 'Usuário 8', 'Usuário 9']

const UserList: React.FC = () => {
  return (
    <Container>
      <Status>Disponível - 1</Status>
      <UserRow nickname='Marcoozvn' />

      <Status>Offline - 10</Status>
      <UserRow nickname='Diego Fernandes' isBot={true}/>
      { users.map(user => <UserRow key={user} nickname={user} />)}

    </Container>
  )
}

export default UserList