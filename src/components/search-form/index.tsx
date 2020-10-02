import { DebounceInput } from 'react-debounce-input'

import { SearchFormWrapper, SearchField } from './search-form.styles'

const SearchForm = (props: DebounceInput) => (
  <SearchFormWrapper>
    <SearchField {...props} />
  </SearchFormWrapper>
)

export default SearchForm
