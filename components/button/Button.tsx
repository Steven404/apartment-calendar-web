import Text from '../text/Text';
import { Wrapper } from './Button.styles';

interface ButtonExtendedProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  kind?: 'accept' | 'cancel';
  text?: string;
}

const Button = ({
  kind = 'accept',
  text,
  ...restProps
}: ButtonExtendedProps): JSX.Element => {
  return (
    <Wrapper kind={kind} {...restProps}>
      <Text color="white" size="lg">
        {text}
      </Text>
    </Wrapper>
  );
};

export default Button;
