import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.Styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
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
