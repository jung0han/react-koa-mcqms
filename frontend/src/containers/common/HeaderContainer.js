import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderMenu from '../../components/common/HeaderMenu';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <HeaderMenu user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
