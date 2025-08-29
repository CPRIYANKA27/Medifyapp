import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

export default function PatientCaring() {
  return (
    <Box
      py={{ xs: 6, md: 10 }}
      sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          {/* Image Column */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <Box
              component="img"
              src={banner}
              alt="Patient Caring"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            />
          </Grid>

          {/* Text Column */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              fontWeight={600}
              color="primary.main"
              textTransform="uppercase"
              mb={2}
              variant="subtitle2"
              letterSpacing={1.2}
            >
              Helping Patients From Around the Globe
            </Typography>

            <Typography
              variant="h3"
              mb={2}
              fontWeight={700}
              color="text.primary"
            >
              Patient{" "}
              <Box component="span" color="primary.main">
                Caring
              </Box>
            </Typography>

            <Typography color="text.secondary" lineHeight={1.8} mb={3}>
              Our goal is to deliver quality care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List disablePadding>
              {[
                "Stay Updated About Your Health",
                "Check Your Results Online",
                "Manage Your Appointments",
              ].map((text, index) => (
                <ListItem key={index} disableGutters sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box component="img" src={tick} height={22} width={22} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: { xs: 14, md: 18 },
                      fontWeight: 500,
                      color: "#1B3C74",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
