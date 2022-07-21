import React from "react";
import styled from "@emotion/styled";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";

export default function RoleSelectBox({
  label,
  value,
  setValue,
}) {

  const HandleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <StyledRadioGroup
        aria-labelledby="radio-buttons-group-label"
        value={value}
        onChange={HandleOnChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="member" control={<Radio />} label="일반사용자" />
        <FormControlLabel value="consultant" control={<Radio />} label="컨설턴트" />
      </StyledRadioGroup>
    </Container>
  );
}

RoleSelectBox.defaultProps = {
  label: "",
  value: ""
};

const Container = styled.div`
  position: relative;
`;

const Label = styled.span`
  color: #878787;
  font-size: 1.2rem;
`;

const StyledRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "even"
})