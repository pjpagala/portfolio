import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(15, 14, 23, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
      }}
    >
      <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PJ
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {['about', 'skills', 'experience', 'contact'].map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section)}
              sx={{
                color: 'text.primary',
                textTransform: 'capitalize',
                fontWeight: 500,
                '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
