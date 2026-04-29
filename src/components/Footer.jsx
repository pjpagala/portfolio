import { Box, Typography, Container } from '@mui/material'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'rgba(15,14,23,0.95)',
        borderTop: '1px solid rgba(0,212,255,0.2)',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
            &copy; {currentYear} Paul Johansen Pagala. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
            Built with React • Vite • Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
