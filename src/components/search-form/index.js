import React from "react"

import { Wrapper, SearchField } from "./search-form.styled"

const SearchForm = ({ ...props }) => (
  <Wrapper>
    <SearchField {...props} />
  </Wrapper>
)

export default SearchForm
