import styled from 'styled-components'

const Card = styled.div<{ $isDragging?: boolean }>`
    background-color: ${({ theme }) => theme.custom.colors.background.paper};
    border-radius: ${({ theme }) => theme.custom.radii.card};
    padding: 12px 14px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.custom.colors.border.light};
    box-shadow: ${({ theme, $isDragging }) =>
        $isDragging ? theme.custom.shadows.dragging : theme.custom.shadows.card};
    cursor: grab;

    ${({ $isDragging, theme }) =>
        $isDragging &&
        `
        border-color: ${theme.custom.colors.border.hover};
    `}

    &:hover,
    &:focus {
        border-color: ${({ theme }) => theme.custom.colors.border.hover};
    }

    @media ${({ theme }) => theme.custom.devices.mobile} {
        padding: 10px;
        margin-bottom: 8px;
    }
`

export default Card
