import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import { BORDER_INPUT, GRAY2 } from "../Constants";

const SearchSelectWrapper = styled.div`
  position: relative;
`;
const Dropdown = styled.div`
  border-radius: 4px;
  border: ${BORDER_INPUT};
  margin-top: 6px;
  padding: 4px 0;
  position: absolute;
  width: 100%;
`;
const DropdownItem = styled.div`
  &:hover {
    background-color: ${GRAY2};
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
`;
const EmptyItem = styled(DropdownItem)`
  &:hover {
    background-color: initial;
  }
`;

const search = (item, value) => {
  if (!item || !value) return;

  item = item.toLowerCase();
  value = value.toLowerCase();
  if (item === value || item.includes(value)) {
    return true;
  }
};

const SearchSelect = ({
  title,
  list,
  label,
  placeholder,
  error,
  errorMessage,
  type,
  name,
  fixedWidth,
  value,
  onChange,
}) => {
  const [inputFocused, setInputFocused] = React.useState(false);

  return (
    <SearchSelectWrapper>
      <Input
        fixedWidth={fixedWidth}
        value={value}
        onChange={onChange}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        error={error}
        title={title}
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        type={type}
        name={name}
      />
      {inputFocused ||
        (value.length > 0 && (
          <Dropdown>
            {list
              .filter((l) => search(l, value))
              .map((e) => (
                <DropdownItem>{e}</DropdownItem>
              ))}
            {list.filter((l) => search(l, value)).length === 0 && (
              <EmptyItem>Ничего не найдено</EmptyItem>
            )}
          </Dropdown>
        ))}
    </SearchSelectWrapper>
  );
};

export default SearchSelect;
