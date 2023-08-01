import { Button, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

export function BaseButton(props) {
  const { variant, isLoading, icon, w, h, sm, lg, md, bgColor, bgHover, borderRadius, ...rest } =
    props;

  return (
    <BaseButtonRoot
      {...rest}
      style={{ borderRadius, width: w ? w : '100%', ...(h ? { height: h } : {}) }}
      className={`${variant ? variant : 'primary'} `}
      background={bgColor || 'var(--white)'}
      fontSize={'15px'}>
      {(isLoading || icon) && (
        <div className={('icon', { loading: isLoading })}>{isLoading && <Spinner />}</div>
      )}
      {props.children}
    </BaseButtonRoot>
  );
}

const BaseButtonRoot = styled(Button)`
  display: grid;
  grid: 1fr / auto-flow max-content;
  height: 5.2rem;
  color: var(--white);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 6px;
  transition: all 0.5s ease-out;

  ${({ bgColor, bgHover }) =>
    `
  &.primary {
    background: ${bgColor ? bgColor : 'var(--green-600)'};
    color: var(--white);
    box-shadow: 0px 5px 20px rgba(129, 245, 75, 0.15);
    border: 1px solid transparent;
  }
    &.outline {
    border: ${bgColor ? `1px solid ${bgColor}` : '1px solid var(--green-600)'} ;
    color: ${bgColor ? bgColor : 'var(--black)'};
    }
  
    &:hover {
      border: ${bgHover ? `1px solid ${bgHover}` : '1px solid var(--primary)'} ;
      background: ${bgHover ? bgHover : 'var(--primary)'} ;
      color: var(--white);
    }

    &:active {
      border: ${bgHover ? `1px solid ${bgHover}` : '1px solid var(--primary)'} ;
      background: ${bgHover ? bgHover : 'var(--primary)'};
      color: var(--white);
    }
  `}

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .icon.loading {
    animation: spin 500ms linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
