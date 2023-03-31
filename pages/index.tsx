import Icon from '@/components/icon/Icon';
import { HeaderWrapper, PageWrapper } from '@/styles/home.styles';
import { spacing } from '@/theme';

import Text from '../components/text/Text';

const Home = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Text
          margin={`0 ${spacing.xxl} 0 0 `}
          color="textGrayDark"
          size="xl"
          weight={700}
        >
          Reservations
        </Text>
        <Icon icon="ControlPoint" color="textGrayDark" size="xxxl" />
      </HeaderWrapper>
    </PageWrapper>
  );
};

export default Home;
