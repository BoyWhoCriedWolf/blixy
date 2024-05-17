import PageHeading from "components/typography/page-heading";
import BalanceSheetTotal from "sections/totals/balance-sheet";

const AccountingBalanceSheetPage = () => {
  return (
    <div>
      <PageHeading>Trial Balance Sheet</PageHeading>
      <BalanceSheetTotal />
    </div>
  );
};

export default AccountingBalanceSheetPage;
