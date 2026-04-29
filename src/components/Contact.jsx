import { Box, Typography, Container, Card, CardActionArea, CardContent, Grid } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const contacts = [
  { icon: <EmailIcon sx={{ fontSize: 40 }} />, label: 'Email', value: 'pauljpagala@gmail.com', href: 'mailto:pauljpagala@gmail.com' },
  { icon: <PhoneIcon sx={{ fontSize: 40 }} />, label: 'Phone', value: '+639053036103', href: 'tel:+639053036103' },
  { icon: <LocationOnIcon sx={{ fontSize: 40 }} />, label: 'Location', value: 'Tuktukan, Taguig City', href: null },
]

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,153,204,0.04) 100%)',
        borderTop: '1px solid rgba(0,212,255,0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'text.secondary', mb: 5, maxWidth: 600, mx: 'auto' }}
        >
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out through any of the channels below.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: 900 }}>
          {contacts.map(({ icon, label, value, href }) => (
            <Grid item xs={12} sm={4} key={label}>
              <Card
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(0,212,255,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(0,212,255,0.6)',
                    boxShadow: '0 12px 40px rgba(0,212,255,0.2)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                {href ? (
                  <CardActionArea component="a" href={href} sx={{ textDecoration: 'none' }}>
                    <CardContent sx={{ textAlign: 'center', py: 4 }}>
                      <Box sx={{ color: 'primary.main', mb: 1.5 }}>{icon}</Box>
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>{label}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{value}</Typography>
                    </CardContent>
                  </CardActionArea>
                ) : (
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Box sx={{ color: 'primary.main', mb: 1.5 }}>{icon}</Box>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>{label}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{value}</Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
        </Box>
      </Container>
    </Box>
  )
}
