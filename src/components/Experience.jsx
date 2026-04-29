import { Box, Typography, Container, Paper, Chip } from '@mui/material'

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Globe Telecom, Inc.',
    period: 'May 2025 - Present',
    highlights: [
      'Led a team of developers in replacing UiPath RPA with GitLab CI pipeline orchestrator',
      'Drove Fastify adoption and improved core service design patterns',
      'Implemented GitLab CI/CD pipelines with automated integration tests',
      'Integrated observability SDK for logs, traces, and metrics',
      'Built AI chatbot with Flowise implementing RAG-style query workflows',
      'Delivered Globe One "Goken Zone" with 3 new & 4 enhanced APIs',
      'Mentored team members and cadets on API development and testing',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Globe Telecom, Inc.',
    period: 'January 2023 - May 2025',
    highlights: [
      'Led API development across internal systems, delivering 14 production APIs',
      'Improved API response times by 78.61% and reduced operational costs',
      'Fixed critical messaging service bugs and optimized inbox caching',
      'Implemented pre-validation for SIM registration security',
      'Built 3 core APIs for GFiber Prepaid digital experience',
      'Established AWS foundations including guardrails and sandbox environments',
      'Mentored teammates through brownbag sessions and code reviews',
    ],
  },
  {
    role: 'Technical Cadet',
    company: 'Globe Telecom, Inc.',
    period: 'June 2022 - December 2022',
    highlights: [
      'Led Globe Internal Tool Development team on parking service web app revamp',
      'Enabled seamless booking and payments through Google SSO and GCash integration',
      'Delivered end-to-end solutions with focus on user experience',
    ],
  },
]

export default function Experience() {
  return (
    <Box
      component="section"
      id="experience"
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
            mb: 5,
            background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Professional Experience
        </Typography>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {experiences.map((exp, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                bgcolor: 'background.paper',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                p: { xs: 2.5, md: 3.5 },
                mb: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0,212,255,0.15)',
                  transform: 'translateX(8px)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1,
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    {exp.company}
                  </Typography>
                </Box>
                <Chip
                  label={exp.period}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(0,212,255,0.1)',
                    color: 'text.secondary',
                    border: '1px solid rgba(0,212,255,0.2)',
                    flexShrink: 0,
                  }}
                />
              </Box>
              <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                {exp.highlights.map((item, i) => (
                  <Box component="li" key={i} sx={{ display: 'flex', gap: 1.5, mb: 1 }}>
                    <Typography component="span" sx={{ color: 'primary.main', flexShrink: 0, mt: 0.1 }}>&#9657;</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
