import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material'

const skillCategories = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'TypeScript', 'Java (Spring Boot)', 'Express', 'Fastify', 'Hapi'] },
  { category: 'Databases & Data', skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'SQL', 'NoSQL'] },
  { category: 'Cloud & Infrastructure', skills: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes'] },
  { category: 'DevOps & Observability', skills: ['CloudWatch', 'Prometheus', 'Grafana', 'Loki', 'Tempo', 'Jenkins', 'GitLab CI'] },
  { category: 'AI & Emerging Tech', skills: ['Claude AI', 'OpenAI', 'GitHub Copilot', 'Flowise', 'LLM', 'RAG', 'Agents'] },
]

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(0,153,204,0.05) 100%)',
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
          Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {skillCategories.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.category}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(0,212,255,0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(0,212,255,0.5)',
                    boxShadow: '0 8px 32px rgba(0,212,255,0.1)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                    {cat.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {cat.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(0,212,255,0.12)',
                          color: 'primary.main',
                          border: '1px solid rgba(0,212,255,0.3)',
                          fontWeight: 500,
                          '&:hover': { bgcolor: 'rgba(0,212,255,0.22)' },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
