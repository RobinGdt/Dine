import styled from "styled-components";
import BaseButton, { LARGE } from "../BaseButton/BaseButton";
import { FieldError, useForm } from "react-hook-form";
import { COLORS } from "../../utils/palette";
import { shadow } from "../../GlobalStyle";

const StyledFormReservation = styled.form`
  padding: 50px;
  background-color: white;
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: black;
  right: 10%;
  top: 25%;
  box-shadow: ${shadow};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 60%;
  }
`;

const Input = styled.input<{ $invalid: any }>`
  width: 20%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid
    ${(props) => (props.$invalid ? `${COLORS.GASPACHO[100]}` : "#979797")};
  color: ${(props) =>
    props.$invalid ? `${COLORS.GASPACHO[100]}` : `${COLORS.CODGRAY[100]}`};

  &::placeholder {
    color: ${(props) =>
      props.$invalid ? `${COLORS.GASPACHO[50]}` : "#979797"};
  }
`;

const InputText = styled.input<{ $invalid: any }>`
  width: 100%;
  border: none;
  display: flex;
  border-bottom: 1px solid
    ${(props) => (props.$invalid ? `${COLORS.GASPACHO[100]}` : "#979797")};
  color: ${(props) =>
    props.$invalid ? `${COLORS.GASPACHO[100]}` : `${COLORS.CODGRAY[100]}`};

  &::placeholder {
    color: ${(props) =>
      props.$invalid ? `${COLORS.GASPACHO[50]}` : "#979797"};
  }
`;

const PickContainer = styled.div<{ $haserror: FieldError | undefined }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;

  p {
    color: ${(props) =>
      props.$haserror ? `${COLORS.GASPACHO[100]}` : `${COLORS.CODGRAY[100]}`};
    margin-block-start: 0;
    margin-block-end: 0;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
  }
`;

const PickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 550px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const Select = styled.select`
  width: 20%;
  border: none;
  border-bottom: 1px solid "#979797";
  color: ${COLORS.CODGRAY[100]};
  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

const NumberInputContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #979797;
  display: flex;
  justify-content: center;
`;

const NumberInputContent = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberInput = styled.input`
  width: 100%;
  border: none;
  text-align: center;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;

const ErrorMessage = styled.p`
  display: flex;
  align-self: start;
  font-size: var(--10px);
  margin-block-start: 0;
  margin-block-end: 0;
`;

const PeopleLabel = styled.div`
  position: absolute;
  left: 52%;

  p {
    font-size: 24px;
    font-weight: 700;
    color: black;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

const SpinButton = styled.div`
  cursor: pointer;
  font-size: 24px;
`;

const FormReservation = () => {
  const { handleSubmit, setValue, register, formState, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      pick: "",
      date: "",
      month: "",
      year: "",
      hour: "",
      minute: "",
      ampm: "AM",
      quantity: 1,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNumber = (value: any) => {
    return !isNaN(value);
  };

  return (
    <StyledFormReservation onSubmit={handleSubmit(onSubmit)}>
      <InputText
        placeholder="Name"
        type="text"
        {...register("name", { required: true })}
        $invalid={formState.errors.name}
      />
      <InputText
        placeholder="Email"
        type="email"
        {...register("email", { required: true, validate: validateEmail })}
        $invalid={formState.errors.email}
      />
      <PickContainer
        $haserror={
          formState.errors.date ||
          formState.errors.month ||
          formState.errors.year
        }
      >
        <PickWrapper>
          <p>Pick a date</p>
          {formState.errors.date && (
            <ErrorMessage>This field is incomplete</ErrorMessage>
          )}
        </PickWrapper>
        <Input
          placeholder="DD"
          type="numeric"
          {...register("date", { required: true, validate: validateNumber })}
          $invalid={formState.errors.date}
        />
        <Input
          placeholder="MM"
          type="numeric"
          {...register("month", { required: true, validate: validateNumber })}
          $invalid={formState.errors.month}
        />
        <Input
          placeholder="YYYY"
          type="numeric"
          {...register("year", { required: true, validate: validateNumber })}
          $invalid={formState.errors.year}
        />
      </PickContainer>
      <PickContainer
        $haserror={formState.errors.hour || formState.errors.minute}
      >
        <PickWrapper>
          <p>Pick a time</p>
          {formState.errors.hour && (
            <ErrorMessage>This field is incomplete</ErrorMessage>
          )}
        </PickWrapper>
        <Input
          placeholder="09"
          type="numeric"
          {...register("hour", { required: true, validate: validateNumber })}
          $invalid={formState.errors.hour}
        />
        <Input
          placeholder="00"
          type="numeric"
          {...register("minute", { required: true, validate: validateNumber })}
          $invalid={formState.errors.minute}
        />
        <Select {...register("ampm")}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </Select>
      </PickContainer>
      <NumberInputContainer>
        <NumberInputContent>
          <SpinButton
            onClick={() =>
              setValue("quantity", Math.max(watch("quantity") - 1, 1))
            }
          >
            -
          </SpinButton>
          <NumberInput
            type="number"
            min="1"
            max="8"
            {...register("quantity", {
              required: true,
              validate: validateNumber,
            })}
          />
          <PeopleLabel>
            <p>people</p>
          </PeopleLabel>
          <SpinButton
            onClick={() =>
              setValue("quantity", Math.min(watch("quantity") + 1, 12))
            }
          >
            +
          </SpinButton>
        </NumberInputContent>
      </NumberInputContainer>
      <BaseButton
        type="submit"
        title="MAKE RESERVATION"
        light={true}
        width={LARGE}
      />
    </StyledFormReservation>
  );
};

export default FormReservation;
