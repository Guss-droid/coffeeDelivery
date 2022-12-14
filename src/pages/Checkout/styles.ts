import styled from "styled-components";

const svgColor = {
  map: "yellow-900",
  money: "purple-900",
}

interface IBoxColorsData {
  boxColor: keyof typeof svgColor
}

export const CheckoutContainer = styled.div`
  margin: 3.5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentSections = styled.div`
  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  margin: 1rem 2rem 0 0;
  border-radius: 6px 44px;
`

export const TitleSection = styled.p`
  font-family: "Baloo 2";
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.2rem;
`

export const InfoContainer = styled.div<IBoxColorsData>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  svg {
    color: ${props => props.theme[svgColor[props.boxColor]]}
  }
`

export const SubtitleAddress = styled.p`
  font-size: 14px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`

const BaseInput = styled.input`
  background: ${props => props.theme["base-input"]};
  padding: 12px;
  height: 2.6rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-label"]};

  &:focus {
    outline: 1px solid ${props => props.theme["yellow-900"]};
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }
`

export const InputCep = styled(BaseInput)`
  display: block;
  width: 12.5rem;
  margin-top: 2rem;
`

export const InputStreet = styled(BaseInput)`
  display: block;
  width: 100%;
`

export const InputNumber = styled(BaseInput)`
  display: flex;
  width: 12.5rem;
`

export const InputComplement = styled(BaseInput)`
  display: flex;
  width: 100%;
`

export const InputVile = styled(BaseInput)`
  display: flex;
  width: 12.5rem;
`

export const InputCity = styled(BaseInput)`
  display: flex;
  width: 17.25rem;
`

export const InputState = styled(BaseInput)`
  display: flex;
  width: 3.5rem;
`

export const BaseGroupInput = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const SectionTitle = styled.p`
  color: ${props => props.theme["base-subtitle"]};
  font-weight: 500;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 2rem 0 0;
  align-items: center;
`

export const ButtonPayment = styled.button`
  width: 11rem;
  height: 3rem;
  background: ${props => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme["base-hover"]};
  }

  &:focus {
    border: 1px solid ${props => props.theme["purple-500"]}
  }

  svg {
    color: ${props => props.theme["purple-500"]}
  }
`