// import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Select, { PropsValue, MultiValue, ActionMeta } from "react-select";
// import { ArrowDownIcon } from "../common/icons";

export type Option = { label: string; value: any };

// const MultiSelectWrapper = styled('div')`
//   .sigma__control{
//     background-color: transparent;
//     border: 0.08em solid hsl(210 14% 72%);
//     border-radius: var(--el-border-radius);
//     // line-height: 1.5;
//   }
//   .sigma__menu{
//     background-color: var(--clr-card-bg-lighter);
//   }
//   .sigma__option--is-focused{
//     background-color: var(--clr-primary);
//     color:#fff;
//   }
//   .sigma__multi-value__remove{
//     color: #000;
//     &:hover{
//       color: var(--clr-error)
//     }
//   }
//   .sigma__multi-value{
//     background-color: hsl(0, 0%, 98%);
//     border-radius: 0.25em;
//   }
//   .sigma__value-container{
//     padding: 2px 8px 2px 2px;
//   }
//   .sigma__placeholder{
//     margin-left: 0.5em;
//   }
// `

interface MultiSelectProps {
  label?: string | React.ReactNode;
  className?: string;
  options: Option[];
  onChange:
    | ((newValue: MultiValue<Option>, actionMeta: ActionMeta<Option>) => void)
    | undefined;
  value?: PropsValue<Option> | any[] | undefined;
  parentStyle?: React.CSSProperties;
  placeholder?: string;
  name?: string;
  variant?: "underline" | "outlined" | "filled";
  defaultValue?: Option[];
  ["data-testid"]?: string;
}
export default function MultiSelectProps({
  value,
  options,
  name,
  placeholder,
  onChange,
  label,
  className = "",
  parentStyle = {},
  defaultValue,
  variant = "outlined",
  ...props
}: MultiSelectProps) {
  const { t } = useTranslation();
  return (
    <div
      className={`xr-select-wrapper multiSelect ${variant} flex column ${className}`}
      style={parentStyle}
    >
      {label && <label className="mb2 input-label">{label}</label>}
      <div data-testid={props["data-testid"]}>
        <Select
          name={name}
          isMulti
          noOptionsMessage={() => t("no_option")}
          defaultValue={defaultValue}
          // components={{
          //   DropdownIndicator: () => <div className="ml3 flex alignCenter"><ArrowDownIcon/></div>,
          //   IndicatorSeparator: () => null,
          //   ClearIndicator: () => null,
          // }}
          options={options}
          classNamePrefix={`xr`}
          onChange={onChange}
          placeholder={placeholder || t("select_option")}
          value={value}
          closeMenuOnSelect={false}
          // menuIsOpen
        />
      </div>
    </div>
  );
}
