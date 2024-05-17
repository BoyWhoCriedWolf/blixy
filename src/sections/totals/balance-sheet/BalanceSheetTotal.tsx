import CollapseBox from "components/containers/collapse-box";
import React from "react";
import { currencyFormatter } from "utils/number-utils";

const BalanceSheetTotal = () => {
  return (
    <div>
      <CollapseBox title="Assets" secondaryTitle={currencyFormatter("")}>
        <CollapseBox
          title="Current assets"
          secondaryTitle={currencyFormatter("")}
        ></CollapseBox>
        <CollapseBox
          title="Fixed assets"
          secondaryTitle={currencyFormatter("")}
        ></CollapseBox>
      </CollapseBox>
      <CollapseBox title="Liabilities" secondaryTitle={currencyFormatter("")}>
        <CollapseBox
          title="Equity"
          secondaryTitle={currencyFormatter("")}
        ></CollapseBox>
        <CollapseBox
          title="Long-term debt"
          secondaryTitle={currencyFormatter("")}
        ></CollapseBox>
        <CollapseBox
          title="Short-term debt"
          secondaryTitle={currencyFormatter("")}
        ></CollapseBox>
      </CollapseBox>
    </div>
  );
};

export default BalanceSheetTotal;
