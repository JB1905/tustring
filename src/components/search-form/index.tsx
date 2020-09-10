import React from "react"

import { Wrapper, SearchField } from "./search-form.styles"

const SearchForm: React.FC = props => (
  <Wrapper>
    <SearchField {...props} />
  </Wrapper>
)

export default SearchForm
