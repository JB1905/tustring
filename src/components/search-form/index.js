import React from "react"

import { Wrapper, SearchField } from "./search-form.styles"

const SearchForm = ({ ...props }) => (
  <Wrapper>
    <SearchField {...props} />
  </Wrapper>
)

export default SearchForm
