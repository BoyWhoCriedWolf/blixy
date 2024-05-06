import DraggableEditList from "components/list/draggable-edit-list/DraggableEditList";
import { FC, PropsWithChildren } from "react";
import { StaticField } from "types/baseTypes";
import { DispatchFunction } from "types";

const EditFormControlDraggableEditList: FC<
	PropsWithChildren<{
		field?: Partial<StaticField>;
		readOnly?: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		value?: Array<any>;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		onChange?: DispatchFunction<Array<any>>;
		onClick?: (value?: Partial<StaticField>) => void;
		onBlur?: () => void;
		isLabel?: boolean;
	}>
> = ({
	field = {} as StaticField,
	readOnly = false,
	value = [],
	onChange = () => null,
	onClick = () => null,
	onBlur = () => null,
	isLabel = true,
}) => {
	return (
		<div className="w-full" onClick={() => onClick(field)} onBlur={onBlur}>
			<DraggableEditList
				label={isLabel ? field.displayName : ""}
				data={value}
				onChange={onChange}
				fields={field.fields ?? []}
				readOnly={readOnly}
			/>
		</div>
	);
};

export default EditFormControlDraggableEditList;
