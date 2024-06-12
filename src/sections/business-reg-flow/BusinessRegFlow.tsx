import { Box } from "@mui/material";
import CollapseArray from "components/containers/collapse-array";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessRegFlowFormLayout from "./forms/BusinessRegFlowFormLayout";
import BusinessRegFlowWelcome from "./forms/BusinessRegFlowWelcome";
import BusinessRegFlowCompanyInfo from "./forms/BusinessRegFlowCompanyInfo";
import BusinessRegFlowOwnerInfo from "./forms/BusinessRegFlowOwnerInfo";
import BusinessRegFlowBusinessOperations from "./forms/BusinessRegFlowBusinessOperations";
import BusinessRegFlowFinancialInfo from "./forms/BusinessRegFlowFinancialInfo";
import BusinessRegFlowCompliance from "./forms/BusinessRegFlowCompliance";
import BusinessRegFlowUserAgreement from "./forms/BusinessRegFlowUserAgreement";
import BusinessRegFlowReview from "./forms/BusinessRegFlowReview";
import BusinessRegFlowConfirm from "./forms/BusinessRegFlowConfirm";
import { Administration } from "services/types/administration.types";

const BusinessRegFlow = () => {
  const { step_index = "0" } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Administration>({} as Administration);

  const handleBefore = () => setCurrentIndex((s = 0) => Math.max(0, s - 1));
  const handleNext = () => setCurrentIndex((s = 0) => s + 1);

  useEffect(() => {
    setCurrentIndex(parseInt(step_index));
  }, [step_index]);

  const FORMS = [
    {
      title: "Welcome",
      content: <BusinessRegFlowWelcome />,
    },
    {
      title: "Company Information",
      content: <BusinessRegFlowCompanyInfo data={data} onChange={setData} />,
    },
    {
      title: "Owner/Stakeholder Information",
      content: <BusinessRegFlowOwnerInfo />,
    },
    {
      title: "Business Operations",
      content: <BusinessRegFlowBusinessOperations />,
    },
    {
      title: "Financial Information",
      content: <BusinessRegFlowFinancialInfo />,
    },
    {
      title: "Compliance and Legal",
      content: <BusinessRegFlowCompliance />,
    },
    {
      title: "User Agreement",
      content: <BusinessRegFlowUserAgreement />,
    },
    {
      title: "Review and Submit",
      content: <BusinessRegFlowReview />,
    },
    {
      title: "Confirmation and Next steps",
      content: <BusinessRegFlowConfirm />,
    },
  ];

  return (
    <Box>
      <CollapseArray
        index={currentIndex}
        data={FORMS.map((item) => (
          <BusinessRegFlowFormLayout
            isFirst={currentIndex === 0}
            isLast={currentIndex === FORMS.length - 1}
            onNext={handleNext}
            onBefore={handleBefore}
            title={item.title}
          >
            {item.content}
          </BusinessRegFlowFormLayout>
        ))}
      />
    </Box>
  );
};

export default BusinessRegFlow;
