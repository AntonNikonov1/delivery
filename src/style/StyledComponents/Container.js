import styled from 'styled-components'
import { colorWhite } from '../variables/colors'

export const Container = styled.View`
  width: 90%;
  margin: 0 auto;
`

export const ContainerCentered = styled(Container)`
  flex: 1;
  justify-content: center;
`

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SmallScreenContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colorWhite};
`

export const ScreenContainer = styled(SmallScreenContainer)`
  padding-top: 30px;
  padding-bottom: 60px;
`

export const FlatListContainer = styled.FlatList
  .attrs(() => ({
    contentContainerStyle: {
      paddingBottom: 40,
    },
  }))`
  background-color: ${colorWhite};
`

export const RowSpaceBetweenContainer = styled(ContainerRow)`
  justify-content: space-between;
`