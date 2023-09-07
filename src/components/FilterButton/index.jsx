import { FilterButtonContainer, FilterButtonText } from './style'

export const FilterButton = ({ text, isSelected, onClick }) => {
  console.log(text, isSelected)
  return (
    <FilterButtonContainer
      backgroundColor={isSelected ? 'black' : '#f8f8f8'}
      onClick={onClick}
    >
      <FilterButtonText color={isSelected ? 'white' : 'black'}>
        {text}
      </FilterButtonText>
    </FilterButtonContainer>
  )
}
