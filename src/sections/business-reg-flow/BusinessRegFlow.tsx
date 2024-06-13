import { Box } from "@mui/material";
import CollapseArray from "components/containers/collapse-array";
import { EditFormRefType } from "components/edit-form/EditForm";
import { useSnackbar } from "notistack";
import { createRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Administration } from "services/types/administration.types";
import BusinessRegFlowBusinessOperations from "./forms/BusinessRegFlowBusinessOperations";
import BusinessRegFlowCompanyInfo from "./forms/BusinessRegFlowCompanyInfo";
import BusinessRegFlowConfirm from "./forms/BusinessRegFlowConfirm";
import BusinessRegFlowFinancialInfo from "./forms/BusinessRegFlowFinancialInfo";
import BusinessRegFlowFormLayout from "./forms/BusinessRegFlowFormLayout";
import BusinessRegFlowOwnerInfo from "./forms/BusinessRegFlowOwnerInfo";
import BusinessRegFlowReview from "./forms/BusinessRegFlowReview";
import BusinessRegFlowUserAgreement from "./forms/BusinessRegFlowUserAgreement";
import BusinessRegFlowWelcome from "./forms/BusinessRegFlowWelcome";
import PageLoading from "components/loading/page-loading";
import administrationService from "services/administration.service";

const BusinessRegFlow = () => {
  const { step_index = "0" } = useParams();

  const snb = useSnackbar();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Administration>({} as Administration);
  const [isLoading, setIsLoading] = useState(false);

  const refCompanyInfo = createRef<EditFormRefType<Administration>>();
  const refOwnerInfo = createRef<EditFormRefType<Administration>>();
  const refFinancialInfo = createRef<EditFormRefType<Administration>>();
  const refBusinessOperations = createRef<EditFormRefType<Administration>>();

  const FORMS = [
    {
      title: "Welcome",
      content: <BusinessRegFlowWelcome />,
    },
    {
      title: "Company Information",
      content: (
        <BusinessRegFlowCompanyInfo
          ref={refCompanyInfo}
          data={data}
          onChange={setData}
        />
      ),
      ref: refCompanyInfo,
    },
    {
      title: "Owner/Stakeholder Information",
      content: (
        <BusinessRegFlowOwnerInfo
          ref={refOwnerInfo}
          data={data}
          onChange={setData}
        />
      ),
      ref: refOwnerInfo,
    },
    {
      title: "Business Operations",
      content: (
        <BusinessRegFlowBusinessOperations
          ref={refBusinessOperations}
          data={data}
          onChange={setData}
        />
      ),
      ref: refBusinessOperations,
    },
    {
      title: "Financial Information",
      content: (
        <BusinessRegFlowFinancialInfo
          ref={refFinancialInfo}
          data={data}
          onChange={setData}
        />
      ),
      ref: refFinancialInfo,
    },
    // {
    //   title: "Compliance and Legal",
    //   content: <BusinessRegFlowCompliance data={data} onChange={setData} />,
    // },
    {
      title: "User Agreement",
      content: <BusinessRegFlowUserAgreement data={data} onChange={setData} />,
    },
    {
      title: "Review and Submit",
      content: <BusinessRegFlowReview data={data} onChange={setData} />,
    },
    {
      title: "Confirmation and Next steps",
      content: <BusinessRegFlowConfirm />,
    },
  ];

  const handleBefore = () => setCurrentIndex((s = 0) => Math.max(0, s - 1));
  const handleNext = () => {
    if (FORMS?.[currentIndex]?.ref?.current) {
      if (!FORMS?.[currentIndex]?.ref?.current?.prepare()) {
        snb.enqueueSnackbar("Please input all fields correctly", {
          variant: "warning",
        });
        return;
      }
    }

    setCurrentIndex((s = 0) => s + 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const ret = await administrationService.save({ data });
    setIsLoading(false);

    if (ret.success) {
      handleNext();
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  useEffect(() => {
    setCurrentIndex(parseInt(step_index));
  }, [step_index]);

  return (
    <Box>
      <PageLoading open={isLoading} />
      <CollapseArray
        index={currentIndex}
        data={FORMS.map((item, itemIndex) => (
          <BusinessRegFlowFormLayout
            isFirst={currentIndex === 0}
            isLast={currentIndex === FORMS.length - 1}
            onNext={handleNext}
            onBefore={handleBefore}
            title={item.title}
            count={FORMS.length}
            index={itemIndex}
            submitIndex={FORMS.length - 2}
            onSubmit={handleSubmit}
          >
            {item.content}
          </BusinessRegFlowFormLayout>
        ))}
      />
    </Box>
  );
};

export default BusinessRegFlow;
