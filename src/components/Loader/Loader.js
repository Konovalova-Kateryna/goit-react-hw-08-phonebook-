import { Watch } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="violet"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center', marginTop: '200px' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
