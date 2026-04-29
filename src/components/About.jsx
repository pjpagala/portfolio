import { Box, Typography, Container } from '@mui/material'

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        bgcolor: 'rgba(26,25,41,0.5)',
        borderTop: '1px solid rgba(0,212,255,0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
            background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </Typography>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {[
            `I'm a Senior Software Engineer at Globe Telecom with a track record of leading high-impact projects and mentoring engineering teams. With over 3 years of professional experience, I specialize in building scalable backend systems, implementing robust CI/CD pipelines, and designing cloud-native architectures.`,
            `My work spans full-stack development with a strong emphasis on Node.js, TypeScript, React, and AWS/GCP. I'm deeply invested in system design, observability, and leveraging AI technologies for business value.`,
            `At Globe Telecom, I've led architectural decisions for critical workflows, driven API performance improvements of up to 78.61%, and built intelligent systems integrating LLMs through frameworks like Flowise. I'm passionate about continuous learning and collaborating with teams to deliver production-ready solutions.`,
          ].map((para, i) => (
            <Typography
              key={i}
              variant="body1"
              sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}
            >
              {para}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
