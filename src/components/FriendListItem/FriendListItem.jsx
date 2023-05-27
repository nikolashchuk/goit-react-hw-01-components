import PropTypes from 'prop-types';
import { Indicator, Item } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <Item key={id}>
      <Indicator isOnline={isOnline}> </Indicator>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
