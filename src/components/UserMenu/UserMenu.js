import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { UserMenuContainer, UserMenuBtn } from './UserMenu.styled';
import { BiLogOut } from 'react-icons/bi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const isLogout = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <UserMenuContainer>
      <p>Wellcome, {name}</p>
      <UserMenuBtn type="button" onClick={isLogout}>
        <BiLogOut />
      </UserMenuBtn>
    </UserMenuContainer>
  );
};
