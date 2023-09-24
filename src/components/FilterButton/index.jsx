import { FilterButtonContainer, FilterButtonText } from './style'
import { PRIMARY } from '@utility/COLORS'
export const FilterButton = ({ text, isSelected, onClick }) => {
  return (

    <FilterButtonContainer
      backgroundColor={isSelected ? PRIMARY : '#f8f8f8'}
      onClick={onClick}
    >
      <FilterButtonText color={isSelected ? 'white' : 'black'}>
        {text}
      </FilterButtonText>
    </FilterButtonContainer>

  )
}
