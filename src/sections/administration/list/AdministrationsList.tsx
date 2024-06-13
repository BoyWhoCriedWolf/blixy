import { Close, Done } from "@mui/icons-material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ModalContainer from "components/containers/modal-container";
import TableManagement from "components/table-management";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessRegFlow from "sections/business-reg-flow";
import administrationService from "services/administration.service";
import {
  Administration,
  BUSINESS_FORMS,
} from "services/types/administration.types";
import { FieldType, GeneralOption } from "types/ui-types";
import { ymd2dmy } from "utils/datetime-utils";

const AdministrationsList: FC<PropsWithChildren<{ user_id?: string }>> = () => {
  const navigate = useNavigate();
  const snb = useSnackbar();

  const [isOpen, setIsOpen] = useState(false);

  const handleClickRow = (v: Administration) => {
    if (v.id) {
      navigate(`/home`);
    } else {
      snb.enqueueSnackbar("Please select the valid administration.", {
        variant: "warning",
      });
    }
  };

  const handleAdd = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ModalContainer
        title="Administration"
        maxWidth="md"
        isOpen={isOpen}
        onClose={handleClose}
      >
        <BusinessRegFlow onClose={handleClose} />
      </ModalContainer>

      <TableManagement<Administration>
        apiService={administrationService}
        pageTitle="Administrations"
        title="Administration"
        columns={[
          { headerName: "Administration", field: "name" },
          {
            headerName: "Start contract",
            field: "contract_date",
            renderCell: (p: GridRenderCellParams<Administration>) =>
              ymd2dmy(p?.row?.contract_date),
          },
          { headerName: "Contact person", field: "contract_person_name" },
          { headerName: "Business Form", field: "business_form" },
          { headerName: "Domain", field: "domain" },
          {
            headerName: "Peppol",
            field: "peppol",
            renderCell: (p: GridRenderCellParams<Administration>) =>
              p?.row?.peppol ? <Done /> : <Close />,
          },
        ]}
        fields={[
          { displayName: "Administration", name: "name" },
          {
            displayName: "Start contract",
            name: "contract_date",
            type: FieldType.DateOnly,
          },
          { displayName: "Contact person", name: "contract_person_name" },
          {
            displayName: "Business Form",
            name: "business_form",
            type: FieldType.Choice,
            options: BUSINESS_FORMS,
            getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
            getOptionValue: (option?: GeneralOption) => option?.value ?? "",
          },
          { displayName: "Domain", name: "domain" },
          {
            displayName: "Peppol",
            name: "peppol",
            type: FieldType.Checkbox,
          },
        ]}
        onClickRow={handleClickRow}
        onAdd={handleAdd}
        hideFooterPagination
      />
    </div>
  );
};

export default AdministrationsList;
