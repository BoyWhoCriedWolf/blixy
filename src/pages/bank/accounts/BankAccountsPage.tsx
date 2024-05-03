import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BankAccountsCard from "./BankAccountsCard";
import imgAccount from "assets/img/banks/account.png";
import ModalContainer from "components/containers/modal-container";
import PrimaryTable from "components/table";
import {
  BookOnlineOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

const BankAccountsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {[
        {
          heading: "PAYMENT ACCOUNTS",
          imgPath: imgAccount,
          title: "KNAB ***** **** **** *****",
          caption: "*****************",
          value: "150,56",
          date: "29-04-2024",
        },
        {
          heading: "SAVINGS ACCOUNTS",
          imgPath: imgAccount,
          title: "***** ****** ****** *****",
          caption: "******** ***** ******",
          value: "15684,44",
          date: "28-03-2024",
        },
        { heading: "INTERNAL TRANSFERS ON THE WAY", value: "0,00" },
      ].map((item, itemIndex) => {
        return (
          <Box
            key={itemIndex}
            onClick={() => setIsOpen(true)}
            sx={{ cursor: "pointer" }}
          >
            <BankAccountsCard
              heading={item?.heading ?? ""}
              title={item?.title ?? ""}
              imgPath={item?.imgPath ?? ""}
              caption={item?.caption ?? ""}
              value={item?.value ?? ""}
              date={item?.date ?? ""}
            />
          </Box>
        );
      })}

      <ModalContainer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="lg"
      >
        <Box>
          <Box sx={{ p: 2 }}>
            <Typography fontSize={24} fontWeight={600} color="primary">
              Processed transactions
            </Typography>
          </Box>
          <PrimaryTable
            columns={[
              { headerName: "", field: "no" },
              { headerName: "ALTERED", field: "altered" },
              { headerName: "", field: "new" },
              { headerName: "ADMINISTRATION", field: "administration" },
              { headerName: "TYPE", field: "type" },
              { headerName: "SUBJECT", field: "subject" },
              { headerName: "DATE ENTRY", field: "date" },
              { headerName: "DEBIT", field: "debit" },
            ]}
            data={[
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                no: <KeyboardArrowRightOutlined fontSize="small" />,
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                type: <BookOnlineOutlined fontSize="small" />,
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
            ]}
          />
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default BankAccountsPage;
