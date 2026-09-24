import styled from 'styled-components'

const Empty = styled.div`
    border: 2px dashed ${({ theme }) => theme.custom.colors.border.dashed};
    border-radius: ${({ theme }) => theme.custom.radii.card};
    padding: 16px;
    text-align: center;
    color: ${({ theme }) => theme.custom.colors.text.muted};
    font-size: ${({ theme }) => theme.custom.fontSizes.small};

    @media ${({ theme }) => theme.custom.devices.mobile} {
        padding: 12px;
        font-size: 12px;
    }
`

export default Empty
