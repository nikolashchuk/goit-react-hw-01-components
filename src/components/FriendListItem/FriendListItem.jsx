import PropTypes from 'prop-types';
import { Container, Indicator } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Container>
      <Indicator isOnline={isOnline}> </Indicator>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Container>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
