import { Box, Typography, Button, Stack, Divider } from '@mui/material'

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 8,
        background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,153,204,0.04) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          top: -100,
          right: -100,
          animation: 'float 6s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          animation: 'slideUp 0.8s ease-out',
          '@keyframes slideUp': {
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00d4ff 0%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
            lineHeight: 1.1,
          }}
        >
          Paul Johansen Pagala
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: 300, mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Senior Software Engineer
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}
        >
          Crafting scalable systems, mentoring teams, and driving innovation at Globe Telecom.
          Full-stack engineer passionate about clean code, cloud architecture, and AI integration.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center', mb: 5 }}>
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            sx={{ boxShadow: '0 4px 20px rgba(0,212,255,0.3)', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 28px rgba(0,212,255,0.4)' }, transition: 'all 0.3s' }}
          >
            Get In Touch
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="mailto:pauljpagala@gmail.com"
            sx={{ '&:hover': { transform: 'translateY(-2px)', bgcolor: 'rgba(0,212,255,0.08)' }, transition: 'all 0.3s' }}
          >
            Email Me
          </Button>
        </Box>
        <Divider sx={{ borderColor: 'rgba(0,212,255,0.2)', mb: 3 }} />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
          {[
            { icon: '📍', text: 'Tuktukan, Taguig City' },
            { icon: '📞', text: '+639053036103' },
            { icon: '💌', text: 'pauljpagala@gmail.com' },
          ].map(({ icon, text }) => (
            <Typography key={text} variant="body2" sx={{ color: 'text.secondary' }}>
              <strong>{icon}</strong> {text}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
