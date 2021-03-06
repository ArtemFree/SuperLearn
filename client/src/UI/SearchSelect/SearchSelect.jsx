import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../Input/Input";
import { BORDER_INPUT, GRAY2 } from "../Constants";

const SearchSelectWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Dropdown = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  z-index: 1000;
  margin-top: 6px;
  padding: 4px 0;
  position: absolute;
  max-height: 240px;
  width: 100%;
  overflow-y: auto;
  /* border: ${BORDER_INPUT}; */
  box-shadow: 0 10px 20px -5px rgb(0 0 0 / 40%), 0 0 2px rgb(0 0 0 / 30%);
`;
const DropdownItem = styled.div`
  font-size: 15px;
  padding: 10px 16px;
  cursor: pointer;
  &:hover {
    background-color: ${GRAY2};
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 16px;
  }
`;
const EmptyItem = styled(DropdownItem)`
  &:hover {
    background-color: initial;
  }
`;

const search = (item, value) => {
  if (!item || !value || value.length === 0) return;

  console.log(item, value);

  item = item?.toLowerCase();
  value = value?.toLowerCase();
  if (item === value || item?.includes(value)) {
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
  margin,
}) => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const root = useRef(null);

  useEffect(() => {
    const documentClick = (e) => {
      if (!root.current.contains(e.target)) {
        setShowSuggestion(false);
      }
    };
    document.addEventListener("click", documentClick);
    return () => {
      document.removeEventListener("click", documentClick);
    };
  }, []);

  return (
    <SearchSelectWrapper ref={root}>
      <Input
        fixedWidth={fixedWidth}
        value={value}
        margin={margin}
        onChange={onChange}
        onFocus={() => setShowSuggestion(true)}
        error={error}
        title={title}
        label={label}
        placeholder={placeholder}
        errorMessage={errorMessage}
        type={type}
        name={name}
      />
      {showSuggestion && (
        <Dropdown>
          {value?.length === 0 &&
            list?.map((e, i) => (
              <DropdownItem
                key={e + i}
                onClick={() => {
                  setShowSuggestion(false);
                  onChange(e);
                }}
              >
                {e}
              </DropdownItem>
            ))}
          {value?.length !== 0 &&
            list
              ?.filter((l) => search(l, value))
              ?.map((e, i) => (
                <DropdownItem
                  onClick={() => {
                    onChange(e);
                    setShowSuggestion(false);
                  }}
                  key={e + i}
                >
                  {e}
                </DropdownItem>
              ))}
          {value?.length !== 0 &&
            list?.filter((l) => search(l, value))?.length === 0 && (
              <EmptyItem>???????????? ???? ??????????????</EmptyItem>
            )}
        </Dropdown>
      )}
    </SearchSelectWrapper>
  );
};

export default SearchSelect;
