import React from 'react';

import { IconType } from '../icon/Icon';
import Text from '../text/Text';
import {
  HorizontalLine,
  IconStyled,
  InputWrapper,
  TextInputStyled,
  Wrapper,
} from './TextInput.styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  error?: string;
  icon?: IconType;
  label?: string;
};

export const TextInput = ({
  alignItems = 'flex-start',
  error = '',
  icon,
  label,
  ...restProps
}: InputProps) => {
  return (
    <Wrapper alignItems={alignItems} hasError={Boolean(error)}>
      {label && (
        <Text align="left" weight={600} color="darkBlue">
          {label}
        </Text>
      )}
      <InputWrapper hasError={Boolean(error)}>
        {icon && (
          <>
            <IconStyled
              color={error ? 'error' : 'darkBlue'}
              size="lg"
              icon={icon}
            />
            <HorizontalLine hasError={Boolean(error)} />
          </>
        )}
        <TextInputStyled {...restProps} />
      </InputWrapper>
      {error && <Text color="error">{error}</Text>}
    </Wrapper>
  );
};

export default TextInput;
