import { Paper } from "@mui/material";
import GeneralLedgerAccountsList from "sections/general-ledger-accounts/list";

const BackofficeAccountsChartPage = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const uploadARow = async (index = 0) => {
  //   if (index < GENERAL_LEDGER_ACCOUNTS_DATA.length) {
  //     const elm = GENERAL_LEDGER_ACCOUNTS_DATA[index];

  //     const ret = await generalLedgerAccountService.save({ data: elm });
  //     if (!ret.success) {
  //       console.log(elm);
  //     }

  //     uploadARow(index + 1);
  //   }
  // };
  // const handleUpload = async () => {
  //   setIsLoading(true);
  //   uploadARow();
  // };

  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <GeneralLedgerAccountsList />
      {/* <Button onClick={handleUpload} disabled={isLoading}>
        Do not click
      </Button> */}
      {/* <PageLoading open={isLoading} /> */}
    </Paper>
  );
};

export default BackofficeAccountsChartPage;
