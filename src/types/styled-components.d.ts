import 'styled-components'

import { colors, breakpoints, devices } from '../libs/theme'

declare module 'styled-components' {
    export interface DefaultTheme {
        custom: {
            colors: typeof colors;
            breakpoints: typeof breakpoints;
            devices: typeof devices;
            shadows: {
                card: string
                dragging: string
            }
            radii: {
                card: string
                wrapper: string
            }
            fontSizes: {
                small: string
            }
        }
    }
}
