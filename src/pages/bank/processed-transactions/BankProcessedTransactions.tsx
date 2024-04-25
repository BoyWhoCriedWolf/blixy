import {
  FactCheckOutlined,
  KeyboardArrowRightOutlined,
  Note,
  Search,
} from "@mui/icons-material";
import { Box, Checkbox, Paper, Typography } from "@mui/material";
import PrimaryTable from "components/table";
import React from "react";

const BankProcessedTransactions = () => {
  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, px: 2 }}>
        <Typography
          fontSize={30}
          fontWeight={600}
          color={(theme) => theme.palette.warning.main}
        >
          Documents to be processed
        </Typography>
        <Search fontSize="large" />
      </Box>
      <PrimaryTable
        columns={[
          { label: "", name: "no" },
          { label: <Checkbox size="small" />, name: "square" },
          { label: "Delivered", name: "delivered" },
          { label: "Employee", name: "employee" },
          { label: "TYPE", name: "type" },
          { label: "Topic", name: "topic" },
          { label: "File Name", name: "file" },
          { label: "KB", name: "kb" },
          { label: "Vendor", name: "vendor" },
          { label: "Status", name: "status" },
          { label: "BLOCKED BY", name: "by" },
          { label: "IDR status", name: "IDR" },
          { label: "Rcg", name: "Rcg" },
          { label: "Information", name: "information" },
        ]}
        data={[
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:20",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:20:26:0.jpg",
            kb: "877,1",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "80%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:19",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:19:25:0.jpg",
            kb: "711,2",
            vendor: "Parking",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "100%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:18",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:18:29:0.jpg",
            kb: "929,4",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "40%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 20:27",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_20:27:26:0.jpg",
            kb: "877,1",
            vendor: "Parking",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "100%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:20",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:20:26:0.jpg",
            kb: "877,1",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "80%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:20",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:20:26:0.jpg",
            kb: "877,1",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "80%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:20",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:20:26:0.jpg",
            kb: "877,1",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "80%",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 21:20",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_21:20:26:0.jpg",
            kb: "877,1",
            vendor: "",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "80%",
          },{
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 20:27",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_20:27:26:0.jpg",
            kb: "877,1",
            vendor: "Parking",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "100%",
          },{
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 20:27",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_20:27:26:0.jpg",
            kb: "877,1",
            vendor: "Parking",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "100%",
          },{
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            square: <Checkbox size="small" />,
            delivered: "21-04-2024 20:27",
            employee: "Frank Beemer",
            type: <Note fontSize="small" />,
            topic: "",
            file: "cam_2024-04-21_20:27:26:0.jpg",
            kb: "877,1",
            vendor: "Parking",
            status: "Open",
            IDR: <FactCheckOutlined fontSize="small" />,
            Rcg: "100%",
          },
        ]}
      />
    </Paper>
  );
};

export default BankProcessedTransactions;
