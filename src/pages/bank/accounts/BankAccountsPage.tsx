import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BankAccountsCard from "./BankAccountsCard";
import imgAccount from "assets/img/banks/account.png";
import ModalContainer from "components/containers/modal-container";
import PrimaryTable from "components/table";
import { BookOnlineOutlined } from "@mui/icons-material";

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
              { headerName: "ALTERED", field: "altered", flex: 1 },
              { headerName: "", field: "new", flex: 1 },
              {
                headerName: "ADMINISTRATION",
                field: "administration",
                flex: 1,
              },
              {
                headerName: "TYPE",
                field: "type",
                flex: 1,
                align: "center",
                renderCell: () => {
                  return <BookOnlineOutlined fontSize="small" />;
                },
              },
              { headerName: "SUBJECT", field: "subject", flex: 1 },
              { headerName: "DATE ENTRY", field: "date", flex: 1 },
              { headerName: "DEBIT", field: "debit", flex: 1 },
            ]}
            data={[
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
              {
                altered: "03-04-2024 09:55",
                new: "New",
                administration: "JV Services & Consulting B.V.",
                subject: "FTB2XL9MFBMFQ6321D",
                date: "02-04-2024",
                debit: "1.028,50",
              },
            ]}
            checkboxSelection={true}
          />
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default BankAccountsPage;
