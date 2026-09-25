import styled from 'styled-components';

const Board = styled.main`
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 16px;
    align-items: flex-start;
    overflow-x: auto;
    min-height: 0;

    @media ${({ theme }) => theme.custom.devices.tablet} {
        padding: 16px;
        gap: 12px;
    }

    @media ${({ theme }) => theme.custom.devices.mobile} {
        padding: 12px;
        gap: 10px;
        scroll-snap-type: x mandatory;
        scroll-padding: 0 12px;
        -webkit-overflow-scrolling: touch;
    }
`;

export default Board;
