import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Header, LogItem } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      <LogItem>{isLoggedIn ? <UserMenu /> : <AuthNav />}</LogItem>
    </Header>
  );
};
