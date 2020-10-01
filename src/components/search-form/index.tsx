import { DebounceInput } from 'react-debounce-input'

import { Wrapper, SearchField } from './search-form.styles'

const SearchForm = (props: DebounceInput) => (
  <Wrapper>
    <SearchField {...props} />
  </Wrapper>
)

export default SearchForm
