//import { useNavigate } from "react-router";
//import { Link as RouterLink } from "react-router-dom";
import { Grid2 as Grid, Typography, Paper, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Define a type for status
type ShiftStatus = "open" | "closed" | "owned";

// ShiftTreeCard component
interface ShiftTreeCardProps {
  name: string;
  status: ShiftStatus;
  dates: string;
  description: string;
}

export default function ShiftTreeCard({
  name,
  status,
  dates,
  description,
}: ShiftTreeCardProps) {
  const theme = useTheme(); // Access the theme

  // Use the theme to determine the background color based on status
  const getBackgroundColor = (status: ShiftStatus): string => {
    switch (status) {
      case "open":
        return theme.palette.primary.light; // Default background color from the theme
      case "closed":
        return theme.palette.error.light; // Example: use the error color for closed
      case "owned":
        return theme.palette.secondary.light; // Example: use the info color for owned
      default:
        return theme.palette.background.paper; // Default background color from the theme
    }
  };
  return (
    <Paper
      sx={{
        minHeight: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 2,
        backgroundColor: getBackgroundColor(status), // Use theme-based color
      }}
    >
      <Grid container direction="column" spacing={1}>
        {/* Schedule Name */}
        <Grid
          size={12}
          sx={{ display: "flex", justifyContent: "center", pt: 1 }}
        >
          <Typography variant="h5">{name}</Typography>
        </Grid>

        {/* Middle Divider */}
        <Divider variant="fullWidth" sx={{ margin: "2px 0" }} />

        {/* Date Range */}
        <Grid size={12} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="body1">
            {dates}
          </Typography>
        </Grid>

        {/* Space for description or statistics */}
        <Grid size={12} sx={{ marginTop: "auto" }}>
          <Typography variant="body2">{description}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
