import {
  AccountBalanceOutlined,
  BusinessOutlined,
  HandshakeOutlined,
  HelpOutline,
  Person,
  PowerOutlined,
  SettingsOutlined,
  WaterfallChartOutlined,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import DocumentCard from "components/document-card";
import SearchBar from "components/search-bar";
import { useNavigate } from "react-router-dom";

const BackofficeDocuments = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/archive/document/${"test"}`);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 8 }}>
          <Box sx={{ display: "flex" }}>
            <Typography> BAMR B.V. /&nbsp; </Typography>
            <Typography color="primary">Institutions</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <HelpOutline fontSize="small" />
            <Typography>HELP</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", px: 20, mb: 10 }}>
          <SearchBar iconPosition="right" />
        </Box>
        <Box>
          <Grid container spacing={1}>
            {[
              {
                label: "Domain",
                icon: <BusinessOutlined fontSize="small" />,
                data: [
                  "Mine Domain",
                  "Rights matrix",
                  "Block and shut down",
                  "Tags",
                  "To report",
                  "tax authorities",
                  "My subscription",
                ],
              },
              {
                label: "User",
                icon: <Person fontSize="small" />,
                data: [
                  "Personal preferences",
                  "E-main accounts",
                  "Display settings",
                ],
              },
              {
                label: "Financial",
                icon: <WaterfallChartOutlined fontSize="small" />,
                data: [
                  "Monitor",
                  "To land",
                  "Currency's",
                  "General ledger accounts",
                  "VAT rates",
                  "Financial newspaper",
                  "Payment methods",
                  "General",
                ],
              },
              {
                label: "Sell",
                icon: <HandshakeOutlined fontSize="small" />,
                data: ["sales institutions", "Settings reminder"],
              },
              {
                label: "Integrations",
                icon: <PowerOutlined fontSize="small" />,
                data: [
                  "Mollie",
                  "Web services",
                  "Commands",
                  "The bank coupling",
                  "Salary link Nmbrs",
                ],
              },
              {
                label: "Banks",
                icon: <AccountBalanceOutlined fontSize="small" />,
                data: ["Point PSD2 links"],
              },
              {
                label: "Other",
                icon: <SettingsOutlined fontSize="small" />,
                data: ["Agenda", "Archive settings", "Spam settings"],
              },
            ].map((item, itemIndex) => {
              return (
                <Grid key={itemIndex} item lg={3} md={3} sm={6} xs={6}>
                  <DocumentCard
                    label={item?.label ?? ""}
                    icon={item?.icon ?? ""}
                    data={item?.data ?? ""}
                    onClick={() => handleClick()}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BackofficeDocuments;
