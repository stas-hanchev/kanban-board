import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Page } from '../styled/index'

const pageStyles = {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    textAlign: 'center',
    padding: 24,
} as const;

const NotFoundPage = () => (
    <Page style={pageStyles}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
            404
        </Typography>
        <Typography color="text.secondary">
            That page does not exist. Please check the URL or return to the
            bulletin board.
        </Typography>
        <Button component={Link} to="/" variant="contained">
            To the board
        </Button>
    </Page>
)

export default NotFoundPage
