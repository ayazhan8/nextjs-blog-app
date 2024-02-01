import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

function SearchButton() {
  return (
    <Button variant="ghost" size="icon">
        <Search />
    </Button>
  )
}

export default SearchButton