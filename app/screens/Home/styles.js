import styled from 'styled-components/native'

import { colors } from '../../theme'

export const Container = styled.View`
  flex: 1;
`
export const AppTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: ${colors.black};
`

export const Description = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray};
`

export const InputWrapper = styled.View`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 15;
`
