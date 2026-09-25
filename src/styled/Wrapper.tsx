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
    min-width: 0;

    /* планшет: три колонки ділять ширину порівну, без горизонтального скролу */
    @media ${({ theme }) => theme.custom.devices.tablet} {
        flex: 1 1 0;
        padding: 10px;
    }

    /* мобільний: колонка майже на всю ширину, край наступної трохи видно */
    @media ${({ theme }) => theme.custom.devices.mobile} {
        flex: 0 0 88%;
        padding: 8px;
        scroll-snap-align: start;
    }
`

export default Wrapper
