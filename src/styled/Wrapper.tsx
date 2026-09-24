import styled from 'styled-components'

const Wrapper = styled.div<{ $color: string }>`
    flex: 0 0 300px;
    background: ${({ theme }) => theme.custom.colors.background.wrapper};
    border-radius: ${({ theme }) => theme.custom.radii.wrapper};
    border-top: 4px solid ${({ $color }) => $color};
    padding: 12px;
    display: flex;
    flex-direction: column;
    max-height: 100%;

    @media ${({ theme }) => theme.custom.devices.mobile} {
        flex: 0 0 100%;
        padding: 8px;
    }
`

export default Wrapper
