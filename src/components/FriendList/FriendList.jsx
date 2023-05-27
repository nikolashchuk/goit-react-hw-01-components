import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.Styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        const { id } = friend;
        return <FriendListItem key={id} friend={friend} />;
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
