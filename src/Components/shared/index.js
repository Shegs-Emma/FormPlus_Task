import { TextField } from "./shared.styles";

const RenderTextField = ({
  placeholder,
  name,
  type,
  min,
  value,
  valueSetter,
  search,
}) => (
  <TextField
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    min={min}
    onChange={(event) => {
      valueSetter(event.target.value);
    }}
    autoComplete="off"
    search={search}
  />
);

export { RenderTextField };
