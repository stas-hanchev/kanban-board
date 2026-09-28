import styled from 'styled-components';

const List = styled.div<{ $isDraggingOver?: boolean }>`
    flex: 1;
    overflow-y: auto;
    min-height: 40px;
    border-radius: 8px;
    transition: background-color 0.15s;
    background-color: ${({ $isDraggingOver, theme }) =>
        $isDraggingOver ? theme.custom.colors.background.paper : 'transparent'};
`

export default List;
