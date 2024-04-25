import React from "react";

function EditForm<T = any>({
  data = {} as T,
  onChange = () => null,
  layout = [],
  separateLabel = false,
}: {
  data?: T;
  onChange?: (value?: T) => void;
  layout?: Array<{ label?: string; name?: string; type?: string }>;
  separateLabel?: boolean;
}) {
  return <div>EditForm</div>;
}

export default EditForm;
