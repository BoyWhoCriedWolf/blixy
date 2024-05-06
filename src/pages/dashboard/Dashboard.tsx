import {
  Add,
  AlarmOutlined,
  AutoAwesomeOutlined,
  BarChartOutlined,
  BlockOutlined,
  CallMadeOutlined,
  CallReceivedOutlined,
  FileUploadOutlined,
  InfoOutlined,
  KeyboardArrowRightOutlined,
  PaidOutlined,
  PollOutlined,
  ReportProblemOutlined,
  SignalCellular2BarOutlined,
  TextSnippetOutlined,
  TrendingDownOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "components/containers/grid";
import TabsContainer from "components/containers/tabs-container";
import InsightCard from "components/insight-card";
import PrimaryTable from "components/table";
import TaskCard from "components/task-card";
import UploadFileWidget from "components/upload-file-widget";
import { ColorVariant } from "types/ui-types";

const Dashboard = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={1} alignItems={"stretch"}>
        <Grid lg={5} md={5} sm={12} xs={12}>
          <Paper sx={{ p: 2, borderRadius: 1 }}>
            <Box sx={{ display: "flex" }}>
              <Typography fontSize={20} fontWeight={600} marginRight={1}>
                Your Tasks
              </Typography>
              <Box
                sx={{
                  py: 0.5,
                  px: 1,
                  backgroundColor: (theme) => theme.palette.primary.main,
                  color: (theme) => theme.palette.primary.contrastText,
                  mr: 1,
                  borderRadius: 2,
                }}
              >
                12
              </Box>
              <InfoOutlined fontSize="small" sx={{ mt: 1 }} />
            </Box>
            <Box>
              {[
                {
                  labelIcon: <FileUploadOutlined />,
                  label: "Upload November Statement",
                  labelColor: "error",
                  captionIcon: <PaidOutlined sx={{ fontSize: 12 }} />,
                  caption: "Accounting",
                  captionColor: "info",
                  date: "24/11/2023",
                },
                {
                  labelIcon: <AlarmOutlined />,
                  label: "You have 54K tax payment due before 07/12/2023",
                  labelColor: "error",
                  captionIcon: <BarChartOutlined sx={{ fontSize: 12 }} />,
                  caption: "TDS",
                  captionColor: "info",
                  date: "24/11/2023",
                },
                {
                  labelIcon: <SignalCellular2BarOutlined />,
                  label: "View P&L and Bookkeeping",
                  labelColor: "error",
                  captionIcon: <PaidOutlined sx={{ fontSize: 12 }} />,
                  caption: "Accounting",
                  captionColor: "info",
                  date: "24/11/2023",
                },
              ].map((item, itemIndex) => {
                return (
                  <TaskCard
                    key={itemIndex}
                    caption={item?.caption ?? ""}
                    captionIcon={item?.captionIcon ?? ""}
                    label={item?.label ?? ""}
                    labelIcon={item?.labelIcon ?? ""}
                    date={item?.date ?? ""}
                    labelColor={item?.labelColor as ColorVariant}
                    captionColor={item?.captionColor as ColorVariant}
                  />
                );
              })}
            </Box>
          </Paper>
        </Grid>
        <Grid lg={5} md={5} sm={12} xs={12}>
          <Paper sx={{ p: 2, borderRadius: 1 }}>
            <Box sx={{ display: "flex", my: 1 }}>
              <Typography fontSize={20} fontWeight={600} marginRight={2}>
                Smart Insights
              </Typography>
              <InfoOutlined fontSize="small" sx={{ mt: 0.5 }} />
            </Box>
            <Box>
              {[
                {
                  icon: <CallMadeOutlined />,
                  label: "Profit is up 23% up this week",
                  caption: "P&L",
                },
                {
                  icon: <TrendingDownOutlined />,
                  label:
                    "Liabilities have reduced by €5,23,123 (23%) over past month",
                  caption: "Expense",
                },
                {
                  icon: <ReportProblemOutlined />,
                  label:
                    "VAT AMOUNT Compliance related, user need to do something to be in compliance",
                  caption: "VAT AMOUNT",
                },
                {
                  icon: <CallReceivedOutlined />,
                  label:
                    "Marketing costs in Nov 23 are 31% higher than Oct 23. Review Now!",
                  caption: "Expense",
                },
              ].map((item, itemIndex) => {
                return (
                  <InsightCard
                    key={itemIndex}
                    icon={item?.icon ?? ""}
                    label={item?.label ?? ""}
                    caption={item?.caption ?? ""}
                  />
                );
              })}
            </Box>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<KeyboardArrowRightOutlined />}
            >
              Show All
            </Button>
          </Paper>
        </Grid>
        <Grid lg={2} md={2} sm={12} xs={12}>
          <Grid container>
            <Grid lg={12} md={12} sm={6} xs={6}>
              <Paper sx={{ p: 2, mb: 1 }}>
                <UploadFileWidget />
              </Paper>
            </Grid>
            <Grid lg={12} md={12} sm={6} xs={6}>
              <Paper sx={{ p: 2 }}>
                <Box sx={{ display: "flex", my: 1 }}>
                  <Typography fontSize={20} fontWeight={600} marginRight={2}>
                    Quick Reports
                  </Typography>
                  <InfoOutlined fontSize="small" sx={{ mt: 0.5 }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                >
                  <IconButton>
                    <PollOutlined />
                  </IconButton>
                  <IconButton>
                    <TextSnippetOutlined />
                  </IconButton>
                  <IconButton>
                    <BlockOutlined />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  startIcon={<AutoAwesomeOutlined />}
                  fullWidth
                >
                  Ask AI
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box>
              <TabsContainer
                data={[
                  {
                    label: (
                      <Box>
                        <Typography fontSize={12}>Revenue</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography fontSize={30} fontWeight={600}>
                            €53,563
                          </Typography>
                          <Chip
                            size="small"
                            icon={<TrendingUpOutlined />}
                            label="7.4%"
                            color="success"
                          />
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    label: (
                      <Box>
                        <Typography fontSize={12}>Direct Expense</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography fontSize={30} fontWeight={600}>
                            €34,595
                          </Typography>
                          <Chip
                            size="small"
                            icon={<TrendingUpOutlined />}
                            label="7.2%"
                            color="success"
                          />
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    label: (
                      <Box>
                        <Typography fontSize={12}>Indirect Expenses</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography fontSize={30} fontWeight={600}>
                            €12,873
                          </Typography>
                          <Chip
                            size="small"
                            icon={<TrendingDownOutlined />}
                            label="0.2%"
                            color="error"
                          />
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    label: (
                      <Box>
                        <Typography fontSize={12}>VAT AMOUNT Paid</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography fontSize={30} fontWeight={600}>
                            €12,873
                          </Typography>
                          <Chip
                            size="small"
                            icon={<TrendingDownOutlined />}
                            label="0.7%"
                            color="error"
                          />
                        </Box>
                      </Box>
                    ),
                  },
                  {
                    label: (
                      <Box>
                        <Typography fontSize={12}>VAT AMOUNT Paid</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography fontSize={30} fontWeight={600}>
                            €1,32,093
                          </Typography>
                          <Chip
                            size="small"
                            icon={<TrendingUpOutlined />}
                            label="10.8%"
                            color="success"
                          />
                        </Box>
                      </Box>
                    ),
                  },
                ]}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex" }}>
                <Button variant="outlined">12 months</Button>
                <Button variant="outlined">30 days</Button>
                <Button variant="outlined">7 days</Button>
                <Button variant="outlined">24h</Button>
                <Button variant="outlined" startIcon={<Add />}>
                  Custom
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AutoAwesomeOutlined />}
                >
                  Access Smart Insights
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", my: 1 }}>
              <Typography fontSize={20} fontWeight={600} marginRight={2}>
                System Feed
              </Typography>
              <InfoOutlined fontSize="small" sx={{ mt: 0.5 }} />
            </Box>
            <PrimaryTable
              columns={[
                { headerName: "TIMESTAMP", field: "timestamp", flex: 1 },
                { headerName: "SUMMARY", field: "summary", flex: 1 },
                {
                  headerName: "GENERAL LEDGER ACCOUNT",
                  field: "account",
                  flex: 1,
                  renderCell: () => {
                    return (
                      <Chip
                        size="small"
                        icon={<PaidOutlined />}
                        label="Accounting"
                        color="info"
                      />
                    );
                  },
                },
                {
                  headerName: "BY",
                  field: "by",
                  flex: 1,
                  renderCell: () => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Button variant="contained" color="primary">
                          Auto
                        </Button>
                        <KeyboardArrowRightOutlined sx={{ ml: 8 }} />
                      </Box>
                    );
                  },
                },
              ]}
              data={[
                {
                  timestamp: "24/11/2023",
                  summary: "Bank stream sync received 10 new transactions",
                },
                {
                  timestamp: "24/11/2023",
                  summary: "3 Items manually reconciled",
                },
                {
                  timestamp: "24/11/2023",
                  summary: "TDS filed for Nov 2023",
                },
              ]}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
