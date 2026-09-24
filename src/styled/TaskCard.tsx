import styled from 'styled-components'

const Card = styled.div`
    background-color: ${({ theme }) => theme.custom.colors.background.paper};
    border-radius: ${({ theme }) => theme.custom.radii.card};
    padding: 12px 14px;
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.custom.colors.border.light};
    box-shadow: ${({ theme }) => theme.custom.shadows.card};
    cursor: grab;

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
