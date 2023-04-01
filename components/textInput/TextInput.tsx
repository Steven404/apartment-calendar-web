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
  hasError: boolean;
  icon?: IconType;
  label?: string;
};

export const TextInput = ({
  alignItems = 'flex-start',
  hasError,
  icon,
  label,
  ...restProps
}: InputProps) => {
  return (
    <Wrapper alignItems={alignItems} hasError={hasError}>
      {label && (
        <Text align="left" weight={600} color="darkBlue">
          {label}
        </Text>
      )}
      <InputWrapper hasError={hasError}>
        {icon && (
          <>
            <IconStyled
              color={hasError ? 'error' : 'darkBlue'}
              size="lg"
              icon={icon}
            />
            <HorizontalLine hasError={hasError} />
          </>
        )}
        <TextInputStyled {...restProps} />
      </InputWrapper>
    </Wrapper>
  );
};

export default TextInput;
