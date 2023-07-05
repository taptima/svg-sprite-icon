import styled from '@emotion/styled';

export const Wrapper = styled.span`
    display: inline-block;
    width: 1em;
    vertical-align: top;
    fill: currentColor;
`;

export const Inner = styled.span`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
`;

export const Svg = styled.svg`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;
