import css from './FriendList.module.css';

import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem />
      ))}
    </ul>
  );
};
