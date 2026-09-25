import styled from 'styled-components';

const ButtonLabel = styled.span`
    margin-left: 4px;

    @media ${({ theme }) => theme.custom.devices.mobile} {
        display: none;
    }
`;

export default ButtonLabel;
